import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Target,
  Gauge,
  LineChart,
  AlertTriangle,
  FileDown,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Analytique & pilotage",
  description:
    "Pilotez la performance de votre relation client conversationnelle en temps réel : volumes, délais, NPS, taux de conversion, taux de recouvrement — inbound et outbound unifiés.",
};

const kpis = [
  {
    icon: <BarChart3 size={22} />,
    title: "Volumes & canaux",
    description:
      "Messages par canal, par heure et par équipe. Identifiez les pics et dimensionnez les équipes.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Délais & SLA",
    description:
      "Temps de première réponse, temps de résolution, respect des SLA contractuels.",
  },
  {
    icon: <Target size={22} />,
    title: "Conversion & acquisition",
    description:
      "Taux de conversion lead → client, coût d'acquisition, pipeline commercial.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Recouvrement & encaissement",
    description:
      "Taux de recouvrement, DSO, encours, montants encaissés par mode de paiement.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Qualité & NPS",
    description:
      "First Contact Resolution, taux de réouverture, CSAT, Net Promoter Score par segment.",
  },
  {
    icon: <FileDown size={22} />,
    title: "Export & BI",
    description:
      "Export CSV, API, connecteurs vers votre outil BI. Données brutes disponibles.",
  },
];

export default function AnalytiquePage() {
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
          <SectionTag className="mb-4 bg-white/10 text-white">Analytique & pilotage</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Pilotez la performance en temps réel
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Dashboards unifiés pour l&apos;inbound (service client, ticketing) et l&apos;outbound (campagnes, recouvrement, NPS). Une seule source de vérité pour toute votre relation client conversationnelle.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kpis.map((k) => (
              <div
                key={k.title}
                className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-card transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-4">
                  {k.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{k.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{k.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Tout mesurer, inbound et outbound
            </h2>
            <p className="text-neutral-600 mb-8">
              La distinction entre inbound (guichet) et outbound (marketing relationnel) se retrouve dans chaque dashboard. Vous voyez ce qui entre, ce qui sort, et l&apos;impact croisé.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Voir les dashboards en démo
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
