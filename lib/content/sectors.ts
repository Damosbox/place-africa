import type { Sector } from "@/lib/types/content";

/**
 * Secteurs.
 *
 * Deux sources :
 * - les 11 présentations Place Fuse d'octobre 2026 (`fuseDeck`). Promesse,
 *   frictions, « qui fait quoi » et autres parcours sont repris mot pour mot des
 *   extractions (`docs/site/2026-10-21-retours-saint-clair/extractions/`) ;
 *   services, leviers de gain et parcours « aussi configurables » viennent de la
 *   synthèse sectorielle. Les parcours détaillés sont dans `journeys.ts` ;
 * - trois fiches historiques hors de ce jeu (hôtellerie, transport aérien,
 *   retail), conservées avec leurs URL publiques tant que la navigation n'est
 *   pas arbitrée.
 *
 * Les slugs publiés sont conservés (`utilities`, `education`, `immobilier`,
 * `service-public`…) même quand le titre change : aucune redirection nécessaire.
 *
 * Hiérarchie : l'assurance reste en tête et en vitrine — seul secteur dont les
 * parcours sont déclarés en production. À confirmer : les supports d'octobre
 * suivent un autre ordre (Banques en 01).
 *
 * Aucun nom de client, nulle part.
 */
export const sectors: Sector[] = [
  {
    slug: "assurances",
    title: "Assurance",
    icon: "Shield",
    featured: true,
    fuseDeck: { file: "Place_Fuse_Assurance.pptx", order: 3 },
    organisationLabel: "la compagnie",
    personLabel: "L'assuré",
    headline: "Votre compagnie d'assurance ouverte 24h/24 sur WhatsApp",
    description:
      "Souscrire, renouveler, déclarer un sinistre, demander une prestation, là où sont déjà vos assurés.",
    frictions: [
      {
        title: "Souscription lente",
        detail: "Passage en agence ou chez un intermédiaire, formulaires papier, pièces à reprendre.",
        consequence: "Des prospects qui abandonnent ou souscrivent ailleurs.",
      },
      {
        title: "Renouvellements manqués",
        detail: "Échéances rappelées par courrier ou par appel ; l'assuré doit se déplacer pour payer.",
        consequence: "Des contrats perdus et des primes encaissées en retard.",
      },
      {
        title: "Sinistres et prestations lents",
        detail: "Déclarations tardives, dossiers incomplets, pièces manquantes, appels pour savoir où en est le dossier.",
        consequence: "Des délais plus longs, des gestionnaires occupés à relancer.",
      },
      {
        title: "Service client saturé",
        detail: "« Je n'ai pas reçu mon attestation », « Quelles pièces pour un rachat ? », « Mon document est illisible ».",
        consequence: "Des appels répétitifs et des assurés mécontents.",
      },
    ],
    frictionNote:
      "S'y ajoutent les obligations de connaissance client et de lutte anti-blanchiment, en particulier sur les contrats Vie.",
    // ⚠️ À CONFIRMER AVANT MISE EN LIGNE — « moins de quinze minutes » vient du
    // document V3 de juillet ; les supports d'octobre ne donnent aucun chiffre et
    // parlent d'un assureur du Top 5 « en Côte d'Ivoire » (la V3 disait « zone
    // CIMA »). Mesure, périmètre et autorisation de publication à faire valider.
    proof:
      "Chez un assureur du Top 5 en Côte d'Ivoire, sur les branches Vie et Non-Vie : cycle de souscription passé de plusieurs jours à moins de quinze minutes.",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    gains: [
      "Plus de contrats",
      "Plus de renouvellements",
      "Ventes complémentaires",
      "Moins de coûts de gestion",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : la compagnie garde la décision, ses produits et son système de référence.",
    roles: [
      {
        domain: "Décision",
        organisation: "Accepte les risques, fixe les primes, décide des indemnisations et des prestations",
        platform: "Prépare des dossiers complets et qualifiés",
      },
      {
        domain: "Tarification",
        organisation: "Fournit la cotation depuis son outil de tarification",
        platform: "Interroge cet outil et présente les formules dans la conversation",
      },
      {
        domain: "Sinistres",
        organisation: "Instruit le dossier, missionne l'expert si besoin, indemnise",
        platform: "Recueille le récit, les pièces et les photos, vérifie que rien ne manque, transmet au gestionnaire",
      },
      {
        domain: "Prestations Vie",
        organisation: "Instruit la demande et verse la prestation",
        platform: "Indique les pièces exactes, les collecte et transmet un dossier complet",
      },
      {
        domain: "KYC et conformité",
        organisation: "Valide l'identité selon ses procédures et décide en cas d'alerte",
        platform: "Vérifie les pièces ; pour les prestations Vie, peut contrôler les listes de sanctions et de personnes politiquement exposées et alerter la conformité",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Système de référence",
        organisation: "Logiciel de gestion des contrats et des sinistres, outil de tarification, outils de conformité",
        platform: "S'y connecte par API, sans en remplacer aucun",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les gestionnaires reprennent la main",
        platform: "L'IA ne décide ni d'une indemnisation ni d'un paiement ; elle transfère à un humain",
      },
      {
        domain: "Réglementation",
        organisation: "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
        platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
      },
    ],
    alsoConfigurable: [
      {
        title: "Attestations et reçus",
        detail: "Le système de la compagnie envoie attestations et reçus directement sur WhatsApp.",
        inProduction: true,
      },
      {
        title: "Aide sur les documents reçus",
        detail: "Document non reçu, illisible ou erroné : l'assuré est guidé ou orienté vers le service client.",
        inProduction: true,
      },
      {
        title: "Produits et garanties",
        detail: "Épargne, retraite, éducation, obsèques : réponses à partir du catalogue de la compagnie.",
        inProduction: true,
      },
      {
        title: "Relance des primes Vie impayées",
        detail: "Message avec le montant, le mois concerné et le lien de paiement ; confirmation après règlement.",
      },
      {
        title: "Souscription prévoyance et obsèques",
        detail: "Choix de la formule, pièces et paiement de la première prime dans la conversation.",
      },
      {
        title: "Réclamations",
        detail: "L'assuré déclare son problème, joint une photo et suit son dossier jusqu'à la résolution.",
      },
      {
        title: "Agence, garage ou centre de soins",
        detail: "L'assuré partage sa position et reçoit les adresses agréées les plus proches.",
      },
      {
        title: "Outil des commerciaux terrain",
        detail: "Le commercial lance la souscription depuis son téléphone, avec le prospect en face de lui ; le dossier part au souscripteur et son activité est suivie en temps réel.",
      },
    ],
    solutions: [
      "agent-accueil",
      "recouvrement",
      "vente-souscription",
      "incidents",
      "notifications",
    ],
  },
  {
    slug: "banques",
    title: "Banques",
    icon: "Landmark",
    fuseDeck: { file: "Place_Fuse_Banques.pptx", order: 1 },
    organisationLabel: "la banque",
    personLabel: "Le client",
    headline: "La banque ouverte 24h/24 sur WhatsApp",
    description:
      "Accueillir, conseiller, ouvrir des comptes, encaisser et suivre, là où sont déjà vos clients.",
    frictions: [
      {
        title: "Acquisition lente",
        detail: "Ouverture de compte en agence, aux heures ouvrables, dossiers incomplets et allers-retours.",
        consequence: "Des prospects perdus : jeunes, commerçants, diaspora.",
      },
      {
        title: "Recouvrement coûteux",
        detail: "Échéances relancées par téléphone ou SMS ; le client remet à plus tard.",
        consequence: "Des impayés, un coût du risque en hausse, des équipes mobilisées.",
      },
      {
        title: "Service client saturé",
        detail: "« Où est l'agence la plus proche ? », « Envoyez-moi mon relevé », « Où en est ma réclamation ? »",
        consequence: "Des appels répétitifs, de l'attente, des clients frustrés.",
      },
    ],
    frictionNote:
      "S'y ajoute le Re-KYC : la mise à jour périodique des dossiers clients, lourde et souvent en retard.",
    services: [
      "Pay",
      "Notifications",
      "Voice",
      "IA / Knowledge",
      "Compliance",
    ],
    gains: [
      "Plus de clients",
      "Moins de pertes sur crédit",
      "Moins de coûts",
      "Plus de ventes aux clients existants",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : la banque garde la décision, ses produits et son système de référence.",
    roles: [
      {
        domain: "Décision",
        organisation: "Ouvre les comptes, accorde les crédits, fixe les conditions",
        platform: "Prépare des dossiers complets et qualifiés",
      },
      {
        domain: "KYC et conformité",
        organisation: "Valide l'identité selon ses procédures et décide en cas d'alerte",
        platform: "Collecte les pièces, vérifie le numéro (OTP), contrôle la preuve de vie, la cohérence et les listes de sanctions et de personnes politiquement exposées ; alerte la conformité en cas de correspondance",
      },
      {
        domain: "Produits et tarifs",
        organisation: "Définit l'offre, les grilles et les frais",
        platform: "Présente l'offre et les simulations dans la conversation",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et suit les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Système de référence",
        organisation: "Référentiel d'identité, core banking, CRM, contact center",
        platform: "S'y connecte par API, sans en remplacer aucun",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les conseillers reprennent la main",
        platform: "L'IA ne décide ni d'un crédit ni d'un paiement ; elle transfère à un humain",
      },
      {
        domain: "Réglementation",
        organisation: "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
        platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
      },
    ],
    alsoConfigurable: [
      { title: "Souscrire un produit ou demander un crédit" },
      { title: "Traiter une réclamation" },
      {
        title: "Agence ou GAB le plus proche",
        detail: "Le client partage sa position et reçoit les plus proches, avec horaires et itinéraire.",
      },
      {
        title: "Relevé bancaire",
        detail: "Le client choisit la période et reçoit son relevé, après identification par code OTP.",
      },
      {
        title: "Produits et services",
        detail: "Comptes, cartes, crédits, frais, pièces à fournir, à partir des documents officiels de la banque.",
      },
      {
        title: "Alertes et rappels",
        detail: "Échéances, carte ou chéquier disponible, expiration, confirmations, avec preuve de réception.",
      },
      {
        title: "Prise de rendez-vous",
        detail: "Le client choisit un créneau avec un conseiller ou en agence et reçoit un rappel la veille.",
      },
      {
        title: "Vente croisée ciblée",
        detail: "« Vous avez un compte courant, pas encore d'épargne. » Le client souscrit dans la conversation.",
      },
      {
        title: "Campagnes segmentées",
        detail: "Lancement de produit, offre carte, épargne scolaire, envoyés aux bons segments de clients.",
      },
      {
        title: "Outil des chargés de clientèle",
        detail: "Ils envoient les parcours depuis leur téléphone ; leur activité est suivie en temps réel.",
      },
    ],
    solutions: [
      "agent-accueil",
      "notifications",
      "vente-souscription",
      "recouvrement",
    ],
  },
  {
    slug: "microfinance",
    title: "Microfinance",
    icon: "PiggyBank",
    fuseDeck: { file: "Place_Fuse_Microfinance.pptx", order: 2 },
    organisationLabel: "l'institution",
    personLabel: "Le membre",
    headline: "Votre institution de microfinance ouverte 24h/24 sur WhatsApp",
    description:
      "Adhérer, demander un crédit, rembourser et épargner, là où sont déjà vos membres.",
    frictions: [
      {
        title: "Adhésion lente",
        detail: "Adhésion en agence ou lors d'une visite, dossiers incomplets, pièces à reprendre.",
        consequence: "Des membres potentiels perdus, des agents occupés à saisir.",
      },
      {
        title: "Remboursements en retard",
        detail: "Échéances rappelées par appel ou visite ; le membre doit se déplacer pour payer.",
        consequence: "Un portefeuille à risque qui monte, des provisions en plus.",
      },
      {
        title: "Coût du terrain",
        detail: "Les agents de crédit passent leurs journées à se déplacer pour relancer, collecter et informer.",
        consequence: "Moins de temps pour analyser et accompagner de nouveaux membres.",
      },
      {
        title: "Épargne irrégulière",
        detail: "Dépôts au guichet, quand le membre a le temps ; aucun rappel régulier.",
        consequence: "Moins d'épargne collectée, donc moins de ressources pour prêter.",
      },
    ],
    frictionNote:
      "S'y ajoute le Re-KYC : les mêmes exigences de mise à jour des dossiers que les banques.",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    gains: [
      "Plus de membres",
      "Moins d'impayés",
      "Moins de coûts terrain",
      "Plus d'épargne",
      "Plus de renouvellements",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'institution garde la décision, ses produits et son système de référence.",
    roles: [
      {
        domain: "Décision",
        organisation: "Admet les membres, accorde les crédits, fixe les conditions",
        platform: "Prépare des dossiers complets et qualifiés",
      },
      {
        domain: "KYC et conformité",
        organisation: "Valide l'identité selon ses procédures et décide en cas d'alerte",
        platform: "Collecte les pièces, vérifie le numéro (OTP), contrôle la preuve de vie, la cohérence et les listes de sanctions et de personnes politiquement exposées ; alerte la conformité en cas de correspondance",
      },
      {
        domain: "Visite et analyse",
        organisation: "L'agent de crédit visite le membre et analyse le dossier",
        platform: "Planifie la visite et transmet le dossier complet à l'agent",
      },
      {
        domain: "Produits et tarifs",
        organisation: "Définit l'offre, les taux et les frais",
        platform: "Présente l'offre dans la conversation",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et suit les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Système de référence",
        organisation: "Logiciel de gestion du portefeuille et des membres, outils de conformité",
        platform: "S'y connecte par API, sans en remplacer aucun",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les agents reprennent la main",
        platform: "L'IA ne décide ni d'un crédit ni d'un paiement ; elle transfère à un humain",
      },
      {
        domain: "Réglementation",
        organisation: "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
        platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
      },
    ],
    alsoConfigurable: [
      { title: "Mettre à jour les dossiers des membres (Re-KYC)" },
      { title: "Demander un crédit" },
      { title: "Renouveler un crédit" },
      {
        title: "Point de service le plus proche",
        detail: "Le membre partage sa position et reçoit l'agence ou le point de service le plus proche, avec horaires et itinéraire.",
      },
      {
        title: "Solde et relevé",
        detail: "Le membre consulte son solde ou reçoit son relevé, après identification par code OTP.",
      },
      {
        title: "Éducation financière",
        detail: "Conseils courts, en texte ou en message vocal : gérer sa trésorerie, épargner, préparer un crédit.",
      },
      {
        title: "Micro-assurance",
        detail: "Information et souscription aux offres de micro-assurance proposées par l'institution.",
      },
      {
        title: "Réclamations",
        detail: "Le membre déclare son problème, joint une photo et suit son dossier jusqu'à la résolution.",
      },
      {
        title: "Alertes et rappels",
        detail: "Réunions de groupe, assemblée générale, changement d'horaires, confirmations d'opérations.",
      },
      {
        title: "Outil des agents de crédit",
        detail: "Ils envoient les parcours depuis leur téléphone et suivent leurs membres en temps réel.",
      },
      {
        title: "Campagnes ciblées",
        detail: "Rentrée scolaire, fêtes, saison agricole : la bonne offre aux bons membres.",
      },
    ],
    solutions: [
      "vente-souscription",
      "recouvrement",
      "notifications",
      "agent-accueil",
    ],
  },
  {
    slug: "protection-sociale",
    title: "Protection sociale",
    icon: "HeartHandshake",
    fuseDeck: { file: "Place_Fuse_Protection_Sociale.pptx", order: 4 },
    organisationLabel: "l'organisme",
    personLabel: "L'assuré ou l'employeur",
    headline: "Votre caisse de sécurité sociale ouverte 24h/24 sur WhatsApp",
    description:
      "S'affilier, déclarer un salarié, payer ses cotisations, consulter son dossier, là où sont déjà vos assurés et vos employeurs.",
    frictions: [
      {
        title: "Cotisations en retard",
        detail: "Échéances rappelées par courrier ou par appel ; l'employeur doit se déplacer ou organiser un virement.",
        consequence: "Des arriérés et des relances manuelles coûteuses.",
      },
      {
        title: "Couverture incomplète",
        detail: "Indépendants et travailleurs de l'informel : l'affiliation en agence paraît longue et compliquée.",
        consequence: "Une large part des actifs reste sans protection sociale.",
      },
      {
        title: "Information difficile d'accès",
        detail: "« Où en est mon dossier ? », « Combien de mois ai-je cotisé ? », « Quand pourrai-je prendre ma retraite ? »",
        consequence: "Des files d'attente et des appels pour des questions simples.",
      },
      {
        title: "Charge administrative",
        detail: "Déclarations papier, ressaisie, courriers : des outils séparés et un suivi manuel.",
        consequence: "Des agents occupés à saisir plutôt qu'à servir.",
      },
    ],
    frictionNote:
      "S'y ajoute une exigence forte : identifier chaque assuré de façon fiable et protéger ses données personnelles.",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    gains: [
      "Cotisations payées à temps",
      "Plus d'assurés couverts",
      "Moins de charge aux guichets",
      "Des données à jour",
      "Des assurés mieux servis",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'organisme garde la décision, ses barèmes et son système de référence.",
    roles: [
      {
        domain: "Décision",
        organisation: "Affilie, ouvre les droits, liquide les pensions et les prestations",
        platform: "Prépare des dossiers complets",
      },
      {
        domain: "Données des assurés",
        organisation: "Reste seul maître de la base des assurés et des employeurs",
        platform: "Collecte et transmet ; n'affiche que ce qui concerne la personne identifiée",
      },
      {
        domain: "Identification",
        organisation: "Valide l'identité selon ses procédures et décide en cas d'alerte",
        platform: "Lit les pièces, vérifie la présence et envoie les codes de vérification",
      },
      {
        domain: "Cotisations",
        organisation: "Fixe les barèmes et les échéances",
        platform: "Calcule selon le barème, rappelle les échéances, envoie les reçus",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Système de référence",
        organisation: "Base des assurés et des employeurs, cotisations, dossiers de retraite et de prestations",
        platform: "S'y connecte par API, sans en remplacer aucun",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les agents reprennent la main",
        platform: "L'IA ne décide ni d'un droit ni d'un paiement ; elle transfère à un humain",
      },
      {
        domain: "Réglementation",
        organisation: "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
        platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
      },
    ],
    alsoConfigurable: [
      { title: "Déclarer un nouveau salarié" },
      {
        title: "Certificat de vie à distance",
        detail: "Le retraité prouve qu'il est en vie par un selfie, avec vérification de présence, sans se déplacer.",
      },
      {
        title: "Suivi d'un dossier de pension",
        detail: "L'assuré voit où en est sa demande et reçoit une alerte à chaque étape.",
      },
      {
        title: "Attestations",
        detail: "Attestation d'affiliation ou de cotisations envoyée dans la conversation.",
      },
      {
        title: "Prestations familiales",
        detail: "Pièces à fournir, justificatifs envoyés en photo et suivi de la demande.",
      },
      {
        title: "Déclaration d'accident du travail",
        detail: "L'employeur déclare l'accident, joint les pièces, et le dossier part au service concerné.",
      },
      {
        title: "Agence la plus proche et rendez-vous",
        detail: "L'assuré partage sa position, reçoit l'agence la plus proche et réserve un créneau.",
      },
      {
        title: "Campagnes d'affiliation",
        detail: "Information sur l'affiliation des indépendants, envoyée aux personnes qui ont accepté d'être contactées.",
      },
      {
        title: "Outil des agents de terrain",
        detail: "L'agent affilie un indépendant sur son lieu de travail, depuis son téléphone.",
      },
    ],
    solutions: [
      "agent-accueil",
      "vente-souscription",
      "recouvrement",
      "notifications",
      "workflows-metiers",
    ],
  },
  {
    slug: "utilities",
    title: "Eau et électricité",
    icon: "Zap",
    fuseDeck: { file: "Place_Fuse_Eau_Electricite.pptx", order: 5 },
    organisationLabel: "l'entreprise",
    personLabel: "L'abonné",
    headline: "Votre service d'eau et d'électricité ouvert 24h/24 sur WhatsApp",
    description:
      "Payer sa facture, recharger son compteur, régulariser un impayé, signaler une panne, là où sont déjà vos abonnés.",
    frictions: [
      {
        title: "Factures payées en retard",
        detail: "Files aux caisses, déplacements, facture papier égarée : l'abonné remet le paiement à plus tard.",
        consequence: "Des encaissements tardifs et une trésorerie sous tension.",
      },
      {
        title: "Impayés et coupures",
        detail: "Relances par courrier, agents envoyés sur place pour couper puis rétablir.",
        consequence: "Des impayés qui s'accumulent et des coûts de terrain élevés.",
      },
      {
        title: "Incidents mal signalés",
        detail: "Fuites, pannes, compteurs abîmés signalés par téléphone, sans photo ni localisation précise.",
        consequence: "Des interventions plus lentes et des pertes sur le réseau.",
      },
      {
        title: "Centre d'appels saturé",
        detail: "Lors d'une coupure, des milliers d'appels pour la même question : « Quand l'eau ou le courant revient-il ? »",
        consequence: "De l'attente, des abonnés mécontents.",
      },
    ],
    frictionNote:
      "S'y ajoute en électricité : l'achat de crédit pour les compteurs prépayés, souvent limité aux points de vente et aux heures d'ouverture.",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge"],
    gains: [
      "Factures payées plus tôt",
      "Plus de recharges",
      "Moins d'impayés",
      "Moins de coûts terrain",
      "Moins de pertes réseau",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'entreprise garde ses tarifs, ses décisions et son système de référence.",
    roles: [
      {
        domain: "Facturation",
        organisation: "Relève les compteurs, calcule et émet les factures",
        platform: "Envoie les factures et en explique le détail",
      },
      {
        domain: "Recharges prépayées",
        organisation: "Fixe les tarifs et génère les codes de recharge",
        platform: "Encaisse le paiement et transmet le code à l'abonné",
      },
      {
        domain: "Recouvrement",
        organisation: "Fixe les délais, les échéanciers et décide des suspensions",
        platform: "Relance, propose les échéanciers prévus et encaisse",
      },
      {
        domain: "Incidents",
        organisation: "Diagnostique, intervient et clôture",
        platform: "Recueille la photo, la position et la description, puis informe l'abonné",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Système de référence",
        organisation: "Facturation, gestion des abonnés, vente des recharges, interventions",
        platform: "S'y connecte par API, sans en remplacer aucun",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les conseillers reprennent la main",
        platform: "L'IA ne décide d'aucune coupure ni d'aucun paiement ; elle transfère à un humain",
      },
      {
        domain: "Données des abonnés",
        organisation: "Reste seule maîtresse de la base des abonnés",
        platform: "N'affiche que ce qui concerne l'abonné identifié",
      },
    ],
    alsoConfigurable: [
      {
        title: "Alerte de coupure programmée",
        detail: "Travaux ou délestage : les abonnés de la zone concernée sont prévenus, avec l'heure de rétablissement prévue.",
      },
      {
        title: "Index du compteur en photo",
        detail: "L'abonné envoie la photo de son compteur ; l'index est transmis pour la facturation.",
      },
      {
        title: "Abonnement et branchement",
        detail: "Demande d'un nouveau branchement ou d'un abonnement, pièces envoyées en photo et suivi du dossier.",
      },
      {
        title: "Comprendre sa facture",
        detail: "Consommation, tarif, redevances : explications à partir des documents de l'entreprise.",
      },
      {
        title: "Réclamations",
        detail: "L'abonné décrit son problème, joint une photo et suit son dossier jusqu'à la résolution.",
      },
      {
        title: "Agence ou point de vente le plus proche",
        detail: "L'abonné partage sa position et reçoit l'adresse et les horaires.",
      },
      {
        title: "Outil des techniciens",
        detail: "Le technicien reçoit le ticket et la position sur son téléphone, et clôture l'intervention en photo.",
      },
      {
        title: "Campagnes",
        detail: "Conseils d'économie d'énergie et d'eau, nouveaux services, envoyés aux abonnés qui l'acceptent.",
      },
    ],
    solutions: [
      "notifications",
      "incidents",
      "recouvrement",
      "agent-accueil",
    ],
  },
  {
    slug: "service-public",
    title: "Collectivités",
    icon: "Landmark",
    fuseDeck: { file: "Place_Fuse_Collectivites.pptx", order: 6 },
    organisationLabel: "la mairie",
    personLabel: "L'habitant",
    headline: "Votre mairie ouverte 24h/24 sur WhatsApp",
    description:
      "Demander un acte, payer ses taxes, signaler un problème, être informé, là où sont déjà vos habitants.",
    frictions: [
      {
        title: "Files à l'état civil",
        detail: "Pour un extrait de naissance, l'habitant vient demander, revient payer, puis revient retirer.",
        consequence: "Des journées perdues et des guichets saturés.",
      },
      {
        title: "Recettes mal recouvrées",
        detail: "Taxes et droits communaux collectés à la main, sans rappel ni trace systématique.",
        consequence: "Des recettes qui échappent à la commune.",
      },
      {
        title: "Problèmes signalés tard",
        detail: "Voirie, éclairage, ordures, inondations : signalés par téléphone ou pas du tout, sans photo ni lieu précis.",
        consequence: "Des interventions lentes et des habitants mécontents.",
      },
      {
        title: "Habitants mal informés",
        detail: "Campagnes de salubrité, fermetures de route, horaires : l'information passe mal.",
        consequence: "Une mairie perçue comme lointaine.",
      },
    ],
    frictionNote:
      "S'y ajoute une exigence propre au public : chaque franc encaissé doit suivre le circuit de la régie et du Trésor, avec une trace complète.",
    services: [
      "Pay",
      "Notifications",
      "Voice",
      "IA / Knowledge",
      "Compliance",
    ],
    gains: [
      "Recettes mieux recouvrées",
      "Guichets désengorgés",
      "Problèmes réglés plus vite",
      "Habitants informés",
      "Décisions éclairées",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : la mairie garde ses actes, ses recettes et ses décisions.",
    roles: [
      {
        domain: "État civil",
        organisation: "Recherche, établit, signe et remet les actes",
        platform: "Reçoit la demande, lit la pièce, encaisse les frais, prévient quand l'acte est prêt",
      },
      {
        domain: "Recettes",
        organisation: "Fixe les taxes, les tarifs et les échéances ; encaisse via sa régie",
        platform: "Envoie les avis, les liens de paiement, les quittances et les rappels",
      },
      {
        domain: "Circuit des fonds",
        organisation: "Décide du circuit, conforme aux règles de la comptabilité publique",
        platform: "Suit le circuit défini et fournit la trace de chaque paiement",
      },
      {
        domain: "Signalements",
        organisation: "Fixe les priorités, intervient et clôture",
        platform: "Recueille photo, position et description, informe l'habitant",
      },
      {
        domain: "Information",
        organisation: "Décide des messages et des publics visés",
        platform: "Envoie les alertes aux habitants qui les ont acceptées",
      },
      {
        domain: "Identité",
        organisation: "Numéro WhatsApp officiel et nom de la mairie",
        platform: "Opère l'assistant aux couleurs de la mairie",
      },
      {
        domain: "Données des habitants",
        organisation: "Reste seule maîtresse des données",
        platform: "N'affiche que ce qui concerne l'habitant identifié",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les agents reprennent la main",
        platform: "L'IA ne délivre aucun acte et ne fixe aucun montant ; elle transfère à un agent",
      },
    ],
    alsoConfigurable: [
      {
        title: "Alertes aux habitants",
        detail: "Campagnes de salubrité, vaccination, routes fermées, inondations : messages ciblés par quartier.",
      },
      {
        title: "Célébration d'un mariage",
        detail: "Pièces à fournir, choix d'une date et rappel la veille.",
      },
      {
        title: "Légalisation et copies certifiées",
        detail: "Pièces à apporter, frais, rendez-vous au guichet.",
      },
      {
        title: "Agenda de la commune",
        detail: "Conseils municipaux, événements, journées de salubrité.",
      },
      {
        title: "Réclamations",
        detail: "L'habitant décrit son problème et suit sa réclamation jusqu'à la réponse.",
      },
      {
        title: "Mairie annexe la plus proche",
        detail: "L'habitant partage sa position et reçoit l'adresse, les horaires et les services.",
      },
      {
        title: "Outil des agents collecteurs",
        detail: "Le collecteur envoie l'avis depuis son téléphone et voit qui a payé.",
      },
      {
        title: "Consultation des habitants",
        detail: "Questions courtes sur les priorités de la commune, résultats par quartier.",
      },
    ],
    solutions: [
      "agent-accueil",
      "notifications",
      "incidents",
      "workflows-metiers",
    ],
  },
  {
    slug: "transport-urbain",
    title: "Transport urbain",
    icon: "Bus",
    fuseDeck: { file: "Place_Fuse_Transport_Urbain.pptx", order: 7 },
    organisationLabel: "l'opérateur",
    personLabel: "Le voyageur",
    headline: "Votre réseau de transport ouvert 24h/24 sur WhatsApp",
    description:
      "Acheter son ticket, s'abonner, connaître ses lignes et ses horaires, être prévenu, là où sont déjà vos voyageurs.",
    frictions: [
      {
        title: "Files et espèces",
        detail: "Tickets achetés au guichet ou à bord, en espèces, aux heures de pointe.",
        consequence: "Des voyageurs qui attendent, de l'argent à compter, sécuriser et transporter.",
      },
      {
        title: "Voyageurs mal informés",
        detail: "« Quel bus pour aller au Plateau ? », « Le bateau part-il à l'heure ? » : peu de réponses en dehors des gares.",
        consequence: "Des voyageurs qui se tournent vers d'autres modes de transport.",
      },
      {
        title: "Abonnements en agence",
        detail: "Souscription et renouvellement au guichet, justificatifs à présenter, oublis d'échéance.",
        consequence: "Des abonnés perdus à chaque fin de mois.",
      },
      {
        title: "Réclamations au téléphone",
        detail: "Objets perdus, retards, incidents à bord : signalés par téléphone, sans suivi.",
        consequence: "Un service client saturé, peu de données exploitables.",
      },
    ],
    frictionNote:
      "Bus et bateaux : un même voyageur passe d'un mode à l'autre ; il attend une seule porte d'entrée pour s'informer et payer.",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge"],
    gains: [
      "Plus de tickets vendus",
      "Plus d'abonnés fidèles",
      "Moins d'espèces",
      "Plus de voyageurs",
      "Une offre mieux ajustée",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'opérateur garde ses tarifs, sa billettique et son exploitation.",
    roles: [
      {
        domain: "Tickets, abonnements et tarifs",
        organisation: "Fixe les tickets, les tarifs et les formules d'abonnement",
        platform: "Présente l'offre et vend dans la conversation",
      },
      {
        domain: "Billettique",
        organisation: "Émet les tickets, charge les cartes, valide à bord et au quai",
        platform: "Transmet les ventes à la billettique et envoie le ticket au voyageur",
      },
      {
        domain: "Abonnements",
        organisation: "Vérifie l'éligibilité et active l'abonnement",
        platform: "Collecte le justificatif et la photo, encaisse, rappelle l'échéance",
      },
      {
        domain: "Information",
        organisation: "Fournit lignes, arrêts, horaires et perturbations",
        platform: "Répond aux voyageurs et envoie les alertes par ligne",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Données des voyageurs",
        organisation: "Reste seul maître des données",
        platform: "N'affiche que ce qui concerne le voyageur identifié",
      },
      {
        domain: "Cas sensibles",
        organisation: "Le service client reprend la main",
        platform: "L'IA ne fixe aucun prix et ne rembourse rien seule ; elle transfère à un agent",
      },
    ],
    alsoConfigurable: [
      { title: "Souscrire et renouveler un abonnement" },
      {
        title: "Objets perdus",
        detail: "Le voyageur décrit l'objet, la ligne et l'heure ; il est prévenu si l'objet est retrouvé.",
      },
      {
        title: "Réclamations et signalements à bord",
        detail: "Retard, incident, comportement : photo, ligne, heure, et suivi jusqu'à la réponse.",
      },
      {
        title: "Carte perdue ou volée",
        detail: "Opposition immédiate et demande de nouvelle carte, avec reprise du solde selon les règles de l'opérateur.",
      },
      {
        title: "Points de vente et agences",
        detail: "Le voyageur partage sa position et reçoit le point de vente ou l'agence le plus proche.",
      },
      {
        title: "Location de bus",
        detail: "Demande de devis pour un événement, une entreprise ou une sortie scolaire.",
      },
      {
        title: "Transport scolaire",
        detail: "Inscription, horaires, et information des parents en cas de retard.",
      },
      {
        title: "Satisfaction des voyageurs",
        detail: "Une note après un trajet ou une réclamation ; résultats par ligne.",
      },
      {
        title: "Outil des contrôleurs",
        detail: "Vérification d'un ticket ou d'un abonnement depuis le téléphone du contrôleur.",
      },
    ],
    solutions: [
      "vente-souscription",
      "notifications",
      "agent-accueil",
      "incidents",
      "recouvrement",
    ],
  },
  {
    slug: "services-postaux",
    title: "Services postaux",
    icon: "Package",
    fuseDeck: { file: "Place_Fuse_Services_Postaux.pptx", order: 8 },
    organisationLabel: "la poste",
    personLabel: "Le client",
    headline: "Votre bureau de poste ouvert 24h/24 sur WhatsApp",
    description:
      "Recevoir et envoyer ses colis, gérer sa boîte postale, envoyer de l'argent, commander un document, là où sont déjà vos clients.",
    frictions: [
      {
        title: "Colis et courriers non retirés",
        detail: "Avis papier perdus ou jamais reçus : le client ne sait pas que son colis l'attend.",
        consequence: "Stockage, colis en souffrance, retours à l'expéditeur, frais non encaissés.",
      },
      {
        title: "Files aux guichets",
        detail: "Retrait, envoi, paiement, transfert : tout passe par le guichet, aux mêmes heures.",
        consequence: "Des clients qui attendent, des agents débordés.",
      },
      {
        title: "Suivi au téléphone",
        detail: "« Où est mon colis ? » : le client appelle ou se déplace pour le savoir.",
        consequence: "Des appels qui saturent les bureaux, sans trace.",
      },
      {
        title: "Boîtes postales non renouvelées",
        detail: "Échéance oubliée, renouvellement possible seulement au guichet.",
        consequence: "Des abonnés perdus chaque année.",
      },
    ],
    frictionNote:
      "Transporteurs privés et mobile money : ils servent déjà vos clients depuis leur téléphone. La poste doit être aussi simple à joindre.",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    gains: [
      "Plus de colis envoyés",
      "Moins de colis en souffrance",
      "Boîtes postales renouvelées",
      "Plus de transferts",
      "Moins d'appels et de files",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : la poste garde ses tarifs, son réseau et la remise des envois et des fonds.",
    roles: [
      {
        domain: "Tarifs et offres",
        organisation: "Fixe les tarifs, les frais et les formules de boîte postale",
        platform: "Présente l'offre et vend dans la conversation",
      },
      {
        domain: "Suivi des envois",
        organisation: "Enregistre les envois et met à jour leur statut",
        platform: "Informe l'expéditeur et le destinataire à chaque étape",
      },
      {
        domain: "Remise des envois",
        organisation: "Remet colis et courriers au guichet ou à domicile",
        platform: "Envoie les avis et les codes de retrait, programme les livraisons",
      },
      {
        domain: "Services financiers",
        organisation: "Applique ses procédures de contrôle, décide et remet les fonds au guichet",
        platform: "Vérifie l'identité et les listes, encaisse, envoie les codes ; verse les fonds sur le portefeuille si le bénéficiaire le choisit",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Données des clients",
        organisation: "Reste seule maître des données",
        platform: "N'affiche que ce qui concerne le client identifié",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les agents reprennent la main",
        platform: "L'IA ne fixe aucun prix et ne valide aucun transfert seule ; elle transfère à un agent",
      },
      {
        domain: "Réglementation",
        organisation: "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
        platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
      },
    ],
    alsoConfigurable: [
      { title: "Louer et renouveler sa boîte postale" },
      {
        title: "Bureau le plus proche",
        detail: "Le client partage sa position et reçoit le bureau le plus proche, ses horaires et ses services.",
      },
      {
        title: "Réclamation sur un envoi",
        detail: "Colis abîmé, en retard ou perdu : photo, numéro de suivi, et suivi jusqu'à la réponse.",
      },
      {
        title: "Lettre recommandée électronique",
        detail: "Envoi d'un recommandé et accusé de réception transmis dans la conversation.",
      },
      {
        title: "Offre pour les vendeurs en ligne",
        detail: "Envois groupés, enlèvements et suivi partagé avec leurs propres clients.",
      },
      {
        title: "Entreprises",
        detail: "Demande de collecte, de coursier ou de levée de boîte postale, en un message.",
      },
      {
        title: "Déménagement",
        detail: "Demande de devis et prise de rendez-vous.",
      },
      {
        title: "Outil des facteurs",
        detail: "Preuve de remise en photo, transmise au client et archivée.",
      },
      {
        title: "Campagnes et philatélie",
        detail: "Nouveaux timbres, offres et informations envoyés aux clients qui l'ont accepté.",
      },
    ],
    solutions: [
      "notifications",
      "agent-accueil",
      "incidents",
      "workflows-metiers",
      "vente-souscription",
    ],
  },
  {
    slug: "documents-transport",
    title: "Documents de transport",
    icon: "Car",
    fuseDeck: { file: "Place_Fuse_Documents_Transport.pptx", order: 9 },
    organisationLabel: "le centre",
    personLabel: "L'usager",
    headline: "Vos documents de transport accessibles 24h/24 sur WhatsApp",
    description:
      "Être prévenu, prendre rendez-vous, suivre son dossier, payer une contravention, là où sont déjà vos usagers.",
    frictions: [
      {
        title: "Documents prêts, jamais retirés",
        detail: "L'usager ne sait pas que son permis ou sa carte grise l'attend.",
        consequence: "Des milliers de documents en attente dans les agences.",
      },
      {
        title: "Intermédiaires",
        detail: "L'usager passe par un intermédiaire, qui tarde à le prévenir ou à retirer.",
        consequence: "Des retraits ralentis, des guichets encombrés.",
      },
      {
        title: "Suivi au téléphone",
        detail: "« Où en est ma carte grise ? » : l'usager appelle ou se déplace pour le savoir.",
        consequence: "Un centre d'appels sollicité, des déplacements pour rien.",
      },
      {
        title: "Services en ligne peu utilisés",
        detail: "Compte à créer, application à installer, mot de passe à retenir : tous ne franchissent pas le pas.",
        consequence: "Des services qui existent, mais ne touchent pas tous les usagers.",
      },
    ],
    frictionNote:
      "Hors des grandes villes : les documents prêts restent encore plus souvent en agence. L'usager est loin, l'information doit aller jusqu'à lui.",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge"],
    gains: [
      "Documents retirés plus vite",
      "Dossiers complets",
      "Moins d'appels",
      "Contraventions réglées",
      "Moins d'intermédiaires",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : le centre produit et délivre les documents, Place Fuse informe et facilite.",
    roles: [
      {
        domain: "Documents",
        organisation: "Produit et délivre permis, cartes grises, cartes de transport et de transporteur",
        platform: "Prépare des dossiers complets et prévient l'usager",
      },
      {
        domain: "Dossiers",
        organisation: "Instruit les demandes et met à jour leur statut",
        platform: "Informe l'usager à chaque étape",
      },
      {
        domain: "Retraits",
        organisation: "Ouvre les créneaux et remet les documents",
        platform: "Prend les rendez-vous, envoie rappels et relances",
      },
      {
        domain: "Contraventions",
        organisation: "Émet les avis et tient le compte des points",
        platform: "Transmet les avis, encaisse, envoie les reçus",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Données des usagers",
        organisation: "Reste seul maître des données",
        platform: "N'affiche que ce qui concerne l'usager identifié",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les agents reprennent la main",
        platform: "L'IA ne délivre aucun document et ne tranche aucune réclamation seule ; elle transfère à un agent",
      },
    ],
    alsoConfigurable: [
      { title: "Faire sa demande" },
      { title: "Faire une réclamation" },
      {
        title: "Vérifier une carte grise avant d'acheter",
        detail: "L'acheteur vérifie le statut du véhicule et l'authenticité de la carte grise.",
      },
      {
        title: "Attribuer un véhicule à un tiers",
        detail: "Démarche guidée, pièces en photo, suivi jusqu'à la validation.",
      },
      {
        title: "Permis digital",
        detail: "L'usager est guidé pour activer et retrouver son permis digital.",
      },
      {
        title: "Espace auto-écoles",
        detail: "Liste de leurs candidats dont le permis est prêt, pour les orienter vers le retrait.",
      },
      {
        title: "Professionnels du transport",
        detail: "Demande et suivi des cartes de transport et de transporteur.",
      },
      {
        title: "Agence la plus proche",
        detail: "Adresse, horaires et ouvertures exceptionnelles, comme le samedi.",
      },
      {
        title: "Satisfaction des usagers",
        detail: "Une note après chaque retrait ou réclamation ; résultats par agence.",
      },
      {
        title: "Campagnes d'information",
        detail: "Ouvertures exceptionnelles, nouveaux services, sécurité routière, pour les usagers qui l'ont accepté.",
      },
    ],
    solutions: [
      "notifications",
      "agent-accueil",
      "recouvrement",
      "incidents",
    ],
  },
  {
    slug: "education",
    title: "Écoles et universités",
    icon: "GraduationCap",
    fuseDeck: { file: "Place_Fuse_Ecoles_Universites.pptx", order: 10 },
    organisationLabel: "l'établissement",
    personLabel: "Le parent ou l'étudiant",
    headline: "Votre établissement ouvert 24h/24 sur WhatsApp",
    description:
      "S'inscrire, payer la scolarité, suivre son enfant, demander un document, là où sont déjà vos parents et vos étudiants.",
    frictions: [
      {
        title: "Rentrée sous pression",
        detail: "Inscriptions au secrétariat, files, les mêmes questions toute la journée.",
        consequence: "Des familles qui attendent, des inscriptions perdues.",
      },
      {
        title: "Scolarité payée en retard",
        detail: "Tranches oubliées, relances faites à la main, espèces à la caisse.",
        consequence: "Une trésorerie tendue, des impayés en fin d'année.",
      },
      {
        title: "Parents peu informés",
        detail: "Absences, notes, convocations : un mot dans le carnet, qui se perd.",
        consequence: "Des parents qui découvrent les problèmes trop tard.",
      },
      {
        title: "Secrétariat débordé",
        detail: "Certificats de scolarité, relevés de notes, attestations : tout se demande au guichet.",
        consequence: "Du temps perdu, des passages répétés.",
      },
    ],
    frictionNote:
      "Les familles comparent : l'établissement qui répond le premier, avec la bonne information, gagne l'inscription.",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    gains: [
      "Scolarité payée à temps",
      "Moins d'impayés",
      "Plus d'inscriptions",
      "Une rentrée sans files",
      "Un secrétariat soulagé",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'établissement garde ses frais, ses décisions et ses documents officiels.",
    roles: [
      {
        domain: "Offre et frais",
        organisation: "Fixe les classes, les filières, les frais et les échéanciers",
        platform: "Présente l'offre et encaisse dans la conversation",
      },
      {
        domain: "Admissions",
        organisation: "Étudie les dossiers et décide",
        platform: "Collecte les pièces et prévient le candidat",
      },
      {
        domain: "Scolarité",
        organisation: "Suit les paiements et décide des étalements",
        platform: "Rappelle les échéances, relance, envoie les reçus",
      },
      {
        domain: "Vie scolaire",
        organisation: "Saisit les absences, les notes et les convocations",
        platform: "Prévient le parent ou l'étudiant",
      },
      {
        domain: "Documents officiels",
        organisation: "Établit, signe et délivre",
        platform: "Prépare, transmet et archive",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Données des élèves",
        organisation: "Reste seul maître des données",
        platform: "N'informe que le parent ou l'étudiant identifié",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les équipes reprennent la main",
        platform: "L'IA ne décide d'aucune admission, note ou sanction ; elle transfère à un agent",
      },
    ],
    alsoConfigurable: [
      { title: "Demander un document" },
      { title: "Examens et résultats" },
      {
        title: "Stages et offres d'emploi",
        detail: "Offres diffusées aux étudiants concernés ; candidature et suivi dans la conversation.",
      },
      {
        title: "Cantine et transport scolaire",
        detail: "Inscription, paiement et informations aux parents.",
      },
      {
        title: "Orientation des futurs étudiants",
        detail: "Filières, débouchés, portes ouvertes : les bacheliers s'informent et s'inscrivent.",
      },
      {
        title: "Vérifier un diplôme",
        detail: "Un employeur demande confirmation ; l'établissement répond, avec l'accord du diplômé.",
      },
      {
        title: "Anciens élèves",
        detail: "Réseau des diplômés, événements, offres et nouvelles de l'établissement.",
      },
      {
        title: "Satisfaction des familles",
        detail: "Une note après la rentrée ou une demande ; résultats par niveau ou par filière.",
      },
      {
        title: "Outil d'appel des enseignants",
        detail: "Absences saisies depuis le téléphone ; les parents sont prévenus aussitôt.",
      },
      {
        title: "Alertes exceptionnelles",
        detail: "Fermeture, changement d'horaires, intempéries : tous prévenus en quelques minutes.",
      },
    ],
    solutions: [
      "recouvrement",
      "vente-souscription",
      "notifications",
      "workflows-metiers",
    ],
  },
  {
    slug: "immobilier",
    title: "Agences immobilières",
    icon: "Building2",
    fuseDeck: { file: "Place_Fuse_Agences_Immobilieres.pptx", order: 11 },
    organisationLabel: "l'agence",
    personLabel: "Le client",
    headline: "Votre agence immobilière ouverte 24h/24 sur WhatsApp",
    description:
      "Trouver un logement, payer son loyer, signaler un incident, informer les propriétaires, là où sont déjà vos clients.",
    frictions: [
      {
        title: "Loyers payés en retard",
        detail: "Relances par téléphone, paiements en espèces, déplacements pour encaisser.",
        consequence: "Une trésorerie tendue, des reversements aux propriétaires en retard.",
      },
      {
        title: "Visites non qualifiées",
        detail: "Appels pour des biens déjà loués ou hors budget, visites pour rien.",
        consequence: "Du temps d'agent perdu, des logements qui restent vides.",
      },
      {
        title: "Dossiers locataires incomplets",
        detail: "Pièces manquantes, illisibles, à redemander plusieurs fois.",
        consequence: "Des entrées en location retardées.",
      },
      {
        title: "Incidents mal suivis",
        detail: "Fuite, panne, serrure : signalés par téléphone, sans photo ni suivi.",
        consequence: "Des locataires mécontents, des propriétaires inquiets.",
      },
    ],
    frictionNote:
      "Les propriétaires veulent savoir : ce qui a été encaissé, ce qui leur a été reversé et dans quel état est leur bien, sans avoir à appeler.",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge"],
    gains: [
      "Loyers payés à temps",
      "Moins d'impayés",
      "Moins de vacance",
      "Plus de mandats",
      "Moins d'appels",
    ],
    rolesIntro:
      "Chacun reste dans son rôle : l'agence garde ses loyers, le choix de ses locataires et la relation avec ses propriétaires.",
    roles: [
      {
        domain: "Loyers et conditions",
        organisation: "Fixe les loyers, les sommes d'entrée et les conditions",
        platform: "Présente l'offre et encaisse dans la conversation",
      },
      {
        domain: "Locataires",
        organisation: "Sélectionne les locataires et signe les baux",
        platform: "Collecte les pièces, vérifie l'identité, prévient le candidat",
      },
      {
        domain: "Encaissements",
        organisation: "Suit les paiements, décide des échéanciers et des suites",
        platform: "Rappelle les échéances, relance, envoie les quittances",
      },
      {
        domain: "Propriétaires",
        organisation: "Reverse les loyers et rend compte",
        platform: "Envoie les relevés et répond aux questions",
      },
      {
        domain: "Incidents",
        organisation: "Mandate les intervenants et valide les réparations",
        platform: "Recueille photo et description, suit le ticket",
      },
      {
        domain: "Paiements",
        organisation: "Choisit les moyens de paiement et le circuit des fonds",
        platform: "Envoie les liens de paiement et confirme les règlements",
      },
      {
        domain: "Marque",
        organisation: "Nom, couleurs, numéro WhatsApp officiel",
        platform: "Opère l'assistant en marque blanche",
      },
      {
        domain: "Données des clients",
        organisation: "Reste seule maîtresse des données",
        platform: "N'affiche que ce qui concerne la personne identifiée",
      },
      {
        domain: "Cas sensibles",
        organisation: "Les gestionnaires reprennent la main",
        platform: "L'IA ne fixe aucun loyer et ne choisit aucun locataire seule ; elle transfère à un agent",
      },
    ],
    alsoConfigurable: [
      { title: "Trouver un bien et réserver une visite" },
      { title: "Constituer son dossier locataire" },
      {
        title: "Vente d'un bien",
        detail: "Offre d'achat, visite et suivi de la transaction avec l'agent.",
      },
      {
        title: "Estimation d'un bien",
        detail: "Le propriétaire décrit son bien et envoie ses photos ; l'agence prépare l'estimation.",
      },
      {
        title: "État des lieux en photo",
        detail: "Photos horodatées à l'entrée et à la sortie, archivées dans le dossier.",
      },
      {
        title: "Préavis et restitution de la caution",
        detail: "Préavis déposé en un message ; suivi jusqu'à la restitution.",
      },
      {
        title: "Renouvellement de bail",
        detail: "Rappel avant l'échéance du bail et accord dans la conversation.",
      },
      {
        title: "Charges de copropriété",
        detail: "Appels de charges, paiement et reçus pour les copropriétaires.",
      },
      {
        title: "Contrôles réglementaires sur les ventes",
        detail: "Vérification d'identité et contrôles anti-blanchiment, ajoutables selon vos procédures.",
      },
      {
        title: "Outil des agents terrain",
        detail: "Visites, états des lieux et dossiers suivis depuis le téléphone de l'agent.",
      },
    ],
    solutions: [
      "recouvrement",
      "agent-accueil",
      "notifications",
      "incidents",
      "workflows-metiers",
    ],
  },

  // ── Fiches historiques, hors des présentations d'octobre ────────────────────
  {
    slug: "hotellerie",
    title: "Hôtellerie",
    icon: "Hotel",
    description:
      "Pré-arrivée automatisée, acomptes encaissés, satisfaction mesurée dès le départ du client.",
    costs: [
      "Une réception qui répond aux mêmes questions toute la journée.",
      "Des acomptes non réglés et des no-shows non anticipés.",
      "Des clients mécontents qui le disent en ligne plutôt qu'à vous.",
    ],
    handled: [
      "La pré-arrivée : check-in, services disponibles, ventes additionnelles proposées au bon moment.",
      "Les relances d'acompte avec lien de paiement, et le suivi des no-shows.",
      "La mesure de satisfaction après le départ, avec alerte immédiate sur les scores bas.",
    ],
    solutions: ["agent-accueil", "recouvrement", "notifications", "satisfaction-nps"],
    useCases: [
      "Pré-arrivée automatisée : check-in, services disponibles, ventes additionnelles",
      "Mesure de satisfaction après le départ, avec alerte immédiate sur les scores bas",
      "Relances d'acomptes et gestion des no-shows avec lien de paiement intégré",
    ],
  },
  {
    slug: "transport-aerien",
    title: "Transport aérien",
    icon: "Plane",
    description:
      "Rappels de vol, ventes additionnelles et déclarations de bagage guidées, en temps réel.",
    costs: [
      "Des passagers qui appellent pour des informations déjà disponibles.",
      "Des ventes additionnelles manquées faute d'être proposées au bon moment.",
      "Des déclarations de bagage perdu incomplètes, à relancer.",
    ],
    handled: [
      "Le rappel de vol avec informations bagages, porte d'embarquement et instructions d'enregistrement.",
      "La vente additionnelle — bagage, siège — proposée dans la conversation.",
      "La déclaration guidée de bagage perdu, avec collecte des preuves photo dès le premier échange.",
    ],
    solutions: ["notifications", "agent-accueil", "incidents", "satisfaction-nps"],
    useCases: [
      "Rappel de vol J-1 : informations bagages, porte d'embarquement, instructions check-in",
      "Vente additionnelle (bagage, siège premium) directement dans la conversation",
      "Déclaration guidée de bagages perdus avec collecte de preuves photo",
    ],
  },
  {
    slug: "retail",
    title: "Retail & distribution",
    icon: "ShoppingCart",
    description:
      "Commandes revendeurs, campagnes ciblées et satisfaction post-livraison sur un seul canal.",
    costs: [
      "Des commandes revendeurs prises par téléphone, puis ressaisies.",
      "Des campagnes envoyées à tout le monde, ouvertes par personne.",
      "Des clients déçus qui ne reviennent pas, sans qu'on sache pourquoi.",
    ],
    handled: [
      "La prise de commande revendeur : catalogue, stocks, paiement intégré dans la conversation.",
      "Les campagnes ciblées par segment, envoyées sur le canal que vos clients consultent.",
      "La mesure de satisfaction après livraison, avec traitement proactif des mécontents.",
    ],
    solutions: ["vente-souscription", "notifications", "workflows-metiers", "satisfaction-nps"],
    useCases: [
      "Prise de commande revendeurs : catalogue, stocks en temps réel, paiement intégré",
      "Campagnes promotionnelles ciblées par segment",
      "Mesure de satisfaction post-livraison avec traitement proactif des mécontents",
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

/** Secteur mis en vitrine — celui dont les parcours sont en production. */
export function getFeaturedSector(): Sector {
  return sectors.find((s) => s.featured) ?? sectors[0];
}

/** Les 11 secteurs des présentations d'octobre, dans l'ordre de la synthèse. */
export function getFuseSectors(): Sector[] {
  return sectors
    .filter((s) => s.fuseDeck)
    .sort((a, b) => (a.fuseDeck?.order ?? 0) - (b.fuseDeck?.order ?? 0));
}

/** Fiches conservées hors du jeu d'octobre. */
export function getLegacySectors(): Sector[] {
  return sectors.filter((s) => !s.fuseDeck);
}
