import type { Demo } from "@/lib/types/content";

/**
 * Démonstrations publiables, rattachées aux parcours de `journeys.ts`.
 *
 * Vide à ce jour : les démos reçues affichent l'ancien nom du produit ou le
 * nom d'organisations réelles, et ce repo est public. Leur registre complet
 * (URL, parcours couverts, motif de blocage) est tenu hors du repo, dans les
 * notes internes du projet. N'ajouter ici qu'une démo en marque blanche,
 * avec `publishable: true`.
 *
 * Tant qu'aucune démo n'est publiable, les fiches proposent une démonstration
 * accompagnée via le formulaire de contact.
 */
export const demos: Demo[] = [];

/** Démos publiables pour un parcours. */
export function getPublicDemosForJourney(journeyId: string): Demo[] {
  return demos.filter((d) => d.publishable && d.journeyIds.includes(journeyId));
}
