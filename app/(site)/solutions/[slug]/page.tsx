import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Bell,
  ShoppingBag,
  AlertCircle,
  Workflow,
  Star,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { solutions, getSolutionBySlug } from "@/lib/content/solutions";
import { sectors } from "@/lib/content/sectors";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={32} />,
  CreditCard: <CreditCard size={32} />,
  Bell: <Bell size={32} />,
  ShoppingBag: <ShoppingBag size={32} />,
  AlertCircle: <AlertCircle size={32} />,
  Workflow: <Workflow size={32} />,
  Star: <Star size={32} />,
};

const colorVariants: Record<string, { bg: string; text: string; iconBg: string; hero: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100", hero: "from-blue-900 to-indigo-900" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-100", hero: "from-orange-900 to-red-900" },
  green: { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-100", hero: "from-emerald-900 to-teal-900" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100", hero: "from-purple-900 to-indigo-900" },
  red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-100", hero: "from-red-900 to-rose-900" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", iconBg: "bg-indigo-100", hero: "from-indigo-900 to-purple-900" },
  yellow: { bg: "bg-amber-50", text: "text-amber-600", iconBg: "bg-amber-100", hero: "from-amber-900 to-orange-900" },
};

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  const colors = colorVariants[solution.color] || colorVariants.blue;
  const solutionSectors = sectors.filter((s) =>
    solution.sectors.includes(s.slug)
  );
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${colors.hero} pt-32 pb-20`}>
        <div className="container-site">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Retour aux solutions
          </Link>
          <div className="max-w-3xl">
            <div className={`w-16 h-16 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center mb-6`}>
              {iconMap[solution.icon]}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {solution.title}
            </h1>
            <p className="text-white/60 text-xl mb-6">{solution.tagline}</p>
            <p className="text-white/80 text-lg leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features + Sectors */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <SectionTag className="mb-6">Fonctionnalités</SectionTag>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Ce que vous obtenez
              </h2>
              <ul className="space-y-4">
                {solution.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-4">
                    <div className={`w-8 h-8 ${colors.iconBg} ${colors.text} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">{feat}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <SectionTag className="mb-6">Secteurs</SectionTag>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Adaptée à ces industries
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {solutionSectors.map((sector) => (
                  <Link key={sector.slug} href={`/secteurs/${sector.slug}`}>
                    <div className="p-4 rounded-xl border border-neutral-200 hover:border-brand/30 hover:bg-brand-subtle/50 transition-all group">
                      <p className="font-semibold text-neutral-800 text-sm group-hover:text-brand transition-colors">
                        {sector.title}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {sector.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">
              Autres solutions
            </h2>
            <Link href="/solutions" className="text-brand font-semibold text-sm hover:underline">
              Voir tout
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSolutions.map((s) => {
              const c = colorVariants[s.color] || colorVariants.blue;
              return (
                <Link key={s.slug} href={`/solutions/${s.slug}`}>
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-hover hover:-translate-y-0.5 transition-all group">
                    <h3 className="font-bold text-neutral-900 text-sm mb-2">{s.title}</h3>
                    <p className={`text-xs ${c.text} font-medium mb-1`}>{s.tagline}</p>
                    <div className="flex items-center gap-1 text-brand text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Intéressé par cette solution ?
          </h2>
          <p className="text-neutral-600 mb-8 text-lg max-w-xl mx-auto">
            Notre équipe vous présente une démo adaptée à votre secteur et vos processus métiers.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Demander une démo
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
