import { cn } from "@/lib/utils/cn";
import { journeyStatusLabels } from "@/lib/content/journeys";
import type { JourneyStatus } from "@/lib/types/content";

const styles: Record<JourneyStatus, string> = {
  production: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  demontrable: "bg-blue-50 text-blue-700 ring-blue-200",
  configurable: "bg-neutral-100 text-neutral-700 ring-neutral-200",
};

const dots: Record<JourneyStatus, string> = {
  production: "bg-emerald-500",
  demontrable: "bg-blue-500",
  configurable: "bg-neutral-400",
};

/** Statut documentaire d'un parcours. Ne dit rien de la disponibilité d'une démo publique. */
export function JourneyStatusBadge({
  status,
  className,
}: {
  status: JourneyStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        styles[status],
        className
      )}
      title={journeyStatusLabels[status].detail}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dots[status])} aria-hidden />
      {journeyStatusLabels[status].label}
    </span>
  );
}

/** Légende des trois statuts, affichée au-dessus des parcours. */
export function JourneyStatusLegend({ className }: { className?: string }) {
  const order: JourneyStatus[] = ["production", "demontrable", "configurable"];
  return (
    <dl className={cn("grid gap-3 sm:grid-cols-3", className)}>
      {order.map((s) => (
        <div key={s} className="flex flex-col gap-1.5">
          <dt>
            <JourneyStatusBadge status={s} />
          </dt>
          <dd className="text-sm text-neutral-500 leading-snug">
            {journeyStatusLabels[s].detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}
