"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, HelpCircle, MessagesSquare, ArrowRight } from "lucide-react";
import { EMAIL, PHONE_DISPLAY } from "@/lib/content/contact";

/**
 * Contact. Chaque option préremplit le sujet du formulaire (`?sujet=`).
 * L'« audit gratuit » et le « proof-of-concept » de la V3 ont été retirés : les
 * supports d'octobre proposent un pilote de 90 jours, présenté juste au-dessus
 * (`PilotSection`).
 */
const START_OPTIONS = [
  {
    icon: Play,
    title: "Démonstration accompagnée",
    desc: "Un membre de l'équipe vous présente en direct les parcours de votre secteur.",
    cta: "Demander une démonstration",
    href: "/contact?sujet=demo",
  },
  {
    icon: HelpCircle,
    title: "Une question précise",
    desc: "Sécurité, conformité, intégration à vos systèmes : posez-nous votre question, nous répondons par écrit.",
    cta: "Poser votre question",
    href: "/contact?sujet=autre",
  },
  {
    icon: MessagesSquare,
    title: "Tarification sur mesure",
    desc: "Le prix dépend des parcours retenus et de vos volumes : nous l'établissons avec vous.",
    cta: "Demander une proposition",
    href: "/contact?sujet=tarifs",
  },
];

export function CtaSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Nous contacter
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Par où commencer ?
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Dites-nous où vous en êtes : nous revenons vers vous avec la bonne personne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {START_OPTIONS.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all p-6"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-5">
                  <opt.icon size={20} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{opt.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{opt.desc}</p>
              </div>
              <Link
                href={opt.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all"
              >
                {opt.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-white/30 mt-10"
        >
          {EMAIL} · {PHONE_DISPLAY} · www.place.africa
        </motion.p>
      </div>
    </section>
  );
}
