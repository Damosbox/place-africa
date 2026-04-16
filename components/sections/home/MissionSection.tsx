"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import { MapPin, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Des outils simples",
    description:
      "Des applications mobiles conçues pour être accessibles à tous les commerçants, sans formation technique.",
  },
  {
    icon: TrendingUp,
    title: "Croissance mesurable",
    description:
      "Commandes, stocks, caisse, employés, clients — tout dans une seule app pour prendre les meilleures décisions.",
  },
  {
    icon: MapPin,
    title: "Pensé pour l'Afrique",
    description:
      "Des solutions adaptées aux réalités locales : marchés, boutiques, restaurants, salons — tous secteurs confondus.",
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTag className="mb-6">Notre mission</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-[1.2] mb-6">
              Digitaliser le commerce de proximité africain
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Place Africa est une startup éditrice d&apos;applications mobiles
              utiles à la vie quotidienne de tous les Africains. Nos produits
              sont spécifiquement adaptés aux très petites entreprises
              commerciales.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Nous aidons les commerçants africains à mieux gérer leurs
              commandes, produits, caisse, stocks, dépenses, employés, clients —
              et leur reporting. Par la même occasion, nous simplifions le
              processus d&apos;achat du consommateur.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-neutral-100">
              {[
                { value: "2", label: "pays" },
                { value: "+1 000", label: "commerçants" },
                { value: "2", label: "produits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-brand mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Features */}
          <div className="flex flex-col gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="flex gap-4 p-5 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-brand-subtle hover:bg-brand-subtle/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center shrink-0">
                  <feat.icon size={20} className="text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
