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
      "Captez vos prospects depuis WhatsApp, vos réseaux sociaux ou votre site. Docaya pose les bonnes questions, évalue leur intérêt et les accompagne jusqu'au paiement — dans une seule conversation, sans intervention manuelle pour les étapes simples.",
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
      "Vos clients vous contactent en grand nombre. L'assistant IA répond aux questions simples à toute heure. Les demandes complexes vont directement au bon agent, avec le contexte complet. Résultat : plus de demandes traitées, des clients moins frustrés.",
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
      "Envoyez des rappels de paiement automatiques avec un lien pour payer directement sur WhatsApp. Vos clients règlent en quelques secondes avec leur moyen de paiement habituel. Le rapprochement se fait tout seul.",
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
      "Restez présent dans la vie de vos clients au bon moment. Envoyez des notifications utiles qui renforcent la confiance, des offres ciblées qui font revenir les clients inactifs, et mesurez régulièrement leur satisfaction pour corriger ce qui pose problème.",
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
