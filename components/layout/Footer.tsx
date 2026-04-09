import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Plateforme: [
    { label: "WhatsApp Business API", href: "/plateforme#whatsapp-api" },
    { label: "Chatbots", href: "/plateforme#chatbots" },
    { label: "Agents IA", href: "/plateforme#agents-ia" },
    { label: "Notifications", href: "/plateforme#notifications" },
    { label: "Paiement intégré", href: "/plateforme#paiement" },
  ],
  Solutions: [
    { label: "Agent d'Accueil", href: "/solutions/agent-accueil" },
    { label: "Recouvrement", href: "/solutions/recouvrement" },
    { label: "Notifications Sortantes", href: "/solutions/notifications" },
    { label: "Vente & Souscription", href: "/solutions/vente-souscription" },
    { label: "Enquête NPS", href: "/solutions/satisfaction-nps" },
  ],
  Secteurs: [
    { label: "Assurances", href: "/secteurs/assurances" },
    { label: "Immobilier", href: "/secteurs/immobilier" },
    { label: "Éducation", href: "/secteurs/education" },
    { label: "Banques & Fintech", href: "/secteurs/banques" },
    { label: "Hôtellerie", href: "/secteurs/hotellerie" },
  ],
  "Entreprise": [
    { label: "À propos", href: "/a-propos" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
    { label: "App Docaya", href: "https://app.docaya.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 10.38 1.89 11.67 2.55 12.78L1.5 16.5L5.22 15.45C6.33 16.11 7.62 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl">docaya</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Des conversations impactantes pour vos clients.
            </p>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <a
                href="mailto:contact@docaya.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} />
                contact@docaya.com
              </a>
              <a
                href="tel:+2250701795666"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} />
                +225 07 01 79 56 66
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Abidjan, Côte d'Ivoire
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm text-white mb-4">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Docaya. Tous droits réservés.
          </p>
          <p className="text-sm text-neutral-500">
            Plateforme conversationnelle B2B — Côte d'Ivoire & Afrique de l'Ouest
          </p>
        </div>
      </div>
    </footer>
  );
}
