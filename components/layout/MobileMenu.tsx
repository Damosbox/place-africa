"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const groups: { label: string; links: { label: string; href: string }[] }[] = [
  {
    label: "Plateforme",
    links: [
      { label: "Vision plateforme", href: "/plateforme" },
      { label: "Capacités", href: "/plateforme/capacites" },
      { label: "Intégrations", href: "/plateforme/integrations" },
      { label: "Analytique & pilotage", href: "/plateforme/analytique-pilotage" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Acquisition & conversion", href: "/solutions/acquisition-conversion" },
      { label: "Service & décongestion", href: "/solutions/service-decongestion" },
      { label: "Encaissement & recouvrement", href: "/solutions/encaissement-recouvrement" },
      { label: "Engagement & fidélisation", href: "/solutions/engagement-fidelisation" },
      { label: "Toutes les solutions", href: "/solutions" },
    ],
  },
  {
    label: "Secteurs",
    links: [{ label: "Voir les 9 secteurs", href: "/secteurs" }],
  },
  {
    label: "Ressources",
    links: [
      { label: "FAQ", href: "/ressources/faq" },
      { label: "Glossaire", href: "/ressources/glossaire" },
      { label: "Toutes les ressources", href: "/ressources" },
    ],
  },
  {
    label: "Place Africa",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <span className="font-bold text-lg text-neutral-900">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          {groups.map((g) => (
            <div key={g.label} className="mb-6 last:mb-0">
              <p className="px-2 mb-2 text-xs font-semibold text-brand uppercase tracking-widest">
                {g.label}
              </p>
              <div className="flex flex-col gap-0.5">
                {g.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={onClose}
                    className="px-3 py-2.5 rounded-lg text-neutral-700 font-medium text-sm hover:bg-brand-subtle hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-neutral-200 flex flex-col gap-3">
          <Link href="/contact" onClick={onClose} className="w-full">
            <Button variant="primary" size="md" className="w-full">
              Demander une démo
            </Button>
          </Link>
          <Link href="/contact" onClick={onClose} className="w-full">
            <Button variant="ghost" size="md" className="w-full">
              Contact
            </Button>
          </Link>
          <a
            href="https://app.docaya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="ghost" size="md" className="w-full text-neutral-400">
              App Docaya
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
