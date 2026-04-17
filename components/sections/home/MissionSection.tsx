"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Network, Sparkles } from "lucide-react";

const windows = [
  {
    icon: Compass,
    title: "Conçus pour un marché différent",
    body: "La plupart des outils digitaux échouent en Afrique parce qu'ils ont été conçus pour des marchés stables. L'Afrique de l'Ouest n'est pas un marché instable — c'est un marché différent. Avec ses propres logiques, ses propres forces, ses propres opportunités.\n\nConnexion intermittente, commerce de proximité, confiance construite par la conversation plutôt que par le contrat écrit. On ne contourne pas ces réalités. On construit pour elles.",
    anchor: "Nos produits fonctionnent là où les solutions classiques s'arrêtent.",
  },
  {
    icon: Network,
    title: "Structurer ce qui reste invisible",
    body: "En Afrique de l'Ouest, des millions de transactions se font chaque jour sans laisser de trace. Pas de donnée, pas de relation formalisée, pas de pont entre ce qu'une entreprise offre et ce qu'un consommateur cherche.\n\nCe vide n'est pas une fatalité — c'est une architecture à construire. Celle qui connecte les entreprises à leurs clients, les services à ceux qui en ont besoin, les opportunités à ceux qui peuvent les saisir.",
    anchor: "Notre mission : être cette architecture.",
  },
  {
    icon: Sparkles,
    title: "L'IA comme moteur, pas comme option",
    body: "La plupart des solutions digitales ont numérisé des processus existants — des formulaires en ligne, des agences virtuelles, des procédures copiées du monde physique. On a fait le choix inverse.\n\nNos outils intègrent l'intelligence artificielle nativement. Pas pour suivre une tendance — parce que c'est la seule façon de rendre des services complexes réellement accessibles : en langage naturel, sans formation, sur les canaux que les Africains utilisent déjà.",
    anchor: "L'IA n'est pas notre futur. C'est ce que nos produits font aujourd'hui.",
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
              className="grid grid-rows-[auto_auto_1fr_auto] h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-7 hover:border-neutral-300 hover:bg-white transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                <w.icon size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-4">
                {w.title}
              </h3>
              <div className="flex flex-col gap-4 text-neutral-600 text-sm leading-relaxed">
                {w.body.split("\n\n").map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-200">
                <p className="text-sm font-semibold text-brand-accent leading-snug">
                  {w.anchor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
