"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

      {/* Orange glow — behind image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[30%] w-[500px] h-[500px] bg-brand-accent/8 rounded-full blur-[140px]" />
      </div>

      {/* Main content — split layout */}
      <div className="flex-1 flex items-center container-site pt-28 pb-16 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div>
            {/* Badges row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-white/60 text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                Place Africa acquiert{" "}
                <span className="text-white font-semibold">Docaya</span>
                <span className="text-white/30 mx-0.5">·</span>
                <a
                  href="/a-propos#docaya"
                  className="text-brand-accent hover:text-orange-400 transition-colors"
                >
                  Lire l&apos;annonce →
                </a>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 text-white/50 text-xs font-medium">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-brand-accent">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Propulsé par l&apos;IA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Les{" "}
              <span className="gradient-text">apps</span>
              {" "}qui font tourner
              <br />
              l&apos;Afrique.
            </motion.h1>

            {/* Baseline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm text-white/60 leading-relaxed max-w-lg mb-10 font-medium"
            >
              Docaya, l&apos;outil qui permet à vos équipes de répondre à tous vos clients et de leur envoyer le bon message — sur WhatsApp, SMS, e-mail et paiement mobile.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-14"
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
              <Link href="/plateforme">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/70 hover:text-white hover:bg-white/8 rounded-lg"
                >
                  Découvrir DOCAYA
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT — merchant photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind the image */}
            <div className="absolute inset-0 rounded-3xl bg-brand-accent/15 blur-2xl scale-90 translate-y-4" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <Image
                src="/images/hero-merchant.png"
                alt="Entreprise africaine utilisant Docaya sur son téléphone"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 0px, 45vw"
              />
              {/* Bottom gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
