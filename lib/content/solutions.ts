import type { Solution } from "@/lib/types/content";

export const solutions: Solution[] = [
  {
    slug: "agent-accueil",
    title: "Agent d'Accueil & Orientation",
    tagline: "Répondez automatiquement à chaque sollicitation",
    color: "blue",
    icon: "MessageCircle",
    description:
      "Un chatbot ou agent IA qui répond automatiquement aux sollicitations entrantes sur WhatsApp. Il accueille le client, comprend sa demande, et l'oriente vers le bon service.",
    features: [
      "FAQ automatisée",
      "Orientation intelligente",
      "Prise de RDV automatisée",
      "Collecte de documents",
      "Formulaires mobiles",
      "Escalade vers un humain",
    ],
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
    title: "Recouvrement Automatisé",
    tagline: "Récupérez vos paiements sans intervention manuelle",
    color: "orange",
    icon: "CreditCard",
    description:
      "Programmes de relances automatiques envoyées par WhatsApp pour récupérer les paiements en retard ou à échéance.",
    features: [
      "Relances paramétrables",
      "Gestion d'échéanciers",
      "Suivi impayés",
      "Lien de paiement intégré",
      "Rapports de recouvrement",
      "Pénalités automatiques",
    ],
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
    title: "Notifications Sortantes",
    tagline: "Communiquez au bon moment sur le bon canal",
    color: "green",
    icon: "Bell",
    description:
      "Envoi automatisé et programmé de messages WhatsApp déclenchés par un événement ou une date.",
    features: [
      "Confirmations de paiement",
      "Rappels d'échéance",
      "Alertes de statut",
      "Envoi de documents",
      "Campagnes marketing",
      "Segmentation par tags",
    ],
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
    title: "Vente & Souscription",
    tagline: "Vendez et encaissez directement sur WhatsApp",
    color: "purple",
    icon: "ShoppingBag",
    description:
      "Un tunnel de vente complet sur WhatsApp : le client découvre le produit, sélectionne, reçoit un devis, et paie dans une seule conversation.",
    features: [
      "Présentation catalogue",
      "Tarificateur automatisé",
      "Génération de devis",
      "Gestion des promotions",
      "Paiement intégré",
      "Renouvellement de contrats",
    ],
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
    title: "Déclaration & Suivi d'Incidents",
    tagline: "Simplifiez la déclaration de problèmes",
    color: "red",
    icon: "AlertCircle",
    description:
      "Parcours guidé sur WhatsApp permettant au client de déclarer un problème, fournir des pièces justificatives, et suivre la résolution.",
    features: [
      "Déclaration guidée",
      "Collecte de photos/documents",
      "Localisation GPS",
      "Ticket automatique",
      "Notifications de statut",
      "Escalade humaine",
    ],
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
    title: "Workflows Métiers Spécialisés",
    tagline: "Automatisez vos processus back-office",
    color: "indigo",
    icon: "Workflow",
    description:
      "Automatisation de processus métiers spécifiques : chaînes d'actions déclenchées automatiquement dans le back-office.",
    features: [
      "Génération de documents",
      "Tunnel commande/paiement",
      "Rapprochement de paiements",
      "Calculs de commissions",
      "Reversements automatiques",
      "Rapports financiers",
    ],
    sectors: ["assurances", "immobilier", "education", "retail"],
  },
  {
    slug: "satisfaction-nps",
    title: "Enquête de Satisfaction (NPS)",
    tagline: "Mesurez et améliorez l'expérience client",
    color: "yellow",
    icon: "Star",
    description:
      "Message WhatsApp envoyé automatiquement après un événement défini, demandant au client de noter son expérience.",
    features: [
      "Envoi post-événement automatisé",
      "Calcul NPS automatique",
      "Feedback qualitatif",
      "Tableaux de bord satisfaction",
      "Segmentation des répondants",
    ],
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
