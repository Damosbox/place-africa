import type { PlaceService, SectorRole } from "@/lib/types/content";

/**
 * Discours transverse de Place Fuse, repris de la synthèse sectorielle d'octobre
 * 2026 (`Place_Fuse_Synthese_Sectorielle.pptx`). Les numéros de diapositive sont
 * indiqués pour retrouver la source.
 */

/** Diapositive 2. */
export const platform = {
  title: "La plateforme qui transforme chaque conversation en service",
  intro:
    "Place Fuse connecte votre organisation à ses clients, usagers et membres sur WhatsApp Business API et automatise le service et les parcours métier, sans déplacement ni attente.",
  modular: "Modulaire : d'un secteur à l'autre, seule la configuration change.",
  channels: "WhatsApp Business — texte, photos, documents, vocal, localisation — et aussi Messenger, Instagram, SMS, email.",
  steering: [
    "Tableau de bord : chaque conversation devient un dossier suivi",
    "Relais vers un conseiller, avec tout le contexte",
    "Indicateurs en temps réel",
  ],
  capabilities: [
    { title: "Parcours guidés", detail: "Questions, collecte, orientation, formulaires mobiles" },
    { title: "Documents automatiques", detail: "Reçus, attestations, quittances, avis générés et envoyés" },
    { title: "Intégrations", detail: "Connexion par API à vos systèmes" },
  ],
};

/**
 * Les services PLACE (diapositive 2 ; « Voice » : présentation Banques,
 * diapositive 6).
 */
export const placeServices: Record<PlaceService, { role: string; detail: string }> = {
  Pay: {
    role: "Paiement intégré",
    detail: "Portefeuille électronique, mobile money (opérateurs locaux) ou carte bancaire",
  },
  Notifications: {
    role: "Campagnes",
    detail: "Rappels d'échéance, alertes, confirmations, messages ciblés",
  },
  Voice: {
    role: "Vocal",
    detail: "La personne peut répondre par vocal à chaque étape",
  },
  "IA / Knowledge": {
    role: "Agent IA",
    detail: "Répond 24h/24 à partir de vos documents",
  },
  Compliance: {
    role: "Conformité",
    detail:
      "Vérification d'identité, preuve de vie, listes de sanctions et de personnes politiquement exposées, preuves archivées",
  },
};

/**
 * Preuve client, anonymisée (diapositive 2). Le client n'est jamais nommé.
 * ⚠️ À confirmer : la V3 disait « Top 5 de la zone CIMA ».
 */
export const referenceProof =
  "Déjà en production chez un assureur du Top 5 en Côte d'Ivoire (Vie et Non-Vie).";

/** Diapositive 19. */
export const gainsDisclaimer = "Nous chiffrons ces gains avec vos données, secteur par secteur.";

/** Diapositive 18 — valable quel que soit le secteur. */
export const genericRolesIntro = "Chacun reste dans son rôle, quel que soit le secteur.";
export const genericRoles: SectorRole[] = [
  {
    domain: "Décision",
    organisation: "Décide, délivre, fixe les tarifs et les conditions",
    platform: "Prépare des dossiers complets et qualifiés",
  },
  {
    domain: "Système de référence",
    organisation: "Reste votre système de référence",
    platform: "S'y connecte par API, sans en remplacer aucun",
  },
  {
    domain: "Paiements",
    organisation: "Choisit les moyens de paiement et le circuit des fonds",
    platform: "Envoie les liens de paiement et confirme les règlements",
  },
  {
    domain: "Marque",
    organisation: "Nom, couleurs, numéro WhatsApp officiel",
    platform: "Opère l'assistant en marque blanche",
  },
  {
    domain: "Données",
    organisation: "Reste seul maître des données",
    platform: "N'affiche que ce qui concerne la personne identifiée",
  },
  {
    domain: "Cas sensibles",
    organisation: "Vos équipes reprennent la main",
    platform: "L'IA ne décide d'aucun acte sensible seule ; elle transfère à un agent",
  },
  {
    domain: "Réglementation (secteurs régulés)",
    organisation:
      "Traduit les exigences du régulateur dans ses procédures internes et en répond devant lui",
    platform: "Applique ces procédures dans chaque parcours et en fournit les preuves",
  },
];

/**
 * Diapositive 20.
 * ⚠️ À CONFIRMER PAR LE RESPONSABLE COMMERCIAL avant mise en ligne : l'offre
 * pilote figure dans la synthèse, mais ni son prix ni ses conditions ne sont
 * fixés. Le site ne mentionne aucun tarif.
 */
export const pilot = {
  title: "Démarrons par un pilote de 90 jours",
  intro:
    "Un seul parcours, choisi avec vous parmi les parcours détaillés, mesuré avec des indicateurs fixés ensemble.",
  phases: [
    {
      when: "J0 – J15",
      title: "Cadrage",
      detail: "Choix du parcours, règles de votre organisation, interlocuteurs, raccordement aux systèmes.",
    },
    {
      when: "J15 – J30",
      title: "Configuration",
      detail: "Assistant à vos couleurs, tests avec vos équipes.",
    },
    {
      when: "J30 – J90",
      title: "Lancement et bilan",
      detail: "Périmètre limité, suivi chaque semaine, bilan chiffré à J90.",
    },
  ],
};

/** Liens de contact préremplis, utilisés par tous les CTA. */
export function contactHref(params: { secteur?: string; parcours?: string; sujet?: string }): string {
  const query = new URLSearchParams();
  if (params.sujet) query.set("sujet", params.sujet);
  if (params.secteur) query.set("secteur", params.secteur);
  if (params.parcours) query.set("parcours", params.parcours);
  const qs = query.toString();
  return qs ? `/contact?${qs}` : "/contact";
}
