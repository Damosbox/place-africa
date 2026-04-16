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
    default: "Place Africa — L'Afrique digitale pour tous",
    template: "%s | Place Africa",
  },
  description:
    "Place Africa édite des applications mobiles pour digitaliser les petits commerçants africains. Découvrez Point, notre solution de gestion, et Docaya, notre plateforme conversationnelle B2B.",
  keywords: [
    "Place Africa",
    "Docaya",
    "Point",
    "digitalisation",
    "commerce Afrique",
    "application mobile",
    "petits commerçants",
    "Côte d'Ivoire",
    "Sénégal",
    "Afrique de l'Ouest",
  ],
  openGraph: {
    title: "Place Africa — L'Afrique digitale pour tous",
    description:
      "Place Africa édite des outils simples et puissants pour aider les petits commerçants africains à démarrer, gérer et développer leur business.",
    type: "website",
    locale: "fr_FR",
    siteName: "Place Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Place Africa — L'Afrique digitale pour tous",
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
