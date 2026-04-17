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
    "Place Africa structure les échanges entre entreprises et consommateurs en Afrique de l'Ouest — avec des outils digitaux à IA native, conçus pour fonctionner là où les solutions classiques s'arrêtent.",
  keywords: [
    "Place Africa",
    "Docaya",
    "WhatsApp Business",
    "plateforme conversationnelle",
    "IA native",
    "automatisation B2B",
    "Côte d'Ivoire",
    "Afrique de l'Ouest",
  ],
  openGraph: {
    title: "Place Africa — L'Afrique digitale pour tous",
    description:
      "Place Africa structure les échanges entre entreprises et consommateurs en Afrique de l'Ouest — avec des outils digitaux à IA native, conçus pour fonctionner là où les solutions classiques s'arrêtent.",
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
