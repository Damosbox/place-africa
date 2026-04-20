import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { capacities, getCapacityBySlug } from "@/lib/content/capacities";
import { families } from "@/lib/content/families";
import { getIcon } from "@/lib/utils/icons";

const flowLabel: Record<string, { label: string; className: string }> = {
  inbound: { label: "Inbound — guichet conversationnel", className: "bg-blue-50 text-blue-700 border-blue-100" },
  outbound: { label: "Outbound — marketing relationnel", className: "bg-orange-50 text-orange-700 border-orange-100" },
  both: { label: "Inbound + Outbound", className: "bg-neutral-100 text-neutral-700 border-neutral-200" },
};

export async function generateStaticParams() {
  return capacities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cap = getCapacityBySlug(params.slug);
  if (!cap) return {};
  return { title: cap.title, description: cap.shortDescription };
}

export default function CapacityPage({ params }: { params: { slug: string } }) {
  const cap = getCapacityBySlug(params.slug);
  if (!cap) notFound();

  const flow = flowLabel[cap.flow];
  const relatedFamilies = families.filter((f) => cap.relatedFamilies.includes(f.slug));

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/plateforme/capacites"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Toutes les capacités
          </Link>
          <div className="flex items-start gap-5 max-w-4xl">
            <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
              {getIcon(cap.icon, 28)}
            </div>
            <div>
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${flow.className}`}
              >
                {flow.label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {cap.title}
              </h1>
              <p className="text-white/70 text-lg">{cap.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">En détail</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">{cap.description}</p>

              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                Cas d&apos;usage
              </p>
              <ul className="space-y-2">
                {cap.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <span className="text-sm text-neutral-700">{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Bénéfices</h2>
              <ul className="space-y-3 mb-8">
                {cap.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Demander une démo
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedFamilies.length > 0 && (
        <section className="py-12 bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <SectionTag className="mb-4">Solutions associées</SectionTag>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Cette capacité alimente {relatedFamilies.length} famille
              {relatedFamilies.length > 1 ? "s" : ""} de solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedFamilies.map((f) => (
                <Link
                  key={f.slug}
                  href={`/solutions/${f.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 p-5 hover:shadow-hover hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-bold text-neutral-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{f.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                    Découvrir <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
