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
    description: "Les questions les plus fréquentes sur Place Fuse, les canaux, la tarification et la mise en place.",
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

/**
 * §9 — les quatre premiers contenus prévus.
 *
 * Volontairement sans lien : les articles ne sont pas encore écrits, et pointer
 * vers des URL inexistantes vaudrait moins que d'annoncer honnêtement le programme.
 * Retirer cette section au fur et à mesure des publications.
 */
const upcoming = [
  "Ce qu'un système peut traiter seul — et ce qu'il doit toujours renvoyer à un humain",
  "Vérifier une identité à distance : ce qui est possible aujourd'hui",
  "WhatsApp, SMS, e-mail : quel canal pour quel usage en Afrique de l'Ouest",
  "Vos données, vos obligations : ce qu'il faut vérifier avant de choisir un outil conversationnel",
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

      {/* §9 — programme éditorial */}
      <section className="py-12 md:py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <SectionTag className="mb-4">Prochainement</SectionTag>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Les prochains contenus
          </h2>
          <ul className="flex flex-col gap-3 max-w-3xl">
            {upcoming.map((title, i) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white px-6 py-5"
              >
                <span className="text-sm font-bold font-mono text-neutral-300 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-700 leading-relaxed">{title}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mt-6">
            Vous voulez être prévenu à leur parution ?{" "}
            <Link
              href="/contact"
              className="text-brand font-semibold hover:underline"
            >
              Dites-le nous
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
