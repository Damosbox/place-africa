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
  Cpu,
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

const colorVariants: Record<string, { bg: string; text: string; iconBg: string; hero: string; pill: string }> = {
  blue:   { bg: "bg-blue-50",    text: "text-blue-600",    iconBg: "bg-blue-100",    hero: "from-blue-900 to-indigo-900",    pill: "bg-blue-100 text-blue-700" },
  orange: { bg: "bg-orange-50",  text: "text-orange-600",  iconBg: "bg-orange-100",  hero: "from-orange-900 to-red-900",     pill: "bg-orange-100 text-orange-700" },
  green:  { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-100", hero: "from-emerald-900 to-teal-900",   pill: "bg-emerald-100 text-emerald-700" },
  purple: { bg: "bg-purple-50",  text: "text-purple-600",  iconBg: "bg-purple-100",  hero: "from-purple-900 to-indigo-900",  pill: "bg-purple-100 text-purple-700" },
  red:    { bg: "bg-red-50",     text: "text-red-600",     iconBg: "bg-red-100",     hero: "from-red-900 to-rose-900",       pill: "bg-red-100 text-red-700" },
  indigo: { bg: "bg-indigo-50",  text: "text-indigo-600",  iconBg: "bg-indigo-100",  hero: "from-indigo-900 to-purple-900",  pill: "bg-indigo-100 text-indigo-700" },
  yellow: { bg: "bg-amber-50",   text: "text-amber-600",   iconBg: "bg-amber-100",   hero: "from-amber-900 to-orange-900",   pill: "bg-amber-100 text-amber-700" },
};

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.description };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  const colors = colorVariants[solution.color] || colorVariants.blue;
  const solutionSectors = sectors.filter((s) => solution.sectors.includes(s.slug));
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${colors.hero} pt-32 pb-16`}>
        <div className="container-site">
          <Link
            href="/plateforme#solutions"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Retour aux solutions
          </Link>
          <div className="max-w-3xl">
            <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center mb-5`}>
              {iconMap[solution.icon]}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              {solution.title}
            </h1>
            <p className="text-white/60 text-lg">{solution.tagline}</p>
          </div>
        </div>
      </section>

      {/* Présentation + Fonctionnalités */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT — Présentation */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Présentation</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                {solution.description}
              </p>

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

            {/* RIGHT — Fonctionnalités */}
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

      {/* Mécanisme technique */}
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

      {/* Autres solutions */}
      <section className="py-10 md:py-12 bg-white border-t border-neutral-100">
        <div className="container-site">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-neutral-900">Autres solutions</h2>
            <Link href="/plateforme#solutions" className="text-brand font-semibold text-sm hover:underline">
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
