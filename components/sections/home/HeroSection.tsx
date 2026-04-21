"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TYPEWRITER_WORDS = ["apps", "chatbots", "paiements", "campagnes"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const word = TYPEWRITER_WORDS[idx];
    if (phase === "typing") {
      if (shown.length < word.length) {
        const t = setTimeout(() => setShown(word.slice(0, shown.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (shown.length > 0) {
        const t = setTimeout(() => setShown(shown.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % TYPEWRITER_WORDS.length);
        setPhase("typing");
      }
    }
  }, [shown, phase, idx]);

  return (
    <span className="gradient-text inline-block min-w-[4ch]">
      {shown}
      <span
        className="inline-block w-[3px] align-middle ml-[2px] animate-pulse"
        style={{ height: "0.85em", background: "currentColor" }}
      />
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-black min-h-screen">
      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-[55%] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-50"
          style={{ background: "radial-gradient(circle, #FE1B0026 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center container-site pt-28 pb-16 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div>
            {/* Badges */}
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
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#FE1B00">
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
              Les <Typewriter /> qui font tourner
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
              Docaya, l&apos;outil qui permet à vos équipes de répondre à tous vos clients
              et de leur envoyer le bon message — sur WhatsApp, SMS, e-mail et paiement mobile.
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

          {/* RIGHT — product mockup + KPI card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind */}
            <div
              className="absolute -inset-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 60% 50%, #FE1B0040 0%, transparent 65%)",
                filter: "blur(60px)",
              }}
            />

            {/* Mockup image — floating */}
            <div
              className="relative z-10"
              style={{ animation: "floatY 6s ease-in-out infinite" }}
            >
              <Image
                src="/images/Picture1.png"
                alt="Dashboard Docaya — back-office unifié"
                width={620}
                height={460}
                className="w-full drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating KPI card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -left-6 top-8 z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-white/20"
            >
              <div className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">
                Tickets
              </div>
              <div className="text-2xl font-bold text-neutral-900">318</div>
              <div className="text-[11px] font-semibold text-brand-accent">
                ↑ 24% cette semaine
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
