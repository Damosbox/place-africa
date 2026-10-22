import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Server,
  ScrollText,
  WifiOff,
  UserCheck,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

/**
 * Sécurité et protection des données — développement du bloc §1.10.
 *
 * ⚠️ À VALIDER AVANT MISE EN LIGNE — chaque affirmation de cette page engage la
 * marque auprès d'acheteurs publics et bancaires. La formulation exacte sur
 * l'hébergement, les certifications et le périmètre du déploiement dédié doit
 * être confirmée par l'équipe technique. Ne rien ajouter ici qui n'ait pas été
 * vérifié : une promesse de conformité non tenable est plus dangereuse qu'un silence.
 */

export const metadata: Metadata = {
  title: "Sécurité et protection des données",
  description:
    "Hébergement et souveraineté, traçabilité des actions, continuité en réseau irrégulier, consentement et droits des personnes : ce que Place Fuse garantit sur vos données.",
};

const pillars = [
  {
    icon: <Server size={22} />,
    title: "Hébergement et souveraineté",
    lead: "Place Côte d'Ivoire est une entreprise ivoirienne.",
    body: "Vos données sont traitées conformément à la réglementation nationale sur la protection des données personnelles, et nous nous conformons aux exigences de l'autorité de régulation.",
    detail:
      "Pour les organisations qui l'exigent — banques, assureurs, administrations — un déploiement dédié permet de garder les données sensibles dans votre propre environnement.",
  },
  {
    icon: <ScrollText size={22} />,
    title: "Traçabilité complète",
    lead: "Chaque action est enregistrée.",
    body: "Qui a fait quoi, quand, avec quelle autorisation. Le journal est infalsifiable et exportable.",
    detail:
      "C'est ce qu'il faut pour répondre à un contrôle : la preuve n'est pas à reconstituer après coup, elle est produite au fil de l'eau.",
  },
  {
    icon: <WifiOff size={22} />,
    title: "Continuité quand la connexion coupe",
    lead: "Nos parcours sont conçus pour des réseaux irréguliers.",
    body: "Aucune démarche entamée n'est perdue : ce qui n'a pas pu être transmis est mis en attente et repris automatiquement.",
    detail:
      "La reprise est faite sans doublon — un paiement ou une déclaration ne peut pas être enregistré deux fois parce que le réseau a coupé au mauvais moment.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Consentement et droits des personnes",
    lead: "Vos clients savent à quoi ils consentent.",
    body: "Le consentement est recueilli dans la conversation, et il peut être retiré de la même façon.",
    detail:
      "Les durées de conservation sont paramétrables selon vos obligations : ce qui doit être conservé dix ans et ce qui doit disparaître au bout de six mois ne suivent pas la même règle.",
  },
];

export default function SecuritePage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/plateforme"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Plateforme
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">
            Sécurité & protection des données
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Vos données restent les vôtres
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Avant de parler de fonctionnalités, la plupart de nos interlocuteurs
            publics et bancaires posent la même question : où vont les données, qui
            y accède, et que se passe-t-il en cas de contrôle. Voici les réponses.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-card transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h2 className="text-lg font-bold text-neutral-900 mb-3">
                  {p.title}
                </h2>
                <p className="text-sm font-semibold text-neutral-900 mb-2">
                  {p.lead}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  {p.body}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed pt-3 border-t border-neutral-100">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Une question de sécurité précise ?
            </h2>
            <p className="text-neutral-600 mb-8">
              Les directions informatiques et les responsables conformité ont des
              exigences qui leur sont propres. Posez-nous les vôtres — nous
              répondons par écrit, pas en démonstration commerciale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact?sujet=autre">
                <Button variant="primary" size="lg">
                  Poser vos questions de sécurité
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Lire la politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
