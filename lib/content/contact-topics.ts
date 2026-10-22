/**
 * Objets de demande du formulaire de contact, préremplis par `?sujet=` depuis
 * les CTA. Partagé entre le formulaire et l'API pour que l'e-mail reçu porte
 * le même libellé que celui choisi.
 */
export const contactTopics = {
  demo: "Démonstration accompagnée",
  pilote: "Pilote de 90 jours",
  tarifs: "Proposition tarifaire",
  autre: "Autre demande",
} as const;

export type ContactTopic = keyof typeof contactTopics;

/** Anciennes valeurs de `?sujet=` encore présentes dans des liens publiés. */
const legacyTopics: Record<string, ContactTopic> = {
  audit: "autre",
  poc: "pilote",
  conformite: "autre",
  securite: "autre",
};

export function resolveTopic(value: string | null | undefined): ContactTopic {
  if (!value) return "demo";
  if (Object.prototype.hasOwnProperty.call(contactTopics, value)) return value as ContactTopic;
  return legacyTopics[value] ?? "demo";
}
