import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { PricingCalculator } from "@/components/sections/tarifs/PricingCalculator";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Estimez votre budget Docaya en temps réel. Configurez vos modules, volume de messages et nombre d'utilisateurs avec notre calculateur interactif.",
};

const modules = [
  "Agent d'Accueil & Orientation",
  "Recouvrement Automatisé",
  "Notifications Sortantes",
  "Vente & Souscription",
  "Déclaration & Suivi d'Incidents",
  "Workflows Métiers Spécialisés",
  "Enquête de Satisfaction (NPS)",
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
    a: "Docaya est tarifé selon les modules activés, le volume mensuel de messages envoyés et le nombre d'utilisateurs. Chaque configuration est unique.",
  },
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Nous proposons des contrats à partir de 3 mois. Un abonnement annuel offre des conditions préférentielles.",
  },
  {
    q: "Les frais Meta WhatsApp sont-ils inclus ?",
    a: "Les frais de conversation WhatsApp Business (Meta) sont facturés séparément selon les tarifs Meta en vigueur.",
  },
  {
    q: "Puis-je activer un seul module ?",
    a: "Oui, chaque brique est activable indépendamment. Vous pouvez démarrer avec un seul module et en ajouter d'autres ultérieurement.",
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

      {/* Modules grid */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Modules */}
            <div>
              <SectionTag className="mb-6">Modules</SectionTag>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Activez uniquement ce dont vous avez besoin
              </h2>
              <p className="text-neutral-600 mb-8">
                Chaque module a un tarif indépendant. Combinez-les selon vos
                processus métiers.
              </p>
              <ul className="space-y-3">
                {modules.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 bg-neutral-50"
                  >
                    <CheckCircle2 size={18} className="text-brand shrink-0" />
                    <span className="text-neutral-800 font-medium text-sm">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included */}
            <div>
              <SectionTag className="mb-6">Inclus dans tous les plans</SectionTag>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Toujours compris
              </h2>
              <p className="text-neutral-600 mb-8">
                Quel que soit votre abonnement, ces éléments sont inclus sans
                coût supplémentaire.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
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
