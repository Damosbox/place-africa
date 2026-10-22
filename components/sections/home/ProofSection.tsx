"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";

/**
 * Bloc preuve — §1.3 du document de refonte v3.
 *
 * Le client n'est jamais nommé, le résultat l'est.
 *
 * ⚠️ À CONFIRMER AVANT MISE EN LIGNE — les supports d'octobre parlent d'un
 * assureur du Top 5 « en Côte d'Ivoire » (la V3 disait « zone CIMA ») et ne
 * reprennent pas le chiffre « moins de quinze minutes ». Mesure, périmètre et
 * autorisation de publication à faire valider.
 *
 * À FAIRE ÉVOLUER EN PRIORITÉ : un second chiffre observé en production
 * (taux d'encaissement récupéré sur un trimestre, part des demandes traitées
 * sans intervention humaine) vaut plus que toutes les fourchettes de promesse.
 * À collecter auprès de l'équipe déploiement avant mise en ligne.
 */
export function ProofSection() {
  return (
    <section className="bg-neutral-950 border-t border-white/5 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-9 sm:px-10"
        >
          {/* Chiffre */}
          <div className="shrink-0">
            <div className="text-5xl sm:text-6xl font-bold text-white leading-none tracking-tight">
              &lt; 15 <span className="text-3xl sm:text-4xl text-white/50">min</span>
            </div>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-accent mt-3">
              Cycle de souscription
            </p>
          </div>

          {/* Récit */}
          <div className="lg:border-l lg:border-white/10 lg:pl-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              <ShieldCheck size={13} className="text-brand-accent" />
              En production, pas en projet
            </span>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Chez un assureur du Top 5 en Côte d&apos;Ivoire, le cycle de souscription est
              passé de{" "}
              <span className="text-white font-semibold">plusieurs jours</span> à{" "}
              <span className="text-white font-semibold">moins de quinze minutes</span> —
              de la première question du client jusqu&apos;à la remise de son attestation.
            </p>
            <p className="flex items-center gap-2 text-sm text-white/40 mt-5">
              <MapPin size={13} className="shrink-0" />
              En production depuis 2026, sur les branches Vie et Non-Vie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
