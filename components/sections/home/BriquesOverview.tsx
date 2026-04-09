"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Brain,
  Bell,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { briques } from "@/lib/content/platform";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={24} />,
  Bot: <Bot size={24} />,
  Brain: <Brain size={24} />,
  Bell: <Bell size={24} />,
  CreditCard: <CreditCard size={24} />,
};

const channelColorMap: Record<string, string> = {
  WhatsApp: "#25D366",
  Messenger: "#0084FF",
  Instagram: "#E1306C",
  SMS: "#FF6B35",
  Email: "#6366F1",
};

export function BriquesOverview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-site">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTag className="mb-4">Technologie</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              5 briques fondamentales,<br />une seule plateforme
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Architecture modulaire — seule la configuration change d'un
              secteur à l'autre, pas la technologie.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {briques.map((brique, i) => (
            <motion.div
              key={brique.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {iconMap[brique.icon]}
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">
                {brique.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {brique.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {brique.channels.map((ch) => (
                  <span
                    key={ch}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: (channelColorMap[ch] || "#6B7280") + "15",
                      color: channelColorMap[ch] || "#6B7280",
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-brand-gradient rounded-2xl p-6 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Tout en un seul endroit</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Dashboard unifié, ticketing, paiements, analytics — tout est
                centralisé dans Docaya.
              </p>
            </div>
            <Link
              href="/plateforme"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white hover:gap-3 transition-all"
            >
              Explorer la plateforme
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
