import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { PricingCalculator } from "@/components/sections/tarifs/PricingCalculator";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Estimez votre budget Docaya en temps réel. Configurez vos modules, volume de messages et nombre d'utilisateurs avec notre calculateur interactif.",
};

const pricingBlocks = [
  {
    title: "Plateforme",
    description: "Abonnement mensuel selon le nombre d'utilisateurs actifs.",
    items: [
      "< 5 000 utilisateurs — 38 000 FCFA / mois",
      "< 10 000 utilisateurs — 60 000 FCFA / mois",
      "< 20 000 utilisateurs — 95 000 FCFA / mois",
      "< 50 000 utilisateurs — 170 000 FCFA / mois",
      "< 100 000 utilisateurs — 335 000 FCFA / mois",
    ],
  },
  {
    title: "WhatsApp Business",
    description: "Facturation par fenêtre de 24h, indépendamment du nombre de messages échangés.",
    items: [
      "Conversations entrantes — 15 FCFA / fenêtre 24h",
      "Notifications sortantes — 30 FCFA / fenêtre 24h",
    ],
  },
  {
    title: "SMS",
    description: "Tarif dégressif selon le volume mensuel et l'opérateur.",
    items: [
      "Orange — 12 → 9 FCFA / SMS (1k → 50k)",
      "MTN — 17 → 12 FCFA / SMS (1k → 50k)",
      "Moov — 17 → 12 FCFA / SMS (1k → 50k)",
    ],
  },
  {
    title: "Configuration (one-time)",
    description: "Frais de mise en place des flows conversationnels sur mesure.",
    items: [
      "Flow basique — 500 000 FCFA",
      "Flow medium — 1 000 000 FCFA",
      "Flow complexe — 2 000 000 FCFA",
    ],
  },
];

const included = [
  "Onboarding et formation inclus",
  "Support technique dédié",
  "Dashboard et analytics inclus",
  "Intégrations API disponibles",
  "Numéro WhatsApp Business dédié",
  "Mises à jour régulières incluses",
];

const faqs = [
  {
    q: "Comment fonctionne la tarification ?",
    a: "L'abonnement plateforme est basé sur le nombre d'utilisateurs actifs. S'y ajoutent les coûts d'usage : conversations WhatsApp (15 FCFA entrant / 30 FCFA sortant par fenêtre 24h) et SMS selon le volume et l'opérateur.",
  },
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Nous proposons des contrats à partir de 3 mois. Un abonnement annuel offre des conditions préférentielles.",
  },
  {
    q: "Les frais Meta WhatsApp sont-ils inclus ?",
    a: "Les 15 FCFA / 30 FCFA couvrent les frais Docaya. Les frais de conversation Meta WhatsApp Business sont facturés séparément selon les tarifs Meta en vigueur.",
  },
  {
    q: "Qu'est-ce qu'un flow de configuration ?",
    a: "Un flow est un parcours conversationnel sur mesure (chatbot, agent IA, formulaire). Basique = flux simple, Medium = logique conditionnelle, Complexe = intégration API externe ou tarificateur avancé.",
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Tarification
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Une tarification<br />adaptée à votre usage
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Pas de forfait rigide. Configurez votre abonnement avec notre
            estimateur interactif — modules, messages, utilisateurs.
          </p>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <PricingCalculator />

      {/* Grille tarifaire */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Grille tarifaire</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900">
              Tous les tarifs en détail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {pricingBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50"
              >
                <h3 className="font-bold text-neutral-900 mb-1">{block.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{block.description}</p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-brand-accent shrink-0" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="bg-neutral-950 rounded-3xl p-8 md:p-12">
            <SectionTag className="mb-4 bg-white/10 text-white">Inclus dans tous les plans</SectionTag>
            <h2 className="text-2xl font-bold text-white mb-8">Toujours compris</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">FAQ</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card"
              >
                <h3 className="font-bold text-neutral-900 mb-3">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
