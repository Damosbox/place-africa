/**
 * Coordonnées du site — source unique.
 *
 * Le numéro a déjà été corrigé deux fois dans l'historique (commits aa7a665 et
 * 6c4a3c8, un zéro manquant) parce qu'il était écrit en dur à plusieurs endroits.
 * Toute page qui affiche un numéro doit importer d'ici, jamais le retaper.
 */

/** Ligne WhatsApp reliée au chatbot. Format wa.me : indicatif collé, sans + ni espaces. */
export const WHATSAPP_NUMBER = "2250503732121";
export const WHATSAPP_DISPLAY = "+225 05 03 73 21 21";

/** Ligne téléphonique de la société — distincte du WhatsApp, répond aux appels. */
export const PHONE_NUMBER = "+2250585750017";
export const PHONE_DISPLAY = "+225 05 85 75 00 17";

export const EMAIL = "info@place.africa";
export const APP_URL = "https://app.docaya.com";

/**
 * Construit un lien de clic vers le chat WhatsApp.
 *
 * `wa.me` est le mécanisme officiel de Meta : il ouvre l'application sur mobile
 * et WhatsApp Web sur ordinateur, conversation déjà ouverte sur notre numéro.
 * Il n'existe pas de moyen d'embarquer la conversation dans la page elle-même.
 */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Message par défaut quand on bascule du chat web vers WhatsApp. */
export const WHATSAPP_FALLBACK_MESSAGE =
  "Bonjour, je viens du site place.africa et je souhaite continuer la conversation ici.";

/** Premier message affiché dans la bulle, avant toute saisie. */
export const CHAT_GREETING =
  "Bonjour. Dites-moi quel processus vous coûte le plus cher aujourd'hui — je vous oriente, et je passe la main à un conseiller si votre cas le demande.";
