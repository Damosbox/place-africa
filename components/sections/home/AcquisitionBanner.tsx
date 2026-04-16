"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  Bell,
  ShoppingBag,
  AlertCircle,
  FileText,
  Smile,
  Wallet,
} from "lucide-react";

const modules = [
  {
    icon: MessageCircle,
    title: "Accueil & Orientation",
    desc: "FAQ, prise de RDV, pré-qualification automatisés",
  },
  {
    icon: Wallet,
    title: "Recouvrement automatisé",
    desc: "Relances programmées + lien de paiement intégré",
  },
  {
    icon: Bell,
    title: "Notifications sortantes",
    desc: "Transactionnelles & campagnes marketing",
  },
  {
    icon: ShoppingBag,
    title: "Vente & Souscription",
    desc: "Tunnel complet : sélection → paiement",
  },
  {
    icon: AlertCircle,
    title: "Déclaration & Suivi d'incidents",
    desc: "Parcours guidé + suivi en temps réel",
  },
  {
    icon: FileText,
    title: "Workflows métiers",
    desc: "Documents, reversements, réconciliation automatique",
  },
  {
    icon: Smile,
    title: "Satisfaction client (NPS)",
    desc: "Enquêtes automatisées post-événement",
  },
];

const sectors = [
  "Assurances",
  "Banques",
  "Immobilier",
  "Éducation",
  "Logistique",
  "Retail",
  "Mutuelles",
  "Transport aérien",
  "Distribution",
  "Secteur public",
];

export function AcquisitionBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-site">
        {/* Transition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-sm text-neutral-400 italic mb-6 max-w-xl"
        >
          Voici ce que « L&apos;IA comme moteur » veut dire en pratique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden relative"
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
              Premier produit · Place Africa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl">
              DOCAYA transforme WhatsApp en infrastructure métier.
            </h2>
            <div className="flex flex-col gap-4 text-white/70 text-lg leading-relaxed max-w-3xl mb-14">
              <p>
                Vos clients sont déjà sur WhatsApp. Vos processus métiers —
                relances, paiements, souscriptions, incidents, notifications —
                ne le sont pas encore.
              </p>
              <p>
                DOCAYA change ça. Une plateforme conversationnelle B2B qui
                intègre l&apos;intelligence artificielle, les paiements mobiles
                et l&apos;automatisation de vos workflows directement dans
                WhatsApp. Sans développement lourd. Sans formation complexe.
                Sans changer vos outils existants.
              </p>
            </div>

            {/* Modules */}
            <div className="mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">
                7 modules activables selon vos besoins
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((m, i) => (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-accent/15 flex items-center justify-center shrink-0">
                      <m.icon size={16} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm">
                        {m.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
                Déployé dans ces secteurs
              </h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href="/plateforme">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-bold text-base hover:bg-neutral-100 transition-all shadow-cta">
                  Découvrir DOCAYA
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/secteurs">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-all">
                  Voir les cas d&apos;usage par secteur
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
