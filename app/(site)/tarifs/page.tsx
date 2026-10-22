import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { contactHref, pilot } from "@/lib/content/place-fuse";

/**
 * Variante « Tarification sur mesure » (plan du 21/10/2026, lot 3).
 *
 * La grille chiffrée et le calculateur (`PricingCalculator`, conservé dans le
 * code) restent hors ligne tant que le responsable commercial n'a pas arrêté
 * les montants. La page reste à son URL ; elle n'est pas dans la navigation.
 */
export const metadata: Metadata = {
  title: "Tarification sur mesure",
  description:
    "Le prix de Place Fuse dépend des parcours retenus, de vos volumes et des intégrations nécessaires. Décrivez votre cas : nous établissons une proposition avec vous.",
  alternates: { canonical: "/tarifs" },
};

const drivers = [
  {
    title: "Les parcours retenus",
    detail: "Un seul parcours pour commencer, ou plusieurs : chacun est configuré selon les règles de votre organisation.",
  },
  {
    title: "Vos volumes",
    detail: "Le nombre de conversations et de messages envoyés chaque mois.",
  },
  {
    title: "Les intégrations nécessaires",
    detail: "Le raccordement à vos systèmes : gestion, paiement, conformité.",
  },
];

const asked = [
  "Votre secteur et le parcours qui vous coûte le plus aujourd'hui",
  "Un ordre de grandeur de vos volumes",
  "Les systèmes auxquels Place Fuse doit se connecter",
];

export default function TarifsPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <SectionTag className="mb-4 bg-white/10 text-white">Tarifs</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Tarification sur mesure
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mb-8">
            Le prix dépend de ce que vous mettez en place. Décrivez votre cas : nous
            établissons une proposition avec vous.
          </p>
          <Link href={contactHref({ sujet: "tarifs" })}>
            <Button variant="primary" size="lg" className="bg-white text-black hover:bg-neutral-100">
              Demander une proposition
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionTag className="mb-4">Ce qui fait le prix</SectionTag>
          <ol className="grid gap-4 md:grid-cols-3 mt-6">
            {drivers.map((d, i) => (
              <li key={d.title} className="rounded-2xl border border-neutral-200 p-6">
                <p className="font-bold text-neutral-900 mb-2">
                  <span className="text-brand-accent tabular-nums mr-2">{i + 1}.</span>
                  {d.title}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">{d.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 border-t border-neutral-100">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{pilot.title}</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">{pilot.intro}</p>
            <Link
              href={contactHref({ sujet: "pilote" })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
            >
              Préparer un pilote <ArrowRight size={15} />
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Ce que nous vous demanderons</h2>
            <ul className="flex flex-col gap-3">
              {asked.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-accent" aria-hidden />
                  <span className="text-neutral-700">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
