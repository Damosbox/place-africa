import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Bell,
  ShoppingBag,
  AlertCircle,
  Workflow,
  Star,
  ArrowRight,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { solutions } from "@/lib/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "7 offres modulaires activables indépendamment : Agent d'Accueil, Recouvrement, Notifications, Vente & Souscription, Incidents, Workflows Métiers, NPS.",
};

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={24} />,
  CreditCard: <CreditCard size={24} />,
  Bell: <Bell size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  AlertCircle: <AlertCircle size={24} />,
  Workflow: <Workflow size={24} />,
  Star: <Star size={24} />,
};

const colorVariants: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: {
    bg: "bg-blue-50/50",
    text: "text-blue-600",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  orange: {
    bg: "bg-orange-50/50",
    text: "text-orange-600",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
  green: {
    bg: "bg-emerald-50/50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  purple: {
    bg: "bg-purple-50/50",
    text: "text-purple-600",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  red: {
    bg: "bg-red-50/50",
    text: "text-red-600",
    border: "border-red-100",
    iconBg: "bg-red-100",
  },
  indigo: {
    bg: "bg-indigo-50/50",
    text: "text-indigo-600",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100",
  },
  yellow: {
    bg: "bg-amber-50/50",
    text: "text-amber-600",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Offres modulaires
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            7 solutions,<br />1 seule plateforme
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Chaque brique est activable indépendamment. Commencez par ce dont
            vous avez besoin, ajoutez le reste au fil du temps.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const colors = colorVariants[solution.color] || colorVariants.blue;
              return (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                  <div className={`h-full rounded-2xl p-8 border ${colors.border} ${colors.bg} hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 ${colors.iconBg} ${colors.text} rounded-2xl flex items-center justify-center shrink-0`}>
                        {iconMap[solution.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-neutral-900 mb-1">
                          {solution.title}
                        </h2>
                        <p className={`text-sm font-medium ${colors.text} mb-3`}>
                          {solution.tagline}
                        </p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                          {solution.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {solution.features.slice(0, 4).map((f) => (
                            <span
                              key={f}
                              className="text-xs bg-white border border-neutral-200 rounded-full px-3 py-1 text-neutral-700"
                            >
                              {f}
                            </span>
                          ))}
                          {solution.features.length > 4 && (
                            <span className="text-xs bg-white border border-neutral-200 rounded-full px-3 py-1 text-neutral-500">
                              +{solution.features.length - 4} autres
                            </span>
                          )}
                        </div>
                        <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}>
                          En savoir plus
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

      {/* Principle */}
      <section className="section-padding bg-brand-subtle">
        <div className="container-site text-center">
          <p className="text-2xl font-bold text-brand max-w-3xl mx-auto leading-relaxed">
            "Ce qui change d'un secteur à l'autre, ce n'est pas la technologie
            — c'est la configuration."
          </p>
        </div>
      </section>
    </>
  );
}
