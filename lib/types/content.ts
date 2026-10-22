export type Flow = "inbound" | "outbound" | "both";

export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  color: string;
  icon: string;
  description: string;
  features: string[];
  mechanism: string;
  examples: string;
  sectors: string[];
  familySlug?: string;
}

/** Les services PLACE sur lesquels s'appuie Place Fuse (synthèse d'octobre, diapositive 2). */
export type PlaceService =
  | "Pay"
  | "Notifications"
  | "Voice"
  | "IA / Knowledge"
  | "Compliance";

/**
 * Statut documentaire d'un parcours, tel que déclaré dans les supports d'octobre.
 * Il ne dit rien de la disponibilité d'une démonstration publique : voir `JourneyDemo`.
 */
export type JourneyStatus = "production" | "demontrable" | "configurable";

export interface JourneyStep {
  label: string;
  /** Ce que fait la personne servie : client, assuré, usager, membre… */
  person?: string;
  /** Ce que fait Place Fuse. */
  platform?: string;
  /** Ce que fait l'organisation, qui garde la décision. */
  organisation?: string;
}

/** Une démonstration interactive reçue de l'équipe, et ce qu'elle montre réellement. */
export interface Demo {
  id: string;
  url: string;
  /** Titre affiché par la démo elle-même, relevé lors du contrôle. */
  pageTitle: string;
  /** Parcours couverts. Vide si la démo ne correspond à aucun des 35 parcours détaillés. */
  journeyIds: string[];
  /**
   * Faux tant que la démo affiche un nom d'organisation réelle ou l'ancien nom du
   * produit. Une démo non publiable n'est jamais rendue sur le site.
   */
  publishable: boolean;
  /** Ce qui a été contrôlé, et ce qui bloque la publication le cas échéant. */
  note: string;
  checkedAt: string;
}

/** Provenance éditoriale — sert au suivi interne, jamais affichée sur le site. */
export interface JourneySource {
  document: string;
  slide: number;
  receivedAt: string;
  /** Date de validation éditoriale. Absente tant que personne n'a validé. */
  validatedAt?: string;
}

export interface Journey {
  /** Identifiant stable, utilisé dans les URL de contact (`?parcours=`). */
  id: string;
  sector: string;
  title: string;
  summary: string;
  /** Problème métier traité. */
  problem: string;
  /** Résultat attendu, sans chiffre promis. */
  outcome: string;
  steps: JourneyStep[];
  /** Ce que les équipes de l'organisation gardent en main. */
  teamRole: string;
  status: JourneyStatus;
  /** Réserve à afficher avec le statut (ex. : une étape activable selon le processus du client). */
  statusNote?: string;
  services: PlaceService[];
  /** Captures réelles du parcours, déjà présentes dans `public/`. */
  screenshots?: { src: string; alt: string; width: number; height: number }[];
  source: JourneySource;
}

/** Une friction telle que décrite dans la présentation sectorielle (diapositive 4). */
export interface SectorFriction {
  title: string;
  detail: string;
  consequence: string;
}

/** Une ligne du tableau « Qui fait quoi » : l'organisation garde la décision. */
export interface SectorRole {
  domain: string;
  organisation: string;
  platform: string;
}

/** Parcours cité comme configurable sans être détaillé dans la synthèse. */
export interface ConfigurableJourney {
  title: string;
  detail?: string;
  /** Déclaré « en production » dans la présentation sectorielle. */
  inProduction?: boolean;
}

export interface Sector {
  slug: string;
  title: string;
  icon: string;
  /** Promesse de couverture de la présentation sectorielle. */
  headline?: string;
  description: string;
  solutions: string[];
  useCases?: string[];
  seoTitle?: string;
  seoDescription?: string;
  /**
   * Fiches historiques : ce qui vous coûte cher aujourd'hui → ce que Place Fuse
   * prend en charge → CTA. Les secteurs d'octobre utilisent `frictions`.
   */
  costs?: string[];
  handled?: string[];
  /** Frictions de la présentation d'octobre, avec leur conséquence. */
  frictions?: SectorFriction[];
  /** Phrase « S'y ajoute… » qui suit les frictions. */
  frictionNote?: string;
  /** Tableau « Qui fait quoi » de la présentation sectorielle. */
  roles?: SectorRole[];
  rolesIntro?: string;
  /** Résultat observé en production. Anonymisé : le client n'est pas nommé, le résultat l'est. */
  proof?: string;
  /** Secteur mis en vitrine — développé en premier et en format enrichi. */
  featured?: boolean;
  /**
   * Présent si le secteur fait partie des 11 présentations Place Fuse d'octobre 2026.
   * `order` reprend la numérotation de la synthèse (01 à 11).
   */
  fuseDeck?: { file: string; order: number };
  /** Comment on désigne l'organisation cliente dans ce secteur : « la compagnie », « la banque »… */
  organisationLabel?: string;
  /** Comment on désigne la personne servie : « L'assuré », « Le membre »… */
  personLabel?: string;
  /** Services PLACE mobilisés dans ce secteur (synthèse, diapositive 17). */
  services?: PlaceService[];
  /** Leviers de gain, sans chiffre promis (synthèse, diapositive 19). */
  gains?: string[];
  /**
   * Parcours configurables non détaillés : ceux que la synthèse cite comme « aussi
   * configurables », puis la diapositive « Autres parcours en libre-service ».
   */
  alsoConfigurable?: ConfigurableJourney[];
}

export interface Brique {
  id: string;
  title: string;
  icon: string;
  description: string;
  channels: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Capacity {
  slug: string;
  title: string;
  icon: string;
  flow: Flow;
  shortDescription: string;
  description: string;
  benefits: string[];
  useCases: string[];
  relatedFamilies: string[];
}

export interface SolutionFamily {
  slug: string;
  title: string;
  tagline: string;
  color: string;
  icon: string;
  description: string;
  flow: Flow;
  outcomes: string[];
  subSolutions: string[];
  sectors: string[];
}

export interface Integration {
  slug: string;
  name: string;
  category: "crm" | "erp" | "paiement" | "messagerie" | "ia" | "stockage";
  logo?: string;
  description: string;
}

export interface Resource {
  slug: string;
  type: "blog" | "case" | "guide" | "faq" | "glossary";
  title: string;
  excerpt: string;
  body: string;
  publishedAt?: string;
}
