import type { Integration } from "@/lib/types/content";

export const integrations: Integration[] = [
  {
    slug: "whatsapp-business-api",
    name: "WhatsApp Business API",
    category: "messagerie",
    description:
      "Canal principal en Afrique. Taux d'ouverture > 90%. Support natif de texte, média, documents, localisation, notes vocales.",
  },
  {
    slug: "messenger",
    name: "Messenger",
    category: "messagerie",
    description: "Messagerie Meta pour audiences Facebook.",
  },
  {
    slug: "instagram-dm",
    name: "Instagram DM",
    category: "messagerie",
    description: "Réception et réponse aux messages directs Instagram.",
  },
  {
    slug: "sms",
    name: "SMS",
    category: "messagerie",
    description: "Canal de secours universel, idéal pour les notifications.",
  },
  {
    slug: "email",
    name: "E-mail",
    category: "messagerie",
    description: "Envoi transactionnel et campagnes e-mail avec tracking.",
  },
  {
    slug: "odoo",
    name: "Odoo",
    category: "crm",
    description:
      "Synchronisation bidirectionnelle des contacts, opportunités et commandes.",
  },
  {
    slug: "microsoft-dynamics",
    name: "Microsoft Dynamics",
    category: "crm",
    description: "Connecteur CRM Dynamics 365 pour grands comptes.",
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: "crm",
    description: "Push leads et interactions vers Zoho CRM.",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "crm",
    description:
      "Intégration Salesforce via API — contacts, cases et opportunities.",
  },
  {
    slug: "brevo",
    name: "Brevo",
    category: "crm",
    description: "Marketing automation et synchronisation de listes.",
  },
  {
    slug: "wave",
    name: "Wave",
    category: "paiement",
    description: "Mobile money Wave — Sénégal, Côte d'Ivoire.",
  },
  {
    slug: "orange-money",
    name: "Orange Money",
    category: "paiement",
    description: "Mobile money Orange — couverture Afrique de l'Ouest et Centrale.",
  },
  {
    slug: "mtn-momo",
    name: "MTN Momo",
    category: "paiement",
    description: "Mobile money MTN.",
  },
  {
    slug: "moov-money",
    name: "Moov Money",
    category: "paiement",
    description: "Mobile money Moov Africa.",
  },
  {
    slug: "carte-bancaire",
    name: "Carte bancaire",
    category: "paiement",
    description: "Paiement par carte via agrégateurs (Stripe, CinetPay).",
  },
  {
    slug: "google-drive",
    name: "Google Drive",
    category: "stockage",
    description: "Stockage et partage des documents collectés.",
  },
  {
    slug: "onedrive",
    name: "OneDrive",
    category: "stockage",
    description: "Alternative Microsoft pour le stockage documents.",
  },
  {
    slug: "openai",
    name: "OpenAI",
    category: "ia",
    description: "Modèles GPT pour les agents Q&A et la génération.",
  },
];

export function getIntegrationsByCategory(
  category: Integration["category"]
): Integration[] {
  return integrations.filter((i) => i.category === category);
}

export const integrationCategories: {
  slug: Integration["category"];
  label: string;
}[] = [
  { slug: "messagerie", label: "Messagerie" },
  { slug: "crm", label: "CRM / ERP" },
  { slug: "paiement", label: "Paiement" },
  { slug: "stockage", label: "Stockage" },
  { slug: "ia", label: "IA" },
];
