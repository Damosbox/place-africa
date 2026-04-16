"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-hero-gradient overflow-hidden p-12 lg:p-20 text-center"
        >
          {/* Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm mb-6">
              <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
              Démo disponible maintenant
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à digitaliser<br />votre commerce ?
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
              Que vous soyez commerçant de proximité ou entreprise B2B, Place Africa
              a un outil pour vous. Démo personnalisée en 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-brand hover:bg-neutral-50 shadow-cta"
                >
                  Demander une démo
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a
                href="https://wa.me/2250701795666?text=Bonjour%2C%20je%20souhaite%20une%20d%C3%A9mo%20Docaya."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg">
                  <MessageCircle size={18} />
                  Discuter sur WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
