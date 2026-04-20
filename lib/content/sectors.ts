import type { Sector } from "@/lib/types/content";

export const sectors: Sector[] = [
  {
    slug: "assurances",
    title: "Assurances",
    icon: "Shield",
    description:
      "Automatisez la souscription, le recouvrement de primes et la gestion des sinistres.",
    solutions: [
      "agent-accueil",
      "recouvrement",
      "vente-souscription",
      "incidents",
      "notifications",
    ],
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    icon: "Building2",
    description:
      "Gérez loyers, locataires et propriétaires avec des workflows automatisés.",
    solutions: [
      "recouvrement",
      "agent-accueil",
      "notifications",
      "incidents",
      "workflows-metiers",
    ],
  },
  {
    slug: "education",
    title: "Éducation",
    icon: "GraduationCap",
    description:
      "Automatisez les inscriptions, frais de scolarité et communications parents/étudiants.",
    solutions: [
      "recouvrement",
      "vente-souscription",
      "notifications",
      "workflows-metiers",
    ],
  },
  {
    slug: "banques",
    title: "Banques & Fintech",
    icon: "Landmark",
    description:
      "Informez vos clients, automatisez les relances et simplifiez la souscription.",
    solutions: [
      "agent-accueil",
      "notifications",
      "vente-souscription",
      "recouvrement",
    ],
    useCases: [
      "Ouverture de compte en ligne via WhatsApp",
      "Souscription de produits bancaires (crédits, épargne)",
      "Relance automatique de remboursements",
      "Infos produits et FAQ clients",
      "Notifications de transactions et alertes solde",
    ],
  },
  {
    slug: "hotellerie",
    title: "Hôtellerie",
    icon: "Hotel",
    description:
      "Optimisez réservations, check-in et satisfaction client via WhatsApp.",
    solutions: [
      "agent-accueil",
      "recouvrement",
      "notifications",
      "satisfaction-nps",
    ],
  },
  {
    slug: "transport-aerien",
    title: "Transport Aérien",
    icon: "Plane",
    description:
      "Envoyez rappels de vol, gérez bagages perdus et réclamations en temps réel.",
    solutions: [
      "notifications",
      "agent-accueil",
      "incidents",
      "satisfaction-nps",
    ],
  },
  {
    slug: "utilities",
    title: "Utilities",
    icon: "Zap",
    description:
      "Gérez signalements de pannes, relances et communications clients massivement.",
    solutions: [
      "notifications",
      "incidents",
      "recouvrement",
      "agent-accueil",
    ],
  },
  {
    slug: "retail",
    title: "Retail & Distribution",
    icon: "ShoppingCart",
    description:
      "Prenez des commandes, gérez stocks et paiements directement sur WhatsApp.",
    solutions: [
      "vente-souscription",
      "notifications",
      "workflows-metiers",
      "satisfaction-nps",
    ],
  },
  {
    slug: "service-public",
    title: "Service public & collectivités",
    icon: "Landmark",
    description:
      "Dématérialisez les démarches, informez les citoyens et centralisez les demandes via WhatsApp et multicanal.",
    solutions: [
      "agent-accueil",
      "notifications",
      "incidents",
      "workflows-metiers",
    ],
    useCases: [
      "Demande d'acte d'état civil par WhatsApp",
      "Notifications d'interruption de service",
      "Signalement voirie / propreté avec géolocalisation",
      "Prise de rendez-vous avec les services municipaux",
      "Relais d'information citoyenne massif",
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
