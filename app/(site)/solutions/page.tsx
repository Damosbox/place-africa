import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { families } from "@/lib/content/families";
import { getIcon, colorVariants } from "@/lib/utils/icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "4 familles de solutions DOCAYA orientées résultats : acquisition & conversion, service & décongestion, encaissement & recouvrement, engagement & fidélisation.",
};

const flowLabel: Record<string, { label: string; className: string }> = {
  inbound: { label: "Inbound", className: "bg-blue-50 text-blue-700" },
  outbound: { label: "Outbound", className: "bg-orange-50 text-orange-700" },
  both: { label: "Inbound + Outbound", className: "bg-neutral-100 text-neutral-700" },
};

export default function SolutionsHubPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">Solutions</SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            4 familles de solutions,<br />orientées résultats
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Chaque famille regroupe des sous-solutions activables indépendamment, alignées sur un objectif métier mesurable.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {families.map((f) => {
              const colors = colorVariants[f.color] || colorVariants.blue;
              const flow = flowLabel[f.flow];
              return (
                <Link
                  key={f.slug}
                  href={`/solutions/${f.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-hover hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center`}>
                      {getIcon(f.icon, 28)}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${flow.className}`}>
                      {flow.label}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{f.title}</h2>
                  <p className={`text-sm font-medium ${colors.text} mb-4`}>{f.tagline}</p>
                  <p className="text-neutral-600 leading-relaxed mb-5 line-clamp-3">
                    {f.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {f.outcomes.slice(0, 3).map((o) => (
                      <span
                        key={o}
                        className="text-xs bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1 text-neutral-600"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}>
                    Découvrir la famille
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-2xl font-bold text-brand max-w-3xl mx-auto leading-relaxed mt-14">
            &ldquo;Ce qui change d&apos;un secteur à l&apos;autre, ce n&apos;est pas la
            technologie — c&apos;est la configuration.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Vous cherchez par secteur ?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            9 secteurs sont déjà outillés par DOCAYA : banques, assurances, éducation, hôtellerie, retail, utilities, transport aérien, immobilier et service public.
          </p>
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
          >
            Voir les secteurs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
