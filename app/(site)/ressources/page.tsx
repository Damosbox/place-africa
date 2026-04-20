import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, BookOpen, FileText, Newspaper, ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "FAQ, glossaire, guides et articles sur la relation client conversationnelle, WhatsApp Business API, paiement mobile et marketing relationnel en Afrique.",
};

const resources = [
  {
    href: "/ressources/faq",
    icon: <HelpCircle size={24} />,
    title: "FAQ",
    description: "Les questions les plus fréquentes sur DOCAYA, les canaux, la tarification et la mise en place.",
  },
  {
    href: "/ressources/glossaire",
    icon: <BookOpen size={24} />,
    title: "Glossaire",
    description: "Les termes clés de la relation client conversationnelle et du marketing relationnel.",
  },
  {
    href: "/ressources/blog",
    icon: <Newspaper size={24} />,
    title: "Blog",
    description: "Analyses, retours d'expérience et bonnes pratiques — bientôt disponible.",
    comingSoon: true,
  },
  {
    href: "/ressources/guides",
    icon: <FileText size={24} />,
    title: "Guides",
    description: "Guides pratiques par secteur et par cas d'usage — bientôt disponible.",
    comingSoon: true,
  },
];

export default function RessourcesPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <SectionTag className="mb-4 bg-white/10 text-white">Ressources</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Tout savoir sur la relation client conversationnelle
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            FAQ, glossaire, guides et articles pour maîtriser les codes du guichet digital conversationnel et du marketing relationnel en Afrique.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.map((r) => {
              const card = (
                <div
                  className={`group h-full bg-white rounded-2xl border border-neutral-200 p-7 transition-all ${
                    r.comingSoon
                      ? "opacity-60"
                      : "hover:shadow-hover hover:-translate-y-0.5"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-5">
                    {r.icon}
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900">{r.title}</h3>
                    {r.comingSoon && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">
                        Bientôt
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-600 leading-relaxed mb-4">{r.description}</p>
                  {!r.comingSoon && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                      Accéder
                      <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              );

              return r.comingSoon ? (
                <div key={r.href}>{card}</div>
              ) : (
                <Link key={r.href} href={r.href}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
