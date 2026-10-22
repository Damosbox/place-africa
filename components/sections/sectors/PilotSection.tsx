import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { pilot, contactHref } from "@/lib/content/place-fuse";

/**
 * Offre pilote de 90 jours (synthèse, diapositive 20).
 * ⚠️ À confirmer par le responsable commercial avant mise en ligne.
 */
export function PilotSection({ secteur }: { secteur?: string }) {
  return (
    <section className="section-padding bg-neutral-900 text-white">
      <div className="container-site">
        <SectionTag className="mb-6 bg-white/10 text-white/80">Prochaine étape</SectionTag>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl">{pilot.title}</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">{pilot.intro}</p>

        <ol className="grid gap-4 md:grid-cols-3 mb-10">
          {pilot.phases.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                {p.when}
              </p>
              <p className="text-lg font-bold mb-2">
                {i + 1}. {p.title}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">{p.detail}</p>
            </li>
          ))}
        </ol>

        <Link
          href={contactHref({ sujet: "pilote", secteur })}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-cta-accent hover:opacity-90 transition-opacity"
        >
          Choisir notre premier parcours
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
