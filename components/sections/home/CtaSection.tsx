"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Démo disponible maintenant
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à digitaliser
            <br />
            votre commerce ?
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto mb-12">
            Que vous soyez commerçant de proximité ou entreprise B2B, Place Africa
            a un outil pour vous. Démo en 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-black font-bold text-base hover:bg-neutral-100 transition-all shadow-cta">
                Demander une démo
                <ArrowRight size={18} />
              </button>
            </Link>
            <a
              href="https://wa.me/2250701795666?text=Bonjour%2C%20je%20souhaite%20une%20d%C3%A9mo."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#25D366] text-white font-bold text-base hover:bg-[#20c55b] transition-all">
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
