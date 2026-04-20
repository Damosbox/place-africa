import type { Capacity } from "@/lib/types/content";

export const capacities: Capacity[] = [
  {
    slug: "messagerie-multicanale",
    title: "Messagerie multicanale unifiée",
    icon: "MessageSquare",
    flow: "both",
    shortDescription:
      "WhatsApp, SMS, e-mail, webchat, Messenger, Instagram DM, voix, in-app — un seul hub.",
    description:
      "Docaya orchestre tous les canaux conversationnels utilisés en Afrique sur une couche unique. WhatsApp concentre plus de 60% des échanges, complété par SMS, e-mail, webchat, Messenger, Instagram DM, voix et in-app. Chaque message converge vers le même guichet, avec la même fiche client.",
    benefits: [
      "Taux d'ouverture WhatsApp > 90%",
      "Historique client 360° quel que soit le canal d'entrée",
      "Bascule fluide d'un canal à l'autre sans perte de contexte",
    ],
    useCases: [
      "Réponse client sur le canal qu'il a choisi",
      "Campagne multicanale avec fallback SMS",
      "Escalade voix pour les cas complexes",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "engagement-fidelisation",
    ],
  },
  {
    slug: "guichet-conversationnel-unifie",
    title: "Guichet conversationnel unifié",
    icon: "Inbox",
    flow: "inbound",
    shortDescription:
      "Une inbox agent unique avec historique client 360° et attribution intelligente.",
    description:
      "Tous les flux entrants (inbound) convergent dans un guichet unique. Les agents disposent de la fiche client complète, de l'historique de conversations tous canaux confondus et d'un moteur d'attribution par compétence, équipe ou priorité.",
    benefits: [
      "First Contact Resolution amélioré",
      "Temps de traitement réduit grâce au contexte 360°",
      "Collaboration agent-agent via notes internes",
    ],
    useCases: [
      "Centralisation du service client multicanal",
      "Traitement des demandes commerciales entrantes",
      "Gestion des réclamations avec suivi SLA",
    ],
    relatedFamilies: ["service-decongestion", "acquisition-conversion"],
  },
  {
    slug: "workflows-conversationnels",
    title: "Workflows conversationnels",
    icon: "Workflow",
    flow: "both",
    shortDescription:
      "Arbres de décision, scénarios conditionnels et automatisations métier.",
    description:
      "Concevez des parcours conversationnels sans code : collecte de données, validation, branchements conditionnels, appels API, mise à jour CRM. Les workflows couvrent aussi bien l'onboarding, la souscription, le recouvrement que le support.",
    benefits: [
      "Zéro code pour les cas standards",
      "Intégration API pour les cas avancés",
      "Réutilisation des blocs entre scénarios",
    ],
    useCases: [
      "Souscription guidée en 5 étapes",
      "Qualification et routage de lead",
      "Déclaration de sinistre avec collecte de pièces",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
    ],
  },
  {
    slug: "agents-ia-automatisation",
    title: "Agents IA & automatisation",
    icon: "Brain",
    flow: "inbound",
    shortDescription:
      "NLU, Q&A basé sur votre base documentaire, routage intelligent, escalade humaine.",
    description:
      "Des agents IA Q&A répondent aux questions fréquentes à partir de votre base documentaire. Ils qualifient la demande, déclenchent les workflows pertinents et basculent vers un humain quand le contexte l'exige, sans perte d'information.",
    benefits: [
      "Déflection 40-70% des demandes de niveau 1",
      "Réponses 24/7 en langue locale",
      "Transfert de contexte lors de l'escalade humaine",
    ],
    useCases: [
      "FAQ produit automatisée",
      "Pré-qualification commerciale",
      "Assistance première ligne en dehors des heures ouvrées",
    ],
    relatedFamilies: ["service-decongestion", "acquisition-conversion"],
  },
  {
    slug: "campagnes-notifications-sortantes",
    title: "Campagnes & notifications sortantes",
    icon: "Send",
    flow: "outbound",
    shortDescription:
      "Transactionnel + marketing relationnel segmenté sur le même moteur.",
    description:
      "Le moteur d'envoi couvre deux usages : notifications transactionnelles déclenchées par événement (paiement, rendez-vous, statut) et campagnes marketing segmentées (promotion, réactivation, up-sell). Segmentation par tags, scoring et comportement.",
    benefits: [
      "Mêmes règles de conformité pour les deux usages",
      "Segmentation dynamique",
      "Mesure de performance unifiée (livraison, ouverture, conversion)",
    ],
    useCases: [
      "Rappel de rendez-vous J-1",
      "Campagne de réactivation clients inactifs",
      "Notification de paiement reçu",
    ],
    relatedFamilies: [
      "engagement-fidelisation",
      "encaissement-recouvrement",
      "acquisition-conversion",
    ],
  },
  {
    slug: "capture-qualification-leads",
    title: "Capture & qualification de leads",
    icon: "UserPlus",
    flow: "inbound",
    shortDescription:
      "Formulaires conversationnels, scoring et push vers le CRM.",
    description:
      "Transformez chaque conversation entrante en opportunité commerciale qualifiée. Formulaires conversationnels adaptatifs, scoring automatique sur critères métier, push direct vers votre CRM avec les bonnes étiquettes.",
    benefits: [
      "Taux de complétion supérieur aux formulaires web",
      "Enrichissement automatique depuis le CRM",
      "Attribution directe au bon commercial",
    ],
    useCases: [
      "Captation lead depuis une pub Meta (click-to-WhatsApp)",
      "Qualification budget / besoin / délai",
      "Handover lead commercial avec contexte complet",
    ],
    relatedFamilies: ["acquisition-conversion"],
  },
  {
    slug: "ticketing-suivi",
    title: "Ticketing & suivi",
    icon: "Ticket",
    flow: "inbound",
    shortDescription:
      "Création automatique de tickets, statuts, SLA et tableaux de bord.",
    description:
      "Chaque interaction entrante peut générer un ticket structuré avec statut, catégorie, urgence, SLA et pièces jointes. Les mises à jour sont notifiées automatiquement au client via son canal préféré.",
    benefits: [
      "Traçabilité complète des demandes",
      "Respect des SLA mesurable",
      "Clients informés à chaque étape sans intervention agent",
    ],
    useCases: [
      "Gestion incidents utilities",
      "Suivi de sinistres assurance",
      "Réclamations client retail",
    ],
    relatedFamilies: ["service-decongestion"],
  },
  {
    slug: "paiements-conversationnels",
    title: "Paiements conversationnels",
    icon: "CreditCard",
    flow: "both",
    shortDescription:
      "Wave, Orange Money, MTN Momo, Moov Money, carte bancaire — lien in-chat.",
    description:
      "Encaissez directement dans la conversation via un lien de paiement intégré. Compatible mobile money (Wave, Orange Money, MTN Momo, Moov Money) et carte bancaire. Rapprochement automatique, statut payé/échec en temps réel, relance automatique en cas d'échec.",
    benefits: [
      "Encaissement en moins de 60 secondes",
      "Rapprochement automatique avec la créance",
      "Couverture multi-opérateurs africains",
    ],
    useCases: [
      "Paiement de frais de scolarité par WhatsApp",
      "Encaissement prime assurance",
      "Commande retail + paiement in-chat",
    ],
    relatedFamilies: [
      "encaissement-recouvrement",
      "acquisition-conversion",
    ],
  },
  {
    slug: "formulaires-documents",
    title: "Formulaires & documents",
    icon: "FileText",
    flow: "both",
    shortDescription:
      "Collecte structurée, upload de pièces, génération et envoi de documents signés.",
    description:
      "Collectez des documents (CNI, RIB, factures, photos de sinistre) dans la conversation. Générez à la volée des attestations, quittances, contrats. Stockage sécurisé avec droits d'accès et intégration Drive / OneDrive.",
    benefits: [
      "Pas d'e-mail, pas de téléchargement d'app",
      "Documents horodatés et stockés",
      "Génération automatique à partir des données collectées",
    ],
    useCases: [
      "Collecte KYC bancaire",
      "Envoi de quittance après paiement de loyer",
      "Photo de sinistre + localisation GPS",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
    ],
  },
  {
    slug: "api-integrations",
    title: "API & intégrations",
    icon: "Plug",
    flow: "both",
    shortDescription:
      "REST, webhooks, connecteurs CRM / ERP / paiement / Meta.",
    description:
      "Docaya est API-first. Chaque action est accessible via REST, chaque événement via webhook. Connecteurs natifs vers Odoo, Dynamics, Zoho, Salesforce, Brevo, Wave, Orange Money, MTN, Moov, Google Drive, OneDrive, WhatsApp Business API, Meta.",
    benefits: [
      "Déploiement sans rupture de l'existant",
      "Automation bidirectionnelle CRM ↔ Docaya",
      "Extension sur mesure via webhooks",
    ],
    useCases: [
      "Push opportunité Docaya → CRM",
      "Notification changement statut ERP → client",
      "Synchronisation catalogue produit",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
      "engagement-fidelisation",
    ],
  },
  {
    slug: "analytics-pilotage",
    title: "Analytics & pilotage",
    icon: "BarChart3",
    flow: "both",
    shortDescription:
      "Dashboards temps réel, NPS, taux de résolution, conversion, recouvrement.",
    description:
      "Mesurez la performance en temps réel : volumes, délais de traitement, taux de résolution, NPS, taux de conversion, taux de recouvrement. Exportation vers BI et reporting personnalisé par équipe, canal, segment.",
    benefits: [
      "Vision unifiée inbound + outbound",
      "Alertes sur dépassement SLA",
      "Export CSV / API pour votre BI",
    ],
    useCases: [
      "Pilotage équipe service client",
      "Suivi ROI campagnes marketing",
      "Tableau de bord recouvrement hebdomadaire",
    ],
    relatedFamilies: [
      "service-decongestion",
      "encaissement-recouvrement",
      "engagement-fidelisation",
      "acquisition-conversion",
    ],
  },
];

export function getCapacityBySlug(slug: string): Capacity | undefined {
  return capacities.find((c) => c.slug === slug);
}

export function getCapacitiesByFlow(flow: "inbound" | "outbound"): Capacity[] {
  return capacities.filter((c) => c.flow === flow || c.flow === "both");
}
