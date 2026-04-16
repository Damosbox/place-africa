"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShoppingBag, MessageCircle } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

const products = [
  {
    id: "point",
    icon: ShoppingBag,
    tag: "Application mobile",
    name: "Point",
    headline: "La caisse intelligente pour les commerçants",
    description:
      "Gérez vos commandes, stocks, caisse, encaissements, dépenses, employés et clients depuis une seule application. Simple, rapide, pensé pour les propriétaires de TPE.",
    features: [
      "Gestion des commandes",
      "Suivi des stocks",
      "Caisse & encaissement",
      "Rapport de vente",
    ],
    cta: "Découvrir Point",
    href: "/contact",
    accentColor: "bg-brand-accent-subtle border-brand-accent/20",
    iconColor: "bg-brand-accent text-white",
    tagColor: "bg-brand-accent/10 text-brand-accent",
  },
  {
    id: "docaya",
    icon: MessageCircle,
    tag: "Plateforme B2B",
    name: "Docaya",
    headline: "La relation client conversationnelle",
    description:
      "Automatisez vos interactions clients via WhatsApp Business API. Chatbots, Agents IA, Notifications sortantes, Paiement intégré — une plateforme pour tous vos processus métiers.",
    features: [
      "WhatsApp Business API",
      "Chatbots & Agents IA",
      "Notifications clients",
      "Paiement intégré",
    ],
    cta: "Découvrir Docaya",
    href: "/plateforme",
    accentColor: "bg-brand-subtle border-brand/20",
    iconColor: "bg-brand text-white",
    tagColor: "bg-brand-subtle text-brand",
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produits" ref={ref} className="section-padding bg-neutral-50">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Nos produits</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Des outils pour chaque étape
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
            De la gestion quotidienne du commerce à l&apos;automatisation de la
            relation client — Place Africa couvre tout le cycle de vie du
            commerçant africain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-3xl border p-8 flex flex-col gap-6 ${product.accentColor}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${product.iconColor}`}
                >
                  <product.icon size={24} />
                </div>
                <div>
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="font-semibold text-neutral-900 mb-2">
                  {product.headline}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link href={product.href}>
                  <Button
                    variant={product.id === "docaya" ? "primary" : "outline"}
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {product.cta}
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
