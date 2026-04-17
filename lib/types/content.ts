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
}

export interface Sector {
  slug: string;
  title: string;
  icon: string;
  description: string;
  solutions: string[];
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
