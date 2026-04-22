import { Mail, Phone, Globe } from "lucide-react";

const channels = [
  {
    icon: <Phone size={20} />,
    label: "Téléphone / WhatsApp",
    value: "+225 07 01 79 56 66",
    href: "tel:+2250701795666",
    color: "text-whatsapp",
    bg: "bg-[#25D366]/10",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "info@place.africa",
    href: "mailto:info@place.africa",
    color: "text-brand",
    bg: "bg-brand-subtle",
  },
  {
    icon: <Globe size={20} />,
    label: "App Docaya",
    value: "app.docaya.com",
    href: "https://app.docaya.com",
    color: "text-neutral-700",
    bg: "bg-neutral-100",
  },
];

export function ContactChannels() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-neutral-900 mb-2">
        Autres moyens de contact
      </h3>
      {channels.map((ch) => (
        <a
          key={ch.label}
          href={ch.href}
          target={ch.href.startsWith("http") ? "_blank" : undefined}
          rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-brand/30 hover:shadow-card transition-all group"
        >
          <div className={`w-10 h-10 ${ch.bg} ${ch.color} rounded-xl flex items-center justify-center`}>
            {ch.icon}
          </div>
          <div>
            <div className="text-xs text-neutral-500 mb-0.5">{ch.label}</div>
            <div className="text-sm font-semibold text-neutral-800 group-hover:text-brand transition-colors">
              {ch.value}
            </div>
          </div>
        </a>
      ))}

      <div className="mt-8 p-5 rounded-2xl bg-brand-subtle">
        <p className="text-sm font-semibold text-brand mb-1">Basé à Abidjan</p>
        <p className="text-sm text-neutral-600">
          Côte d'Ivoire — Nous servons les entreprises de toute l'Afrique de l'Ouest.
        </p>
      </div>
    </div>
  );
}
