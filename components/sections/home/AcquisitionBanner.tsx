"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

export function AcquisitionBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-hero-gradient p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
              <Zap size={20} className="text-brand-accent" />
            </div>
            <div>
              <div className="inline-block text-xs font-semibold bg-brand-accent/20 text-brand-accent px-2.5 py-1 rounded-full mb-3">
                Annonce
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Place Africa a acquis Docaya
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                La plateforme conversationnelle B2B leader en Afrique de l&apos;Ouest
                rejoint notre portefeuille. Une étape majeure dans notre mission
                de digitaliser le commerce africain.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/a-propos#docaya"
            className="flex items-center gap-2 shrink-0 text-white font-semibold hover:gap-3 transition-all group"
          >
            Lire l&apos;annonce
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
