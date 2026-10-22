import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JourneyStatusBadge } from "@/components/sections/sectors/JourneyStatusBadge";
import { getFeaturedSector } from "@/lib/content/sectors";
import { getJourneysBySector } from "@/lib/content/journeys";
import { contactHref } from "@/lib/content/place-fuse";

/**
 * Exemple de référence : l'assurance, seul secteur dont les parcours sont
 * déclarés en production. Les autres métiers passent au second niveau
 * (`SectorsPreview`) : un directeur d'assurance qui voit écoles, hôtels et
 * distribution d'eau traités à parts égales doute qu'on connaisse son métier.
 *
 * Parcours lus depuis `lib/content/journeys.ts`.
 */
export function JourneySection() {
  const sector = getFeaturedSector();
  const list = getJourneysBySector(sector.slug);

  return (
    <section id="exemple-assurance" className="section-padding bg-white border-b border-neutral-100">
      <div className="container-site">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
            Exemple de référence · {sector.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-4">
            {sector.title} : {list.length} parcours sur WhatsApp
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">{sector.description}</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {list.map((j, i) => (
            <li key={j.id}>
              <Link
                href={`/secteurs/${sector.slug}#${j.id}`}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7 hover:border-neutral-400 hover:bg-white transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-neutral-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <JourneyStatusBadge status={j.status} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-2">{j.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{j.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 group-hover:gap-2.5 transition-all">
                  Les étapes du parcours <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href={contactHref({ sujet: "demo", secteur: sector.slug })}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Voir ces parcours en démonstration <ArrowRight size={15} />
          </Link>
          <Link
            href={`/secteurs/${sector.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
          >
            Fiche {sector.title.toLowerCase()} complète <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
