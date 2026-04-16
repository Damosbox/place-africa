"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-brand-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-site pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            Startup africaine d&apos;applications mobiles
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            L&apos;Afrique qui commerce,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-light via-purple-300 to-pink-300 bg-clip-text text-transparent">
                digitalisée.
              </span>
              <span className="absolute -inset-1 bg-white/5 rounded-lg blur-sm" />
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Place Africa édite des outils simples et puissants pour aider les
            petits commerçants africains à démarrer, gérer et développer leur
            business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#produits">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Nos produits
                <ArrowRight size={18} />
              </Button>
            </a>
            <Link href="/a-propos">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white"
              >
                À propos
              </Button>
            </Link>
          </motion.div>

          {/* Key propositions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: ShoppingBag, label: "Pour les commerçants : Gérer mieux" },
              { icon: TrendingUp, label: "Pour les consommateurs : Acheter facilement" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
              >
                <Icon size={14} className="text-brand-accent shrink-0" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats floating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-20"
        >
          {[
            { value: "2", label: "pays" },
            { value: "+1 000", label: "commerçants" },
            { value: "2", label: "produits actifs" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
