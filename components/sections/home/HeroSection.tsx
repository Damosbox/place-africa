"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SLIDE_DURATION = 6000; // ms per slide

const BUBBLES = [
  { side: "left",  bg: "#FE4D2B", text: "text-white",  content: "Bonjour, combien coûte l'assurance auto ?", delay: 0.1 },
  { side: "right", bg: "white",   text: "text-neutral-900", content: "78 203 FCFA / 6 mois • Tiers amélioré", delay: 0.7 },
  { side: "left",  bg: "#FE4D2B", text: "text-white",  content: "Je prends 👍", delay: 1.3 },
];

// ── Slide 1 — Product mockup ────────────────────────────────────────────────
function SlideProduct() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* floating mockup */}
      <div className="relative z-10 w-full" style={{ animation: "floatY 6s ease-in-out infinite" }}>
        <Image
          src="/images/Picture1.png"
          alt="Dashboard Place Fuse — back-office unifié"
          width={620}
          height={460}
          className="w-full drop-shadow-2xl"
          priority
        />
      </div>

      {/* KPI card */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="absolute -left-6 top-8 z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-white/20"
      >
        <div className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">Tickets</div>
        <div className="text-2xl font-bold text-neutral-900">318</div>
        <div className="text-[11px] font-semibold text-brand-accent">↑ 24% cette semaine</div>
      </motion.div>
    </div>
  );
}

// ── Slide 2 — Merchant photo + chat bubbles ─────────────────────────────────
function SlideMerchant() {
  return (
    <div className="relative w-full h-full">
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl blur-2xl scale-90 translate-y-4"
        style={{ background: "#FE1B0026" }} />

      {/* photo */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
        <Image
          src="/images/hero-merchant.png"
          alt="Entreprise africaine utilisant Place Fuse"
          fill
          className="object-cover object-center"
          sizes="45vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      {/* chat bubbles */}
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          transition={{ duration: 0.4, delay: b.delay }}
          className={`
            absolute z-20 text-sm font-medium rounded-2xl px-3 py-2 shadow-lg max-w-[220px]
            ${b.text}
            ${b.side === "left" ? "left-[-14%]" : "right-[-10%]"}
          `}
          style={{
            background: b.bg,
            top: i === 0 ? "10%" : i === 1 ? "30%" : "50%",
            animation: `bubbleFloat ${5 + i}s ease-in-out ${b.delay + 0.4}s infinite`,
          }}
        >
          {b.content}
        </motion.div>
      ))}
    </div>
  );
}

// ── Progress dots ────────────────────────────────────────────────────────────
function Dots({ active, total, onClick }: { active: number; total: number; onClick: (i: number) => void }) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className="rounded-full transition-all duration-300"
          style={{
            width:  i === active ? 20 : 6,
            height: 6,
            background: i === active ? "#FE1B00" : "rgba(255,255,255,0.25)",
          }}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const [slide, setSlide] = useState(0);
  const TOTAL = 2;

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % TOTAL), SLIDE_DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-black min-h-screen">

      {/* Grid */}
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

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-[55%] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-50"
          style={{ background: "radial-gradient(circle, #FE1B0026 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center container-site pt-28 pb-16 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <Link
                href="/contact?sujet=demo"
                className="group inline-flex items-center gap-2 border border-white/10 hover:border-white/25 rounded-full px-4 py-1.5 text-white/60 hover:text-white/80 text-sm font-medium transition-colors"
              >
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                Voir un parcours complet, de la question au paiement
                <span className="text-white/30 mx-0.5">·</span>
                <span className="text-brand-accent group-hover:gap-2 transition-all">3 min →</span>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Vos processus tournent seuls.
              <br />
              <span className="text-white/45">Vos équipes traitent ce qui compte.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base text-white/60 leading-relaxed max-w-xl mb-10"
            >
              Place Fuse répond à vos clients, vérifie leur identité, encaisse leurs paiements
              et exécute vos procédures — dans une simple conversation WhatsApp. Ce qui
              demande un jugement humain arrive à la bonne personne, avec le dossier déjà
              complet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Link href="/contact?sujet=demo">
                <Button variant="primary" size="lg" className="bg-white text-black hover:bg-neutral-100 shadow-cta rounded-lg font-bold">
                  Voir Place Fuse en action <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="text-white/70 hover:text-white hover:bg-white/8 rounded-lg">
                  Parler à un expert <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — auto-slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex flex-col"
          >
            {/* slide frame */}
            <div className="relative" style={{ minHeight: 480 }}>
              <AnimatePresence mode="wait">
                {slide === 0 ? (
                  <motion.div
                    key="product"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0"
                  >
                    <SlideProduct />
                  </motion.div>
                ) : (
                  <motion.div
                    key="merchant"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0"
                  >
                    <SlideMerchant />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* dots */}
            <Dots active={slide} total={TOTAL} onClick={setSlide} />
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
