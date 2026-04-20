import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { capacities } from "@/lib/content/capacities";
import { getIcon } from "@/lib/utils/icons";

export const metadata: Metadata = {
  title: "Capacités natives",
  description:
    "11 capacités natives de DOCAYA pour industrialiser la relation client conversationnelle : messagerie multicanale, agents IA, workflows, paiements, ticketing et plus.",
};

const flowLabel: Record<string, { label: string; className: string }> = {
  inbound: { label: "Inbound", className: "bg-blue-50 text-blue-700" },
  outbound: { label: "Outbound", className: "bg-orange-50 text-orange-700" },
  both: { label: "Inbound + Outbound", className: "bg-neutral-100 text-neutral-700" },
};

export default function CapacitesPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/plateforme"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Plateforme
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">Plateforme</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            11 capacités natives pour industrialiser la relation client conversationnelle
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Des briques techniques éprouvées, organisées autour de deux flux : le guichet entrant (inbound) et le marketing relationnel sortant (outbound).
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capacities.map((cap) => {
              const flow = flowLabel[cap.flow];
              return (
                <Link
                  key={cap.slug}
                  href={`/plateforme/capacites/${cap.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-hover hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-subtle text-brand flex items-center justify-center">
                      {getIcon(cap.icon, 22)}
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${flow.className}`}
                    >
                      {flow.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {cap.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                    En savoir plus
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Comment ces capacités se combinent-elles ?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Découvrez les 4 familles de solutions qui orchestrent ces capacités autour d&apos;un objectif métier.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
          >
            Voir les solutions
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
