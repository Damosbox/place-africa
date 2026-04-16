import type { Brique } from "@/lib/types/content";

export const briques: Brique[] = [
  {
    id: "whatsapp-api",
    title: "WhatsApp Business API",
    icon: "MessageSquare",
    description:
      "Canal principal d'interaction. Taux d'ouverture >90%. Support natif de texte, photos, documents, notes vocales, localisation GPS.",
    channels: ["WhatsApp"],
  },
  {
    id: "chatbots",
    title: "Chatbots",
    icon: "Bot",
    description:
      "Parcours automatisés configurables : FAQ, collecte d'informations, pré-qualification, orientation vers le bon service.",
    channels: ["WhatsApp", "Messenger", "Instagram"],
  },
  {
    id: "agents-ia",
    title: "Agents IA (Q&A)",
    icon: "Brain",
    description:
      "Couche complémentaire aux chatbots : réponses intelligentes basées sur l'historique Q&A fourni par le client.",
    channels: ["WhatsApp", "Messenger"],
  },
  {
    id: "notifications",
    title: "Notifications & Campagnes",
    icon: "Bell",
    description:
      "Envoi automatique de messages programmés (transactionnels ou marketing). Segmentation par tags, multicanal.",
    channels: ["WhatsApp", "SMS", "Email", "Messenger", "Instagram"],
  },
  {
    id: "paiement",
    title: "Paiement Intégré",
    icon: "CreditCard",
    description:
      "Lien de paiement envoyé directement sur WhatsApp. Wave, Orange Money, MTN Momo, Moov Money, carte bancaire.",
    channels: ["WhatsApp"],
  },
];

export const integrations = [
  { name: "Odoo", category: "CRM / ERP" },
  { name: "Microsoft Dynamics", category: "CRM" },
  { name: "Zoho CRM", category: "CRM" },
  { name: "Brevo", category: "Marketing" },
  { name: "Google Drive", category: "Documents" },
  { name: "OneDrive", category: "Documents" },
  { name: "Wave", category: "Paiement" },
  { name: "Orange Money", category: "Paiement" },
  { name: "MTN Momo", category: "Paiement" },
  { name: "Moov Money", category: "Paiement" },
];
