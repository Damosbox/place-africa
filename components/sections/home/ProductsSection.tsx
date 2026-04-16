"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShoppingBag, MessageCircle } from "lucide-react";

const products = [
  {
    id: "point",
    icon: ShoppingBag,
    tag: "Application mobile",
    name: "Point",
    headline: "La caisse intelligente pour les commerçants",
    description:
      "Gérez vos commandes, stocks, caisse, encaissements, dépenses, employés et clients depuis une seule application.",
    features: ["Gestion des commandes", "Suivi des stocks", "Caisse & encaissement", "Rapport de vente"],
    cta: "Découvrir Point",
    href: "/contact",
    theme: {
      bg: "bg-neutral-900",
      text: "text-white",
      subtext: "text-white/60",
      iconBg: "bg-brand-accent",
      iconColor: "text-white",
      tagBg: "bg-white/10",
      tagText: "text-white/70",
      dotColor: "bg-brand-accent",
      btn: "bg-brand-accent text-white hover:bg-orange-500",
      featureText: "text-white/70",
    },
  },
  {
    id: "docaya",
    icon: MessageCircle,
    tag: "Plateforme B2B",
    name: "Docaya",
    headline: "La relation client conversationnelle",
    description:
      "Automatisez vos interactions clients via WhatsApp Business API. Chatbots, Agents IA, Notifications, Paiement intégré.",
    features: ["WhatsApp Business API", "Chatbots & Agents IA", "Notifications clients", "Paiement intégré"],
    cta: "Découvrir Docaya",
    href: "/plateforme",
    theme: {
      bg: "bg-white border border-neutral-200",
      text: "text-neutral-900",
      subtext: "text-neutral-500",
      iconBg: "bg-neutral-900",
      iconColor: "text-white",
      tagBg: "bg-neutral-100",
      tagText: "text-neutral-500",
      dotColor: "bg-neutral-300",
      btn: "bg-neutral-900 text-white hover:bg-neutral-800",
      featureText: "text-neutral-500",
    },
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produits" ref={ref} className="section-padding bg-neutral-50">
      <div className="container-site">
        <div className="mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">
            Nos produits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Des outils pour chaque étape
          </h2>
          <p className="text-neutral-500 max-w-xl text-lg">
            De la gestion quotidienne du commerce à l&apos;automatisation de la
            relation client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${product.theme.bg}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${product.theme.iconBg}`}>
                  <product.icon size={22} className={product.theme.iconColor} />
                </div>
                <div>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-2 ${product.theme.tagBg} ${product.theme.tagText}`}>
                    {product.tag}
                  </span>
                  <h3 className={`text-2xl font-bold ${product.theme.text}`}>
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className={`font-semibold mb-2 ${product.theme.text}`}>
                  {product.headline}
                </p>
                <p className={`text-sm leading-relaxed ${product.theme.subtext}`}>
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${product.theme.featureText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${product.theme.dotColor}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link href={product.href}>
                  <button className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${product.theme.btn}`}>
                    {product.cta}
                    <ArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
