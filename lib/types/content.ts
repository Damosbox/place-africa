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

export interface Sector {
  slug: string;
  title: string;
  icon: string;
  description: string;
  solutions: string[];
  useCases?: string[];
  seoTitle?: string;
  seoDescription?: string;
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
