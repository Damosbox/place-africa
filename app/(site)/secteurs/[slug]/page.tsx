import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { JourneyCard } from "@/components/sections/sectors/JourneyCard";
import {
  JourneyStatusBadge,
  JourneyStatusLegend,
} from "@/components/sections/sectors/JourneyStatusBadge";
import { RolesTable } from "@/components/sections/sectors/RolesTable";
import { PilotSection } from "@/components/sections/sectors/PilotSection";
import { sectors, getSectorBySlug, getFuseSectors } from "@/lib/content/sectors";
import { getSolutionBySlug } from "@/lib/content/solutions";
import { getJourneysBySector, countJourneysByStatus } from "@/lib/content/journeys";
import { placeServices, gainsDisclaimer, contactHref } from "@/lib/content/place-fuse";
import { getIcon, colorVariants } from "@/lib/utils/icons";
import type { JourneyStatus, Sector } from "@/lib/types/content";

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) return {};
  return {
    title: sector.seoTitle ?? `${sector.title} — parcours sur WhatsApp`,
    description: sector.seoDescription ?? sector.headline ?? sector.description,
    alternates: { canonical: `/secteurs/${sector.slug}` },
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) notFound();

  return sector.fuseDeck ? <FuseSectorPage sector={sector} /> : <LegacySectorPage sector={sector} />;
}

/* ──────────────────────────────────────────────────────────────────────────
 * Gabarit commun des 11 secteurs d'octobre :
 * promesse → frictions → parcours (statut) → autres parcours → gains et preuve
 * → qui fait quoi et services → pilote → démonstration.
 * ────────────────────────────────────────────────────────────────────────── */

