import type { Metadata } from "next";
import Link from "next/link";
import { SectionTag } from "@/components/ui/SectionTag";
import { BriqueDetail } from "@/components/sections/platform/BriqueDetail";
import { briques, integrations } from "@/lib/content/platform";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Plateforme",
  description:
    "Découvrez les 5 briques techniques de Docaya : WhatsApp Business API, Chatbots, Agents IA, Notifications et Paiement intégré.",
};

export default function PlatformePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Architecture technique
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            La plateforme Docaya
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            5 briques fondamentales, une architecture modulaire. Activez
            uniquement ce dont vous avez besoin.
          </p>
        </div>
      </section>

      {/* Navigation anchors */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-neutral-200 overflow-x-auto">
        <div className="container-site">
          <div className="flex items-center gap-1 py-3">
            {briques.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="px-3 py-2 rounded-lg text-sm text-neutral-600 hover:text-brand hover:bg-brand-subtle transition-colors whitespace-nowrap font-medium"
              >
                {b.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Briques */}
      <section className="py-12">
        <div className="container-site">
          {briques.map((brique, i) => (
            <BriqueDetail key={brique.id} brique={brique} index={i} />
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-neutral-50">
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
            <Link href="/solutions">
              <Button variant="outline" size="lg">
                Voir les solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
