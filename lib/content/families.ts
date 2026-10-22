import type { SolutionFamily } from "@/lib/types/content";

export const families: SolutionFamily[] = [
  {
    slug: "acquisition-conversion",
    title: "Acquisition & conversion",
    tagline: "Transformer les conversations en ventes",
    color: "purple",
    icon: "TrendingUp",
    flow: "both",
    description:
      "De la première question au paiement, sans intervention humaine sur les étapes simples. Le prospect est qualifié, accompagné, et son contrat généré automatiquement une fois le paiement reçu.",
    outcomes: [
      "Plus de prospects convertis en clients",
      "Coût d'acquisition réduit grâce à l'automatisation",
      "Délai entre le premier contact et le paiement raccourci",
      "Ventes additionnelles proposées au bon moment",
    ],
    subSolutions: ["vente-souscription"],
    sectors: [
      "assurances",
      "banques",
      "protection-sociale",
      "education",
      "hotellerie",
      "retail",
      "transport-aerien",
    ],
  },
  {
    slug: "service-decongestion",
    title: "Service & décongestion",
    tagline: "Répondre à plus de clients sans agrandir vos équipes",
    color: "blue",
    icon: "Headphones",
    flow: "inbound",
    description:
      "Les questions courantes trouvent leur réponse immédiatement, à toute heure. Les demandes complexes arrivent au bon agent avec le dossier complet. Vos équipes traitent plus de cas sans être plus nombreuses.",
    outcomes: [
      "40 à 70% des demandes simples traitées automatiquement",
      "Plus de 7 clients sur 10 obtiennent une réponse dès le premier contact",
      "Satisfaction client en hausse",
      "Temps de traitement moyen réduit",
    ],
    subSolutions: ["agent-accueil", "incidents"],
    sectors: [
      "assurances",
      "banques",
      "protection-sociale",
      "hotellerie",
      "immobilier",
      "transport-aerien",
      "utilities",
      "service-public",
    ],
  },
  {
    slug: "encaissement-recouvrement",
    title: "Encaissement & recouvrement",
    tagline: "Encaisser plus vite, sans courir après vos clients",
    color: "orange",
    icon: "Wallet",
    flow: "outbound",
    description:
      "Les relances partent seules, à la bonne date, avec le moyen de payer dedans. Les paiements partiels sont suivis, la réconciliation est automatique, les impayés visibles en temps réel.",
    outcomes: [
      "Taux de recouvrement en hausse",
      "Délai moyen de paiement réduit",
      "Coût des relances quasi nul",
      "Visibilité complète sur les impayés en temps réel",
    ],
    subSolutions: ["recouvrement", "workflows-metiers"],
    sectors: [
      "assurances",
      "banques",
      "protection-sociale",
      "education",
      "immobilier",
      "utilities",
    ],
  },
  {
    slug: "engagement-fidelisation",
    title: "Engagement & fidélisation",
    tagline: "Garder le contact et faire revenir vos clients",
    color: "green",
    icon: "Heart",
    flow: "outbound",
    description:
      "Vous restez présent au bon moment, sans être intrusif : une information utile, une offre pour ceux qui ne sont pas revenus, une question simple pour mesurer la satisfaction.",
    outcomes: [
      "Satisfaction client mesurée en continu",
      "Taux de fidélisation en hausse",
      "Clients inactifs réactivés",
      "Lien maintenu entre les achats",
    ],
    subSolutions: ["notifications", "satisfaction-nps"],
    sectors: [
      "assurances",
      "banques",
      "protection-sociale",
      "education",
      "hotellerie",
      "immobilier",
      "retail",
      "transport-aerien",
      "utilities",
    ],
  },
];

export function getFamilyBySlug(slug: string): SolutionFamily | undefined {
  return families.find((f) => f.slug === slug);
}
