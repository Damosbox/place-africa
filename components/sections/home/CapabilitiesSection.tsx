"use client";

import { motion } from "framer-motion";
import { Sparkles, Wallet, Send, ScanFace } from "lucide-react";

/** §1.4 — les quatre briques qui rendent la promesse possible. */
const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "L'intelligence artificielle comprend, répond — et sait passer la main",
    body: "Votre client écrit comme il parle. L'assistant comprend sa demande, répond aux questions courantes à toute heure, collecte les informations nécessaires. Sur les cas sensibles, il transmet à un agent humain avec tout le contexte : rien à redemander au client, rien à rechercher.",
  },
  {
    icon: Wallet,
    title: "Le paiement se fait dans la discussion",
    body: "Wave, Orange Money, MTN Momo, Moov Money, carte bancaire ou virement. Le client paie en deux gestes, reçoit son reçu, et le paiement se rapproche automatiquement de votre système de gestion.",
  },
  {
    icon: Send,
    title: "Les messages partent tout seuls, au bon moment",
    body: "Rappel avant l'échéance, confirmation après paiement, alerte en cas d'incident, relance d'un dossier incomplet. Personne n'écrit ces messages à la main.",
  },
  {
    icon: ScanFace,
    title: "L'identité est vérifiée sans déplacement",
    body: "Pièce d'identité photographiée et authentifiée, visage comparé au document, vérification que la personne est bien réelle et présente. Le contrôle se fait dans la conversation, en quelques secondes.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="section-padding bg-white border-b border-neutral-100">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
            Ce qui rend la promesse possible
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Quatre capacités, une seule conversation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 hover:border-neutral-300 hover:bg-white transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                <c.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-3">
                {c.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-neutral-500 mt-10 max-w-2xl"
        >
          Ce qui change d&apos;un métier à l&apos;autre, c&apos;est la configuration.{" "}
          <span className="text-neutral-900 font-semibold">Jamais la technologie.</span>
        </motion.p>
      </div>
    </section>
  );
}
