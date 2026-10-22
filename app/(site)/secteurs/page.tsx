import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import {
  JourneyStatusBadge,
  JourneyStatusLegend,
} from "@/components/sections/sectors/JourneyStatusBadge";
import { getFeaturedSector, getFuseSectors, getLegacySectors } from "@/lib/content/sectors";
import { journeys, getJourneysBySector, countJourneysByStatus } from "@/lib/content/journeys";
import { platform } from "@/lib/content/place-fuse";
import { getIcon } from "@/lib/utils/icons";
import type { JourneyStatus } from "@/lib/types/content";

export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Assurance, banques, microfinance, protection sociale, eau et électricité, collectivités, transport, poste, documents de transport, écoles, agences immobilières : 35 parcours Place Fuse sur WhatsApp.",
  alternates: { canonical: "/secteurs" },
};

const statusOrder: JourneyStatus[] = ["production", "demontrable", "configurable"];

export default function SecteursPage() {
  const featured = getFeaturedSector();
  const featuredJourneys = getJourneysBySector(featured.slug);
  const fuseSectors = getFuseSectors();
  const legacy = getLegacySectors();
  const total = countJourneysByStatus(journeys);

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <SectionTag className="mb-4 bg-white/10 text-white">Secteurs d&apos;activité</SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Le même moteur, configuré pour votre métier
          </h1>
          <p className="text-white/75 text-xl max-w-2xl">{platform.modular}</p>
        </div>
      </section>

      {/* Vitrine : le secteur dont les parcours sont en production */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
              <div>
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white shadow-cta mb-6">
                  {getIcon(featured.icon, 28)}
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">
                  Exemple de référence
                </p>
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">{featured.headline ?? featured.title}</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">{featured.description}</p>

                {featured.proof && (
                  <div className="rounded-2xl bg-neutral-900 px-5 py-4 mb-6">
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">
                      Résultat observé
                    </p>
                    <p className="text-sm text-white/85 leading-relaxed">{featured.proof}</p>
                  </div>
                )}

                <Link
                  href={`/secteurs/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
                >
                  Voir la fiche complète <ArrowRight size={15} />
                </Link>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-4">
                  {featuredJourneys.length} parcours détaillés
                </h3>
                <ol className="flex flex-col gap-3">
                  {featuredJourneys.map((j) => (
                    <li key={j.id}>
                      <Link
                        href={`/secteurs/${featured.slug}#${j.id}`}
                        className="block rounded-xl border border-neutral-200 bg-white p-4 hover:border-neutral-400 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <p className="font-semibold text-neutral-900">{j.title}</p>
                          <JourneyStatusBadge status={j.status} />
                        </div>
                        <p className="text-sm text-neutral-600 leading-relaxed">{j.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 11 secteurs d'octobre */}
      <section id="parcours-par-secteur" className="scroll-mt-20 pb-16 md:pb-24 bg-white">
        <div className="container-site">
          <SectionTag className="mb-4">Parcours par secteur</SectionTag>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            {fuseSectors.length} secteurs, {journeys.length} parcours détaillés
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
            {statusOrder.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-sm text-neutral-600">
                <JourneyStatusBadge status={s} />
                <span className="tabular-nums">× {total[s]}</span>
              </span>
            ))}
          </div>
          <JourneyStatusLegend className="mb-10 max-w-4xl" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fuseSectors.map((sector) => {
              const counts = countJourneysByStatus(getJourneysBySector(sector.slug));
              return (
                <li key={sector.slug}>
                  <Link href={`/secteurs/${sector.slug}`} className="block h-full">
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                          {getIcon(sector.icon, 24)}
                        </div>
                        <span className="text-xs font-bold text-neutral-400 tabular-nums">
                          {String(sector.fuseDeck?.order).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{sector.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-5">{sector.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2 mb-4">
                        {statusOrder
                          .filter((s) => counts[s] > 0)
                          .map((s) => (
                            <span key={s} className="inline-flex items-center gap-1 text-xs text-neutral-500">
                              <JourneyStatusBadge status={s} />
                              <span className="tabular-nums">× {counts[s]}</span>
                            </span>
                          ))}
                      </div>
                      <div className="flex items-center gap-2 text-brand text-sm font-semibold group-hover:gap-3 transition-all">
                        Voir les parcours
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Fiches historiques */}
      {legacy.length > 0 && (
        <section className="pb-16 md:pb-24 bg-white">
          <div className="container-site">
            <h2 className="text-xl font-bold text-neutral-900 mb-2">Autres métiers</h2>
            <p className="text-neutral-600 mb-6 max-w-2xl">
              Les mêmes briques s&apos;appliquent à d&apos;autres secteurs, configurées avec vous.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {legacy.map((sector) => (
                <Link key={sector.slug} href={`/secteurs/${sector.slug}`}>
                  <div className="h-full flex items-start gap-4 rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
                    <div className="w-10 h-10 bg-brand-subtle rounded-xl flex items-center justify-center text-brand shrink-0">
                      {getIcon(sector.icon, 20)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">{sector.title}</p>
                      <p className="text-sm text-neutral-600 leading-relaxed">{sector.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-brand-subtle">
        <div className="container-site text-center">
          <p className="text-xl font-semibold text-brand max-w-2xl mx-auto">
            « Ce qui change d&apos;un secteur à l&apos;autre, ce n&apos;est pas la
            technologie — c&apos;est la configuration. »
          </p>
        </div>
      </section>
    </>
  );
}
