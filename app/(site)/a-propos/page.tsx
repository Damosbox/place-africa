import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Target, Lightbulb, Users, ArrowRight, Zap, ShoppingBag, MessageCircle } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Place Africa est une startup éditrice d'applications mobiles pour digitaliser les petits commerçants africains, présente en Côte d'Ivoire et au Sénégal.",
};

const values = [
  {
    icon: <Target size={22} />,
    title: "Orienté résultats",
    description:
      "Chaque fonctionnalité existe pour améliorer la gestion quotidienne du commerçant : ventes, stocks, caisse, relation client.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Simplicité d'usage",
    description:
      "Des outils conçus pour être utilisés sans formation : simples, rapides, accessibles depuis un smartphone.",
  },
  {
    icon: <Users size={22} />,
    title: "Expertise locale",
    description:
      "Conçu par une équipe qui comprend les réalités et opportunités des marchés africains de proximité.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Ancré en Afrique",
    description:
      "Mobile money intégré, francophone, adapté aux marchés, boutiques, restaurants et tous commerces de proximité.",
  },
];

const timeline = [
  {
    year: "2021",
    event: "Création de Place Africa à Abidjan",
    desc: "Naissance du projet avec la mission de digitaliser les petits commerçants en Côte d'Ivoire.",
  },
  {
    year: "2022",
    event: "Lancement de l'application Point",
    desc: "Premier produit : solution de gestion POS pour TPE (restaurants, boutiques, salons...).",
  },
  {
    year: "2023",
    event: "Expansion au Sénégal",
    desc: "Déploiement de Point dans les marchés sénégalais. Plus d'un millier de commerçants actifs.",
  },
  {
    year: "2025",
    event: "Acquisition de Docaya",
    desc: "Place Africa rachète Docaya, plateforme conversationnelle B2B leader en Afrique de l'Ouest.",
  },
  {
    year: "2026",
    event: "Expansion Afrique de l'Ouest",
    desc: "Déploiements au Mali, Burkina Faso, Guinée — avec les deux produits du portefeuille.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <div className="max-w-3xl">
            <SectionTag className="mb-4 bg-white/10 text-white">
              À propos de Place Africa
            </SectionTag>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Né en Côte d&apos;Ivoire,<br />conçu pour l&apos;Afrique
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Place Africa est une startup éditrice d&apos;applications mobiles
              utiles à la vie quotidienne de tous les Africains. Notre mission :
              digitaliser les petits commerçants africains avec des outils
              simples, abordables et efficaces.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag className="mb-4">Notre mission</SectionTag>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Digitaliser tous les petits commerçants
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Nos produits et services sont spécifiquement adaptés aux très
                petites entreprises commerciales. Nous aidons les commerçants
                africains à mieux gérer leurs commandes, produits, caisse,
                stocks, dépenses, employés, clients — et leur reporting.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Par la même occasion, nous simplifions le processus d&apos;achat
                du consommateur.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-subtle rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand mb-1">2</div>
                  <div className="text-sm text-neutral-600">pays</div>
                </div>
                <div className="bg-brand-subtle rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand mb-1">+1 000</div>
                  <div className="text-sm text-neutral-600">commerçants</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-col">
              <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-8 w-full">
                <div className="text-lg font-bold text-neutral-900 mb-6">
                  Pour les commerçants
                </div>
                <ul className="space-y-3">
                  {[
                    "Gestion des commandes",
                    "Suivi des stocks",
                    "Caisse & encaissement",
                    "Gestion des employés",
                    "Fiche clients",
                    "Reporting & analyses",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-neutral-400" />
                <span className="text-sm text-neutral-500">Côte d&apos;Ivoire &amp; Sénégal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Valeurs</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900">
              Ce qui nous guide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card"
              >
                <div className="w-11 h-11 bg-brand-subtle rounded-xl flex items-center justify-center text-brand mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-3">{v.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Docaya */}
      <section id="docaya" className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-hero-gradient p-8 sm:p-12 text-white mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Zap size={20} className="text-brand-accent" />
                </div>
                <span className="text-xs font-semibold bg-brand-accent/20 text-brand-accent px-2.5 py-1 rounded-full">
                  Annonce 2025
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Place Africa a acquis Docaya
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                En 2025, Place Africa a racheté Docaya, la plateforme
                conversationnelle B2B leader en Afrique de l&apos;Ouest. Cette
                acquisition marque une étape majeure dans notre stratégie :
                offrir aux commerçants et entreprises africaines un écosystème
                complet, de la gestion quotidienne à la relation client
                automatisée.
              </p>
              <p className="text-white/70 leading-relaxed">
                Docaya permet aux entreprises d&apos;automatiser leurs interactions
                clients via WhatsApp Business API, avec des chatbots, des agents
                IA, et un paiement mobile intégré (Wave, Orange Money, MTN Momo).
              </p>
            </div>

            {/* Products summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-neutral-200 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <ShoppingBag size={20} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Point</h3>
                  <p className="text-sm text-neutral-500">
                    Gestion POS pour les TPE — commandes, stocks, caisse, employés.
                  </p>
                </div>
              </div>
              <div className="border border-brand/20 bg-brand-subtle rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Docaya</h3>
                  <p className="text-sm text-neutral-500">
                    Plateforme conversationnelle B2B — WhatsApp, Chatbots, IA, Paiement.
                  </p>
                  <Link
                    href="/plateforme"
                    className="text-xs text-brand font-medium mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Découvrir <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionTag className="mb-4">Histoire</SectionTag>
            <h2 className="text-3xl font-bold text-neutral-900">
              Notre parcours
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand/20" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-6">
                  <div className="w-12 h-12 bg-brand-subtle rounded-full border-4 border-white flex items-center justify-center shrink-0 z-10">
                    <span className="text-brand text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-brand text-xs font-bold mb-1">{item.year}</div>
                    <h3 className="font-bold text-neutral-900 mb-1">{item.event}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-subtle">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Digitalisons l&apos;Afrique ensemble
          </h2>
          <p className="text-neutral-600 mb-8 text-lg max-w-xl mx-auto">
            Vous êtes commerçant, partenaire ou investisseur ? Discutons de
            comment Place Africa peut vous accompagner.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Prendre contact
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
