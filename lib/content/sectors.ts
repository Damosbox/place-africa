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
    useCases: [
      "Souscription auto sur WhatsApp : carte grise → devis → paiement en moins de 5 minutes",
      "Recouvrement des primes à l'échéance avec lien de paiement intégré dans chaque relance",
      "Génération automatique des conditions particulières dès validation du paiement",
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
    useCases: [
      "Relances automatiques des loyers impayés avec lien de paiement Wave / Orange Money",
      "Génération automatique des quittances de loyer et reversements aux propriétaires",
      "Gestion des signalements de maintenance : collecte photo, suivi de résolution",
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
    useCases: [
      "Inscription et paiement des frais sur WhatsApp — sans déplacement ni file d'attente",
      "Relances des frais impayés avec gestion d'échéanciers personnalisés",
      "Génération automatique des attestations d'inscription dès paiement confirmé",
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
      "Pré-enrôlement et collecte documentaire pour l'ouverture de compte via WhatsApp",
      "Relances de remboursement de crédits avec lien de paiement et suivi des versements partiels",
      "FAQ produits et orientation 24h/24 sans mobiliser vos conseillers",
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
    useCases: [
      "Pré-arrivée automatisée : check-in, services disponibles, ventes additionnelles (surclassement, repas)",
      "NPS automatique post-check-out avec alerte immédiate sur scores ≤ 6",
      "Relances d'acomptes et gestion des no-shows avec lien de paiement intégré",
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
    useCases: [
      "Rappel de vol J-1 : informations bagages, porte d'embarquement, instructions check-in",
      "Vente additionnelle (bagage, siège premium) directement sur WhatsApp",
      "Déclaration guidée de bagages perdus avec collecte de preuves photo",
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
    useCases: [
      "Alertes automatiques de coupure programmée personnalisées par zone géographique",
      "Relances des factures impayées avec lien de paiement mobile money intégré",
      "Signalement de pannes guidé par chatbot avec collecte de localisation GPS",
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
    useCases: [
      "Prise de commande revendeurs sur WhatsApp : catalogue, stocks en temps réel, paiement intégré",
      "Campagnes promotionnelles ciblées par segment — taux d'ouverture >90%",
      "NPS post-livraison avec traitement proactif des détracteurs pour maximiser le réachat",
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
