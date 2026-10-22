"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** §1.5 — ce qui prenait des jours prend maintenant des minutes. */
const ROWS: [string, string][] = [
  [
    "Le client se déplace, fait la queue, dépose un dossier papier",
    "Il écrit sur WhatsApp, photographie ses pièces, reste chez lui",
  ],
  [
    "Un agent ressaisit les informations dans le système",
    "Elles sont lues et écrites automatiquement dans votre système",
  ],
  [
    "La vérification d'identité demande un rendez-vous",
    "Elle se fait en quelques secondes, dans la conversation",
  ],
  [
    "Le paiement suppose un passage en caisse ou un virement à pointer",
    "Le client paie en deux gestes, le rapprochement est automatique",
  ],
  [
    "Le client rappelle pour savoir où en est son dossier",
    "Il est notifié à chaque étape et consulte son suivi quand il veut",
  ],
  [
    "Les relances dépendent de la disponibilité d'une personne",
    "Elles partent seules, à la bonne date, avec le lien de paiement dedans",
  ],
  [
    "Les cas délicats se perdent dans la masse",
    "Ils sont détectés, priorisés et remontés au bon niveau",
  ],
];

export function BeforeAfterSection() {
  return (
    <section className="bg-neutral-950 py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-12 max-w-2xl"
        >
          Ce qui prenait des jours
          <br />
          <span className="text-white/40">prend maintenant des minutes.</span>
        </motion.h2>

        {/* En-têtes de colonnes — masqués en mobile, la carte les porte */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 mb-4 px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-white/30">
            Avant
          </span>
          <span className="w-5" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Avec Place Fuse
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {ROWS.map(([before, after], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.25) }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-center rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5"
            >
              <p className="text-sm text-white/40 leading-relaxed line-through decoration-white/20 decoration-1">
                {before}
              </p>
              <ArrowRight
                size={16}
                className="text-brand-accent shrink-0 rotate-90 md:rotate-0"
              />
              <p className="text-sm text-white leading-relaxed font-medium">{after}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
