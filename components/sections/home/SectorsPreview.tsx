import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JourneyStatusBadge } from "@/components/sections/sectors/JourneyStatusBadge";
import { getFuseSectors } from "@/lib/content/sectors";
import { journeys, getJourneysBySector, countJourneysByStatus } from "@/lib/content/journeys";
import { getIcon } from "@/lib/utils/icons";
import type { JourneyStatus } from "@/lib/types/content";

const statusOrder: JourneyStatus[] = ["production", "demontrable", "configurable"];

/** Aperçu des secteurs d'octobre ; le détail des parcours vit sur chaque fiche. */
export function SectorsPreview() {
  const list = getFuseSectors().filter((s) => !s.featured);
  const total = countJourneysByStatus(journeys);

  return (
    <section className="section-padding bg-neutral-50 border-b border-neutral-100">
      <div className="container-site">
        <div className="max-w-2xl mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
            Le même moteur, d&apos;autres métiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-4">
            {journeys.length} parcours détaillés dans {getFuseSectors().length} secteurs
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {statusOrder.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-sm text-neutral-600">
                <JourneyStatusBadge status={s} />
                <span className="tabular-nums">× {total[s]}</span>
              </span>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {list.map((s) => {
            const n = getJourneysBySector(s.slug).length;
            return (
              <li key={s.slug}>
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="group flex h-full items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 hover:border-neutral-900 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-brand-subtle text-brand flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    {getIcon(s.icon, 18)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-neutral-900 leading-snug">{s.title}</span>
                    <span className="block text-xs text-neutral-500">{n} parcours</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/secteurs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
        >
          Voir tous les secteurs et leurs parcours <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
