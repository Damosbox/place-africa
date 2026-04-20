import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import {
  integrations,
  integrationCategories,
  getIntegrationsByCategory,
} from "@/lib/content/integrations";

export const metadata: Metadata = {
  title: "Intégrations",
  description:
    "Connectez DOCAYA à votre stack existante : CRM, ERP, paiement mobile, WhatsApp Business API, Meta, IA. Catalogue complet des intégrations natives.",
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/plateforme"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Plateforme
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">Intégrations</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Connectez DOCAYA à votre stack existante
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            CRM, ERP, paiement mobile, WhatsApp Business API, Meta, IA : {integrations.length} intégrations natives, plus une architecture API-first pour tout le reste.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          {integrationCategories.map((cat) => {
            const items = getIntegrationsByCategory(cat.slug);
            if (items.length === 0) return null;
            return (
              <div key={cat.slug} className="mb-12 last:mb-0">
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="text-xl font-bold text-neutral-900">{cat.label}</h2>
                  <span className="text-sm text-neutral-500">{items.length} intégration{items.length > 1 ? "s" : ""}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((i) => (
                    <div
                      key={i.slug}
                      className="bg-white rounded-xl border border-neutral-200 p-5 hover:shadow-card transition-all"
                    >
                      <h3 className="font-semibold text-neutral-900 mb-1.5">{i.name}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">{i.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Un outil métier non listé ?
          </h2>
          <p className="text-neutral-600 mb-6">
            L&apos;architecture API-first de DOCAYA permet de connecter n&apos;importe quel système via REST ou webhook. Échangez avec notre équipe pour étudier votre besoin.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Parler à un expert
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
