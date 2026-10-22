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
    default: "Place Fuse — chaque conversation devient un service",
    template: "%s | Place Fuse",
  },
  description:
    "Place Fuse traite automatiquement tout ce qui peut l'être — et fait arriver le reste à la bonne personne, avec le dossier complet. Service client, vérification d'identité, encaissement et processus métier dans une conversation WhatsApp.",
  keywords: [
    "Place Africa",
    "Place Fuse",
    "Docaya",
    "WhatsApp Business",
    "plateforme conversationnelle",
    "IA native",
    "automatisation B2B",
    "Côte d'Ivoire",
    "Afrique de l'Ouest",
  ],
  openGraph: {
    title: "Place Fuse — chaque conversation devient un service",
    description:
      "Place Fuse traite automatiquement tout ce qui peut l'être — et fait arriver le reste à la bonne personne, avec le dossier complet. Service client, vérification d'identité, encaissement et processus métier dans une conversation WhatsApp.",
    type: "website",
    locale: "fr_FR",
    siteName: "Place Fuse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Place Fuse — chaque conversation devient un service",
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
