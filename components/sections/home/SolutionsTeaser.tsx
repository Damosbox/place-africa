"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={20} />,
  CreditCard: <CreditCard size={20} />,
  Bell: <Bell size={20} />,
  ShoppingBag: <ShoppingBag size={20} />,
  AlertCircle: <AlertCircle size={20} />,
  Workflow: <Workflow size={20} />,
  Star: <Star size={20} />,
};

const colorVariants: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
  green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  yellow: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
};

export function SolutionsTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTag className="mb-4">Solutions</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                7 offres modulaires,<br />activables indépendamment
              </h2>
              <p className="text-neutral-600 text-lg max-w-xl">
                Chaque brique est activable seule ou combinée avec d'autres.
                Commencez par ce dont vous avez besoin maintenant.
              </p>
            </motion.div>
          </div>
          <Link
            href="/solutions"
            className="flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all shrink-0"
          >
            Voir toutes les solutions
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {solutions.map((solution, i) => {
            const colors = colorVariants[solution.color] || colorVariants.blue;
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/solutions/${solution.slug}`}>
                  <div className={`h-full rounded-2xl p-5 border ${colors.border} bg-white shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group`}>
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-4`}>
                      {iconMap[solution.icon]}
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm mb-2 leading-tight">
                      {solution.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-3">
                      {solution.tagline}
                    </p>
                    <div className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
