"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Info, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/utils/cn";

// ─── Tarification réelle (Docaya-pricing.pdf) ────────────────────────────────

const PLATFORM_TIERS = [
  { maxUsers: 5_000,   price: 38_000,  label: "< 5 000 utilisateurs" },
  { maxUsers: 10_000,  price: 60_000,  label: "< 10 000 utilisateurs" },
  { maxUsers: 20_000,  price: 95_000,  label: "< 20 000 utilisateurs" },
  { maxUsers: 50_000,  price: 170_000, label: "< 50 000 utilisateurs" },
  { maxUsers: 100_000, price: 335_000, label: "< 100 000 utilisateurs" },
];

const WA_INCOMING_PRICE = 15;  // FCFA / fenêtre 24h
const WA_OUTGOING_PRICE = 30;  // FCFA / fenêtre 24h

type SmsOperator = "orange" | "mtn" | "moov";

const SMS_TIERS: Record<SmsOperator, { minVol: number; price: number }[]> = {
  orange: [
    { minVol: 1_000,  price: 12 },
    { minVol: 5_000,  price: 11 },
    { minVol: 10_000, price: 10 },
    { minVol: 50_000, price: 9  },
  ],
  mtn: [
    { minVol: 1_000,  price: 17 },
    { minVol: 5_000,  price: 15 },
    { minVol: 10_000, price: 14 },
    { minVol: 50_000, price: 12 },
  ],
  moov: [
    { minVol: 1_000,  price: 17 },
    { minVol: 5_000,  price: 15 },
    { minVol: 10_000, price: 14 },
    { minVol: 50_000, price: 12 },
  ],
};

const CONFIG_OPTIONS = [
  { id: "none",     label: "Sans configuration", price: 0 },
  { id: "basique",  label: "Flow basique",        price: 500_000 },
  { id: "medium",   label: "Flow medium",         price: 1_000_000 },
  { id: "complexe", label: "Flow complexe",        price: 2_000_000 },
] as const;

