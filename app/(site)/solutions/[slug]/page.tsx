import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Cpu,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import {
  solutions,
  getSolutionBySlug,
  getSolutionsByFamily,
} from "@/lib/content/solutions";
import { sectors } from "@/lib/content/sectors";
import { families, getFamilyBySlug } from "@/lib/content/families";
import { getIcon, colorVariants } from "@/lib/utils/icons";

const flowLabel: Record<string, { label: string; className: string }> = {
  inbound: { label: "Flux entrant (inbound)", className: "bg-blue-50 text-blue-700 border-blue-100" },
  outbound: { label: "Flux sortant (outbound)", className: "bg-orange-50 text-orange-700 border-orange-100" },
  both: { label: "Inbound + Outbound", className: "bg-neutral-100 text-neutral-700 border-neutral-200" },
};

export async function generateStaticParams() {
  return [
    ...solutions.map((s) => ({ slug: s.slug })),
    ...families.map((f) => ({ slug: f.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const family = getFamilyBySlug(params.slug);
  if (family) {
    return { title: family.title, description: family.description };
  }
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.description };
}

export default function SolutionOrFamilyPage({
  params,
}: {
  params: { slug: string };
}) {
  const family = getFamilyBySlug(params.slug);
  if (family) return <FamilyView slug={params.slug} />;
  return <SolutionView slug={params.slug} />;
}

function FamilyView({ slug }: { slug: string }) {
  const family = getFamilyBySlug(slug)!;
  const colors = colorVariants[family.color] || colorVariants.blue;
  const subs = getSolutionsByFamily(family.slug);
  const familySectors = sectors.filter((s) => family.sectors.includes(s.slug));
  const flow = flowLabel[family.flow];

  return (
    <>
      <section className={`bg-gradient-to-br ${colors.hero} pt-32 pb-16`}>
        <div className="container-site">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Toutes les familles
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center`}>
                {getIcon(family.icon, 28)}
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${flow.className}`}>
                {flow.label}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{family.title}</h1>
            <p className="text-white/70 text-xl">{family.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Présentation</h2>
              <p className="text-neutral-600 leading-relaxed">{family.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Résultats attendus</h2>
              <ul className="space-y-3">
                {family.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`${colors.text} shrink-0 mt-0.5`} />
                    <span className="text-neutral-700 text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <SectionTag className="mb-4">Sous-solutions</SectionTag>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            {subs.length} solution{subs.length > 1 ? "s" : ""} de cette famille
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subs.map((s) => {
              const c = colorVariants[s.color] || colorVariants.blue;
              return (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-hover hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 ${c.iconBg} ${c.text} rounded-xl flex items-center justify-center shrink-0`}>
                      {getIcon(s.icon, 22)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">{s.title}</h3>
                      <p className={`text-sm font-medium ${c.text} mb-2`}>{s.tagline}</p>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                        {s.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                        En savoir plus <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {familySectors.length > 0 && (
        <section className="py-12 bg-white border-t border-neutral-100">
          <div className="container-site">
            <h2 className="text-xl font-bold text-neutral-900 mb-5">Secteurs concernés</h2>
            <div className="flex flex-wrap gap-2">
              {familySectors.map((s) => (
                <Link
                  key={s.slug}
                  href={`/secteurs/${s.slug}`}
                  className={`inline-block text-sm font-medium px-3 py-1.5 rounded-full ${colors.pill} hover:opacity-80 transition-opacity`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Prêt à déployer {family.title.toLowerCase()} ?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Notre équipe prépare une démo adaptée à votre secteur et à votre volumétrie.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Demander une démo
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

function SolutionView({ slug }: { slug: string }) {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const colors = colorVariants[solution.color] || colorVariants.blue;
  const solutionSectors = sectors.filter((s) => solution.sectors.includes(s.slug));
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
  const parentFamily = solution.familySlug ? getFamilyBySlug(solution.familySlug) : undefined;

  return (
    <>
      <section className={`bg-gradient-to-br ${colors.hero} pt-32 pb-16`}>
        <div className="container-site">
          <Link
            href={parentFamily ? `/solutions/${parentFamily.slug}` : "/solutions"}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            {parentFamily ? parentFamily.title : "Solutions"}
          </Link>
          <div className="max-w-3xl">
            <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center mb-5`}>
              {getIcon(solution.icon, 32)}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{solution.title}</h1>
            <p className="text-white/60 text-lg">{solution.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Présentation</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">{solution.description}</p>

              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                Cas d&apos;usage
              </p>
              <div className="flex flex-wrap gap-2">
                {solutionSectors.map((sector) => (
                  <Link key={sector.slug} href={`/secteurs/${sector.slug}`}>
                    <span className={`inline-block text-sm font-medium px-3 py-1.5 rounded-full ${colors.pill} hover:opacity-80 transition-opacity`}>
                      {sector.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Fonctionnalités</h2>
              <ul className="space-y-3">
                {solution.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`${colors.text} shrink-0 mt-0.5`} />
                    <span className="text-neutral-700 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Demander une démo
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className={`w-10 h-10 ${colors.iconBg} ${colors.text} rounded-xl flex items-center justify-center shrink-0 mt-0.5`}>
              <Cpu size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-900 mb-2">Mécanisme technique</h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {solution.mechanism}
              </p>
              <div className={`border-l-2 ${colors.text.replace("text-", "border-")} pl-4`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Exemples</p>
                <p className="text-neutral-500 text-sm italic">{solution.examples}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-white border-t border-neutral-100">
        <div className="container-site">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-neutral-900">Autres solutions</h2>
            <Link href="/solutions" className="text-brand font-semibold text-sm hover:underline">
              Voir tout
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSolutions.map((s) => {
              const c = colorVariants[s.color] || colorVariants.blue;
              return (
                <Link key={s.slug} href={`/solutions/${s.slug}`}>
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 hover:shadow-hover hover:-translate-y-0.5 transition-all group">
                    <h3 className="font-bold text-neutral-900 text-sm mb-1">{s.title}</h3>
                    <p className={`text-xs ${c.text} font-medium mb-3`}>{s.tagline}</p>
                    <div className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
