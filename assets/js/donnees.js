/*
  Fichier de données du voyage : notre « petite base de données ».
  Source : Dossier_voyage_Paris_CIEL_v1.docx (version du 29/10/2026).
  Pour mettre le site à jour, on modifie seulement ce fichier.

  Statuts possibles (les mêmes que dans le dossier) :
  verifie, estimation, attente, confirmer, afaire, fait, proposition
*/

window.VOYAGE = {
  depart: "2027-05-10T08:30:00+02:00",

  statuts: {
    verifie:     { nom: "Vérifié",     aide: "Trouvé sur un site officiel ou un document reçu." },
    estimation:  { nom: "Estimation",  aide: "Calcul fait à partir de chiffres vérifiés." },
    confirmer:   { nom: "À confirmer", aide: "Question posée ou à poser au site concerné." },
    attente:     { nom: "En attente",  aide: "Demande envoyée, pas encore de réponse." },
    proposition: { nom: "Proposition", aide: "Idée de l'équipe, à valider avec les enseignants." },
    afaire:      { nom: "À faire",     aide: "Pas encore fait." }
  },

  // Les stations de la « Ligne S » (page d'accueil)
  ligne: [
    { nom: "Saint-Laurent-sur-Sèvre", detail: "Lycée Saint Gab'", jour: 1, terminus: true },
    { nom: "Notre-Dame", detail: "Lundi après-midi", jour: 1 },
    { nom: "Arts et Métiers", detail: "Mardi matin", jour: 2 },
    { nom: "Cité des sciences", detail: "Mardi après-midi", jour: 2 },
    { nom: "Maison de la Radio", detail: "Mercredi matin", jour: 3 },
    { nom: "Saint-Laurent-sur-Sèvre", detail: "Retour au lycée", jour: 3, terminus: true }
  ],

  jours: [
    {
      id: "j1",
      numero: 1,
      date: "Lundi 10 mai 2027",
      titre: "Départ et Notre-Dame",
      etapes: [
        { heure: "8 h 30", titre: "Départ du lycée en autocar", texte: "Pause de 45 min en route (règle européenne : pause après 4 h 30 de conduite).", statut: "estimation", type: "depart" },
        { trajet: "Autocar, environ 376 km et 3 h 48 de conduite sans pause" },
        { heure: "≈ 13 h 15", titre: "Arrivée à l'auberge", texte: "Auberge HI Paris Yves Robert (Paris 18e). Les chambres ouvrent à 15 h : dépôt des bagages à confirmer avec l'auberge, puis pique-nique.", statut: "confirmer", type: "pause" },
        { trajet: "Métro ligne 4, environ 33 min (départ vers 14 h)" },
        { heure: "15 h – 16 h", titre: "Notre-Dame de Paris", texte: "Visite libre, sans prise de parole, 1 h maximum à l'intérieur. Entrée par la file sans réservation (drapeau bleu sur le parvis), environ 20 min d'attente. Chapelet à 15 h : la visite continue, en silence. Angle CIEL : le numérique au service de la reconstruction.", statut: "verifie", type: "visite" },
        { trajet: "Métro ligne 4, environ 33 min" },
        { heure: "≈ 16 h 45", titre: "Retour à l'auberge", texte: "Installation dans les chambres, disponibles dès 15 h.", statut: "estimation", type: "pause" },
        { heure: "Soir", titre: "Dîner à l'auberge et débrief", texte: "Demi-pension, dîner servi de 19 h à 21 h.", statut: "verifie", type: "pause" }
      ]
    },
    {
      id: "j2",
      numero: 2,
      date: "Mardi 11 mai 2027",
      titre: "Arts et Métiers et Cité des sciences",
      etapes: [
        { heure: "9 h 20", titre: "Départ de l'auberge", texte: "Vers le musée des Arts et Métiers.", statut: "estimation", type: "depart" },
        { trajet: "Métro, environ 30 min" },
        { heure: "10 h – 11 h 30", titre: "Musée des Arts et Métiers", texte: "Visite guidée « La saga des télécommunications » (1 h 30, 100 € le groupe). Créneau de 10 h proposé par le musée (réponse du 30/10/2026).", statut: "verifie", type: "visite" },
        { trajet: "Métro vers la Villette, environ 30 min (à vérifier)" },
        { heure: "12 h 30", titre: "Pique-nique au parc de la Villette", statut: "estimation", type: "pause" },
        {
          heure: "13 h 30 – 17 h", titre: "Cité des sciences",
          texte: "Réservation possible seulement 3 mois avant (février 2027). Billet Expositions pour un groupe de 26 à 40 personnes : 200 €, accompagnateurs inclus (expositions, une animation scientifique, une séance de planétarium). Carrefour numérique² (dès 15 ans, gratuit) et Cité des métiers ouverts le mardi après-midi.",
          statut: "confirmer", type: "visite",
          planB: {
            titre: "Plan B : atelier aux Arts et Métiers l'après-midi",
            texte: "Si la Cité des sciences n'a pas de créneau : atelier lycée « Si un boulier m'était conté » (2 h 30, 150 € le groupe) au musée des Arts et Métiers. Même objectif : comprendre le numérique, du calcul mécanique aux calculatrices. Horaire à demander au musée.",
            statut: "verifie"
          }
        },
        { trajet: "Métro ligne 7 puis à pied, environ 26 min" },
        { heure: "≈ 17 h 45", titre: "Retour à l'auberge", statut: "estimation", type: "pause" },
        { heure: "Soir", titre: "Dîner et préparation des comptes rendus", statut: "verifie", type: "pause" }
      ]
    },
    {
      id: "j3",
      numero: 3,
      date: "Mercredi 12 mai 2027",
      titre: "Maison de la Radio et retour",
      etapes: [
        { heure: "7 h 30", titre: "Petit-déjeuner", texte: "Servi de 7 h à 10 h. Les chambres sont à libérer avant 10 h.", statut: "verifie", type: "pause" },
        { heure: "8 h 15", titre: "Chargement des bagages dans l'autocar", statut: "estimation", type: "depart" },
        { trajet: "Autocar vers Paris 16e, environ 45 min (prévoir jusqu'à 1 h le matin)" },
        {
          heure: "10 h – 11 h 30", titre: "Maison de la Radio et de la Musique",
          texte: "Visite « Histoire et architecture » (1 h 30, 120 € la classe), avec au moins un studio de radio. Créneau confirmé par Radio France le 30/10/2026.",
          statut: "verifie", type: "visite"
        },
        { heure: "11 h 30 – 12 h", titre: "Départ vers la Vendée", texte: "Pause de 45 min en route.", statut: "estimation", type: "depart" },
        { trajet: "Autocar, environ 3 h 51 de conduite sans pause" },
        { heure: "≈ 17 h 30", titre: "Arrivée au lycée", statut: "estimation", type: "arrivee" }
      ]
    }
  ],

  // Les lieux (page Lieux). Positions GPS de l'entrée, prises dans la Base Adresse Nationale
  // (api-adresse.data.gouv.fr, vérifié le 06/11/2026). « ouverture » = quand la mission se débloque.
  lieux: [
    {
      id: "auberge", nom: "Auberge HI Paris Yves Robert", sorte: "auberge",
      quand: "Lundi soir au mercredi matin", jour: null,
      adresse: "20 esplanade Nathalie Sarraute, 75018 Paris", acces: "Métro Marx Dormoy (ligne 12) ou La Chapelle (ligne 2)",
      gps: [48.888674, 2.362759],
      texte: "Devis reçu le 06/11/2026 (dossier 688214), avec de la place à nos dates. Demi-pension : dîner de 19 h à 21 h, petit-déjeuner de 7 h à 10 h. Chambres de 15 h à 10 h. Simulation : aucune réservation confirmée.",
      aConfirmer: "Dépôt des bagages le lundi en arrivant (pas de réponse dans le devis).",
      statut: "verifie"
    },
    {
      id: "notre-dame", nom: "Notre-Dame de Paris", sorte: "visite",
      quand: "Lundi 10 mai, 15 h – 16 h", jour: 1,
      adresse: "Parvis Notre-Dame, 75004 Paris", acces: "Métro ligne 4 depuis l'auberge, environ 33 min",
      gps: [48.853206, 2.348700],
      objectif: "Comprendre comment le numérique aide à reconstruire et à documenter un monument.",
      mission: "Repérer 3 éléments de la cathédrale. Après la visite, chercher quel outil numérique a servi pour l'un d'eux (scan 3D, maquette numérique).",
      ouverture: "2027-05-10T14:00:00+02:00", ouvertureTexte: "lundi 10 mai à 14 h",
      questions: [
        { id: "nd1", label: "Les 3 éléments de la cathédrale que j'ai repérés" },
        { id: "nd2", label: "L'outil numérique qui a servi pour l'un d'eux, et à quoi il a servi" }
      ],
      ciel: "Numérique, données, modélisation 3D, jumeau numérique.",
      matieres: "Enseignement pro CIEL, histoire-géographie.",
      texte: "Sur place : entrée par la file sans réservation, signalée par un drapeau bleu sur le parvis (environ 20 min d'attente). La visite continue pendant les offices : on reste silencieux.",
      statut: "verifie"
    },
    {
      id: "arts-metiers", nom: "Musée des Arts et Métiers", sorte: "visite",
      quand: "Mardi 11 mai, 10 h – 11 h 30", jour: 2,
      adresse: "60 rue Réaumur, 75003 Paris", acces: "En métro depuis l'auberge, environ 30 min",
      gps: [48.865711, 2.355422],
      texte: "Sur place : sacs à dos au vestiaire des groupes, ni nourriture ni boisson dans le musée, pas de photo au flash, on ne touche pas les objets.",
      objectif: "Comprendre l'histoire des télécommunications, du télégraphe aux réseaux actuels.",
      mission: "Construire une frise de 5 inventions vues pendant la visite, avec leur date et leur principe en une phrase.",
      ouverture: "2027-05-11T09:00:00+02:00", ouvertureTexte: "mardi 11 mai à 9 h",
      questions: [
        { id: "am1", label: "Ma frise : 5 inventions, avec leur date et leur principe en une phrase", lignes: 7 }
      ],
      ciel: "Électronique, télécommunications, réseaux.",
      matieres: "Enseignement pro CIEL, maths-sciences, histoire-géographie.",
      statut: "verifie"
    },
    {
      id: "cite-sciences", nom: "Cité des sciences et de l'industrie", sorte: "visite",
      quand: "Mardi 11 mai, 13 h 30 – 17 h", jour: 2,
      adresse: "30 avenue Corentin-Cariou, 75019 Paris", acces: "Métro Porte de la Villette (ligne 7)",
      gps: [48.897240, 2.385575],
      objectif: "Découvrir des outils numériques et des métiers du numérique, de l'électronique et des réseaux.",
      mission: "Tester une manipulation (e-LAB ou Carrefour numérique) et noter un métier de la Cité des métiers qui t'intéresse, avec la formation à suivre.",
      ouverture: "2027-05-11T12:30:00+02:00", ouvertureTexte: "mardi 11 mai à 12 h 30",
      questions: [
        { id: "cs1", label: "La manipulation que j'ai testée, et ce que j'ai appris" },
        { id: "cs2", label: "Un métier qui m'intéresse, et la formation pour y arriver" }
      ],
      noteMission: "Si on fait le plan B (atelier aux Arts et Métiers), ton professeur te donnera une autre mission.",
      ciel: "Numérique, réseaux, cybersécurité, orientation après le bac pro (BTS CIEL).",
      matieres: "Enseignement pro CIEL, anglais (e-LAB trilingue, niveau A2), orientation.",
      texte: "Billet Expositions groupe (26 à 40 personnes) : 200 €, accompagnateurs inclus. Carrefour numérique² : ateliers numériques et Fab Lab, dès 15 ans, gratuit.",
      aConfirmer: "Réservation possible seulement 3 mois avant (février 2027). Plan B : atelier « Si un boulier m'était conté » aux Arts et Métiers l'après-midi.",
      statut: "confirmer"
    },
    {
      id: "maison-radio", nom: "Maison de la Radio et de la Musique", sorte: "visite",
      quand: "Mercredi 12 mai, 10 h – 11 h 30", jour: 3,
      adresse: "116 avenue du Président-Kennedy, 75016 Paris", acces: "En autocar depuis l'auberge, environ 45 min (jusqu'à 1 h le matin)",
      gps: [48.852149, 2.279529],
      objectif: "Comprendre comment un programme de radio est produit et diffusé.",
      mission: "Dessiner le trajet du son : micro, régie, diffusion. Noter 2 métiers techniques rencontrés.",
      ouverture: "2027-05-12T09:00:00+02:00", ouvertureTexte: "mercredi 12 mai à 9 h",
      questions: [
        { id: "mr1", label: "Le trajet du son, étape par étape (micro, régie, diffusion)", lignes: 5 },
        { id: "mr2", label: "2 métiers techniques rencontrés" }
      ],
      ciel: "Audiovisuel, électronique, chaîne de diffusion.",
      matieres: "Enseignement pro CIEL, maths-sciences (ondes), histoire (architecture).",
      texte: "Créneau confirmé par Radio France (jusqu'à 33 participants). La visite passe par au moins un studio de radio.",
      aConfirmer: "Peut-être une émission enregistrée le jour de la visite (réponse vers mars-avril 2027) ; réservations ouvertes le 13 janvier 2027 à 11 h.",
      statut: "verifie"
    }
  ],

  // Les groupes : DONNÉES FICTIVES. Les élèves ont un code, jamais leur vrai nom.
  // Les numéros 06 39 98 xx xx sont réservés par l'Arcep aux œuvres de fiction : ils n'appartiennent à personne.
  groupes: [
    {
      id: "fibre", nom: "Groupe Fibre", couleur: "#E30613",
      referent: "Accompagnateur A", telephone: "06 39 98 00 01",
      codes: ["E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09"]
    },
    {
      id: "wifi", nom: "Groupe Wi-Fi", couleur: "#22407A",
      referent: "Accompagnatrice B", telephone: "06 39 98 00 02",
      codes: ["E10", "E11", "E12", "E13", "E14", "E15", "E16", "E17", "E18"]
    },
    {
      id: "5g", nom: "Groupe 5G", couleur: "#1F9C98",
      referent: "Accompagnateur C", telephone: "06 39 98 00 03",
      codes: ["E19", "E20", "E21", "E22", "E23", "E24", "E25", "E26", "E27"]
    }
  ],

  // Le lien avec la filière CIEL, visite par visite
  liensCiel: [
    { lieu: "Notre-Dame", theme: "Numérique et patrimoine", texte: "Scan 3D et jumeau numérique pour reconstruire la cathédrale." },
    { lieu: "Cité des sciences", theme: "Numérique et métiers", texte: "Manipulations à l'e-LAB et métiers des réseaux à la Cité des métiers." },
    { lieu: "Arts et Métiers", theme: "Électronique et télécoms", texte: "Du télégraphe aux réseaux actuels." },
    { lieu: "Maison de la Radio", theme: "Audiovisuel et diffusion", texte: "Le trajet du son : micro, régie, diffusion." }
  ]
};
