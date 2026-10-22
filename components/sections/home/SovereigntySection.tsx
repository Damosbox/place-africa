"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server, ScrollText, WifiOff, UserCheck } from "lucide-react";

/**
 * §1.10 — souveraineté, sécurité et continuité.
 *
 * ⚠️ À VALIDER AVANT MISE EN LIGNE — la formulation exacte sur l'hébergement et
 * les certifications doit être confirmée par l'équipe technique. Ne rien affirmer
 * qui ne soit pas tenable : une promesse de conformité non vérifiée est bien plus
 * dangereuse qu'un silence.
 *
 * Ce bloc répond à l'objection n°1 des acheteurs publics et bancaires. Sans lui,
 * un dossier peut être écarté avant même la démonstration.
 */
const PILLARS = [
  {
    icon: Server,
    title: "Hébergement et souveraineté",
    body: "Place Côte d'Ivoire est une entreprise ivoirienne. Vos données sont traitées conformément à la réglementation nationale sur la protection des données personnelles, et nous nous conformons aux exigences de l'autorité de régulation. Pour les organisations qui l'exigent, un déploiement dédié permet de garder les données sensibles dans votre propre environnement.",
  },
  {
    icon: ScrollText,
    title: "Traçabilité complète",
    body: "Chaque action est enregistrée : qui a fait quoi, quand, avec quelle autorisation. Ce journal est infalsifiable et exportable — ce qu'il faut pour répondre à un contrôle.",
  },
  {
    icon: WifiOff,
    title: "Quand la connexion coupe",
    body: "Nos parcours sont conçus pour des réseaux irréguliers. Aucune démarche entamée n'est perdue : ce qui n'a pas pu être transmis est mis en attente et repris automatiquement, sans doublon.",
  },
  {
    icon: UserCheck,
    title: "Consentement et droits des personnes",
    body: "Vos clients savent à quoi ils consentent et peuvent revenir dessus. Les durées de conservation sont paramétrables selon vos obligations.",
  },
];

export function SovereigntySection() {
  return (
    <section className="section-padding bg-neutral-950">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
            Souveraineté, sécurité et continuité
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Vos données restent les vôtres
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5">
                <p.icon size={20} className="text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/contact?sujet=securite">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white text-black font-bold text-sm px-5 py-3 hover:bg-neutral-100 transition-colors">
              Poser vos questions de sécurité à notre équipe <ArrowRight size={15} />
            </span>
          </Link>
          <Link
            href="/plateforme/securite"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors"
          >
            Tout savoir sur la sécurité et les données <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
