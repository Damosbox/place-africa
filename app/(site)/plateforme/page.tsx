import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Bell,
  ShoppingBag,
  AlertCircle,
  Workflow,
  Star,
  ArrowRight,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { BriqueDetail } from "@/components/sections/platform/BriqueDetail";
import { briques, integrations } from "@/lib/content/platform";
import { solutions } from "@/lib/content/solutions";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Plateforme & Solutions",
  description:
    "DOCAYA transforme WhatsApp en infrastructure métier — 5 briques technologiques et 7 solutions modulaires activables indépendamment. Tous secteurs.",
};

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={24} />,
  CreditCard: <CreditCard size={24} />,
  Bell: <Bell size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  AlertCircle: <AlertCircle size={24} />,
  Workflow: <Workflow size={24} />,
  Star: <Star size={24} />,
};

const colorVariants: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: { bg: "bg-blue-50/50", text: "text-blue-600", border: "border-blue-100", iconBg: "bg-blue-100" },
  orange: { bg: "bg-orange-50/50", text: "text-orange-600", border: "border-orange-100", iconBg: "bg-orange-100" },
  green: { bg: "bg-emerald-50/50", text: "text-emerald-600", border: "border-emerald-100", iconBg: "bg-emerald-100" },
  purple: { bg: "bg-purple-50/50", text: "text-purple-600", border: "border-purple-100", iconBg: "bg-purple-100" },
  red: { bg: "bg-red-50/50", text: "text-red-600", border: "border-red-100", iconBg: "bg-red-100" },
  indigo: { bg: "bg-indigo-50/50", text: "text-indigo-600", border: "border-indigo-100", iconBg: "bg-indigo-100" },
  yellow: { bg: "bg-amber-50/50", text: "text-amber-600", border: "border-amber-100", iconBg: "bg-amber-100" },
};

export default function PlatformePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Plateforme & Solutions
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Une plateforme,<br />7 solutions modulaires
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            5 briques fondamentales. 7 solutions métiers activables
            indépendamment. Activez uniquement ce dont vous avez besoin.
          </p>
        </div>
      </section>

      {/* Navigation anchors */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-neutral-200 overflow-x-auto">
        <div className="container-site">
          <div className="flex items-center gap-1 py-3">
            <a
              href="#briques"
              className="px-3 py-2 rounded-lg text-sm text-neutral-600 hover:text-brand hover:bg-brand-subtle transition-colors whitespace-nowrap font-medium"
            >
              Briques techniques
            </a>
            <a
              href="#solutions"
              className="px-3 py-2 rounded-lg text-sm text-neutral-600 hover:text-brand hover:bg-brand-subtle transition-colors whitespace-nowrap font-medium"
            >
              Solutions
            </a>
            <a
              href="#integrations"
              className="px-3 py-2 rounded-lg text-sm text-neutral-600 hover:text-brand hover:bg-brand-subtle transition-colors whitespace-nowrap font-medium"
            >
              Intégrations
            </a>
          </div>
        </div>
      </div>

      {/* Briques */}
      <section id="briques" className="py-12 scroll-mt-32">
        <div className="container-site">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Architecture technique</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              5 briques fondamentales
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Les fondations technologiques de la plateforme Docaya.
            </p>
          </div>
          {briques.map((brique, i) => (
            <BriqueDetail key={brique.id} brique={brique} index={i} />
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-padding bg-white scroll-mt-32">
        <div className="container-site">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Offres modulaires</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              7 solutions, 1 seule plateforme
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Chaque solution est activable indépendamment. Commencez par ce
              dont vous avez besoin, ajoutez le reste au fil du temps.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const colors = colorVariants[solution.color] || colorVariants.blue;
              return (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                  <div className={`h-full rounded-2xl p-8 border ${colors.border} ${colors.bg} hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center shrink-0`}>
                        {iconMap[solution.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-neutral-900 mb-1">
                          {solution.title}
                        </h3>
                        <p className={`text-sm font-medium ${colors.text} mb-3`}>
                          {solution.tagline}
                        </p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                          {solution.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {solution.features.slice(0, 4).map((f) => (
                            <span
                              key={f}
                              className="text-xs bg-white border border-neutral-200 rounded-full px-3 py-1 text-neutral-700"
                            >
                              {f}
                            </span>
                          ))}
                          {solution.features.length > 4 && (
                            <span className="text-xs bg-white border border-neutral-200 rounded-full px-3 py-1 text-neutral-500">
                              +{solution.features.length - 4} autres
                            </span>
                          )}
                        </div>
                        <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}>
                          En savoir plus
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="text-center text-2xl font-bold text-brand max-w-3xl mx-auto leading-relaxed mt-16">
            &ldquo;Ce qui change d&apos;un secteur à l&apos;autre, ce n&apos;est pas la
            technologie — c&apos;est la configuration.&rdquo;
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="section-padding bg-neutral-50 scroll-mt-32">
        <div className="container-site">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Intégrations</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Architecture API-first
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Connectez Docaya à vos outils existants : CRM, ERP, logiciels
              métiers via API ou exports/imports.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((intg) => (
              <div
                key={intg.name}
                className="bg-white border border-neutral-200 rounded-xl px-5 py-3 flex flex-col items-center gap-1 shadow-card"
              >
                <span className="font-semibold text-neutral-800 text-sm">
                  {intg.name}
                </span>
                <span className="text-xs text-neutral-500">{intg.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Prêt à déployer Docaya ?
          </h2>
          <p className="text-neutral-600 mb-8 text-lg">
            Demandez une démo personnalisée adaptée à votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Demander une démo
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/secteurs">
              <Button variant="outline" size="lg">
                Voir les secteurs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
