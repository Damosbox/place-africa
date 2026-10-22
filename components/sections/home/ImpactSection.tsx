"use client";

import { motion } from "framer-motion";

/**
 * §1.7 — ce que ça change chez vous.
 *
 * Règle de langage tenue ici : la facilité est vendue côté client, jamais côté
 * produit. On ne dit pas « c'est simple à construire » — ça dévalorise la
 * prestation et invite à négocier le prix. On dit « vos équipes n'ont rien à faire ».
 */
const OUTCOMES = [
  {
    lead: "Vos équipes ne ressaisissent plus rien.",
    body: "Les informations envoyées par le client sont lues, vérifiées et écrites directement dans votre système.",
  },
  {
    lead: "Vos procédures ne dépendent plus de la disponibilité d'une personne.",
    body: "Une relance qui part le bon jour, un dossier qui avance, un document qui se génère : ce sont des règles, plus des tâches.",
  },
  {
    lead: "Vos agents travaillent sur les cas qui en valent la peine.",
    body: "Les demandes courantes sont traitées sans eux. Les cas complexes leur arrivent qualifiés, avec l'historique complet.",
  },
];

export function ImpactSection() {
  return (
    <section className="section-padding bg-neutral-50 border-b border-neutral-100">
      <div className="container-site">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-14 max-w-2xl"
        >
          Ce que ça change chez vous
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {OUTCOMES.map((o, i) => (
            <motion.div
              key={o.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 * i }}
              className="border-t-2 border-neutral-900 pt-6"
            >
              <p className="text-lg font-bold text-neutral-900 leading-snug mb-3">
                {o.lead}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">{o.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm font-semibold text-neutral-900 mt-14"
        >
          Déploiement en quelques semaines.{" "}
          <span className="text-neutral-500 font-normal">
            Sans changer vos outils actuels.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
