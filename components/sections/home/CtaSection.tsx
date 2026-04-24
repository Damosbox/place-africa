"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Search, Zap, ArrowRight } from "lucide-react";

const START_OPTIONS = [
  {
    icon: Play,
    title: "Démo de 30 min",
    desc: "Démonstration live sur votre cas d'usage prioritaire. Aucun prérequis technique de votre côté.",
    cta: "Demander une démo",
    href: "/contact",
    external: false,
  },
  {
    icon: Search,
    title: "Audit gratuit",
    desc: "Analyse de vos processus actuels. On identifie ensemble les 3 automatisations à plus fort impact.",
    cta: "Demander l'audit",
    href: "/contact?sujet=audit",
    external: false,
  },
  {
    icon: Zap,
    title: "Proof-of-Concept",
    desc: "Un flow réel déployé sur votre cas prioritaire pour valider les résultats avant tout engagement.",
    cta: "En savoir plus",
    href: "/contact?sujet=poc",
    external: false,
  },
];

export function CtaSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Par où commencer ?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            3 façons de démarrer
            <br />
            <span className="text-white/30">selon votre horizon</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Choisissez ce qui vous convient — sans engagement, sans frais cachés.
          </p>
        </motion.div>

        {/* 3 options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {START_OPTIONS.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all p-6"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-5">
                  <opt.icon size={20} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{opt.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{opt.desc}</p>
              </div>
              <Link
                href={opt.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all"
              >
                {opt.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-white/20 mt-10"
        >
          contact@docaya.com · +225 05 85 75 00 17 · www.docaya.com
        </motion.p>
      </div>
    </section>
  );
}
