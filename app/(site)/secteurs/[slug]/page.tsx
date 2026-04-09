import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Building2,
  GraduationCap,
  Landmark,
  Hotel,
  Plane,
  Zap,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  CreditCard,
  Bell,
  ShoppingBag,
  AlertCircle,
  Workflow,
  Star,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { sectors, getSectorBySlug } from "@/lib/content/sectors";
import { solutions, getSolutionBySlug } from "@/lib/content/solutions";

const sectorIconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={36} />,
  Building2: <Building2 size={36} />,
  GraduationCap: <GraduationCap size={36} />,
  Landmark: <Landmark size={36} />,
  Hotel: <Hotel size={36} />,
  Plane: <Plane size={36} />,
  Zap: <Zap size={36} />,
  ShoppingCart: <ShoppingCart size={36} />,
};

const solutionIconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={20} />,
  CreditCard: <CreditCard size={20} />,
  Bell: <Bell size={20} />,
  ShoppingBag: <ShoppingBag size={20} />,
  AlertCircle: <AlertCircle size={20} />,
  Workflow: <Workflow size={20} />,
  Star: <Star size={20} />,
};

const colorVariants: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  green: { bg: "bg-emerald-100", text: "text-emerald-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
  yellow: { bg: "bg-amber-100", text: "text-amber-600" },
};

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) return {};
  return {
    title: sector.title,
    description: sector.description,
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) notFound();

  const sectorSolutions = sector.solutions
    .map((slug) => getSolutionBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const otherSectors = sectors.filter((s) => s.slug !== sector.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container-site">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Tous les secteurs
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center text-white shadow-cta shrink-0">
              {sectorIconMap[sector.icon]}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                {sector.title}
              </h1>
              <p className="text-white/75 text-xl max-w-xl">
                {sector.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionTag className="mb-6">Solutions recommandées</SectionTag>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            {sectorSolutions.length} offres adaptées à votre secteur
          </h2>
          <p className="text-neutral-600 mb-10 text-lg max-w-2xl">
            Chaque solution est préconfigurée pour les besoins spécifiques du secteur {sector.title.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectorSolutions.map((solution) => {
              const colors = colorVariants[solution.color] || colorVariants.blue;
              return (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                  <div className="h-full bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0`}>
                        {solutionIconMap[solution.icon]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-neutral-900 mb-1">
                          {solution.title}
                        </h3>
                        <p className={`text-sm ${colors.text} font-medium mb-2`}>
                          {solution.tagline}
                        </p>
                        <ul className="space-y-1.5">
                          {solution.features.slice(0, 3).map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-neutral-600">
                              <CheckCircle2 size={12} className="text-brand shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className={`flex items-center gap-1 mt-4 text-sm font-semibold ${colors.text} group-hover:gap-2 transition-all`}>
                          Voir la solution
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other sectors */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">
              Autres secteurs
            </h2>
            <Link href="/secteurs" className="text-brand text-sm font-semibold hover:underline">
              Voir tout
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherSectors.map((s) => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`}>
                <div className="bg-white rounded-xl p-4 border border-neutral-200 hover:shadow-card hover:border-brand/30 transition-all text-center group">
                  <div className="w-10 h-10 bg-brand-subtle rounded-xl flex items-center justify-center text-brand mx-auto mb-3 group-hover:bg-brand group-hover:text-white transition-colors">
                    {sectorIconMap[s.icon] && (
                      <span className="scale-75">{sectorIconMap[s.icon]}</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-neutral-800">{s.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Déployons Docaya dans votre organisation
          </h2>
          <p className="text-neutral-600 mb-8 text-lg max-w-xl mx-auto">
            Démo personnalisée pour le secteur {sector.title.toLowerCase()} — 30 minutes chrono.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Demander une démo
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
