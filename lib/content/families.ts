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
      "Captez les leads depuis vos canaux digitaux (Meta, site, WhatsApp), qualifiez-les automatiquement et accompagnez-les jusqu'au paiement dans une seule conversation. Applicable à la vente initiale, au renouvellement et à l'upsell.",
    outcomes: [
      "Taux de conversion lead → client",
      "CAC réduit grâce à l'automatisation",
      "Délai devis → paiement raccourci",
      "Upsell et cross-sell contextualisés",
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
    tagline: "Désaturer le service client sans perdre en qualité",
    color: "blue",
    icon: "Headphones",
    flow: "inbound",
    description:
      "Absorbez les demandes entrantes massives sans agrandir vos équipes. Les agents IA traitent les cas simples, les workflows orientent les cas complexes, le guichet unifié donne aux agents le contexte complet.",
    outcomes: [
      "Taux de déflection IA 40-70%",
      "First Contact Resolution amélioré",
      "CSAT et NPS en hausse",
      "Réduction du temps de traitement moyen",
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
    tagline: "Recouvrer plus vite, sans friction",
    color: "orange",
    icon: "Wallet",
    flow: "outbound",
    description:
      "Automatisez les relances de paiement et proposez un paiement en un clic dans le message. Mobile money et carte bancaire pris en charge, rapprochement automatique, pénalités configurables.",
    outcomes: [
      "Taux de recouvrement amélioré",
      "DSO réduit",
      "Coût de relance quasi-nul",
      "Transparence totale sur les encours",
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
    tagline: "Construire une relation durable",
    color: "green",
    icon: "Heart",
    flow: "outbound",
    description:
      "Gardez le contact au bon moment, sur le bon canal. Notifications transactionnelles qui renforcent la confiance, campagnes segmentées qui réactivent les clients, enquêtes NPS qui détectent les irritants avant qu'ils ne deviennent du churn.",
    outcomes: [
      "NPS mesuré en continu",
      "Taux de rétention en hausse",
      "Réactivation clients dormants",
      "Engagement multicanal",
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
