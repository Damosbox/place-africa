"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const features = [
  "Recouvrement automatisé",
  "Vente & souscription",
  "Gestion d'incidents",
  "Notifications clients",
  "Paiement intégré",
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produits" ref={ref} className="section-padding bg-neutral-50">
      <div className="container-site">
        <div className="mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">
            Notre produit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Un outil pour automatiser la relation client
          </h2>
          <p className="text-neutral-500 max-w-xl text-lg">
            Une plateforme conversationnelle B2B à IA native, qui transforme
            WhatsApp en infrastructure métier.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-neutral-200 p-8 sm:p-12 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start"
        >
          {/* Left — identity */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-2 bg-neutral-100 text-neutral-500">
                  Plateforme B2B
                </span>
                <h3 className="text-3xl font-bold text-neutral-900">Docaya</h3>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold text-neutral-900 mb-3 leading-snug">
                Votre entreprise automatisée sur votre outil favori : WhatsApp.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                DOCAYA est une plateforme conversationnelle B2B à IA native
                qui transforme WhatsApp en infrastructure métier —
                automatisation des processus clients, paiements intégrés,
                recouvrement automatisé.
              </p>
            </div>

            <Link href="/plateforme" className="mt-2">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-all">
                Découvrir Docaya
                <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          {/* Right — features */}
          <div className="w-full lg:w-[380px] shrink-0">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Modules phares
            </h4>
            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
