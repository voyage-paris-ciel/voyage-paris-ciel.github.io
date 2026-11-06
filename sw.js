/*
  Mode hors connexion du site (service worker).
  - Avec du réseau : on prend toujours la version en ligne (la plus à jour)
    et on en garde une copie dans le téléphone.
  - Sans réseau (métro, sous-sol d'un musée) : on affiche la copie gardée.
  La carte des lieux (OpenStreetMap) a besoin du réseau : elle n'est pas gardée.
*/

const CACHE = "voyage-paris-v1";
const FICHIERS = [
  "./",
  "index.html",
  "programme.html",
  "lieux.html",
  "groupes.html",
  "missions.html",
  "assets/css/style.css",
  "assets/js/donnees.js",
  "assets/js/site.js",
  "assets/icone.svg",
  "manifest.webmanifest"
];

self.addEventListener("install", function (ev) {
  ev.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(FICHIERS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys()
      .then(function (cles) {
        return Promise.all(cles.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ev) {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const memeSite = url.origin === self.location.origin;
  const polices = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!memeSite && !polices) return;

  ev.respondWith((async function () {
    const reseau = fetch(req).then(function (rep) {
      if (rep && (rep.ok || rep.type === "opaque")) {
        const copie = rep.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copie); });
      }
      return rep;
    });
    reseau.catch(function () { /* traité plus bas */ });

    try {
      // Réseau trop lent (plus de 4 s) : on passe à la copie
      return await Promise.race([reseau, new Promise(function (_, refus) {
        setTimeout(function () { refus(new Error("réseau lent")); }, 4000);
      })]);
    } catch (e) {
      const copie = (await caches.match(req, { ignoreSearch: memeSite })) ||
        (req.mode === "navigate" ? await caches.match("index.html") : undefined);
      if (copie) return copie;
      try { return await reseau; } catch (e2) { return Response.error(); }
    }
  })());
});
