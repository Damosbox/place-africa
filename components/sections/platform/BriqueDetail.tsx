"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Brain,
  Bell,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import type { Brique } from "@/lib/types/content";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={28} />,
  Bot: <Bot size={28} />,
  Brain: <Brain size={28} />,
  Bell: <Bell size={28} />,
  CreditCard: <CreditCard size={28} />,
};

const channelColorMap: Record<string, string> = {
  WhatsApp: "#25D366",
  Messenger: "#0084FF",
  Instagram: "#E1306C",
  SMS: "#FF6B35",
  Email: "#6366F1",
};

const detailFeatures: Record<string, string[]> = {
  "whatsapp-api": [
    "Taux d'ouverture supérieur à 90%",
    "Messages texte, images, documents, audio",
    "Localisation GPS intégrée",
    "Templates validés Meta",
    "Numéro dédié ou connecté",
  ],
  chatbots: [
    "Arbres de décision sans code",
    "Collecte de formulaires mobiles",
    "Pré-qualification automatique",
    "Orientation vers le bon service",
    "Escalade vers un humain",
  ],
  "agents-ia": [
    "Base de connaissances personnalisée",
    "Réponses contextuelles intelligentes",
    "Apprentissage continu",
    "Agent commercial automatisé",
    "Historique de conversation",
  ],
  notifications: [
    "Déclenchement par événement ou date",
    "Segmentation par tags clients",
    "Campagnes marketing ciblées",
    "Taux de lecture tracés",
    "Boutons d'action intégrés",
  ],
  paiement: [
    "Wave, Orange Money, MTN Momo",
    "Moov Money, Carte bancaire",
    "Lien de paiement dans la conversation",
    "Statut en temps réel",
    "Réconciliation automatique",
  ],
};

interface BriqueDetailProps {
  brique: Brique;
  index: number;
}

export function BriqueDetail({ brique, index }: BriqueDetailProps) {
  const isEven = index % 2 === 0;
  const features = detailFeatures[brique.id] || [];

  return (
    <motion.div
      id={brique.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center py-16 border-b border-neutral-200 last:border-0`}
    >
      {/* Visual */}
      <div className="flex-1 w-full">
        <div className="bg-gradient-to-br from-brand-subtle to-white rounded-3xl p-10 flex items-center justify-center aspect-square max-w-sm mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-cta">
              {iconMap[brique.icon]}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {brique.channels.map((ch) => (
                <span
                  key={ch}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    backgroundColor: (channelColorMap[ch] || "#6B7280") + "20",
                    color: channelColorMap[ch] || "#6B7280",
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <span className="text-brand text-sm font-semibold">
          Brique {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-2 mb-4">
          {brique.title}
        </h3>
        <p className="text-neutral-600 text-lg leading-relaxed mb-8">
          {brique.description}
        </p>
        <ul className="space-y-3">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-brand flex-shrink-0" />
              <span className="text-neutral-700">{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
