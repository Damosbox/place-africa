import type { Metadata } from "next";
import { SectionTag } from "@/components/ui/SectionTag";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { getFuseSectors, getLegacySectors } from "@/lib/content/sectors";
import { journeys } from "@/lib/content/journeys";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Place Fuse : démonstration accompagnée, pilote de 90 jours ou proposition tarifaire. Formulaire, WhatsApp ou email.",
  alternates: { canonical: "/contact" },
};

// Options légères transmises au formulaire (client) : pas d'étapes, pas de textes longs.
const sectorOptions = [...getFuseSectors(), ...getLegacySectors()].map(({ slug, title }) => ({
  slug,
  title,
}));
const journeyOptions = journeys.map(({ id, sector, title }) => ({ id, sector, title }));

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site text-center">
          <SectionTag className="mb-4 bg-white/10 text-white">
            Contactez-nous
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Dites-nous quel processus vous coûte le plus cher
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Notre équipe vous répond sous 24h et prépare une démonstration sur votre
            cas précis.
          </p>
        </div>
      </section>

      {/* Form + Channels */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    Votre demande
                  </h2>
                  <p className="text-neutral-600">
                    Remplir ce formulaire ne vous engage à rien. Vous décidez après
                    la démonstration.
                  </p>
                </div>
                <ContactForm sectorOptions={sectorOptions} journeyOptions={journeyOptions} />
              </div>
            </div>

            {/* Channels */}
            <div>
              <ContactChannels />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
