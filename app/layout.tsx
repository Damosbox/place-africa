import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Docaya — Des conversations impactantes pour vos clients",
    template: "%s | Docaya",
  },
  description:
    "Docaya est une plateforme conversationnelle B2B qui permet aux entreprises d'automatiser leurs interactions clients via WhatsApp Business API. Chatbots, Agents IA, Paiement intégré.",
  keywords: [
    "WhatsApp Business API",
    "plateforme conversationnelle",
    "chatbot entreprise",
    "automatisation client",
    "Côte d'Ivoire",
    "Afrique de l'Ouest",
    "B2B",
    "Docaya",
  ],
  openGraph: {
    title: "Docaya — Des conversations impactantes pour vos clients",
    description:
      "Automatisez vos interactions clients et processus métiers via WhatsApp et d'autres canaux conversationnels.",
    type: "website",
    locale: "fr_FR",
    siteName: "Docaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docaya — Des conversations impactantes pour vos clients",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
