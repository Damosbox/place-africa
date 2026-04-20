import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Glossaire",
  description:
    "Glossaire de la relation client conversationnelle et du marketing relationnel : inbound, outbound, WhatsApp Business API, NPS, déflection, guichet digital.",
};

const terms: { term: string; definition: string }[] = [
  {
    term: "Inbound",
    definition:
      "Ensemble des flux conversationnels entrants : questions clients, demandes, incidents, souscriptions initiées par le client. Traité par le guichet digital.",
  },
  {
    term: "Outbound",
    definition:
      "Ensemble des flux sortants initiés par l'entreprise : notifications transactionnelles, relances, campagnes segmentées, enquêtes NPS. Traité par le moteur de marketing relationnel.",
  },
  {
    term: "Guichet digital conversationnel",
    definition:
      "Couche unifiée qui centralise les interactions clients entrantes sur tous les canaux (WhatsApp, SMS, e-mail, webchat, Messenger, Instagram, voix, in-app) dans une même inbox agent avec fiche client 360°.",
  },
  {
    term: "Marketing relationnel",
    definition:
      "Approche qui vise à entretenir et fidéliser la relation client dans la durée via des messages contextualisés, segmentés et personnalisés — par opposition au marketing d'acquisition pur.",
  },
  {
    term: "WhatsApp Business API",
    definition:
      "Interface officielle de Meta permettant aux entreprises d'envoyer et recevoir des messages WhatsApp à grande échelle. Taux d'ouverture supérieur à 90% en Afrique.",
  },
  {
    term: "NPS (Net Promoter Score)",
    definition:
      "Indicateur de satisfaction calculé sur une échelle de 0 à 10. Promoteurs (9-10), passifs (7-8), détracteurs (0-6). NPS = %Promoteurs − %Détracteurs.",
  },
  {
    term: "Déflection",
    definition:
      "Proportion de demandes clients traitées sans intervention humaine (FAQ automatisée, agents IA, workflows). Une bonne plateforme atteint 40 à 70% de déflection sur les demandes de niveau 1.",
  },
  {
    term: "FCR (First Contact Resolution)",
    definition:
      "Taux de résolution au premier contact. Indicateur clé de la qualité du service client : un FCR élevé réduit la charge opérationnelle et améliore la satisfaction.",
  },
  {
    term: "DSO (Days Sales Outstanding)",
    definition:
      "Délai moyen de paiement client. Un recouvrement automatisé par WhatsApp réduit typiquement le DSO de 15 à 30%.",
  },
  {
    term: "Workflow conversationnel",
    definition:
      "Parcours automatisé orchestré dans la conversation : collecte d'informations, validation, appels API, mise à jour CRM, génération de documents. Permet d'industrialiser la souscription, le support, le recouvrement.",
  },
  {
    term: "Paiement conversationnel",
    definition:
      "Encaissement réalisé dans la conversation via un lien de paiement intégré. Compatible mobile money (Wave, Orange Money, MTN Momo, Moov) et carte bancaire.",
  },
  {
    term: "Mobile money",
    definition:
      "Service de paiement et transfert d'argent via téléphone mobile, dominant en Afrique de l'Ouest et Centrale. Principaux acteurs : Wave, Orange Money, MTN Momo, Moov Money.",
  },
  {
    term: "Ticketing",
    definition:
      "Système de création et suivi structuré des demandes clients avec statut, catégorie, priorité, SLA et historique des actions.",
  },
  {
    term: "SLA (Service Level Agreement)",
    definition:
      "Engagement contractuel sur un niveau de service : temps de première réponse, temps de résolution. Mesurable et reportable via les dashboards DOCAYA.",
  },
  {
    term: "Agent IA Q&A",
    definition:
      "Agent conversationnel s'appuyant sur un modèle de langage et une base documentaire pour répondre aux questions fréquentes. Complémentaire aux workflows structurés.",
  },
];

export default function GlossairePage() {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Ressources
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">Glossaire</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Les termes clés de la relation client conversationnelle
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Un vocabulaire commun pour parler de guichet digital, de marketing relationnel et des canaux africains.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <dl className="divide-y divide-neutral-200">
              {sorted.map((t) => (
                <div key={t.term} className="py-6">
                  <dt className="text-lg font-bold text-neutral-900 mb-2">{t.term}</dt>
                  <dd className="text-neutral-600 leading-relaxed text-sm">{t.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
