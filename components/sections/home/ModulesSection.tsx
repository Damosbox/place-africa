"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** §1.9 — les modules activables, décrits par ce qu'ils font, pas par leur nom technique. */
const MODULES = [
  {
    slug: "agent-accueil",
    name: "Accueil & orientation",
    meaning: "Un assistant répond à toute heure et dirige chaque demande vers la bonne personne.",
  },
  {
    slug: "recouvrement",
    name: "Recouvrement automatisé",
    meaning: "Vos échéances sont relancées seules, avec un lien pour payer immédiatement.",
  },
  {
    slug: "notifications",
    name: "Notifications sortantes",
    meaning: "Vos clients sont prévenus automatiquement — confirmation, rappel, alerte.",
  },
  {
    slug: "vente-souscription",
    name: "Vente & souscription",
    meaning: "Le client choisit, paie et reçoit son contrat dans la même conversation.",
  },
  {
    slug: "incidents",
    name: "Déclaration & suivi d'incidents",
    meaning: "Le client signale un problème, joint photos et position, et suit la résolution.",
  },
  {
    slug: "workflows-metiers",
    name: "Workflows métier",
    meaning: "Vos procédures internes s'exécutent seules : documents, validations, réconciliation.",
  },
  {
    slug: "satisfaction-nps",
    name: "Satisfaction client",
    meaning: "Vous savez ce que pensent vos clients, sans attendre qu'ils se plaignent.",
  },
];

export function ModulesSection() {
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
            Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Vous activez ce dont vous avez besoin, quand vous en avez besoin
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-neutral-200 overflow-hidden">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.3) }}
            >
              <Link
                href={`/solutions/${m.slug}`}
                className={`group grid grid-cols-1 sm:grid-cols-[minmax(0,280px)_1fr_auto] gap-2 sm:gap-8 items-center px-6 py-5 hover:bg-neutral-50 transition-colors ${
                  i > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <span className="text-base font-bold text-neutral-900 group-hover:text-brand-accent transition-colors">
                  {m.name}
                </span>
                <span className="text-sm text-neutral-600 leading-relaxed">
                  {m.meaning}
                </span>
                <ArrowRight
                  size={16}
                  className="hidden sm:block text-neutral-300 group-hover:text-brand-accent transition-colors shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-neutral-500 mt-8 max-w-2xl leading-relaxed"
        >
          Un module aujourd&apos;hui, trois de plus dans six mois —{" "}
          <span className="text-neutral-900 font-semibold">
            sans refonte, sans nouveau projet.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