function FuseSectorPage({ sector }: { sector: Sector }) {
  const sectorJourneys = getJourneysBySector(sector.slug);
  const counts = countJourneysByStatus(sectorJourneys);
  const statusOrder: JourneyStatus[] = ["production", "demontrable", "configurable"];
  const otherSectors = getFuseSectors().filter((s) => s.slug !== sector.slug);
  const org = sector.organisationLabel ?? "votre organisation";

  return (
    <>
      {/* Promesse */}
      <section className="bg-hero-gradient pt-32 pb-16 md:pb-20">
        <div className="container-site">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Tous les secteurs
          </Link>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand rounded-2xl flex items-center justify-center text-white shadow-cta shrink-0">
              {getIcon(sector.icon, 34)}
            </div>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">
                {sector.title}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
                {sector.headline ?? sector.title}
              </h1>
              <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8">
                {sector.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={contactHref({ sujet: "demo", secteur: sector.slug })}>
                  <Button variant="primary" size="lg" className="bg-brand-accent hover:bg-brand-accent shadow-cta-accent">
                    Demander une démonstration
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="#parcours" className="text-white/80 hover:text-white text-sm font-semibold underline underline-offset-4">
                  Voir les {sectorJourneys.length} parcours
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frictions */}
      {sector.frictions && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container-site">
            <SectionTag className="mb-4">Ce que ça coûte aujourd&apos;hui</SectionTag>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-10 max-w-2xl">
              Des frictions qui coûtent chaque jour à {org}
            </h2>
            <ol className="grid gap-4 md:grid-cols-2">
              {sector.frictions.map((f, i) => (
                <li key={f.title} className="rounded-2xl border border-neutral-200 p-6">
                  <p className="font-bold text-neutral-900 mb-2">
                    <span className="text-brand-accent tabular-nums mr-2">{i + 1}.</span>
                    {f.title}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-3">{f.detail}</p>
                  <p className="text-sm font-medium text-neutral-900 leading-relaxed pl-3 border-l-2 border-brand-accent">
                    {f.consequence}
                  </p>
                </li>
              ))}
            </ol>
            {sector.frictionNote && (
              <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">{sector.frictionNote}</p>
            )}
          </div>
        </section>
      )}

      {/* Parcours détaillés */}
      <section id="parcours" className="scroll-mt-20 section-padding bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <SectionTag className="mb-4">Parcours détaillés</SectionTag>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            {sector.title} : {sectorJourneys.length} parcours sur WhatsApp
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {statusOrder
              .filter((s) => counts[s] > 0)
              .map((s) => (
                <span key={s} className="inline-flex items-center gap-2 text-sm text-neutral-600">
                  <JourneyStatusBadge status={s} />
                  <span className="tabular-nums">× {counts[s]}</span>
                </span>
              ))}
          </div>
          <JourneyStatusLegend className="mb-10 max-w-4xl" />

          <div className="flex flex-col gap-6">
            {sectorJourneys.map((j, i) => (
              <JourneyCard
                key={j.id}
                journey={j}
                index={i + 1}
                organisationLabel={org}
                personLabel={sector.personLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Autres parcours */}
      {sector.alsoConfigurable && sector.alsoConfigurable.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-site">
            <SectionTag className="mb-4">Autres parcours</SectionTag>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              Configurables sur la même plateforme
            </h2>
            <p className="text-neutral-600 mb-10 max-w-2xl">
              Selon les priorités de {org}.
            </p>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {sector.alsoConfigurable.map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-neutral-400" aria-hidden />
                  <div>
                    <p className="font-semibold text-neutral-900 flex flex-wrap items-center gap-2">
                      {c.title}
                      {c.inProduction && <JourneyStatusBadge status="production" />}
                    </p>
                    {c.detail && (
                      <p className="text-sm text-neutral-500 leading-relaxed mt-1">{c.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Gains et preuve */}
      {(sector.gains || sector.proof) && (
        <section className="section-padding bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <SectionTag className="mb-4">Ce que ça rapporte</SectionTag>
            {sector.gains && (
              <>
                <ul className="flex flex-wrap gap-3 mb-4">
                  {sector.gains.map((g) => (
                    <li
                      key={g}
                      className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900"
                    >
                      <TrendingUp size={15} className="text-brand-accent" aria-hidden />
                      {g}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-500 mb-10">{gainsDisclaimer}</p>
              </>
            )}
            {sector.proof && (
              <div className="rounded-2xl bg-neutral-900 px-7 py-6 sm:px-9 sm:py-8">
                <p className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-3">
                  Résultat observé chez notre client de référence
                </p>
                <p className="text-lg text-white/85 leading-relaxed max-w-3xl">{sector.proof}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Fonctionnement : qui fait quoi + services */}
      {sector.roles && (
        <section className="section-padding bg-white">
          <div className="container-site">
            <SectionTag className="mb-4">Qui fait quoi</SectionTag>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              {capitalize(org)} et Place Fuse
            </h2>
            {sector.rolesIntro && (
              <p className="text-neutral-600 mb-8 max-w-3xl">{sector.rolesIntro}</p>
            )}
            <RolesTable roles={sector.roles} organisationLabel={org} />

            {sector.services && (
              <div className="mt-12">
                <h3 className="text-lg font-bold text-neutral-900 mb-5">Services PLACE mobilisés</h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sector.services.map((s) => (
                    <li key={s} className="rounded-xl border border-neutral-200 p-5">
                      <p className="font-bold text-neutral-900">
                        {s}{" "}
                        <span className="font-medium text-neutral-500">· {placeServices[s].role}</span>
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed mt-1">
                        {placeServices[s].detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <PilotSection secteur={sector.slug} />

      <OtherSectors sectors={otherSectors} />

      <SectorCta sector={sector} />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Fiches historiques (hôtellerie, transport aérien, retail).
 * ────────────────────────────────────────────────────────────────────────── */

function LegacySectorPage({ sector }: { sector: Sector }) {
  const sectorSolutions = sector.solutions
    .map((slug) => getSolutionBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);
  const otherSectors = getFuseSectors().slice(0, 8);

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Tous les secteurs
          </Link>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand rounded-2xl flex items-center justify-center text-white shadow-cta shrink-0">
              {getIcon(sector.icon, 34)}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{sector.title}</h1>
              <p className="text-white/75 text-xl max-w-xl">{sector.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {sector.costs && (
              <div>
                <SectionTag className="mb-6">Ce qui vous coûte cher aujourd&apos;hui</SectionTag>
                <ul className="flex flex-col gap-4">
                  {sector.costs.map((c) => (
                    <li key={c} className="text-neutral-500 leading-relaxed pl-5 border-l-2 border-neutral-300">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {sector.handled && (
              <div>
                <SectionTag className="mb-6 bg-brand-accent-subtle text-brand-accent">
                  Ce que Place Fuse prend en charge
                </SectionTag>
                <ul className="flex flex-col gap-4">
                  {sector.handled.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-700 leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {sectorSolutions.length > 0 && (
        <section className="section-padding bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <SectionTag className="mb-6">Solutions recommandées</SectionTag>
            <h2 className="text-2xl font-bold text-neutral-900 mb-10">
              {sectorSolutions.length} offres adaptées à votre secteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectorSolutions.map((solution) => {
                const colors = colorVariants[solution.color] || colorVariants.blue;
                return (
                  <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                    <div className="h-full bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0`}>
                          {getIcon(solution.icon, 20)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-neutral-900 mb-1">{solution.title}</h3>
                          <p className={`text-sm ${colors.text} font-medium mb-2`}>{solution.tagline}</p>
                          <div className={`flex items-center gap-1 mt-4 text-sm font-semibold ${colors.text} group-hover:gap-2 transition-all`}>
                            Voir la solution
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {sector.useCases && sector.useCases.length > 0 && (
        <section className="py-10 md:py-12 bg-white border-t border-neutral-100">
          <div className="container-site">
            <SectionTag className="mb-4">Cas d&apos;usage</SectionTag>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mt-4">
              {sector.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <OtherSectors sectors={otherSectors} title="Secteurs avec parcours détaillés" />

      <SectorCta sector={sector} />
    </>
  );
}

/* ── Blocs communs ─────────────────────────────────────────────────────── */

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function OtherSectors({ sectors: list, title = "Autres secteurs" }: { sectors: Sector[]; title?: string }) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-site">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
          <Link href="/secteurs" className="text-brand text-sm font-semibold hover:underline">
            Voir tout
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {list.map((s) => (
            <Link key={s.slug} href={`/secteurs/${s.slug}`}>
              <div className="h-full bg-white rounded-xl p-4 border border-neutral-200 hover:shadow-card hover:border-brand/30 transition-all text-center group">
                <div className="w-10 h-10 bg-brand-subtle rounded-xl flex items-center justify-center text-brand mx-auto mb-3 group-hover:bg-brand group-hover:text-white transition-colors">
                  {getIcon(s.icon, 20)}
                </div>
                <p className="text-sm font-semibold text-neutral-800">{s.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCta({ sector }: { sector: Sector }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-site text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Voyons ensemble vos parcours {sector.title.toLowerCase()}
        </h2>
        <p className="text-neutral-600 mb-8 text-lg max-w-xl mx-auto">
          Une démonstration accompagnée, sur les parcours qui comptent pour vous.
        </p>
        <Link href={contactHref({ sujet: "demo", secteur: sector.slug })}>
          <Button variant="primary" size="lg">
            Demander une démonstration
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
