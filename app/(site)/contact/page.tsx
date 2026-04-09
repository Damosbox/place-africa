import type { Metadata } from "next";
import { SectionTag } from "@/components/ui/SectionTag";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Docaya pour une démo personnalisée. Formulaire, WhatsApp ou email — réponse sous 24h.",
};

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
            Parlons de votre projet
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Notre équipe vous contacte sous 24h pour organiser une démonstration
            personnalisée adaptée à votre secteur.
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
                    Demander une démo
                  </h2>
                  <p className="text-neutral-600">
                    Remplissez le formulaire et nous vous rappelons rapidement.
                  </p>
                </div>
                <ContactForm />
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