type ConfigId = (typeof CONFIG_OPTIONS)[number]["id"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getPlatformPrice(users: number) {
  return (
    PLATFORM_TIERS.find((t) => users <= t.maxUsers) ?? PLATFORM_TIERS[PLATFORM_TIERS.length - 1]
  );
}

function getSmsUnitPrice(operator: SmsOperator, volume: number) {
  const tiers = SMS_TIERS[operator];
  let price = tiers[0].price;
  for (const tier of tiers) {
    if (volume >= tier.minVol) price = tier.price;
  }
  return price;
}

function formatFCFA(n: number) {
  return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " FCFA";
}

function formatNum(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

// ─── Slider ──────────────────────────────────────────────────────────────────

interface SliderProps {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}

function Slider({ label, sublabel, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-sm font-medium text-neutral-700">{label}</span>
          {sublabel && <span className="block text-xs text-neutral-400">{sublabel}</span>}
        </div>
        <span className="text-sm font-bold text-brand-accent tabular-nums shrink-0">{format(value)}</span>
      </div>
      <div className="relative h-2 bg-neutral-200 rounded-full">
        <div className="absolute h-2 bg-brand-accent rounded-full transition-all" style={{ width: `${pct}%` }} />
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
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-brand-accent rounded-full shadow-md transition-all pointer-events-none"
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

// ─── BreakdownRow ─────────────────────────────────────────────────────────────

function BreakdownRow({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  if (value === 0) return null;
  return (
    <div className="flex items-center justify-between">
      <span className={cn("text-sm", accent ? "text-white font-semibold" : "text-white/70")}>{label}</span>
      <span className={cn("text-sm tabular-nums", accent ? "text-white font-bold" : "text-white/90 font-medium")}>
        {formatFCFA(value)}
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PricingCalculator() {
  // Plateforme
  const [users, setUsers] = useState(3_000);

  // WhatsApp
  const [waIncoming, setWaIncoming] = useState(500);
  const [waOutgoing, setWaOutgoing] = useState(200);

  // SMS (optionnel)
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [smsOperator, setSmsOperator] = useState<SmsOperator>("orange");
  const [smsVolume, setSmsVolume] = useState(1_000);

  // Configuration (one-time)
  const [configId, setConfigId] = useState<ConfigId>("none");

  const platformTier = useMemo(() => getPlatformPrice(users), [users]);

  const smsUnitPrice = useMemo(
    () => getSmsUnitPrice(smsOperator, smsVolume),
    [smsOperator, smsVolume]
  );

  const breakdown = useMemo(() => {
    const platform = platformTier.price;
    const wa = waIncoming * WA_INCOMING_PRICE + waOutgoing * WA_OUTGOING_PRICE;
    const sms = smsEnabled ? smsVolume * smsUnitPrice : 0;
    const config = CONFIG_OPTIONS.find((c) => c.id === configId)?.price ?? 0;
    const monthly = platform + wa + sms;
    return { platform, wa, sms, config, monthly };
  }, [platformTier, waIncoming, waOutgoing, smsEnabled, smsVolume, smsUnitPrice, configId]);

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

          {/* ── Sliders panel ── */}
          <div className="flex flex-col gap-6">

            {/* Plateforme */}
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Plateforme</span>
              </div>
              <Slider
                label="Nombre d'utilisateurs"
                sublabel={platformTier.label + " — " + formatFCFA(platformTier.price) + "/mois"}
                value={users}
                min={500}
                max={100_000}
                step={500}
                onChange={setUsers}
                format={(v) => formatNum(v) + " utilisateurs"}
              />
              {/* Tier badges */}
              <div className="flex flex-wrap gap-2">
                {PLATFORM_TIERS.map((t) => (
                  <button
                    key={t.maxUsers}
                    onClick={() => setUsers(Math.round(t.maxUsers * 0.5))}
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-lg border transition-colors",
                      users <= t.maxUsers && (PLATFORM_TIERS.find(p => users <= p.maxUsers) === t)
                        ? "bg-brand-accent text-white border-brand-accent"
                        : "bg-neutral-50 text-neutral-500 border-neutral-200 hover:border-brand-accent hover:text-brand-accent"
                    )}
                  >
                    {formatFCFA(t.price)}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">WhatsApp Business</span>
                <span className="text-xs text-neutral-400">· fenêtre 24h</span>
              </div>
              <Slider
                label="Conversations entrantes"
                sublabel={`${WA_INCOMING_PRICE} FCFA / conversation`}
                value={waIncoming}
                min={0}
                max={5_000}
                step={50}
                onChange={setWaIncoming}
                format={(v) => formatNum(v) + " conv."}
              />
              <Slider
                label="Notifications sortantes"
                sublabel={`${WA_OUTGOING_PRICE} FCFA / notification`}
                value={waOutgoing}
                min={0}
                max={5_000}
                step={50}
                onChange={setWaOutgoing}
                format={(v) => formatNum(v) + " notifs"}
              />
            </div>

            {/* SMS (optionnel) */}
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 flex flex-col gap-5">
              <button
                onClick={() => setSmsEnabled((v) => !v)}
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">SMS (optionnel)</span>
                <ChevronDown
                  size={16}
                  className={cn("text-neutral-400 transition-transform", smsEnabled && "rotate-180")}
                />
              </button>

              {smsEnabled && (
                <>
                  {/* Operator selector */}
                  <div className="flex gap-2">
                    {(["orange", "mtn", "moov"] as SmsOperator[]).map((op) => (
                      <button
                        key={op}
                        onClick={() => setSmsOperator(op)}
                        className={cn(
                          "flex-1 py-2 rounded-xl text-sm font-semibold border transition-colors capitalize",
                          smsOperator === op
                            ? "bg-brand-accent text-white border-brand-accent"
                            : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-brand-accent"
                        )}
                      >
                        {op}
                      </button>
                    ))}
                  </div>
                  <Slider
                    label="Volume SMS / mois"
                    sublabel={`${smsUnitPrice} FCFA / SMS (tarif dégressif)`}
                    value={smsVolume}
                    min={1_000}
                    max={50_000}
                    step={1_000}
                    onChange={setSmsVolume}
                    format={(v) => formatNum(v) + " SMS"}
                  />
                </>
              )}
            </div>

            {/* Configuration (one-time) */}
            <div className="bg-white rounded-3xl border border-neutral-200 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-4">
                Configuration (one-time)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {CONFIG_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setConfigId(opt.id)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-colors",
                      configId === opt.id
                        ? "bg-neutral-950 border-neutral-950 text-white"
                        : "bg-neutral-50 border-neutral-200 hover:border-neutral-400"
                    )}
                  >
                    <span className={cn("text-xs font-semibold block", configId === opt.id ? "text-white" : "text-neutral-700")}>
                      {opt.label}
                    </span>
                    {opt.price > 0 && (
                      <span className={cn("text-xs mt-0.5 block", configId === opt.id ? "text-white/60" : "text-neutral-400")}>
                        {formatFCFA(opt.price)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Estimation panel ── */}
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-950 rounded-3xl p-8 text-white flex-1">

              {/* Monthly total */}
              <div className="text-white/60 text-sm font-medium mb-1">Abonnement mensuel</div>
              <div className="text-4xl font-bold mb-6">{formatFCFA(breakdown.monthly)}</div>

              <div className="flex flex-col gap-3 mb-6">
                <BreakdownRow label={`Plateforme (${formatNum(users)} utilisateurs)`} value={breakdown.platform} />
                <BreakdownRow label={`WhatsApp (${formatNum(waIncoming + waOutgoing)} fenêtres)`} value={breakdown.wa} />
                {smsEnabled && (
                  <BreakdownRow label={`SMS ${smsOperator} (${formatNum(smsVolume)} SMS)`} value={breakdown.sms} />
                )}
                <div className="border-t border-white/15 pt-3">
                  <BreakdownRow label="Total / mois" value={breakdown.monthly} accent />
                </div>
              </div>

              {/* Config one-time */}
              {breakdown.config > 0 && (
                <div className="bg-white/8 rounded-2xl p-4 mb-6">
                  <div className="text-white/60 text-xs font-medium mb-1">Frais de configuration (one-time)</div>
                  <div className="text-xl font-bold">{formatFCFA(breakdown.config)}</div>
                  <div className="text-white/50 text-xs mt-0.5">
                    {CONFIG_OPTIONS.find((c) => c.id === configId)?.label}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Link href="/contact">
                  <Button variant="ghost" size="md" className="bg-white text-neutral-900 hover:bg-neutral-100 w-full">
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

            <div className="flex items-start gap-2 bg-white rounded-2xl border border-neutral-200 p-4">
              <Info size={16} className="text-neutral-400 shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-500 leading-relaxed">
                Estimation indicative basée sur la grille tarifaire Docaya. Les frais Meta WhatsApp Business
                sont facturés séparément. Le devis final est établi après analyse de vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
