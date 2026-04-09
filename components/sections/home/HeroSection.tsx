"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

const channels = ["WhatsApp", "Messenger", "Instagram", "SMS", "Email"];

const channelColors: Record<string, string> = {
  WhatsApp: "#25D366",
  Messenger: "#0084FF",
  Instagram: "#E1306C",
  SMS: "#FF6B35",
  Email: "#6B7280",
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-brand-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
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
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
            Plateforme conversationnelle B2B
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Des conversations{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-light via-purple-300 to-pink-300 bg-clip-text text-transparent">
                impactantes
              </span>
              <span className="absolute -inset-1 bg-white/5 rounded-lg blur-sm" />
            </span>
            <br />
            pour vos clients
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Automatisez vos interactions clients et processus métiers via
            WhatsApp Business API. Chatbots, Agents IA, Paiement intégré —
            une seule plateforme pour tout gérer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Demander une démo
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/plateforme">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white"
              >
                <Play size={16} className="text-brand-light" />
                Découvrir la plateforme
              </Button>
            </Link>
          </motion.div>

          {/* Channel pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-white/50 text-sm mr-2">Disponible sur</span>
            {channels.map((channel, i) => (
              <motion.div
                key={channel}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: channelColors[channel] }}
                />
                <span className="text-white text-xs font-medium">{channel}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mockup illustration */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Dashboard mockup */}
            <div className="bg-[#1A1350]/90 backdrop-blur-md p-4 sm:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand rounded-lg" />
                  <div>
                    <div className="h-2.5 w-20 bg-white/20 rounded" />
                    <div className="h-2 w-14 bg-white/10 rounded mt-1.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-24 bg-brand/30 rounded-lg" />
                  <div className="h-7 w-7 bg-white/10 rounded-lg" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Conversations", value: "1,247", change: "+12%" },
                  { label: "Taux d'ouverture", value: "94%", change: "+2%" },
                  { label: "Paiements reçus", value: "3.2M FCFA", change: "+18%" },
                  { label: "NPS Score", value: "72", change: "+5pts" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                    <div className="text-white/50 text-xs mb-1">{stat.label}</div>
                    <div className="text-white font-bold text-lg leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-emerald-400 text-xs">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Content area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Conversation list */}
                <div className="sm:col-span-1 bg-white/5 rounded-xl p-3 space-y-2">
                  <div className="text-white/50 text-xs font-medium mb-3">Conversations récentes</div>
                  {[
                    { name: "Kouassi A.", status: "Paiement", color: "#25D366" },
                    { name: "Diallo M.", status: "En attente", color: "#F59E0B" },
                    { name: "Bamba F.", status: "Résolu", color: "#6B7280" },
                    { name: "Koné S.", status: "Nouveau", color: "#4A3AFF" },
                  ].map((conv) => (
                    <div key={conv.name} className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white/10 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white/70 text-xs truncate">{conv.name}</div>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: conv.color + "33", color: conv.color }}
                      >
                        {conv.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="sm:col-span-2 bg-white/5 rounded-xl p-3">
                  <div className="text-white/50 text-xs font-medium mb-3">Conversions cette semaine</div>
                  <div className="flex items-end gap-1.5 h-24">
                    {[35, 52, 68, 45, 82, 71, 90].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div
                          className="rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 6
                              ? "linear-gradient(180deg, #6B5EFF, #4A3AFF)"
                              : "rgba(255,255,255,0.15)",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["L", "M", "M", "J", "V", "S", "D"].map((d) => (
                      <span key={d} className="text-white/30 text-xs flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats floating */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: ">90%", label: "Taux d'ouverture WhatsApp" },
              { value: "7", label: "Modules activables" },
              { value: "8", label: "Secteurs couverts" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
