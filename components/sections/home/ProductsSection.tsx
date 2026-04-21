"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const STORY_STEPS = [
  {
    id: "chat",
    num: "01",
    title: "Le client entre par WhatsApp",
    desc: "L'IA qualifie sa demande en quelques secondes.",
    image: "/images/Picture3.png",
    chip: "Conversation",
  },
  {
    id: "form",
    num: "02",
    title: "Il choisit sa formule en 3 écrans",
    desc: "Formule, récapitulatif, paiement dans la conversation.",
    image: "/images/Picture5.png",
    chip: "Souscription",
  },
  {
    id: "inbox",
    num: "03",
    title: "Vos équipes gèrent depuis un seul écran",
    desc: "Tickets, devis, contrats — tout remonte avec le statut.",
    image: "/images/Picture4.png",
    chip: "Back-office",
  },
  {
    id: "kpi",
    num: "04",
    title: "Vous pilotez les résultats",
    desc: "KPI en temps réel par canal et apporteur.",
    image: "/images/Picture6.png",
    chip: "Pilotage",
  },
];

export function ProductsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % STORY_STEPS.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      id="produits"
      className="bg-neutral-50 py-20 px-4 sm:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">
            Notre produit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            D&apos;un message WhatsApp à l&apos;encaissement.
          </h2>
          <p className="text-neutral-500 max-w-2xl text-lg">
            Exemple : parcours assurance auto, de la première question au paiement Wave.
          </p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">

          {/* Steps list */}
          <div className="flex flex-col gap-1.5">
            {STORY_STEPS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className="text-left p-4 rounded-2xl transition-all"
                style={{
                  background: i === active ? "white" : "transparent",
                  border: i === active ? "1px solid #E5E5E5" : "1px solid transparent",
                  boxShadow: i === active ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                }}
              >
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span
                    className="text-xs font-bold font-mono"
                    style={{ color: i === active ? "#FE1B00" : "#A3A3A3" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`text-base font-bold transition-colors ${
                      i === active ? "text-neutral-900" : "text-neutral-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed pl-7 transition-colors ${
                    i === active ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  {s.desc}
                </p>
              </button>
            ))}

            <Link
              href="/plateforme"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all mt-4 px-4"
            >
              Découvrir Docaya
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Big visual */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-xl"
            style={{
              aspectRatio: "5/4",
              background: "linear-gradient(135deg, #0D0B1E 0%, #1A1440 50%, #0A0A1A 100%)",
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
                style={{
                  background: "radial-gradient(circle, #FE1B0055 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Chip */}
            <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              {STORY_STEPS[active].chip}
            </div>

            {/* Images */}
            {STORY_STEPS.map((s, i) => (
              <div
                key={s.id}
                className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-[650ms]"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform:
                    i === active
                      ? "translateY(0) scale(1)"
                      : "translateY(14px) scale(0.97)",
                }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  width={600}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
