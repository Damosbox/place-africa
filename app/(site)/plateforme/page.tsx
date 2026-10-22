import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Inbox,
  Send,
  Layers,
  Plug,
  BarChart3,
  Workflow,
  ScanFace,
  ShieldCheck,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { capacities } from "@/lib/content/capacities";
import { families } from "@/lib/content/families";
import { getIcon, colorVariants } from "@/lib/utils/icons";

export const metadata: Metadata = {
  title: "Plateforme",
  description:
    "Place Fuse prend en charge ce que vos clients vous envoient, ce que vous leur envoyez — et les procédures qui se déclenchent entre les deux.",
};

const inbound = capacities.filter((c) => c.flow === "inbound" || c.flow === "both");
const outbound = capacities.filter((c) => c.flow === "outbound" || c.flow === "both");

/** §2.3 — sous-pages nommées par ce qu'elles apportent, pas par leur volume. */
const plateformeHighlights = [
  {
    href: "/plateforme/capacites",
    icon: <Layers size={22} />,
    title: "Tout ce dont vous avez besoin, dans un seul outil",
    description:
      "Messagerie, assistant IA, scénarios automatisés, suivi des demandes, paiement, tableaux de bord.",
  },
  {
    href: "/plateforme/integrations",
    icon: <Plug size={22} />,
    title: "Ça se branche sur ce que vous utilisez déjà",
    description:
      "Votre CRM, votre ERP, votre comptabilité, les opérateurs mobile money et WhatsApp Business.",
  },
  {
    href: "/plateforme/analytique-pilotage",
    icon: <BarChart3 size={22} />,
    title: "Vous voyez ce qui marche, en temps réel",
    description:
      "Demandes traitées, montants encaissés, dossiers bloqués — sur un seul écran.",
  },
  {
    href: "/plateforme/conformite",
    icon: <ScanFace size={22} />,
    title: "Vérification d'identité et conformité",
    description:
      "Le contrôle se fait dans la conversation, et la preuve reste attachée au dossier.",
  },
  {
    href: "/plateforme/securite",
    icon: <ShieldCheck size={22} />,
    title: "Sécurité et protection des données",
    description:
      "Hébergement, traçabilité, continuité réseau, consentement : vos données restent les vôtres.",
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
            Une plateforme, pas un outil de plus
          </h1>
          <p className="text-white/75 text-xl max-w-3xl">
            Place Fuse prend en charge ce que vos clients vous envoient, ce que vous leur
            envoyez — et les procédures qui se déclenchent entre les deux.
          </p>
        </div>
      </section>

      {/* §2.2 — les trois niveaux */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <SectionTag className="mb-4">Les trois niveaux</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ce qui entre, ce qui sort, et ce qui se passe entre les deux
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Inbound */}
            <div className="rounded-2xl bg-blue-50/40 border border-blue-100 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Inbox size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-0.5">
                    Niveau 1
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900">Ce que vos clients vous demandent</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-5 text-sm">
                Questions, réclamations, souscriptions, documents à fournir. L&apos;assistant
                traite ce qui peut l&apos;être et transmet le reste au bon agent, dossier
                complet en main.
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
                Voir toutes les fonctionnalités <ArrowRight size={14} />
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
                    Niveau 2
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900">Ce que vous envoyez à vos clients</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-5 text-sm">
                Confirmations, rappels d&apos;échéance, relances, alertes, campagnes. Chaque
                message part au bon moment, avec l&apos;action possible dedans : payer,
                confirmer, joindre un document.
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
                Voir toutes les fonctionnalités <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Niveau 3 — c'est là que se joue l'essentiel */}
          <div className="rounded-2xl bg-neutral-900 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 text-brand-accent flex items-center justify-center">
                <Workflow size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-0.5">
                  Niveau 3
                </p>
                <h3 className="text-xl font-bold text-white">
                  Ce qui se passe entre les deux — vos processus métier
                </h3>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-3xl mb-6">
              <span className="text-white font-semibold">
                C&apos;est là que se joue l&apos;essentiel.
              </span>{" "}
              Un paiement reçu déclenche la génération d&apos;un document. Un dossier
              complet part en validation. Une pièce manquante déclenche une relance. Un
              cas urgent remonte à un superviseur. Ces enchaînements se configurent une
              fois et tournent seuls.
            </p>
            <Link
              href="/solutions/encaissement-recouvrement"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all"
            >
              Voir un enchaînement complet <ArrowRight size={14} />
            </Link>
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
            Prêt à déployer Place Fuse ?
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
