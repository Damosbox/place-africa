import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Network,
  Sparkles,
  ArrowRight,
  Zap,
  MessageCircle,
  Target,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Place Africa est une startup technologique qui développe des produits digitaux pour transformer les échanges commerciaux en Afrique de l'Ouest. Découvrez notre mission, nos valeurs et notre histoire.",
};

const windows = [
  {
    icon: Compass,
    title: "Conçus pour un marché différent",
    body: "La plupart des outils digitaux échouent en Afrique car ils sont mal adaptés à l'environnement africain. L'Afrique de l'Ouest n'est pas un marché instable — c'est un marché différent, avec ses propres logiques, ses propres forces, ses propres opportunités.\n\nConnexion intermittente, commerce de proximité, confiance construite par la conversation plutôt que par le contrat écrit. On ne contourne pas ces réalités. On construit pour elles.",
    anchor: "Nos produits fonctionnent là où les solutions classiques s'arrêtent.",
  },
  {
    icon: Network,
    title: "Structurer ce qui reste invisible",
    body: "Des millions de transactions en Afrique se font chaque jour sans laisser de trace. Pas de donnée, pas de fidélisation clients, pas de pont entre ce qu'une entreprise offre et ce qu'un consommateur cherche.\n\nCe vide n'est pas une fatalité — c'est une architecture à construire. Celle qui connecte les entreprises à leurs clients, les services à ceux qui en ont besoin, les opportunités à ceux qui peuvent les saisir.",
    anchor: "Notre mission : être cette architecture.",
  },
  {
    icon: Sparkles,
    title: "L'IA comme moteur, pas comme option",
    body: "La plupart des solutions digitales ont numérisé des processus existants — des formulaires en ligne, des agences virtuelles, des procédures copiées du monde physique. On a fait le choix inverse.\n\nNos outils intègrent l'intelligence artificielle nativement. Pas pour suivre une tendance — parce que c'est la seule façon de rendre des services complexes réellement accessibles : en langage naturel, sans formation, sur les canaux que les Africains utilisent déjà.",
    anchor: "L'IA n'est pas notre futur. C'est ce que nos produits font aujourd'hui.",
  },
];

const values = [
  {
    icon: <Target size={22} />,
    title: "Le terrain d'abord.",
    description:
      "On n'a jamais lancé un produit sans avoir regardé comment un commerçant d'Adjamé travaille vraiment. Le terrain précède toujours la technologie.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Ça marche ou ça ne compte pas.",
    description:
      "Pas de démo convaincante sans usage réel. On mesure ce qui change dans le quotidien de nos clients, pas ce qui impressionne dans une présentation.",
  },
  {
    icon: <Radio size={22} />,
    title: "Conçu pour durer sans signal.",
    description:
      "Nos produits fonctionnent là où le wifi s'arrête. Ce n'est pas une contrainte qu'on subit — c'est un cahier des charges qu'on a choisi.",
  },
];

const timeline = [
  {
    year: "2021",
    event: "Création de Place Africa à Abidjan",
    desc: "Naissance du projet avec la mission de structurer les échanges entre entreprises et consommateurs en Afrique de l'Ouest.",
  },
  {
    year: "Mars 2026",
    event: "Acquisition de DOCAYA",
    desc: "Place Africa acquiert la plateforme conversationnelle B2B DOCAYA, marquant l'entrée dans les services financiers automatisés et l'expansion vers les entreprises de toute taille.",
  },
  {
    year: "2026",
    event: "Expansion Afrique de l'Ouest",
    desc: "Déploiements au Mali, Burkina Faso, Guinée — avec DOCAYA comme socle technologique.",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nous construisons le digital pour ceux qui font tourner l&apos;Afrique.
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              Nous structurons les échanges entre entreprises et consommateurs
              en Afrique de l&apos;Ouest. Pas avec des outils importés — avec des
              produits conçus ici, pour ici, où l&apos;intelligence artificielle
              est le moteur et non l&apos;option.
            </p>
          </div>
        </div>
      </section>

      {/* Mission — 3 fenêtres */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <SectionTag className="mb-4">Ce que nous croyons</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              Trois convictions qui guident tout ce que nous construisons.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {windows.map((w) => (
              <div
                key={w.title}
                className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 hover:border-neutral-300 hover:bg-white transition-all h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-900 flex items-center justify-center">
                  <w.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  {w.title}
                </h3>
                <div className="flex flex-col gap-4 text-neutral-600 text-sm leading-relaxed">
                  {w.body.split("\n\n").map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-neutral-200">
                  <p className="text-sm font-semibold text-brand-accent leading-snug">
                    → {w.anchor}
                  </p>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-card"
              >
                <div className="w-11 h-11 bg-brand-subtle rounded-xl flex items-center justify-center text-brand mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-3 text-lg">{v.title}</h3>
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
                  Annonce 2026
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Place Africa a acquis Docaya
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                En 2026, Place Africa a acquis DOCAYA — la plateforme
                conversationnelle B2B qui transforme WhatsApp en infrastructure
                métier pour les entreprises africaines.
              </p>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                DOCAYA ne s&apos;adresse pas à un seul secteur. Elle
                s&apos;adresse à toute organisation qui a des clients à servir,
                des paiements à encaisser, et des processus à automatiser —
                assurances, banques, immobilier, éducation, logistique, retail,
                mutuelles, et bien d&apos;autres.
              </p>
              <p className="text-white/75 text-lg leading-relaxed">
                Ce qui ne change pas d&apos;un secteur à l&apos;autre : la
                technologie. Ce qui change : uniquement la configuration.
              </p>
            </div>

            {/* Product summary */}
            <div className="border border-brand/20 bg-brand-subtle rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">Docaya</h3>
                <p className="text-sm text-neutral-500">
                  Plateforme B2B — WhatsApp, IA native, 7 modules, paiement intégré. Tous secteurs.
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
                <div key={item.event} className="relative flex gap-6">
                  <div className="w-12 h-12 bg-brand-subtle rounded-full border-4 border-white flex items-center justify-center shrink-0 z-10">
                    <span className="text-brand text-xs font-bold">
                      {item.year.slice(-2)}
                    </span>
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
