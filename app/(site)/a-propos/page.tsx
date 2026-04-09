import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Target, Lightbulb, Users, ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Docaya est une plateforme conversationnelle B2B née en Côte d'Ivoire, conçue pour les entreprises d'Afrique de l'Ouest.",
};

const values = [
  {
    icon: <Target size={22} />,
    title: "Orienté résultats",
    description:
      "Chaque fonctionnalité existe pour améliorer un KPI mesurable : taux de recouvrement, conversion, satisfaction client.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Simplicité d'usage",
    description:
      "WhatsApp est déjà installé. Pas d'app supplémentaire pour vos clients — ils interagissent là où ils se trouvent.",
  },
  {
    icon: <Users size={22} />,
    title: "Expertise locale",
    description:
      "Conçu par une équipe qui comprend les contraintes et opportunités des marchés africains.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Ancré en Afrique",
    description:
      "Mobile money intégré (Wave, Orange Money, MTN Momo), SMS pour les zones hors réseau, support francophone.",
  },
];

const timeline = [
  {
    year: "2022",
    event: "Création de Docaya à Abidjan",
    desc: "Naissance du projet avec un premier client dans le secteur assurance auto.",
  },
  {
    year: "2023",
    event: "Lancement des modules Recouvrement et Notifications",
    desc: "Premiers déploiements dans l'immobilier et l'éducation.",
  },
  {
    year: "2024",
    event: "Intégration du paiement mobile",
    desc: "Wave, Orange Money, MTN Momo — paiement dans la conversation WhatsApp.",
  },
  {
    year: "2025",
    event: "Agents IA et NPS",
    desc: "Couche IA Q&A et enquêtes de satisfaction automatisées.",
  },
  {
    year: "2026",
    event: "Expansion Afrique de l'Ouest",
    desc: "Déploiements au Sénégal, Mali, Burkina Faso.",
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
              À propos de Docaya
            </SectionTag>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Né en Côte d'Ivoire,<br />conçu pour l'Afrique
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Docaya est une plateforme conversationnelle B2B qui permet aux
              entreprises africaines d'automatiser leurs interactions clients
              via WhatsApp. Notre mission : rendre accessible à toute
              organisation les bénéfices des conversations automatisées.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag className="mb-4">Notre vision</SectionTag>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                WhatsApp comme infrastructure métier
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                En Afrique de l'Ouest, WhatsApp n'est pas juste une messagerie —
                c'est l'outil de communication principal des entreprises et de
                leurs clients. Docaya transforme ce canal en véritable
                infrastructure de gestion client.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Avec un taux d'ouverture supérieur à 90% (contre 20% pour
                l'email), les messages WhatsApp atteignent les clients là où
                ils sont, quand ils en ont besoin.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center">
                  <MapPin size={22} className="text-brand" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Abidjan, Côte d'Ivoire</div>
                  <div className="text-neutral-500 text-sm">Siège et équipe de développement</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: ">90%", label: "Taux d'ouverture WhatsApp" },
                { value: "8", label: "Secteurs couverts" },
                { value: "7", label: "Modules activables" },
                { value: "5", label: "Moyens de paiement intégrés" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-subtle rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-brand mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
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
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card">
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

      {/* Timeline */}
      <section className="section-padding bg-white">
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
            Rejoignez l'aventure Docaya
          </h2>
          <p className="text-neutral-600 mb-8 text-lg max-w-xl mx-auto">
            Vous êtes une entreprise qui souhaite automatiser ses conversations
            clients ? Discutons ensemble.
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
