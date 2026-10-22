import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, MessageCircle, User } from "lucide-react";
import { JourneyStatusBadge } from "./JourneyStatusBadge";
import { getPublicDemosForJourney } from "@/lib/content/demos";
import { contactHref } from "@/lib/content/place-fuse";
import type { Journey } from "@/lib/types/content";

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Un parcours détaillé : statut, problème, résultat, étapes et rôle des équipes.
 * Les étapes sont repliées par défaut (élément natif `<details>`, sans JS).
 */
export function JourneyCard({
  journey,
  index,
  organisationLabel = "votre organisation",
  personLabel = "La personne",
}: {
  journey: Journey;
  index: number;
  organisationLabel?: string;
  personLabel?: string;
}) {
  const publicDemos = getPublicDemosForJourney(journey.id);

  return (
    <article
      id={journey.id}
      className="scroll-mt-28 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-card"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-bold text-neutral-400 tabular-nums">
          Parcours {String(index).padStart(2, "0")}
        </span>
        <JourneyStatusBadge status={journey.status} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">{journey.title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-6 max-w-3xl">{journey.summary}</p>

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-xl bg-neutral-50 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
            Le problème
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">{journey.problem}</p>
        </div>
        <div className="rounded-xl bg-brand-accent-subtle p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">
            Le résultat visé
          </p>
          <p className="text-sm text-neutral-800 leading-relaxed">{journey.outcome}</p>
        </div>
      </div>

      {journey.screenshots && journey.screenshots.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {journey.screenshots.map((s) => (
            <figure
              key={s.src}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 sm:max-w-[50%]"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="h-auto w-full"
                sizes="(min-width: 640px) 360px, 100vw"
              />
            </figure>
          ))}
        </div>
      )}

      <details className="group rounded-xl border border-neutral-200 mb-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
          Les {journey.steps.length} étapes du parcours
          <span className="text-neutral-400 transition-transform group-open:rotate-90" aria-hidden>
            <ArrowRight size={16} />
          </span>
        </summary>
        <ol className="border-t border-neutral-200 divide-y divide-neutral-100">
          {journey.steps.map((step, i) => (
            <li key={step.label} className="grid gap-2 px-4 py-4 sm:grid-cols-[10rem_1fr]">
              <p className="text-sm font-bold text-neutral-900">
                <span className="text-neutral-400 tabular-nums mr-2">{i + 1}.</span>
                {step.label}
              </p>
              <ul className="flex flex-col gap-1.5 text-sm text-neutral-600">
                {step.person && (
                  <li className="flex gap-2">
                    <User size={15} className="mt-0.5 shrink-0 text-neutral-400" aria-hidden />
                    <span>
                      <span className="font-medium text-neutral-800">{personLabel} : </span>
                      {step.person}
                    </span>
                  </li>
                )}
                {step.platform && (
                  <li className="flex gap-2">
                    <MessageCircle size={15} className="mt-0.5 shrink-0 text-brand-accent" aria-hidden />
                    <span>
                      <span className="font-medium text-neutral-800">Place Fuse : </span>
                      {step.platform}
                    </span>
                  </li>
                )}
                {step.organisation && (
                  <li className="flex gap-2">
                    <Building2 size={15} className="mt-0.5 shrink-0 text-neutral-400" aria-hidden />
                    <span>
                      <span className="font-medium text-neutral-800">{capitalize(organisationLabel)} : </span>
                      {step.organisation}
                    </span>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ol>
      </details>

      <p className="text-sm text-neutral-600 leading-relaxed mb-2">
        <span className="font-semibold text-neutral-900">Ce que vos équipes gardent en main. </span>
        {journey.teamRole}
      </p>
      {journey.statusNote && (
        <p className="text-sm text-neutral-500 leading-relaxed mb-2">
          <span className="font-semibold text-neutral-700">À noter. </span>
          {journey.statusNote}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-5">
        <ul className="flex flex-wrap gap-2" aria-label="Services PLACE mobilisés">
          {journey.services.map((s) => (
            <li
              key={s}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-700"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {publicDemos.map((d) => (
            <a
              key={d.id}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 underline underline-offset-4"
            >
              Ouvrir la démo
            </a>
          ))}
          <Link
            href={contactHref({ sujet: "demo", secteur: journey.sector, parcours: journey.id })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:gap-2.5 transition-all"
          >
            {journey.status === "configurable"
              ? "En parler avec nous"
              : "Voir ce parcours en démonstration"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
