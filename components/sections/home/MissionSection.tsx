"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Network, Sparkles } from "lucide-react";

/** §1.8 — positionnement, conservé mais raccourci. */
const windows = [
  {
    icon: Compass,
    title: "On construit pour l'Afrique, pas pour l'adapter",
    body: "La plupart des outils numériques viennent d'ailleurs et s'adaptent mal ici : connexion qui coupe, confiance qui se construit en parlant plutôt qu'en signant, commerce de proximité. Place Fuse est pensé pour ces réalités dès le départ.",
  },
  {
    icon: Network,
    title: "On structure ce qui n'était nulle part",
    body: "Des millions d'échanges se font chaque jour sans laisser de trace : pas de dossier, pas de suivi, pas de donnée. Chaque conversation Place Fuse devient un dossier tracé et exploitable.",
  },
  {
    icon: Sparkles,
    title: "L'IA fait tourner le produit, elle ne le décore pas",
    body: "Nos outils n'ont pas numérisé des formulaires existants. L'intelligence artificielle est ce qui permet à quelqu'un de faire une démarche complexe en parlant normalement, sans formation.",
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white border-b border-neutral-100">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-5">
            Notre positionnement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Ce qui nous différencie
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {windows.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="grid grid-rows-[auto_auto_1fr] h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-7 hover:border-neutral-300 hover:bg-white transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                <w.icon size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-4">
                {w.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
