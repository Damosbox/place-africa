import type { Solution } from "@/lib/types/content";

export const solutions: Solution[] = [
  {
    slug: "agent-accueil",
    familySlug: "service-decongestion",
    title: "Agent d'Accueil & Orientation",
    tagline: "Répondez automatiquement à chaque sollicitation",
    color: "blue",
    icon: "MessageCircle",
    description:
      "Un chatbot ou agent IA qui répond automatiquement aux sollicitations entrantes sur WhatsApp. Il accueille le client, comprend sa demande, et l'oriente vers le bon service ou la bonne action.",
    features: [
      "Réponses automatisées aux questions fréquentes (FAQ)",
      "Orientation intelligente vers le service approprié",
      "Prise de rendez-vous automatisée",
      "Collecte d'informations préliminaires (documents, coordonnées, préférences)",
      "Formulaires mobiles via lien WhatsApp pour la collecte structurée",
      "Escalade vers un opérateur humain si nécessaire (avec transfert du contexte)",
    ],
    mechanism:
      "Chatbot à arbre de décision configurable + couche Agent IA optionnelle (Q&A). Chaque conversation crée automatiquement un ticket dans le dashboard Docaya avec statut, tags et historique.",
    examples:
      "Assurances (FAQ produits, prise de RDV), Immobilier (infos locataires), Hôtellerie (disponibilités, réservation), Éducation (orientation étudiants/parents), Transport aérien (infos bagages, horaires), Utilities (signalement, RDV), Banques (infos produits).",
    sectors: [
      "assurances",
      "immobilier",
      "hotellerie",
      "education",
      "transport-aerien",
      "utilities",
      "banques",
    ],
  },
  {
    slug: "recouvrement",
    familySlug: "encaissement-recouvrement",
    title: "Recouvrement Automatisé",
    tagline: "Récupérez vos paiements sans intervention manuelle",
    color: "orange",
    icon: "CreditCard",
    description:
      "Un programme de relances automatiques envoyées par WhatsApp pour récupérer les paiements en retard ou à échéance. Le mécanisme est identique quel que soit le type de créance : loyer, prime d'assurance, frais de scolarité, cotisation, facture, abonnement.",
    features: [
      "Programmes de relances paramétrables (nombre, fréquence, délais relatifs à l'échéance)",
      "Gestion d'échéanciers de paiement personnalisés",
      "Suivi des paiements partiels et des impayés",
      "Envoi automatique du lien de paiement intégré (Wave, OM, MTN, CB) dans le message de relance",
      "Rapports de recouvrement et tableaux de bord",
      "Application automatique de pénalités de retard (configurable)",
    ],
    mechanism:
      "Le moteur de notifications de Docaya déclenche les relances selon des règles configurées (date d'échéance, montant dû, statut de paiement). Le lien de paiement est généré automatiquement et intégré au message. Le statut de paiement se met à jour en temps réel sur le dashboard.",
    examples:
      "Immobilier (loyers), Assurances (primes/cotisations), Éducation (frais de scolarité), Banques (crédits), Mutuelles (cotisations), Utilities (factures), Hôtellerie (acomptes/no-show).",
    sectors: [
      "immobilier",
      "assurances",
      "education",
      "banques",
      "utilities",
      "hotellerie",
    ],
  },
  {
    slug: "notifications",
    familySlug: "engagement-fidelisation",
    title: "Notifications Sortantes",
    tagline: "Communiquez au bon moment sur le bon canal",
    color: "green",
    icon: "Bell",
    description:
      "L'envoi automatisé et programmé de messages WhatsApp (ou SMS, email) vers les clients de l'entreprise, déclenché par un événement ou une date. Notifications transactionnelles et campagnes marketing coexistent sur le même moteur.",
    features: [
      "Confirmations (paiement, réservation, souscription, commande, inscription)",
      "Rappels (échéance, rendez-vous, renouvellement, check-in)",
      "Alertes (changement de statut, retard, anomalie, coupure programmée)",
      "Envoi de documents (reçus, attestations, factures, quittances, cartes d'embarquement)",
      "Campagnes promotionnelles et offres spéciales",
      "Segmentation par tags de la base de contacts",
    ],
    mechanism:
      "Le moteur de notifications gère deux modes : transactionnel (déclenché par API ou règles internes) et campagnes (segmentation par tags). Les messages peuvent inclure des boutons d'action pour lancer un chatbot ou ouvrir un lien de paiement.",
    examples:
      "Applicable à tous les secteurs. Rappel de vol J-1 (aérien), confirmation de commande (retail/logistique), alerte coupure (utilities), rappel échéance (assurances/banques/immobilier), infos pré-arrivée (hôtellerie).",
    sectors: [
      "assurances",
      "banques",
      "education",
      "hotellerie",
      "transport-aerien",
      "utilities",
      "retail",
    ],
  },
  {
    slug: "vente-souscription",
    familySlug: "acquisition-conversion",
    title: "Vente & Souscription",
    tagline: "Vendez et encaissez directement sur WhatsApp",
    color: "purple",
    icon: "ShoppingBag",
    description:
      "Un tunnel de vente complet sur WhatsApp : le client découvre le produit, le sélectionne, reçoit un devis ou un prix, et paie — le tout dans une seule conversation. Applicable à la vente initiale, au renouvellement ou à l'upsell.",
    features: [
      "Présentation des produits/services disponibles dans la conversation",
      "Tarificateur automatisé (configuré dans Docaya ou via API externe)",
      "Génération de devis automatisés",
      "Gestion des promotions",
      "Paiement intégré via lien WhatsApp (Wave, OM, MTN, Moov, CB)",
      "Renouvellement de contrats ou abonnements",
      "Vente de services additionnels (upsell / cross-sell)",
    ],
    mechanism:
      "Le chatbot guide le client à travers un flow de sélection produit → configuration → devis → paiement. La plateforme gère le pipeline de vente avec des statuts (devis soumis, paiement en attente, validé). Le tarificateur peut être interne ou connecté à un système externe via API.",
    examples:
      "Assurances (souscription auto/vie, renouvellement), Retail (prise de commande), Éducation (inscription + paiement frais), Banques (ouverture compte, souscription produits), Hôtellerie (surclassement, services additionnels), Aérien (bagages supplémentaires, sièges premium).",
    sectors: [
      "assurances",
      "retail",
      "education",
      "banques",
      "hotellerie",
      "transport-aerien",
    ],
  },
  {
    slug: "incidents",
    familySlug: "service-decongestion",
    title: "Déclaration & Suivi d'Incidents",
    tagline: "Simplifiez la déclaration de problèmes",
    color: "red",
    icon: "AlertCircle",
    description:
      "Un parcours guidé sur WhatsApp permettant au client de déclarer un problème, fournir les pièces justificatives, et suivre la résolution. Le mécanisme est le même quel que soit le type d'incident : sinistre, panne, réclamation, défaut, litige.",
    features: [
      "Déclaration guidée par le chatbot (type de problème, circonstances, urgence)",
      "Collecte de pièces justificatives (photos, documents, reçus) directement dans la conversation",
      "Collecte de localisation GPS (si pertinent)",
      "Création automatique d'un ticket de suivi dans le dashboard",
      "Notifications de statut au client (à chaque étape de traitement)",
      "Escalade vers un opérateur humain si nécessaire",
    ],
    mechanism:
      "Le chatbot collecte les informations selon un arbre de décision configuré par type d'incident. Les pièces sont stockées dans le ticket. Le moteur de notifications informe le client de chaque changement de statut.",
    examples:
      "Assurances (sinistres auto : photo carte grise + localisation GPS), Immobilier (maintenance, fuites), Utilities (signalement pannes/fuites), Aérien (bagage perdu/endommagé), Hôtellerie (problème chambre).",
    sectors: [
      "assurances",
      "immobilier",
      "utilities",
      "transport-aerien",
      "hotellerie",
    ],
  },
  {
    slug: "workflows-metiers",
    familySlug: "encaissement-recouvrement",
    title: "Workflows Métiers Spécialisés",
    tagline: "Automatisez vos processus back-office",
    color: "indigo",
    icon: "Workflow",
    description:
      "L'automatisation de processus métiers spécifiques qui vont au-delà de la simple interaction client. Ce sont des chaînes d'actions déclenchées automatiquement dans le back-office.",
    features: [
      "Génération automatique de documents (contrats, attestations, quittances, reçus)",
      "Tunnel commande / paiement — flow complet : sélection → confirmation → paiement → livrable",
      "Rapprochement de paiements automatique (mobile money ou CB)",
      "Calculs et reversements (commissions, soldes nets) avec génération de rapports",
    ],
    mechanism:
      "Les workflows sont configurés comme des chaînes d'actions déclenchées par des événements (paiement reçu, document collecté, statut changé). Ils s'appuient sur l'architecture API-first de Docaya et peuvent interagir avec des systèmes externes (CRM, comptabilité, logiciels métiers).",
    examples:
      "Assurances (conditions particulières post-paiement), Immobilier (quittances + reversements propriétaires), Logistique (confirmation expédition), Éducation (attestation d'inscription post-paiement).",
    sectors: ["assurances", "immobilier", "education", "retail"],
  },
  {
    slug: "satisfaction-nps",
    familySlug: "engagement-fidelisation",
    title: "Enquête de Satisfaction (NPS)",
    tagline: "Mesurez et améliorez l'expérience client",
    color: "yellow",
    icon: "Star",
    description:
      "Un message WhatsApp envoyé automatiquement après un événement défini (paiement, résolution d'incident, livraison, interaction service client) demandant au client de noter son expérience sur une échelle de 0 à 10.",
    features: [
      "Envoi automatisé post-événement (configurable par type d'événement)",
      "Calcul automatique du Net Promoter Score (NPS) : Promoteurs (9-10), Passifs (7-8), Détracteurs (0-6)",
      "Collecte de feedback qualitatif en complément du score",
      "Rapports et tableaux de bord de satisfaction",
      "Segmentation des répondants pour actions correctives ciblées",
    ],
    mechanism:
      "Le moteur de notifications envoie le questionnaire selon des règles définies. La réponse (un chiffre) est captée par le chatbot et alimente le dashboard. C'est la même brique technique que les notifications sortantes, avec un flow de collecte en retour.",
    examples:
      "Applicable à tous les secteurs. Même mécanisme partout : seul l'événement déclencheur change (paiement de loyer, résolution sinistre, livraison, check-out hôtel, fin d'appel service client).",
    sectors: [
      "assurances",
      "banques",
      "education",
      "hotellerie",
      "transport-aerien",
      "utilities",
      "retail",
      "immobilier",
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getSolutionsByFamily(familySlug: string): Solution[] {
  return solutions.filter((s) => s.familySlug === familySlug);
}
