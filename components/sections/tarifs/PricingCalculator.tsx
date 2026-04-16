"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/utils/cn";

const modulesList = [
  "Agent d'Accueil & Orientation",
  "Recouvrement Automatisé",
  "Notifications Sortantes",
  "Vente & Souscription",
  "Déclaration & Suivi d'Incidents",
  "Workflows Métiers Spécialisés",
  "Enquête de Satisfaction (NPS)",
];

const PLATFORM_FEE = 50_000;
const MODULE_PRICE = 25_000;
const USER_PRICE = 5_000;
const MESSAGE_PRICE = 0.002; // FCFA per message

const FCFA_TO_USD = 1 / 600;

function formatFCFA(n: number) {
  return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " FCFA";
}

function formatUSD(n: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}

function Slider({ label, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-700">{label}</span>
        <span className="text-sm font-bold text-brand tabular-nums">
          {format(value)}
        </span>
      </div>
      <div className="relative h-2 bg-neutral-200 rounded-full">
        <div
          className="absolute h-2 bg-brand rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
          aria-label={label}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-brand rounded-full shadow-md transition-all pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-neutral-400">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export function PricingCalculator() {
  const [messages, setMessages] = useState(10_000);
  const [activeModules, setActiveModules] = useState(2);
  const [users, setUsers] = useState(5);

  const breakdown = useMemo(() => {
    const messageCost = messages * MESSAGE_PRICE;
    const moduleCost = activeModules * MODULE_PRICE;
    const userCost = users * USER_PRICE;
    const total = PLATFORM_FEE + messageCost + moduleCost + userCost;
    return { messageCost, moduleCost, userCost, total };
  }, [messages, activeModules, users]);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-site max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">Configurateur de prix</SectionTag>
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">
            Estimez votre budget en temps réel
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Ajustez les curseurs selon votre usage. Le prix s&apos;adapte instantanément.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sliders */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-8 flex flex-col gap-8">
            <Slider
              label="Messages envoyés / mois"
              value={messages}
              min={1_000}
              max={100_000}
              step={1_000}
              onChange={setMessages}
              format={(v) =>
                new Intl.NumberFormat("fr-FR").format(v) + " msgs"
              }
            />

            <div>
              <Slider
                label="Modules activés"
                value={activeModules}
                min={1}
                max={7}
                step={1}
                onChange={setActiveModules}
                format={(v) => `${v} module${v > 1 ? "s" : ""}`}
              />
              <div className="mt-3 flex flex-wrap gap-1.5">
                {modulesList.slice(0, activeModules).map((m) => (
                  <span
                    key={m}
                    className="text-xs bg-brand-subtle text-brand px-2 py-0.5 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <Slider
              label="Utilisateurs / agents"
              value={users}
              min={1}
              max={50}
              step={1}
              onChange={setUsers}
              format={(v) => `${v} utilisateur${v > 1 ? "s" : ""}`}
            />
          </div>

          {/* Estimation card */}
          <div className="flex flex-col gap-4">
            <div className="bg-hero-gradient rounded-3xl p-8 text-white flex-1">
              <div className="text-white/70 text-sm font-medium mb-2">
                Estimation mensuelle
              </div>
              <div
                key={breakdown.total}
                className="text-4xl font-bold mb-1 transition-all"
              >
                {formatFCFA(breakdown.total)}
              </div>
              <div className="text-white/60 text-sm mb-8">
                ≈ {formatUSD(breakdown.total * FCFA_TO_USD)} / mois
              </div>

              {/* Breakdown */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  {
                    label: "Frais de plateforme",
                    value: PLATFORM_FEE,
                  },
                  {
                    label: `${activeModules} module${activeModules > 1 ? "s" : ""}`,
                    value: breakdown.moduleCost,
                  },
                  {
                    label: `${new Intl.NumberFormat("fr-FR").format(messages)} messages`,
                    value: breakdown.messageCost,
                  },
                  {
                    label: `${users} utilisateur${users > 1 ? "s" : ""}`,
                    value: breakdown.userCost,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium tabular-nums">
                      {formatFCFA(item.value)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3 flex items-center justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-white font-bold tabular-nums">
                    {formatFCFA(breakdown.total)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="md"
                    className="bg-white text-brand hover:bg-white/90 w-full"
                  >
                    Demander un devis précis
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/2250701795666?text=Bonjour%2C%20je%20souhaite%20un%20devis%20Docaya."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="md" className="w-full">
                    <MessageCircle size={16} />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className={cn(
                "flex items-start gap-2 bg-white rounded-2xl border border-neutral-200 p-4"
              )}
            >
              <Info size={16} className="text-neutral-400 shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-500 leading-relaxed">
                Cette estimation est indicative. Les frais Meta WhatsApp Business
                sont facturés séparément. Le devis final est établi après analyse
                de vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
