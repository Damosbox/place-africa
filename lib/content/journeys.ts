import type { Journey, JourneySource, JourneyStatus } from "@/lib/types/content";

/**
 * Les 35 parcours détaillés des présentations Place Fuse d'octobre 2026.
 *
 * Source : mail de Saint-Clair du 13/10/2026, « Présentation Place FUSE par
 * secteur » — synthèse (choix des 35 parcours et statuts) et 11 déclinaisons
 * sectorielles (étapes). Textes extraits dans
 * `../docs/site/2026-10-21-retours-saint-clair/extractions/`.
 *
 * Les statuts sont ceux DÉCLARÉS dans les supports : 4 en production, 6 maquettés
 * et démontrables, 25 configurables. Ils doivent être confirmés par l'équipe
 * produit avant mise en ligne (`source.validatedAt` reste vide d'ici là).
 *
 * Aucun chiffre de résultat n'est promis : les supports disent eux-mêmes
 * « nous chiffrons ces gains avec vos données ».
 */

const RECEIVED = "2026-10-13";

function src(document: string, slide: number): JourneySource {
  return { document, slide, receivedAt: RECEIVED };
}

export const journeyStatusLabels: Record<JourneyStatus, { label: string; detail: string }> = {
  production: {
    label: "En production",
    detail: "Déjà utilisé chez notre client de référence.",
  },
  demontrable: {
    label: "Démontrable",
    detail: "Parcours maquetté, présenté en direct lors d'une démonstration.",
  },
  configurable: {
    label: "Configurable",
    detail: "Conçu sur la même plateforme, configuré avec vous pour votre organisation.",
  },
};

