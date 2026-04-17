import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Building2,
  GraduationCap,
  Landmark,
  Hotel,
  Plane,
  Zap,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { sectors } from "@/lib/content/sectors";
import { solutions } from "@/lib/content/solutions";

export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Docaya s'adapte à chaque industrie : Assurances, Immobilier, Éducation, Banques, Hôtellerie, Transport aérien, Utilities, Retail.",
};

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Building2: <Building2 size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Landmark: <Landmark size={28} />,
  Hotel: <Hotel size={28} />,
  Plane: <Plane size={28} />,
  Zap: <Zap size={28} />,
  ShoppingCart: <ShoppingCart size={28} />,
};

export default function SecteursPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Secteurs d'activité
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Secteurs couverts
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Une plateforme unique, configurée pour chaque industrie.
            Architecture identique, résultats adaptés.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector) => {
              const sectorSolutions = solutions.filter((s) =>
                sector.solutions.includes(s.slug)
              );
              return (
                <Link key={sector.slug} href={`/secteurs/${sector.slug}`}>
                  <div className="h-full bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      {iconMap[sector.icon]}
                    </div>
                    <h2 className="text-lg font-bold text-neutral-900 mb-3">
                      {sector.title}
                    </h2>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {sectorSolutions.slice(0, 3).map((s) => (
                        <span
                          key={s.slug}
                          className="text-xs bg-neutral-100 text-neutral-600 rounded-full px-2.5 py-1"
                        >
                          {s.title.split(" ")[0]}
                        </span>
                      ))}
                      {sectorSolutions.length > 3 && (
                        <span className="text-xs bg-neutral-100 text-neutral-500 rounded-full px-2.5 py-1">
                          +{sectorSolutions.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-brand text-sm font-semibold group-hover:gap-3 transition-all">
                      Voir les solutions
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="py-16 bg-brand-subtle">
        <div className="container-site text-center">
          <p className="text-xl font-semibold text-brand max-w-2xl mx-auto">
            "Ce qui change d'un secteur à l'autre, ce n'est pas la technologie
            — c'est la configuration."
          </p>
        </div>
      </section>
    </>
  );
}
