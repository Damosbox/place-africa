import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Les questions les plus fréquentes sur DOCAYA : canaux supportés, tarification, intégrations, paiement mobile, mise en place.",
};

const faqs = [
  {
    q: "Qu'est-ce que DOCAYA ?",
    a: "DOCAYA est une plateforme de guichet digital conversationnel et de marketing relationnel. Elle unifie sur une même couche l'inbound (service client entrant via WhatsApp, SMS, e-mail, webchat, Messenger, Instagram DM, voix, in-app) et l'outbound (notifications transactionnelles, campagnes segmentées, recouvrement automatisé).",
  },
  {
    q: "Quels canaux sont supportés ?",
    a: "WhatsApp Business API (> 60% des échanges en Afrique), SMS, e-mail, webchat, Messenger, Instagram DM, voix et in-app. Tous les canaux partagent la même fiche client et le même historique.",
  },
  {
    q: "Quels moyens de paiement sont intégrés ?",
    a: "Wave, Orange Money, MTN Momo, Moov Money et carte bancaire (via agrégateurs Stripe ou CinetPay). Le lien de paiement est envoyé directement dans la conversation WhatsApp.",
  },
  {
    q: "Quels CRM / ERP s'intègrent nativement ?",
    a: "Odoo, Microsoft Dynamics, Zoho CRM, Salesforce, Brevo. Pour tout autre outil, l'architecture API-first permet une intégration personnalisée via REST ou webhook.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "Entre 2 et 6 semaines selon le périmètre. Les cas standards (FAQ automatisée, notifications, recouvrement simple) démarrent en 2 semaines. Les projets incluant plusieurs intégrations CRM/ERP prennent 4 à 6 semaines.",
  },
  {
    q: "Quelle est la différence entre inbound et outbound ?",
    a: "L'inbound (guichet conversationnel) couvre tout ce qui entre : questions clients, demandes, incidents, souscriptions initiées par le client. L'outbound (marketing relationnel) couvre tout ce qui sort : notifications transactionnelles, relances de paiement, campagnes segmentées, enquêtes NPS.",
  },
  {
    q: "DOCAYA est-il un simple chatbot ?",
    a: "Non. DOCAYA inclut des chatbots et agents IA, mais c'est avant tout une plateforme d'orchestration qui combine messagerie multicanale, workflows conversationnels, ticketing, paiements, campagnes sortantes, analytics et API. Le chatbot n'est qu'une capacité parmi 11.",
  },
  {
    q: "Comment est calculé le prix ?",
    a: "Le prix dépend du volume de conversations, des canaux activés et des intégrations nécessaires. Rendez-vous sur notre page tarifs pour une estimation, ou contactez-nous pour un devis personnalisé.",
  },
  {
    q: "Quels secteurs utilisent DOCAYA ?",
    a: "Banques & fintech, assurances, télécom, utilities, retail & distribution, logistique & transport, éducation, immobilier, service public. Le principe DOCAYA : la technologie est commune — seule la configuration change selon le secteur.",
  },
  {
    q: "Les données clients sont-elles sécurisées ?",
    a: "Oui. DOCAYA applique les standards de sécurité du secteur (chiffrement en transit et au repos, contrôle d'accès granulaire, journalisation). Les données peuvent être hébergées en Afrique selon votre besoin de souveraineté.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Ressources
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">FAQ</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Questions fréquentes sur DOCAYA
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Tout ce qu&apos;il faut savoir avant de se lancer.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-neutral-200 p-6 open:shadow-card transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h2 className="text-base sm:text-lg font-semibold text-neutral-900 pr-4">
                    {f.q}
                  </h2>
                  <span className="w-7 h-7 rounded-full bg-brand-subtle text-brand flex items-center justify-center shrink-0 font-bold text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site text-center">
          <h2 className="text-xl font-bold text-neutral-900 mb-3">
            Une autre question ?
          </h2>
          <p className="text-neutral-600 mb-6">
            Notre équipe répond en moins de 24h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
          >
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
