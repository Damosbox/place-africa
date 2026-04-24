"use client";

import { motion } from "framer-motion";
import { UserX, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: UserX,
    title: "Des clients perdus avant même de commencer",
    desc: "Des prospects abandonnent en cours de souscription, freinés par des étapes trop longues ou des canaux trop dispersés.",
  },
  {
    icon: AlertCircle,
    title: "Des paiements qui attendent",
    desc: "Des factures restent impayées faute de relances envoyées au bon moment, sur le bon canal, avec le bon lien de paiement.",
  },
  {
    icon: Clock,
    title: "Des heures perdues sur des tâches répétitives",
    desc: "Vos équipes passent un temps précieux à répondre aux mêmes questions et à saisir des informations que Docaya traite en quelques secondes.",
  },
];

export function PainPointsSection() {
  return (
    <section className="bg-neutral-950 py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4 max-w-2xl">
            Vos clients vivent sur WhatsApp.
            <br />
            <span className="text-white/40">Pourquoi vos processus sont-ils encore ailleurs&nbsp;?</span>
          </h2>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PAIN_POINTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-white/4 p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-brand-accent" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Resolution baseline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-5"
        >
          <p className="text-white/70 text-sm leading-relaxed max-w-xl">
            <span className="text-white font-semibold">Docaya</span> connecte votre métier à WhatsApp
            et automatise le reste — acquisition, vente, recouvrement, service client.{" "}
            <span className="text-white/40">Sans développement. En 4 à 8 semaines.</span>
          </p>
          <Link
            href="/plateforme"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
          >
            Voir la plateforme <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
