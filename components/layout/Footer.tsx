import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Docaya — Plateforme conversationnelle", href: "/plateforme" },
  ],
  Docaya: [
    { label: "Plateforme", href: "/plateforme" },
    { label: "Solutions", href: "/solutions" },
    { label: "Secteurs", href: "/secteurs" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "App Docaya", href: "https://app.docaya.com", external: true },
  ],
  Entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  Légal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Politique cookies", href: "/politique-cookies" },
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-xl">Place Africa</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Structurer les échanges entre entreprises et consommateurs en
              Afrique de l&apos;Ouest.
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
                Abidjan, Côte d&apos;Ivoire
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm text-white mb-4">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} className="shrink-0" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Place Africa. Tous droits réservés.
          </p>
          <p className="text-sm text-neutral-500">
            Propulsé par{" "}
            <Link href="/plateforme" className="hover:text-neutral-300 transition-colors">
              Docaya
            </Link>{" "}
            — Côte d&apos;Ivoire &amp; Afrique de l&apos;Ouest
          </p>
        </div>
      </div>
    </footer>
  );
}
