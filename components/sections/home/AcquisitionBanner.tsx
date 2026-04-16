"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function AcquisitionBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white border-y border-neutral-100">
      <div className="container-site py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-neutral-950 rounded-2xl px-8 py-7"
        >
          <div className="flex items-center gap-5">
            {/* Orange tag */}
            <span className="shrink-0 text-xs font-bold bg-brand-accent text-white px-3 py-1.5 rounded-md uppercase tracking-wide">
              Annonce
            </span>
            <p className="text-white font-medium leading-snug">
              Place Africa a acquis <span className="font-bold">Docaya</span> — La plateforme conversationnelle B2B leader en Afrique de l&apos;Ouest rejoint notre portefeuille.
            </p>
          </div>

          <Link
            href="/a-propos#docaya"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 group"
          >
            Lire l&apos;annonce
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
