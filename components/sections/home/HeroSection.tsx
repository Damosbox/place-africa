"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const logos = [
  "Ivoire Académie",
  "Box Africa",
  "Wave",
  "Orange Money",
  "MTN Momo",
];

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-black min-h-screen">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle orange glow top-right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center container-site pt-32 pb-20 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-4 py-2 text-white/60 text-sm font-medium mb-10"
          >
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
            Startup africaine d&apos;applications mobiles
          </motion.div>

          {/* Headline — Klaviyo style: massive, bold, white on black */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            L&apos;Afrique qui commerce,{" "}
            <span className="gradient-text">digitalisée.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl mx-auto mb-12"
          >
            Place Africa édite des outils simples pour aider les petits
            commerçants africains à démarrer, gérer et développer leur business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#produits">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-black hover:bg-neutral-100 shadow-cta rounded-lg font-bold"
              >
                Nos produits
                <ArrowRight size={18} />
              </Button>
            </a>
            <Link href="/a-propos">
              <Button
                variant="ghost"
                size="lg"
                className="text-white/70 hover:text-white hover:bg-white/8 rounded-lg"
              >
                À propos
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-10 mt-16 pt-10 border-t border-white/8"
          >
            {[
              { value: "2", label: "pays" },
              { value: "+1 000", label: "commerçants actifs" },
              { value: "2", label: "produits" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/40 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Orange brand bar — Klaviyo's customer logo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 bg-brand-accent py-4 overflow-hidden"
      >
        <div className="container-site flex items-center gap-3">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-widest shrink-0 mr-4">
            Nos partenaires
          </span>
          <div className="flex items-center gap-8 overflow-hidden">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-white font-bold text-sm whitespace-nowrap opacity-90"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