export const journeys: Journey[] = [
  // ── 03 · Assurance ────────────────────────────────────────────────────────
  {
    id: "assurance-souscription-auto",
    sector: "assurances",
    title: "Souscrire une assurance automobile",
    summary:
      "Quelques minutes pour le prospect, 24h/24, sans agence : cotation en direct, la compagnie valide.",
    problem:
      "Passage en agence ou chez un intermédiaire, formulaires papier, pièces à reprendre : des prospects abandonnent ou souscrivent ailleurs.",
    outcome:
      "Plus de prospects transformés en assurés. Le prix vient de l'outil de tarification de la compagnie, sans ressaisie, et seules les pièces du contrat auto sont demandées.",
    steps: [
      { label: "Véhicule", person: "Indique marque, modèle, énergie, ancienneté et usage", platform: "Pose les questions utiles à la tarification" },
      { label: "Cotation", person: "Reçoit les formules et leurs prix", platform: "Interroge l'outil de tarification de la compagnie et présente les formules", organisation: "Fournit les tarifs" },
      { label: "Choix", person: "Choisit sa formule et pose ses questions", platform: "Répond à partir des documents de la compagnie" },
      { label: "Informations", person: "Remplit un formulaire mobile et joint carte d'identité, carte grise et permis", platform: "Collecte les informations et les pièces" },
      { label: "Validation", platform: "Transmet le dossier complet au souscripteur", organisation: "Vérifie et valide la souscription" },
      { label: "Paiement et attestation", person: "Paie la prime et reçoit son attestation sur WhatsApp", platform: "Envoie le lien de paiement, puis l'attestation émise par la compagnie", organisation: "Émet l'attestation" },
    ],
    teamRole:
      "Acceptation du risque, tarifs et émission de l'attestation restent à la compagnie.",
    status: "production",
    statusNote:
      "L'envoi de l'attestation sur WhatsApp est en production ; le paiement de la prime dans la conversation s'active selon le processus de la compagnie.",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    screenshots: [
      { src: "/images/Picture3.png", alt: "Conversation WhatsApp : photo de la carte grise, puis formulaire mobile du conducteur", width: 339, height: 351 },
      { src: "/images/Picture5.png", alt: "Choix de la formule, récapitulatif des garanties et paiement par mobile money", width: 500, height: 351 },
    ],
    source: src("Place_Fuse_Assurance.pptx", 6),
  },
  {
    id: "assurance-sinistre-auto",
    sector: "assurances",
    title: "Déclarer un sinistre automobile",
    summary:
      "L'assuré déclare depuis le lieu de l'accident, 24h/24 ; le gestionnaire reçoit un dossier structuré avec toutes les pièces.",
    problem:
      "Déclarations tardives, dossiers incomplets, pièces manquantes, appels pour savoir où en est le dossier : des délais plus longs et des gestionnaires occupés à relancer.",
    outcome:
      "Un dossier de sinistre complet dès la première fois : le gestionnaire instruit au lieu de relancer.",
    steps: [
      { label: "Circonstances", person: "Décrit ce qui s'est passé : date, heure, lieu", platform: "Guide la déclaration question par question" },
      { label: "Véhicule et tiers", person: "Indique le véhicule, les tiers impliqués, les blessés éventuels et les dégâts", platform: "Enregistre chaque information dans le dossier" },
      { label: "Pièces", person: "Envoie le constat amiable et les photos des dégâts et de la scène", platform: "Lit le constat et en extrait les informations" },
      { label: "Confirmation", person: "Confirme le récapitulatif", platform: "Récapitule la déclaration et demande confirmation" },
      { label: "Clôture", person: "Reçoit le délai de traitement", platform: "Annonce le délai fixé par la compagnie", organisation: "Fixe le délai" },
      { label: "Transmission", platform: "Relit le dossier et, une fois complet, l'envoie au gestionnaire avec les pièces", organisation: "Instruit, missionne l'expert si besoin, indemnise" },
    ],
    teamRole:
      "Place Fuse n'évalue pas le sinistre. L'instruction, l'expertise et l'indemnisation restent à la compagnie.",
    status: "production",
    services: ["IA / Knowledge"],
    source: src("Place_Fuse_Assurance.pptx", 7),
  },
  {
    id: "assurance-renouvellement-auto",
    sector: "assurances",
    title: "Renouveler son assurance automobile",
    summary:
      "À l'échéance, l'assuré reçoit sa prime et son lien de paiement ; il peut aussi écrire de lui-même « je veux renouveler ».",
    problem:
      "Échéances rappelées par courrier ou par appel, et l'assuré doit se déplacer pour payer : des contrats perdus et des primes encaissées en retard.",
    outcome:
      "Moins de contrats perdus, des primes encaissées à temps, et une offre complémentaire proposée à l'assuré satisfait.",
    steps: [
      { label: "Échéance", organisation: "Charge la liste des contrats qui arrivent à échéance" },
      { label: "Message", person: "Reçoit sa prime et le lien de paiement", platform: "Envoie le message à la date fixée par la compagnie" },
      { label: "Paiement", person: "Paie depuis le lien, par mobile money, sans se déplacer", platform: "Encaisse et confirme le paiement" },
      { label: "Confirmation", platform: "Enregistre le renouvellement dans le système de la compagnie" },
      { label: "Satisfaction", person: "Note le renouvellement sur 10", platform: "Recueille la note" },
      { label: "Offre", person: "Découvre une garantie famille ou habitation", platform: "Transmet les assurés intéressés au commercial", organisation: "Choisit les produits proposés" },
    ],
    teamRole:
      "La compagnie choisit les contrats concernés, le texte du message, la date d'envoi et les produits proposés après le renouvellement.",
    status: "production",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Assurance.pptx", 8),
  },
  {
    id: "assurance-prestation-vie",
    sector: "assurances",
    title: "Demander une prestation Vie",
    summary:
      "Rachat partiel ou total, avance sur police, terme du contrat, renonciation : l'assuré sait exactement quelles pièces fournir.",
    problem:
      "« Quelles pièces pour un rachat ? » : des dossiers incomplets, des allers-retours, et les obligations de connaissance client propres aux contrats Vie.",
    outcome:
      "Un dossier de prestation complet dès le premier envoi, contrôlé avant d'arriver au gestionnaire.",
    steps: [
      { label: "Demande", person: "Choisit le type de prestation", platform: "Explique chaque option à partir des documents de la compagnie" },
      { label: "Liste des pièces", person: "Indique comment il souhaite être payé", platform: "Donne la liste exacte des pièces selon la demande et le mode de paiement" },
      { label: "Pièces", person: "Envoie le formulaire signé, sa pièce d'identité et les pièces demandées", platform: "Lit les pièces et vérifie qu'il n'en manque aucune" },
      { label: "Contrôles", platform: "Contrôle le demandeur sur les listes de sanctions et de personnes politiquement exposées ; alerte la conformité en cas de correspondance", organisation: "Décide en cas d'alerte" },
      { label: "Confirmation", person: "Valide le récapitulatif par un « oui » explicite", platform: "Récapitule la demande, le mode de paiement et les pièces reçues" },
      { label: "Transmission", person: "Reçoit le délai de traitement", platform: "Transmet le dossier complet au gestionnaire", organisation: "Instruit la demande et verse la prestation" },
    ],
    teamRole:
      "Place Fuse ne verse aucune prestation. L'instruction, la décision et le paiement restent à la compagnie, qui décide aussi en cas d'alerte de conformité.",
    status: "production",
    statusNote:
      "Le contrôle des listes de sanctions est disponible, à activer selon les procédures de la compagnie.",
    services: ["IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Assurance.pptx", 9),
  },

  // ── 01 · Banques ──────────────────────────────────────────────────────────
  {
    id: "banques-ouverture-compte",
    sector: "banques",
    title: "Ouvrir un compte en quelques minutes",
    summary:
      "24h/24, sans agence : le client agit sur WhatsApp, Place Fuse prépare, la banque décide.",
    problem:
      "Ouverture de compte en agence, aux heures ouvrables, dossiers incomplets et allers-retours : des prospects perdus, jeunes, commerçants ou diaspora.",
    outcome:
      "Plus de clients : l'ouverture se fait à toute heure, et la banque reçoit un dossier complet avec les preuves des contrôles.",
    steps: [
      { label: "Pièce d'identité", person: "Photographie sa carte d'identité, son passeport ou son titre de séjour", platform: "Lit les informations et vérifie la pièce" },
      { label: "Domicile", person: "Envoie une facture d'eau ou d'électricité, ou un certificat de résidence", platform: "Vérifie le nom et l'adresse" },
      { label: "Coordonnées", person: "Indique son numéro de téléphone", platform: "Envoie puis vérifie un code à usage unique" },
      { label: "Vérification", person: "Fait un selfie", platform: "Contrôle la preuve de vie et compare le visage à la pièce", organisation: "Effectue ses contrôles complémentaires" },
      { label: "Validation", person: "Relit le récapitulatif et accepte les conditions", platform: "Contrôle les listes de sanctions et transmet le dossier avec les preuves", organisation: "Valide ou refuse l'ouverture" },
      { label: "Activation", person: "Reçoit ses accès et peut faire un premier dépôt", platform: "Envoie l'identifiant et le lien de dépôt", organisation: "Ouvre le compte dans son système" },
    ],
    teamRole:
      "La banque effectue ses contrôles complémentaires, valide ou refuse l'ouverture et ouvre le compte dans son système.",
    status: "configurable",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Banques.pptx", 6),
  },
  {
    id: "banques-re-kyc",
    sector: "banques",
    title: "Mettre à jour les dossiers clients (Re-KYC)",
    summary:
      "La mise à jour réglementaire, sur le même canal que l'ouverture de compte : sans déplacement en agence, chaque étape tracée.",
    problem:
      "La mise à jour périodique des dossiers clients est lourde, mobilise les agences et prend souvent du retard.",
    outcome:
      "Moins de dossiers en retard lors des contrôles et des audits, et un avancement visible client par client.",
    steps: [
      { label: "Déclenchement", platform: "Reçoit la liste des dossiers à revoir et programme les invitations", organisation: "Applique la périodicité réglementaire selon le niveau de risque" },
      { label: "Invitation", person: "Reçoit un message expliquant la démarche et sa durée", platform: "Envoie l'invitation puis les rappels jusqu'à la réponse" },
      { label: "Identification", person: "Confirme son identité par code", platform: "Vérifie qu'il s'agit bien du titulaire du compte" },
      { label: "Nouvelle pièce", person: "Photographie sa pièce en cours de validité", platform: "La compare aux informations déjà connues" },
      { label: "Selfie", person: "Fait un selfie", platform: "Contrôle la preuve de vie et compare le visage à la pièce" },
      { label: "Informations", person: "Confirme ou corrige adresse, profession, revenus", platform: "Collecte les justificatifs et refait le contrôle des listes de sanctions", organisation: "Effectue ses contrôles complémentaires" },
      { label: "Clôture", person: "Reçoit la confirmation", platform: "Transmet le dossier mis à jour avec les preuves horodatées", organisation: "Valide la mise à jour dans son système" },
    ],
    teamRole:
      "La banque fixe la périodicité, effectue ses contrôles et valide chaque mise à jour. Les clients sans réponse sont transférés à un conseiller.",
    status: "configurable",
    services: ["Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Banques.pptx", 7),
  },
  {
    id: "banques-recouvrement-credit",
    sector: "banques",
    title: "Recouvrer les échéances de crédit",
    summary: "Des relances automatiques, avec le lien de paiement dans chaque message.",
    problem:
      "Échéances relancées par téléphone ou SMS, le client remet à plus tard : des impayés, un coût du risque en hausse, des équipes mobilisées.",
    outcome:
      "Moins de pertes sur crédit : le client paie depuis le message, et les paiements partiels sont pris en compte en temps réel.",
    steps: [
      { label: "Avant l'échéance", person: "Reçoit le montant et la date, avec le lien de paiement", platform: "Envoie les rappels à J-7 et J-3" },
      { label: "Jour J", person: "Règle son échéance depuis le message", platform: "Envoie le rappel du jour" },
      { label: "Retard", person: "Paie ou demande un échéancier", platform: "Propose les deux options" },
      { label: "Accompagnement", person: "Peut demander à être rappelé", platform: "Propose l'aide d'un conseiller" },
      { label: "Transfert", platform: "Transmet le dossier à l'équipe recouvrement avec tout l'historique", organisation: "Prend la suite selon sa politique" },
    ],
    teamRole:
      "La banque règle le calendrier et le ton des relances, les échéanciers, les pénalités et le seuil de passage à un conseiller.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Banques.pptx", 8),
  },

  // ── 02 · Microfinance ─────────────────────────────────────────────────────
  {
    id: "microfinance-adhesion",
    sector: "microfinance",
    title: "Adhérer et ouvrir un compte",
    summary:
      "Quelques minutes pour le membre, 24h/24, sans se déplacer : il agit sur WhatsApp, Place Fuse prépare, l'institution décide.",
    problem:
      "Adhésion en agence ou lors d'une visite, dossiers incomplets, pièces à reprendre : des membres potentiels perdus, des agents occupés à saisir.",
    outcome: "Plus de membres, et des agents libérés de la saisie.",
    steps: [
      { label: "Pièce d'identité", person: "Photographie sa carte d'identité ou son passeport", platform: "Lit les informations et vérifie la pièce" },
      { label: "Domicile et activité", person: "Envoie une facture, décrit son activité et partage sa position", platform: "Vérifie le nom et l'adresse, enregistre l'activité" },
      { label: "Coordonnées", person: "Indique son numéro de téléphone", platform: "Envoie puis vérifie un code à usage unique" },
      { label: "Vérification", person: "Fait un selfie", platform: "Contrôle la preuve de vie et compare le visage à la pièce", organisation: "Effectue ses contrôles complémentaires" },
      { label: "Validation", person: "Accepte le règlement et les conditions", platform: "Contrôle les listes de sanctions et transmet le dossier avec les preuves", organisation: "Valide ou refuse l'adhésion" },
      { label: "Parts sociales", person: "Verse ses parts sociales et reçoit son numéro de membre", platform: "Envoie le lien de paiement, le reçu et le numéro", organisation: "Ouvre le compte dans son logiciel" },
    ],
    teamRole:
      "L'institution effectue ses contrôles complémentaires, valide ou refuse l'adhésion et ouvre le compte dans son logiciel.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Microfinance.pptx", 6),
  },
  {
    id: "microfinance-remboursement",
    sector: "microfinance",
    title: "Rembourser les échéances",
    summary:
      "Des rappels automatiques avec le lien de paiement : le membre paie depuis son commerce.",
    problem:
      "Échéances rappelées par appel ou visite, le membre doit se déplacer pour payer : un portefeuille à risque qui monte, des agents sur les routes.",
    outcome: "Moins d'impayés et moins de déplacements pour les agents de crédit.",
    steps: [
      { label: "Avant l'échéance", person: "Reçoit le montant et la date, avec le lien de paiement", platform: "Envoie les rappels à J-3 et J-1" },
      { label: "Jour J", person: "Paie depuis son commerce", platform: "Envoie le rappel du jour" },
      { label: "Retard", person: "Paie ou propose une date", platform: "Propose les deux options" },
      { label: "Groupe solidaire", platform: "Alerte le responsable du groupe et l'agent de crédit", organisation: "Fixe les règles d'alerte" },
      { label: "Visite", organisation: "L'agent de crédit planifie une visite, avec tout l'historique des échanges et des paiements" },
    ],
    teamRole:
      "L'institution règle le calendrier et le ton des rappels, l'alerte au groupe, les pénalités et le seuil de visite.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Microfinance.pptx", 9),
  },
  {
    id: "microfinance-epargne",
    sector: "microfinance",
    title: "Épargner régulièrement",
    summary:
      "Un objectif, un rythme, un rappel au bon moment : le membre dépose sans aller au guichet.",
    problem:
      "Dépôts au guichet quand le membre a le temps, sans rappel régulier : moins d'épargne collectée, donc moins de ressources pour prêter.",
    outcome:
      "Plus d'épargne collectée : le dépôt se fait sans quitter la conversation ni fermer son commerce.",
    steps: [
      { label: "Objectif", person: "Choisit un objectif (rentrée, stock, fête, imprévus) et un montant" },
      { label: "Rythme", person: "Fixe la fréquence : chaque jour, chaque semaine ou chaque mois" },
      { label: "Rappel", person: "Reçoit un rappel au jour choisi", platform: "Envoie le rappel avec le lien de dépôt" },
      { label: "Dépôt", person: "Dépose par mobile money, portefeuille électronique ou carte" },
      { label: "Suivi", person: "Reçoit son reçu et le point sur son objectif", platform: "Signale à l'institution les membres qui ne déposent plus" },
    ],
    teamRole:
      "L'institution suit les dépôts par membre et par période, et décide des campagnes ciblées : rentrée, fêtes, saison agricole.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Microfinance.pptx", 10),
  },

  // ── 04 · Protection sociale ───────────────────────────────────────────────
  {
    id: "protection-sociale-affiliation-independant",
    sector: "protection-sociale",
    title: "S'affilier comme travailleur indépendant",
    summary:
      "Quelques minutes pour le travailleur, sans agence : de la pièce d'identité à l'attestation, dans une seule conversation.",
    problem:
      "Pour les indépendants et les travailleurs de l'informel, l'affiliation en agence paraît longue et compliquée : une large part des actifs reste sans protection sociale.",
    outcome: "Plus d'assurés couverts, avec un dossier complet transmis à l'organisme.",
    steps: [
      { label: "Identité", person: "Photographie sa pièce d'identité ou son extrait de naissance", platform: "Lit la pièce et la situation matrimoniale" },
      { label: "Droits existants", person: "Indique s'il a déjà un numéro d'assuré", platform: "Reprend les numéros existants" },
      { label: "Coordonnées et activité", person: "Envoie en un message adresse, métier, début et lieu d'activité", platform: "Range chaque information dans le dossier" },
      { label: "Revenu", person: "Déclare son revenu mensuel", platform: "Calcule la cotisation selon le barème", organisation: "Fixe le barème" },
      { label: "Vérification", person: "Fait un selfie si un enrôlement est nécessaire", platform: "Contrôle la preuve de vie" },
      { label: "Validation", person: "Relit le récapitulatif et confirme", platform: "Transmet le dossier complet avec les preuves", organisation: "Valide l'affiliation et attribue le numéro" },
      { label: "Paiement et attestation", person: "Paie sa première cotisation et reçoit son attestation", platform: "Envoie le lien de paiement, puis l'attestation", organisation: "Ouvre les droits" },
    ],
    teamRole:
      "L'organisme fixe le barème, valide l'affiliation, attribue le numéro d'assuré et ouvre les droits.",
    status: "demontrable",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Protection_Sociale.pptx", 6),
  },
  {
    id: "protection-sociale-cotisations",
    sector: "protection-sociale",
    title: "Rappeler et encaisser les cotisations",
    summary:
      "Avant l'échéance, l'employeur reçoit le montant dû et paie dans la conversation.",
    problem:
      "Échéances rappelées par courrier ou par appel, l'employeur doit se déplacer ou organiser un virement : des arriérés et des relances manuelles coûteuses.",
    outcome: "Des cotisations payées à temps et moins de charge aux guichets.",
    steps: [
      { label: "Échéance", organisation: "Transmet les montants dus pour la période" },
      { label: "Rappel", person: "Reçoit le montant et la date limite", platform: "Envoie le rappel avec le lien de paiement et l'avis de paiement" },
      { label: "Détail", person: "Consulte salariés déclarés, masse salariale et cotisations dues" },
      { label: "Paiement", person: "Paie par mobile money, carte ou virement", platform: "Envoie le reçu" },
      { label: "Report", platform: "Si l'employeur reporte, renvoie un rappel avant la date limite" },
    ],
    teamRole:
      "L'organisme règle le calendrier, le texte des messages et les moyens de paiement acceptés ; les virements sont confirmés après sa propre vérification.",
    status: "demontrable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Protection_Sociale.pptx", 8),
  },
  {
    id: "protection-sociale-consulter-dossier",
    sector: "protection-sociale",
    title: "Consulter son dossier",
    summary:
      "Relevé des salaires, relevé de carrière, situation de retraite, périodes cotisées : l'assuré obtient son document sans se déplacer.",
    problem:
      "« Où en est mon dossier ? », « Combien de mois ai-je cotisé ? » : des files et des appels pour des questions simples.",
    outcome: "Des assurés mieux servis et des guichets désengorgés.",
    steps: [
      { label: "Demandeur", person: "Indique s'il agit pour lui-même ou pour un proche", platform: "Enregistre l'accord de l'assuré si un proche agit" },
      { label: "Identification", person: "Saisit son numéro d'assuré et sa date de naissance", platform: "Vérifie la concordance avec le dossier" },
      { label: "Code", person: "Saisit le code reçu par SMS", platform: "Envoie le code au numéro enregistré dans le dossier" },
      { label: "Choix", person: "Choisit un ou plusieurs documents", platform: "Interroge le dossier de l'organisme", organisation: "Fournit les données" },
      { label: "Résumé", person: "Lit le résumé : employeurs, mois cotisés, ouverture des droits" },
      { label: "Document", person: "Reçoit le document en PDF dans WhatsApp", platform: "Génère et envoie le document" },
    ],
    teamRole:
      "Place Fuse ne calcule aucun droit : il affiche les informations du dossier de l'organisme, qui reste seul maître de la donnée.",
    status: "demontrable",
    services: ["Notifications", "Compliance"],
    source: src("Place_Fuse_Protection_Sociale.pptx", 9),
  },

  // ── 05 · Eau et électricité ───────────────────────────────────────────────
  {
    id: "eau-payer-facture",
    sector: "utilities",
    title: "Payer sa facture",
    summary:
      "Deux entrées : l'entreprise envoie la facture, ou l'abonné la demande avec sa référence de contrat. Aucune ressaisie.",
    problem:
      "Files aux caisses, déplacements, facture papier égarée : l'abonné remet le paiement à plus tard, l'encaissement arrive tard.",
    outcome:
      "Des factures payées plus tôt, le soir ou le week-end, et soldées dans le système sans saisie manuelle.",
    steps: [
      { label: "Facture", person: "Reçoit sa facture, ou écrit « payer ma facture »", platform: "Envoie la facture à l'échéance, ou propose le menu", organisation: "Fournit les factures émises" },
      { label: "Identification", person: "Donne sa référence de contrat s'il vient de lui-même", platform: "Retrouve la facture en cours" },
      { label: "Détail", person: "Consulte la consommation, la période et le montant", platform: "Répond aux questions sur la facture" },
      { label: "Paiement", person: "Paie par mobile money, portefeuille électronique ou carte", platform: "Envoie le lien de paiement" },
      { label: "Quittance", person: "Reçoit sa quittance dans la conversation", platform: "Génère et envoie la quittance" },
      { label: "Rapprochement", platform: "Transmet le paiement au système de facturation", organisation: "Solde la facture" },
    ],
    teamRole:
      "L'entreprise fournit les factures ; son système de facturation reste la référence et solde chaque paiement.",
    status: "demontrable",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Eau_Electricite.pptx", 6),
  },
  {
    id: "eau-recharge-prepaye",
    sector: "utilities",
    title: "Recharger son compteur prépayé",
    summary:
      "L'abonné achète son crédit d'électricité dans la conversation et reçoit son code de recharge, sans point de vente.",
    problem:
      "L'achat de crédit pour les compteurs prépayés reste limité aux points de vente et à leurs heures d'ouverture.",
    outcome: "Plus de recharges, à toute heure, même quand les points de vente sont fermés.",
    steps: [
      { label: "Demande", person: "Écrit ou dit « recharger mon compteur »", platform: "Propose le parcours de recharge" },
      { label: "Compteur", person: "Donne son numéro de compteur, mémorisé pour la suite", platform: "Vérifie le compteur auprès du système de vente", organisation: "Confirme le compteur" },
      { label: "Montant", person: "Choisit le montant", platform: "Affiche les kWh correspondants", organisation: "Fixe le tarif" },
      { label: "Paiement", person: "Paie dans la conversation", platform: "Envoie le lien de paiement" },
      { label: "Code", person: "Reçoit son code et l'entre sur son compteur", platform: "Récupère le code auprès du système de vente", organisation: "Génère le code" },
      { label: "Reçu", person: "Retrouve codes et reçus dans la conversation", platform: "Archive chaque achat" },
    ],
    teamRole:
      "Codes, tarifs et kWh viennent du système de vente de l'entreprise ; Place Fuse ne fait que les transmettre.",
    status: "configurable",
    services: ["Pay", "Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Eau_Electricite.pptx", 7),
  },
  {
    id: "eau-relancer-impayes",
    sector: "utilities",
    title: "Relancer les impayés",
    summary:
      "L'abonné en retard est prévenu avant toute coupure et peut régulariser en un message, en une fois ou par échéancier.",
    problem:
      "Relances par courrier, agents envoyés sur place pour couper puis rétablir : des impayés qui s'accumulent et des coûts de terrain élevés.",
    outcome: "Moins d'impayés, et une liste d'abonnés à visiter réduite.",
    steps: [
      { label: "Relance", person: "Reçoit le solde dû et le délai", platform: "Propose de payer en une fois ou par échéancier" },
      { label: "Avertissement", platform: "Prévient qu'à défaut la fourniture pourra être suspendue", organisation: "Fixe les règles de suspension" },
      { label: "Paiement total", person: "Règle son solde et reçoit sa quittance" },
      { label: "Échéancier", person: "Choisit 2 ou 3 versements et paie le premier", platform: "Confirme le report de la suspension" },
      { label: "Versements", platform: "Renvoie un rappel avant chaque versement suivant" },
    ],
    teamRole:
      "L'entreprise fixe les délais, les seuils et les échéanciers proposés, et décide seule de suspendre ou de rétablir la fourniture.",
    status: "demontrable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Eau_Electricite.pptx", 8),
  },
  {
    id: "eau-declarer-incident",
    sector: "utilities",
    title: "Déclarer un incident",
    summary:
      "Fuite, coupure, compteur défectueux, facture anormale : l'équipe technique reçoit un ticket avec photo et position exacte.",
    problem:
      "Incidents signalés par téléphone, sans photo ni localisation précise : des interventions plus lentes, des pertes sur le réseau, un centre d'appels saturé.",
    outcome: "Des interventions mieux orientées et moins d'appels au centre.",
    steps: [
      { label: "Type", person: "Choisit le type d'incident ; pour une fuite, voie publique ou domicile", platform: "Adapte les questions" },
      { label: "Contrat", person: "Donne sa référence, sauf incident sur la voie publique", platform: "Retrouve le branchement concerné" },
      { label: "Photo et description", person: "Envoie une photo et décrit le problème, par écrit ou par vocal", platform: "Joint le tout au dossier" },
      { label: "Localisation", person: "Partage sa position ou décrit le lieu", platform: "Enregistre la position précise" },
      { label: "Ticket", person: "Reçoit un numéro de ticket et le délai d'intervention", platform: "Classe l'urgence et oriente vers la bonne équipe", organisation: "Fixe les règles d'urgence et les délais" },
      { label: "Suivi", person: "Est prévenu à chaque étape, jusqu'à la résolution", organisation: "Intervient et clôture" },
    ],
    teamRole:
      "Place Fuse n'intervient pas sur le réseau : le diagnostic et l'intervention restent à l'entreprise.",
    status: "demontrable",
    services: ["Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Eau_Electricite.pptx", 9),
  },

  // ── 06 · Collectivités ────────────────────────────────────────────────────
  {
    id: "collectivites-etat-civil",
    sector: "service-public",
    title: "Demander un acte d'état civil",
    summary:
      "L'habitant demande et paie depuis chez lui, puis vient une seule fois, au bon moment, retirer son acte.",
    problem:
      "Pour un extrait de naissance, l'habitant vient demander, revient payer, puis revient retirer : des journées perdues et des guichets saturés.",
    outcome: "Un seul déplacement au lieu de trois, et des frais encaissés et tracés par la régie.",
    steps: [
      { label: "Demande", person: "Choisit l'acte : naissance, mariage ou décès", platform: "Explique les pièces et les frais" },
      { label: "Références", person: "Indique le numéro et l'année de l'acte, ou nom et date de naissance", platform: "Transmet la demande au service", organisation: "Recherche l'acte dans ses registres" },
      { label: "Identité", person: "Photographie sa pièce d'identité", platform: "Lit la pièce et la joint à la demande" },
      { label: "Paiement", person: "Paie les frais dans la conversation", platform: "Envoie le lien de paiement et la quittance", organisation: "Encaisse via sa régie" },
      { label: "Acte prêt", person: "Reçoit son numéro de retrait", platform: "Prévient l'habitant", organisation: "Établit et signe l'acte" },
      { label: "Retrait", person: "Retire l'acte au guichet, sans attente", organisation: "Remet l'acte" },
    ],
    teamRole:
      "L'acte est établi, signé et remis par la mairie, comme aujourd'hui. Chaque paiement suit le circuit de la régie.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Collectivites.pptx", 6),
  },
  {
    id: "collectivites-taxes",
    sector: "service-public",
    title: "Payer les taxes et droits communaux",
    summary:
      "Commerçants, occupants du domaine public, annonceurs : la mairie envoie l'avis, le contribuable paie dans la conversation.",
    problem:
      "Taxes et droits communaux collectés à la main, sans rappel ni trace systématique : des recettes qui échappent à la commune.",
    outcome:
      "Des recettes mieux recouvrées, chaque paiement suivant le circuit de la régie et du Trésor.",
    steps: [
      { label: "Avis", person: "Reçoit le montant dû et le lien de paiement", organisation: "Émet l'avis" },
      { label: "Détail", person: "Demande l'emplacement, la période et le tarif appliqué" },
      { label: "Paiement", person: "Paie sans attendre le passage d'un collecteur" },
      { label: "Quittance", person: "Reçoit sa quittance aussitôt", platform: "Confirme le paiement" },
      { label: "Rappel", platform: "Relance à l'échéance selon le calendrier de la mairie" },
      { label: "Régie", platform: "Verse le paiement dans le circuit de la régie, avec sa trace", organisation: "Reçoit les fonds" },
    ],
    teamRole:
      "La mairie fixe les taxes, les tarifs, les échéances, le calendrier des rappels et le circuit des fonds.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Collectivites.pptx", 7),
  },
  {
    id: "collectivites-signalement",
    sector: "service-public",
    title: "Signaler un problème dans la commune",
    summary:
      "Voirie, éclairage, ordures, inondation : le service technique reçoit un ticket avec photo et position exacte.",
    problem:
      "Problèmes signalés par téléphone ou pas du tout, sans photo ni lieu précis : des interventions lentes et des habitants mécontents.",
    outcome:
      "Des problèmes réglés plus vite, et une carte des signalements pour décider où agir en priorité.",
    steps: [
      { label: "Type", person: "Choisit : voirie, éclairage, ordures, inondation, autre", platform: "Adapte les questions" },
      { label: "Photo et description", person: "Envoie une photo et décrit le problème, par écrit ou par vocal", platform: "Joint le tout au dossier" },
      { label: "Localisation", person: "Partage sa position ou décrit le lieu", platform: "Enregistre la position précise" },
      { label: "Ticket", person: "Reçoit un numéro de ticket", platform: "Oriente vers le bon service", organisation: "Fixe les priorités" },
      { label: "Suivi", person: "Est prévenu à chaque étape, jusqu'à la résolution", organisation: "Intervient et clôture" },
    ],
    teamRole: "La mairie fixe les priorités, intervient et clôture chaque signalement.",
    status: "configurable",
    services: ["Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Collectivites.pptx", 8),
  },

  // ── 07 · Transport urbain ─────────────────────────────────────────────────
  {
    id: "transport-urbain-ticket",
    sector: "transport-urbain",
    title: "Acheter son ticket ou recharger sa carte",
    summary: "Bus ou bateau : le voyageur paie depuis son téléphone, sans file ni espèces.",
    problem:
      "Tickets achetés au guichet ou à bord, en espèces, aux heures de pointe : des voyageurs qui attendent, de l'argent à compter, sécuriser et transporter.",
    outcome: "Plus de tickets vendus et moins d'espèces à manipuler.",
    steps: [
      { label: "Choix", person: "Choisit ticket, carnet ou recharge ; bus ou bateau", platform: "Présente les tickets et les tarifs", organisation: "Fixe les tarifs" },
      { label: "Carte", person: "Donne son numéro de carte, mémorisé pour la suite", platform: "Vérifie la carte auprès de la billettique" },
      { label: "Paiement", person: "Paie dans la conversation", platform: "Envoie le lien de paiement" },
      { label: "Ticket", person: "Reçoit son ticket en QR code ou la confirmation de recharge", platform: "Récupère le ticket auprès de la billettique", organisation: "Émet le ticket" },
      { label: "Voyage", person: "Présente le QR code ou sa carte à la validation", organisation: "Valide à bord, au quai ou au portique" },
      { label: "Reçu", person: "Retrouve tickets et reçus dans la conversation", platform: "Archive chaque achat" },
    ],
    teamRole:
      "Les tickets viennent toujours de la billettique de l'opérateur, qui fixe les tarifs et valide les titres.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Transport_Urbain.pptx", 6),
  },
  {
    id: "transport-urbain-information",
    sector: "transport-urbain",
    title: "S'informer et être prévenu",
    summary:
      "Lignes, arrêts, embarcadères, horaires, tarifs : la réponse en quelques secondes ; les perturbations, avant le départ.",
    problem:
      "Peu de réponses en dehors des gares : des voyageurs mal informés qui se tournent vers d'autres modes de transport.",
    outcome: "Des voyageurs informés, et une carte de la demande pour ajuster l'offre.",
    steps: [
      { label: "Question", person: "Demande quelle ligne prendre, par écrit ou par vocal", platform: "Répond avec la ligne, la fréquence et l'arrêt le plus proche" },
      { label: "Position", person: "Partage sa position", platform: "Indique l'arrêt ou l'embarcadère le plus proche" },
      { label: "Temps réel", platform: "Annonce l'arrivée du bus, si les véhicules sont géolocalisés" },
      { label: "Mes lignes", person: "S'abonne à ses lignes de bus ou de bateau" },
      { label: "Alerte", person: "Est prévenu des déviations et perturbations sur ses seules lignes", organisation: "Rédige les messages de perturbation" },
    ],
    teamRole:
      "L'opérateur règle les lignes, arrêts, horaires et messages de perturbation, et choisit les sources de données temps réel.",
    status: "configurable",
    services: ["Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Transport_Urbain.pptx", 8),
  },

  // ── 08 · Services postaux ─────────────────────────────────────────────────
  {
    id: "postes-retrait-colis",
    sector: "services-postaux",
    title: "Être prévenu et retirer son colis",
    summary:
      "Le client sait tout de suite que son colis l'attend, paie les frais et passe au guichet une seule fois.",
    problem:
      "Avis papier perdus ou jamais reçus : colis en souffrance, retours à l'expéditeur, frais non encaissés.",
    outcome: "Moins de colis en souffrance, et des frais encaissés avant le passage au guichet.",
    steps: [
      { label: "Avis", person: "Reçoit l'avis d'arrivée : bureau, horaires, frais", platform: "Envoie l'avis dès l'arrivée du colis", organisation: "Enregistre l'arrivée" },
      { label: "Paiement", person: "Paie les frais dans la conversation", platform: "Envoie le lien de paiement", organisation: "Fixe les frais" },
      { label: "Code", person: "Reçoit son code de retrait et son reçu", platform: "Transmet le code au bureau" },
      { label: "Retrait", person: "Présente son code et sa pièce d'identité", organisation: "Vérifie et remet le colis" },
      { label: "Rappel", person: "Est relancé avant la fin du délai de garde", organisation: "Fixe le délai de garde" },
    ],
    teamRole: "La poste fixe les frais et le délai de garde, vérifie l'identité et remet le colis.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Services_Postaux.pptx", 6),
  },
  {
    id: "postes-envoi-colis",
    sector: "services-postaux",
    title: "Envoyer un colis",
    summary:
      "Le client prépare son envoi depuis son téléphone : devis, paiement et numéro de suivi avant même de venir.",
    problem:
      "« Où est mon colis ? » : files aux guichets, et un suivi qui passe par un appel ou un déplacement.",
    outcome:
      "Plus de colis envoyés, et moins d'appels : le suivi arrive tout seul à l'expéditeur et au destinataire.",
    steps: [
      { label: "Envoi", person: "Indique destination, poids et type d'envoi", platform: "Explique les conditions", organisation: "Fixe les types d'envoi" },
      { label: "Devis", person: "Reçoit le prix", platform: "Calcule le devis selon les tarifs de la poste", organisation: "Fixe les tarifs" },
      { label: "Paiement", person: "Paie dans la conversation" },
      { label: "Numéro de suivi", person: "Reçoit son numéro de suivi et son reçu", organisation: "Attribue le numéro" },
      { label: "Dépôt", person: "Dépose au bureau ou demande un enlèvement", organisation: "Réceptionne ou enlève le colis" },
      { label: "Suivi", person: "Reçoit chaque étape : départ, arrivée, remise", platform: "Prévient l'expéditeur et le destinataire" },
    ],
    teamRole: "Types d'envoi, tarifs et conditions restent fixés par la poste.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Services_Postaux.pptx", 7),
  },
  {
    id: "postes-services-financiers",
    sector: "services-postaux",
    title: "Envoyer de l'argent et payer ses factures",
    summary:
      "Les services financiers de la poste, accessibles depuis WhatsApp, avec les contrôles prévus par ses procédures.",
    problem:
      "Transferts et paiements passent par le guichet, aux mêmes heures, quand le mobile money sert déjà les clients depuis leur téléphone.",
    outcome: "Plus de transferts, et un portefeuille de la poste qui sert plus souvent.",
    steps: [
      { label: "Transfert", person: "Indique le bénéficiaire et le montant", platform: "Présente les conditions et les frais", organisation: "Fixe frais et plafonds" },
      { label: "Contrôles", person: "Envoie sa pièce d'identité", platform: "Vérifie l'identité et les listes de sanctions", organisation: "Applique ses procédures et décide" },
      { label: "Paiement", person: "Paie par le portefeuille de la poste, mobile money ou carte" },
      { label: "Code", person: "Le bénéficiaire reçoit un code de retrait", platform: "Envoie le code et le reçu", organisation: "Enregistre le transfert" },
      { label: "Remise", person: "Le bénéficiaire retire au guichet ou sur son portefeuille", organisation: "Remet les fonds" },
    ],
    teamRole:
      "La poste fixe les frais et les plafonds, applique ses procédures de contrôle et décide.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Services_Postaux.pptx", 9),
  },
  {
    id: "postes-document-administratif",
    sector: "services-postaux",
    title: "Commander un document administratif",
    summary:
      "Extrait de naissance, casier judiciaire, certificat de nationalité : commandé sur WhatsApp, livré ou retiré au bureau.",
    problem:
      "Des démarches qui obligent à faire la file au guichet, alors qu'elles pourraient être préparées à distance.",
    outcome: "Moins d'appels et de files, pour les postes qui proposent ce service.",
    steps: [
      { label: "Choix", person: "Choisit son document", platform: "Explique les pièces et le tarif", organisation: "Fixe la liste et les tarifs" },
      { label: "Pièces", person: "Envoie ses pièces en photo", platform: "Lit les pièces et complète le dossier" },
      { label: "Identité", person: "Fait une preuve de vie en selfie", platform: "Vérifie que le demandeur est bien la personne concernée" },
      { label: "Paiement", person: "Paie dans la conversation" },
      { label: "Suivi", person: "Suit l'avancement", organisation: "Transmet la demande à l'administration et récupère le document" },
      { label: "Remise", person: "Choisit livraison ou retrait au bureau", organisation: "Remet le document" },
    ],
    teamRole:
      "Le document reste délivré par l'administration compétente ; la poste transmet la demande et le remet.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge", "Compliance"],
    source: src("Place_Fuse_Services_Postaux.pptx", 10),
  },

  // ── 09 · Documents de transport ───────────────────────────────────────────
  {
    id: "documents-transport-document-pret",
    sector: "documents-transport",
    title: "Être prévenu que son document est prêt et prendre rendez-vous",
    summary:
      "Permis, carte grise, carte de transport : l'usager est prévenu directement et vient au bon moment.",
    problem:
      "L'usager ne sait pas que son document l'attend, ou passe par un intermédiaire qui tarde à le prévenir : des milliers de documents en attente dans les agences.",
    outcome: "Des documents retirés plus vite, sans intermédiaire.",
    steps: [
      { label: "Alerte", person: "Apprend que son document est prêt, dans son agence", organisation: "Signale les documents disponibles" },
      { label: "Rendez-vous", person: "Choisit un créneau", platform: "Propose les créneaux libres et réserve", organisation: "Ouvre les créneaux" },
      { label: "Confirmation", person: "Reçoit la confirmation et les pièces à présenter" },
      { label: "Rappel", person: "Est rappelé la veille, et peut déplacer son rendez-vous" },
      { label: "Retrait", person: "Présente sa confirmation et sa pièce d'identité", organisation: "Vérifie et remet le document" },
      { label: "Relance", person: "S'il ne vient pas, reçoit une relance", platform: "Informe l'agence", organisation: "Fixe la règle de relance" },
    ],
    teamRole: "Le centre signale les documents disponibles, ouvre les créneaux, vérifie et remet le document.",
    status: "configurable",
    services: ["Notifications"],
    source: src("Place_Fuse_Documents_Transport.pptx", 6),
  },
  {
    id: "documents-transport-suivi-dossier",
    sector: "documents-transport",
    title: "Suivre son dossier et se renseigner",
    summary:
      "Statut du dossier, pièces à fournir, agence la plus proche : la réponse en quelques secondes, sans appeler.",
    problem:
      "« Où en est ma carte grise ? » : l'usager appelle ou se déplace pour le savoir.",
    outcome: "Moins d'appels au centre et moins de déplacements pour rien.",
    steps: [
      { label: "Question", person: "Demande où en est son dossier, avec son numéro", platform: "Donne le statut transmis par la plateforme du centre" },
      { label: "Vocal", person: "Peut poser sa question par vocal, sans rien écrire" },
      { label: "Pièces", person: "Obtient la liste des pièces selon la démarche" },
      { label: "Agence", person: "Partage sa position", platform: "Indique l'agence la plus proche et ses horaires" },
      { label: "Alerte", person: "Est prévenu quand le document est prêt" },
    ],
    teamRole:
      "Le statut vient de la plateforme de gestion des dossiers du centre ; les réponses sont validées par ses équipes.",
    status: "configurable",
    services: ["Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Documents_Transport.pptx", 7),
  },
  {
    id: "documents-transport-contraventions",
    sector: "documents-transport",
    title: "Contraventions et points du permis",
    summary:
      "L'usager reçoit son avis sur WhatsApp, le règle en un message et consulte ses points.",
    problem:
      "Compte à créer, application à installer, mot de passe à retenir : les services en ligne existent mais ne touchent pas tous les usagers.",
    outcome: "Des contraventions réglées sans déplacement, avec reçu immédiat.",
    steps: [
      { label: "Avis", person: "Reçoit l'avis de contravention sur WhatsApp", organisation: "Émet l'avis" },
      { label: "Détail", person: "Consulte l'infraction, la date et le montant" },
      { label: "Paiement", person: "Paie dans la conversation", organisation: "Applique le montant réglementaire" },
      { label: "Reçu", person: "Reçoit son reçu", platform: "Archive le reçu", organisation: "Enregistre le paiement" },
      { label: "Points", person: "Consulte les points de son permis", organisation: "Tient le compte des points" },
      { label: "Réclamation", person: "Conteste l'avis s'il le souhaite", platform: "Ouvre la réclamation et la transmet", organisation: "Traite et décide" },
    ],
    teamRole: "Avis, montants et points restent ceux du centre, qui traite et décide des réclamations.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Documents_Transport.pptx", 9),
  },

  // ── 10 · Écoles et universités ────────────────────────────────────────────
  {
    id: "education-inscription",
    sector: "education",
    title: "S'informer et s'inscrire",
    summary:
      "Classes, filières, conditions, frais : la famille ou l'étudiant s'informe et s'inscrit sans file au secrétariat.",
    problem:
      "Inscriptions au secrétariat, files, les mêmes questions toute la journée. Les familles comparent : l'établissement qui répond le premier gagne l'inscription.",
    outcome: "Plus d'inscriptions, et des dossiers qui arrivent complets au secrétariat.",
    steps: [
      { label: "Information", person: "Demande classes, filières, conditions et frais", platform: "Répond à partir des informations de l'établissement", organisation: "Fixe l'offre et les frais" },
      { label: "Dossier", person: "Envoie bulletins, diplômes et pièces en photo", platform: "Lit les pièces et complète le dossier" },
      { label: "Admission", person: "Reçoit la réponse", platform: "Transmet le dossier complet", organisation: "Étudie le dossier et décide" },
      { label: "Paiement", person: "Paie les frais d'inscription dans la conversation" },
      { label: "Confirmation", person: "Reçoit la confirmation et son reçu", organisation: "Valide l'inscription" },
      { label: "Relance", person: "S'il n'a pas terminé, est relancé", organisation: "Fixe les dates limites" },
    ],
    teamRole: "Admissions, frais et places restent fixés par l'établissement.",
    status: "configurable",
    services: ["Pay", "Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Ecoles_Universites.pptx", 6),
  },
  {
    id: "education-scolarite-tranches",
    sector: "education",
    title: "Payer la scolarité par tranches",
    summary:
      "Échéancier, rappels, paiement et reçu : la scolarité se règle à temps, sans passage à la caisse.",
    problem:
      "Tranches oubliées, relances faites à la main, espèces à la caisse : une trésorerie tendue et des impayés en fin d'année.",
    outcome: "Une scolarité payée à temps, et la situation de chaque famille visible en temps réel.",
    steps: [
      { label: "Échéancier", person: "Reçoit l'échéancier de l'année dès l'inscription", organisation: "Fixe les tranches et les dates" },
      { label: "Rappel", person: "Est rappelé avant chaque échéance", platform: "Envoie le rappel avec le lien de paiement" },
      { label: "Paiement", person: "Paie dans la conversation" },
      { label: "Reçu", person: "Reçoit son reçu, retrouvable à tout moment", organisation: "Enregistre le paiement" },
      { label: "Retard", person: "Est relancé en cas de retard", organisation: "Fixe les règles de relance" },
      { label: "Étalement", person: "Demande un étalement si besoin", platform: "Transmet la demande à la caisse", organisation: "Décide" },
    ],
    teamRole: "L'établissement fixe les tranches, les dates et les règles de relance, et décide des étalements.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Ecoles_Universites.pptx", 7),
  },
  {
    id: "education-suivi-scolarite",
    sector: "education",
    title: "Suivre la scolarité",
    summary: "Absences, notes, convocations : le parent est informé le jour même, l'étudiant aussi.",
    problem:
      "Un mot dans le carnet, qui se perd : des parents qui découvrent les problèmes trop tard.",
    outcome: "Des parents informés le jour même, et un secrétariat soulagé.",
    steps: [
      { label: "Absence", person: "Le parent est prévenu de l'absence le jour même" },
      { label: "Justificatif", person: "Envoie le justificatif en photo", platform: "Le transmet à la vie scolaire" },
      { label: "Notes", person: "Reçoit notes et bulletins dès leur publication" },
      { label: "Convocation", person: "Confirme sa présence en un message" },
      { label: "Information", person: "Reçoit les informations de l'établissement", organisation: "Décide quels messages partent, à qui et quand" },
    ],
    teamRole:
      "Les informations viennent du logiciel de gestion scolaire ; l'établissement décide de ce qui est envoyé, à qui et à quel moment.",
    status: "configurable",
    services: ["Notifications"],
    source: src("Place_Fuse_Ecoles_Universites.pptx", 8),
  },

  // ── 11 · Agences immobilières ─────────────────────────────────────────────
  {
    id: "immobilier-loyer-quittance",
    sector: "immobilier",
    title: "Payer son loyer et recevoir sa quittance",
    summary:
      "Rappel, paiement et quittance : le loyer se règle à temps, sans déplacement ni espèces.",
    problem:
      "Relances par téléphone, paiements en espèces, déplacements pour encaisser : une trésorerie tendue et des reversements aux propriétaires en retard.",
    outcome: "Des loyers payés à temps, et la situation de chaque locataire visible immeuble par immeuble.",
    steps: [
      { label: "Rappel", person: "Est rappelé avant l'échéance", platform: "Envoie le rappel avec le lien de paiement", organisation: "Fixe l'échéance et le montant" },
      { label: "Paiement", person: "Paie dans la conversation", platform: "Encaisse et confirme" },
      { label: "Quittance", person: "Reçoit sa quittance, retrouvable à tout moment", platform: "Génère la quittance", organisation: "Enregistre le paiement" },
      { label: "Retard", person: "Est relancé en cas de retard", organisation: "Fixe les règles de relance" },
      { label: "Échéancier", person: "Demande un échéancier si besoin", platform: "Transmet au gestionnaire", organisation: "Décide" },
      { label: "Suite", platform: "Transmet les impayés persistants avec l'historique", organisation: "Engage la suite selon ses procédures" },
    ],
    teamRole:
      "L'agence fixe échéances, montants et règles de relance, décide des échéanciers et engage la suite des impayés.",
    status: "configurable",
    services: ["Pay", "Notifications"],
    source: src("Place_Fuse_Agences_Immobilieres.pptx", 8),
  },
  {
    id: "immobilier-incident",
    sector: "immobilier",
    title: "Signaler un incident dans le logement",
    summary:
      "Fuite, panne, serrure : le gestionnaire reçoit un ticket avec photo, et le locataire suit l'intervention.",
    problem:
      "Incidents signalés par téléphone, sans photo ni suivi : des locataires mécontents, des propriétaires inquiets.",
    outcome: "Moins d'appels, et des propriétaires informés de chaque résolution.",
    steps: [
      { label: "Type", person: "Choisit : fuite, électricité, serrure, autre", platform: "Adapte les questions" },
      { label: "Photo", person: "Envoie une photo et décrit le problème, par écrit ou par vocal", platform: "Joint le tout au ticket" },
      { label: "Ticket", person: "Reçoit un numéro de ticket", platform: "Classe l'urgence et oriente vers le gestionnaire", organisation: "Fixe les priorités" },
      { label: "Intervention", person: "Choisit un créneau de passage", organisation: "Mandate l'artisan ou le gestionnaire" },
      { label: "Clôture", person: "Confirme la réparation et note le service", platform: "Archive les photos", organisation: "Valide la clôture" },
    ],
    teamRole: "L'agence fixe les priorités, mandate l'intervenant et valide la clôture.",
    status: "configurable",
    services: ["Notifications", "Voice", "IA / Knowledge"],
    source: src("Place_Fuse_Agences_Immobilieres.pptx", 9),
  },
  {
    id: "immobilier-proprietaires",
    sector: "immobilier",
    title: "Informer les propriétaires",
    summary:
      "Sur place ou à l'étranger, le propriétaire suit ses loyers, ses reversements et l'état de ses biens, sans avoir à appeler.",
    problem:
      "Les propriétaires veulent savoir ce qui a été encaissé, ce qui leur a été reversé et dans quel état est leur bien, et appellent pour le savoir.",
    outcome: "Moins d'appels de propriétaires, et des mandats mieux conservés.",
    steps: [
      { label: "Relevé", person: "Reçoit son relevé mensuel : loyers encaissés, reversement" },
      { label: "Détail", person: "Demande le détail : loyers, frais de gestion, montant reversé" },
      { label: "Incident", person: "Est informé des incidents et de leur réparation, photos jointes" },
      { label: "Vacance", person: "Est prévenu dès qu'un logement se libère" },
      { label: "Documents", person: "Reçoit quittances, relevés et justificatifs à tout moment" },
      { label: "Question", person: "Pose sa question à toute heure", organisation: "Le gestionnaire reprend la main si besoin" },
    ],
    teamRole:
      "Les informations viennent du logiciel de gestion locative ; l'agence règle le contenu et la date des relevés.",
    status: "configurable",
    services: ["Notifications", "IA / Knowledge"],
    source: src("Place_Fuse_Agences_Immobilieres.pptx", 10),
  },
];

export function getJourneysBySector(sectorSlug: string): Journey[] {
  return journeys.filter((j) => j.sector === sectorSlug);
}

export function getJourneyById(id: string): Journey | undefined {
  return journeys.find((j) => j.id === id);
}

export function countJourneysByStatus(list: Journey[] = journeys): Record<JourneyStatus, number> {
  return list.reduce(
    (acc, j) => {
      acc[j.status] += 1;
      return acc;
    },
    { production: 0, demontrable: 0, configurable: 0 } as Record<JourneyStatus, number>
  );
}
