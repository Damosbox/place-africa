"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  GraduationCap,
  Landmark,
  Hotel,
  Plane,
  Zap,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { sectors } from "@/lib/content/sectors";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Building2: <Building2 size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Landmark: <Landmark size={28} />,
  Hotel: <Hotel size={28} />,
  Plane: <Plane size={28} />,
  Zap: <Zap size={28} />,
  ShoppingCart: <ShoppingCart size={28} />,
};

export function SectorsTeaser() {
  return (
    <section className="section-padding section-below-fold bg-neutral-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTag className="mb-4">Secteurs</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Une plateforme,<br />tous les secteurs
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Ce qui change d'un secteur à l'autre, ce n'est pas la technologie —
              c'est la configuration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={`/secteurs/${sector.slug}`}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 group text-center">
                  <div className="w-14 h-14 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand mx-auto mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    {iconMap[sector.icon]}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-sm mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed hidden sm:block">
                    {sector.description.slice(0, 60)}...
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-brand text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
