import type { Capacity } from "@/lib/types/content";

export const capacities: Capacity[] = [
  {
    slug: "messagerie-multicanale",
    title: "Messagerie multicanale unifiée",
    icon: "MessageSquare",
    flow: "both",
    shortDescription:
      "WhatsApp, SMS, e-mail, webchat — un seul endroit pour toutes vos conversations.",
    description:
      "Vos clients vous écrivent sur WhatsApp, par SMS, par e-mail ou via votre site. Docaya regroupe tous ces messages au même endroit. Vos agents voient tout, répondent depuis un seul écran et ne perdent aucune conversation.",
    benefits: [
      "9 messages sur 10 sont ouverts sur WhatsApp",
      "L'historique complet du client, quel que soit le canal",
      "Passage d'un canal à l'autre sans repartir de zéro",
    ],
    useCases: [
      "Un client écrit sur WhatsApp, vous répondez, il reçoit une confirmation par SMS",
      "Campagne envoyée par WhatsApp avec relance automatique par SMS si non lu",
      "Appel téléphonique pour les cas qui le nécessitent",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "engagement-fidelisation",
    ],
  },
  {
    slug: "guichet-conversationnel-unifie",
    title: "Guichet client unifié",
    icon: "Inbox",
    flow: "inbound",
    shortDescription:
      "Toutes les demandes reçues au même endroit, avec le profil complet du client.",
    description:
      "Quand un client vous contacte, votre agent voit immédiatement qui il est, ses demandes précédentes et ce qu'il attend. Plus besoin de chercher dans plusieurs outils. Chaque message est assigné à la bonne personne selon le sujet.",
    benefits: [
      "Plus de 70% des demandes traitées dès le premier contact",
      "Vos agents répondent 2× plus vite grâce au contexte disponible immédiatement",
      "Les équipes se transmettent les dossiers sans rien perdre",
    ],
    useCases: [
      "Service client multicanal centralisé pour une compagnie d'assurance",
      "Traitement des demandes commerciales entrantes pour un promoteur immobilier",
      "Gestion des réclamations avec délais de traitement respectés",
    ],
    relatedFamilies: ["service-decongestion", "acquisition-conversion"],
  },
  {
    slug: "workflows-conversationnels",
    title: "Scénarios automatisés",
    icon: "Workflow",
    flow: "both",
    shortDescription:
      "Créez des parcours clients automatiques sans programmer une seule ligne de code.",
    description:
      "Concevez vos propres processus : collecte d'informations, validation, branchements selon les réponses, mise à jour de votre système de gestion. Ces scénarios fonctionnent pour la vente, la souscription, le recouvrement ou le support — sans intervention humaine pour les étapes simples.",
    benefits: [
      "Vos processus courants tournent seuls, 24h/24",
      "Connexion à vos outils existants pour les cas avancés",
      "Un scénario créé une fois peut être réutilisé partout",
    ],
    useCases: [
      "Souscription guidée en 5 étapes sur WhatsApp",
      "Qualification d'un prospect entrant avec redirection vers le bon commercial",
      "Déclaration de sinistre avec collecte de photos et documents",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
    ],
  },
  {
    slug: "agents-ia-automatisation",
    title: "Agents IA & automatisation",
    icon: "Brain",
    flow: "inbound",
    shortDescription:
      "Un assistant virtuel répond à vos clients à toute heure, dans leur langue.",
    description:
      "L'assistant IA de Docaya comprend les questions de vos clients en langage naturel. Il répond aux questions fréquentes à partir de votre documentation, identifie le besoin et transfère à un agent humain quand la situation le demande — avec tout le contexte déjà disponible.",
    benefits: [
      "40 à 70% des demandes simples traitées automatiquement",
      "Disponible 24h/24, 7j/7, en français et en langues locales",
      "Quand un humain prend le relais, il a tout le contexte sans redemander au client",
    ],
    useCases: [
      "Questions fréquentes sur vos produits, traitées automatiquement",
      "Première qualification commerciale en dehors des heures ouvrées",
      "Assistance de première ligne la nuit et le week-end",
    ],
    relatedFamilies: ["service-decongestion", "acquisition-conversion"],
  },
  {
    slug: "campagnes-notifications-sortantes",
    title: "Campagnes & notifications",
    icon: "Send",
    flow: "outbound",
    shortDescription:
      "Envoyez le bon message, au bon client, au bon moment — automatiquement.",
    description:
      "Docaya gère deux types de messages sortants depuis le même outil : les notifications automatiques liées à une action (paiement reçu, rendez-vous confirmé, livraison en route) et les campagnes marketing vers des groupes de clients ciblés (promotion, relance, réactivation).",
    benefits: [
      "Un seul outil pour vos notifications et vos campagnes",
      "Vous envoyez uniquement aux clients concernés, pas à toute la base",
      "Vous mesurez qui a reçu, ouvert et agi",
    ],
    useCases: [
      "Rappel automatique de rendez-vous la veille",
      "Campagne de réactivation vers les clients sans achat depuis 3 mois",
      "Confirmation immédiate après réception d'un paiement",
    ],
    relatedFamilies: [
      "engagement-fidelisation",
      "encaissement-recouvrement",
      "acquisition-conversion",
    ],
  },
  {
    slug: "capture-qualification-leads",
    title: "Captation & qualification de prospects",
    icon: "UserPlus",
    flow: "inbound",
    shortDescription:
      "Transformez chaque conversation entrante en opportunité commerciale qualifiée.",
    description:
      "Quand un prospect vous contacte — depuis une pub Meta, votre site ou directement sur WhatsApp — Docaya pose les bonnes questions, évalue son niveau d'intérêt et transmet le dossier au bon commercial avec toutes les informations déjà renseignées.",
    benefits: [
      "Plus de prospects renseignent leur demande jusqu'au bout (vs un formulaire web classique)",
      "Le commercial reçoit un dossier complet, pas juste un nom et un numéro",
      "Chaque prospect est assigné à la bonne équipe automatiquement",
    ],
    useCases: [
      "Prospect venant d'une publicité Facebook ou Instagram",
      "Qualification du budget, du besoin et du délai d'achat",
      "Transfert au commercial avec tout le contexte de la conversation",
    ],
    relatedFamilies: ["acquisition-conversion"],
  },
  {
    slug: "ticketing-suivi",
    title: "Suivi des demandes",
    icon: "Ticket",
    flow: "inbound",
    shortDescription:
      "Chaque demande client est tracée, suivie et clôturée dans les délais.",
    description:
      "Chaque demande reçue crée automatiquement un dossier avec son statut, sa catégorie, son niveau d'urgence et les pièces jointes. Le client est informé à chaque étape sans que votre agent n'ait à le rappeler.",
    benefits: [
      "Aucune demande ne tombe à l'eau",
      "Vous respectez vos délais de traitement et pouvez le prouver",
      "Le client reçoit des mises à jour automatiques sans solliciter votre équipe",
    ],
    useCases: [
      "Gestion des pannes pour une société d'eau ou d'électricité",
      "Suivi de sinistres pour une compagnie d'assurance",
      "Réclamations clients pour un réseau de distribution",
    ],
    relatedFamilies: ["service-decongestion"],
  },
  {
    slug: "paiements-conversationnels",
    title: "Paiements conversationnels",
    icon: "CreditCard",
    flow: "both",
    shortDescription:
      "Wave, Orange Money, MTN Momo, Moov Money, carte — le client paie dans la conversation.",
    description:
      "Votre client reçoit un lien de paiement directement dans WhatsApp ou par SMS. Il paie en moins d'une minute avec son moyen de paiement préféré. Vous recevez la confirmation en temps réel et le rapprochement se fait automatiquement.",
    benefits: [
      "Paiement en moins d'une minute, sans sortir de la conversation",
      "Rapprochement automatique avec votre comptabilité",
      "Compatible avec tous les opérateurs mobile money d'Afrique de l'Ouest",
    ],
    useCases: [
      "Paiement de frais de scolarité par WhatsApp",
      "Encaissement d'une prime d'assurance après relance",
      "Commande + paiement en une seule conversation",
    ],
    relatedFamilies: [
      "encaissement-recouvrement",
      "acquisition-conversion",
    ],
  },
  {
    slug: "formulaires-documents",
    title: "Formulaires & documents",
    icon: "FileText",
    flow: "both",
    shortDescription:
      "Collecte de pièces, génération et envoi de documents — directement dans la conversation.",
    description:
      "Vos clients envoient leurs documents (pièce d'identité, justificatif de domicile, photo) directement dans WhatsApp. Docaya génère automatiquement les documents correspondants (quittance, attestation, contrat) et les stocke en sécurité.",
    benefits: [
      "Pas d'application à télécharger, pas de déplacement en agence",
      "Tous les documents sont enregistrés, datés et accessibles",
      "Les documents sont générés automatiquement à partir des informations collectées",
    ],
    useCases: [
      "Vérification d'identité pour l'ouverture d'un compte bancaire",
      "Envoi automatique d'une quittance après paiement de loyer",
      "Photo de sinistre avec localisation GPS",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
    ],
  },
  {
    slug: "api-integrations",
    title: "Connexions & intégrations",
    icon: "Plug",
    flow: "both",
    shortDescription:
      "Docaya se connecte à vos outils existants sans tout recommencer de zéro.",
    description:
      "Docaya est conçu pour s'intégrer à votre système actuel. Il se connecte à votre CRM, votre ERP, vos opérateurs de paiement et WhatsApp Business. Les données circulent entre vos outils et Docaya dans les deux sens, sans ressaisie manuelle.",
    benefits: [
      "Votre équipe continue d'utiliser les outils qu'elle connaît",
      "Les informations se mettent à jour automatiquement dans les deux systèmes",
      "Possibilité d'adapter la connexion à votre système sur mesure",
    ],
    useCases: [
      "Création automatique d'une opportunité dans votre CRM depuis une conversation Docaya",
      "Notification client déclenchée par un changement de statut dans votre ERP",
      "Synchronisation automatique de votre catalogue produit",
    ],
    relatedFamilies: [
      "acquisition-conversion",
      "service-decongestion",
      "encaissement-recouvrement",
      "engagement-fidelisation",
    ],
  },
  {
    slug: "analytics-pilotage",
    title: "Tableaux de bord & pilotage",
    icon: "BarChart3",
    flow: "both",
    shortDescription:
      "Suivez en temps réel ce qui se passe dans vos conversations et vos résultats.",
    description:
      "Docaya vous donne une vue en temps réel sur l'activité : combien de demandes reçues, combien traitées, en combien de temps, avec quel résultat. Vous mesurez la satisfaction de vos clients, le taux de recouvrement et la performance de chaque campagne.",
    benefits: [
      "Toutes vos métriques au même endroit : demandes reçues et messages envoyés",
      "Alertes automatiques si un délai de traitement est dépassé",
      "Export pour votre outil de reporting habituel",
    ],
    useCases: [
      "Suivi quotidien de votre équipe service client",
      "Mesure des résultats d'une campagne de relance",
      "Tableau de bord recouvrement hebdomadaire pour la direction",
    ],
    relatedFamilies: [
      "service-decongestion",
      "encaissement-recouvrement",
      "engagement-fidelisation",
      "acquisition-conversion",
    ],
  },
];

export function getCapacityBySlug(slug: string): Capacity | undefined {
  return capacities.find((c) => c.slug === slug);
}

export function getCapacitiesByFlow(flow: "inbound" | "outbound"): Capacity[] {
  return capacities.filter((c) => c.flow === flow || c.flow === "both");
}
