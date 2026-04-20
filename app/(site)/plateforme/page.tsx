import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Inbox, Send, Layers, Plug, BarChart3 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { capacities } from "@/lib/content/capacities";
import { families } from "@/lib/content/families";
import { getIcon, colorVariants } from "@/lib/utils/icons";

export const metadata: Metadata = {
  title: "Plateforme",
  description:
    "DOCAYA, la plateforme de guichet digital conversationnel et de marketing relationnel. Une couche unique pour orchestrer messagerie, automatisations et paiements — inbound et outbound.",
};

const inbound = capacities.filter((c) => c.flow === "inbound" || c.flow === "both");
const outbound = capacities.filter((c) => c.flow === "outbound" || c.flow === "both");

const plateformeHighlights = [
  {
    href: "/plateforme/capacites",
    icon: <Layers size={22} />,
    title: "11 capacités natives",
    description: "Messagerie multicanale, IA, workflows, ticketing, paiement, analytics…",
  },
  {
    href: "/plateforme/integrations",
    icon: <Plug size={22} />,
    title: "18+ intégrations",
    description: "CRM, ERP, mobile money, Meta, IA — plus une architecture API-first.",
  },
  {
    href: "/plateforme/analytique-pilotage",
    icon: <BarChart3 size={22} />,
    title: "Analytique & pilotage",
    description: "Dashboards temps réel, NPS, recouvrement, conversion — inbound et outbound.",
  },
];

export default function PlateformePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <SectionTag className="mb-4 bg-white/10 text-white">Plateforme</SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            La plateforme de guichet digital conversationnel et de marketing relationnel
          </h1>
          <p className="text-white/75 text-xl max-w-3xl">
            DOCAYA unifie votre guichet conversationnel entrant (inbound) et votre marketing relationnel sortant (outbound) sur une seule plateforme — WhatsApp, SMS, e-mail, voix, webchat.
          </p>
        </div>
      </section>

      {/* Inbound / Outbound split */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <SectionTag className="mb-4">Deux flux, une seule plateforme</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Inbound & Outbound réunis
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Tout ce qui entre (demandes clients, incidents, souscriptions) et tout ce qui sort (notifications, campagnes, relances) — sur une même couche.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inbound */}
            <div className="rounded-2xl bg-blue-50/40 border border-blue-100 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Inbox size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-0.5">
                    Inbound
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900">Guichet conversationnel</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-5 text-sm">
                Absorbez les demandes entrantes sur tous les canaux, qualifiez-les automatiquement, résolvez-les au premier contact.
              </p>
              <ul className="space-y-2 mb-6">
                {inbound.slice(0, 5).map((c) => (
                  <li key={c.slug} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/plateforme/capacites"
                className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all"
              >
                Voir toutes les capacités inbound <ArrowRight size={14} />
              </Link>
            </div>

            {/* Outbound */}
            <div className="rounded-2xl bg-orange-50/40 border border-orange-100 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                  <Send size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-700 mb-0.5">
                    Outbound
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900">Marketing relationnel</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-5 text-sm">
                Notifiez, relancez, engagez au bon moment sur le bon canal. Transactionnel et campagnes segmentées sur le même moteur.
              </p>
              <ul className="space-y-2 mb-6">
                {outbound.slice(0, 5).map((c) => (
                  <li key={c.slug} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/plateforme/capacites"
                className="inline-flex items-center gap-2 text-orange-700 font-semibold text-sm hover:gap-3 transition-all"
              >
                Voir toutes les capacités outbound <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Explorez la plateforme
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plateformeHighlights.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-hover hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-4">
                  {h.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{h.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  {h.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                  Explorer <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Families teaser */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <SectionTag className="mb-4">Solutions</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              4 familles de solutions orientées résultats
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              La plateforme s&apos;active par famille, selon votre priorité métier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {families.map((f) => {
              const colors = colorVariants[f.color] || colorVariants.blue;
              return (
                <Link
                  key={f.slug}
                  href={`/solutions/${f.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 p-5 hover:shadow-hover hover:-translate-y-0.5 transition-all"
                >
                  <div className={`w-11 h-11 ${colors.iconBg} ${colors.text} rounded-xl flex items-center justify-center mb-4`}>
                    {getIcon(f.icon, 22)}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">{f.title}</h3>
                  <p className={`text-xs font-medium ${colors.text} mb-3`}>{f.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-xs font-semibold group-hover:gap-2 transition-all">
                    Découvrir <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Prêt à déployer DOCAYA ?
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
