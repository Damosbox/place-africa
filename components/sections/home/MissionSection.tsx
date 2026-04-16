"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, TrendingUp, MapPin } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Des outils simples",
    description:
      "Des applications mobiles accessibles à tous les commerçants, sans formation technique.",
  },
  {
    icon: TrendingUp,
    title: "Croissance mesurable",
    description:
      "Commandes, stocks, caisse, employés, clients — tout dans une seule app pour mieux décider.",
  },
  {
    icon: MapPin,
    title: "Pensé pour l'Afrique",
    description:
      "Adapté aux réalités locales : marchés, boutiques, restaurants, salons — tous secteurs.",
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white border-b border-neutral-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
              Notre mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-6">
              Digitaliser le commerce de proximité africain
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-5">
              Place Africa est une startup éditrice d&apos;applications mobiles
              pour la vie quotidienne de tous les Africains. Nos produits sont
              adaptés aux très petites entreprises commerciales.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Nous aidons les commerçants à mieux gérer leurs commandes, produits,
              caisse, stocks, dépenses, employés, clients — et leur reporting.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-neutral-100">
              {[
                { value: "2", label: "pays" },
                { value: "+1 000", label: "commerçants" },
                { value: "2", label: "produits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-neutral-900 mb-0.5">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex gap-4 p-5 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-neutral-200 hover:bg-white transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center shrink-0">
                  <feat.icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{feat.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
