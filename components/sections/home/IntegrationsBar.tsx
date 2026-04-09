"use client";

import { motion } from "framer-motion";
import { integrations } from "@/lib/content/platform";

export function IntegrationsBar() {
  return (
    <section className="py-16 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="container-site text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-500 text-sm font-medium">
            Intégrations disponibles — Architecture API-first
          </p>
        </motion.div>
      </div>
      <div className="relative">
        {/* First row */}
        <div className="flex gap-4 overflow-hidden mb-3">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...integrations, ...integrations].map((intg, i) => (
              <div
                key={`${intg.name}-${i}`}
                className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 whitespace-nowrap shrink-0"
              >
                <span className="text-xs font-medium text-neutral-700">{intg.name}</span>
                <span className="text-xs text-neutral-400">{intg.category}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
