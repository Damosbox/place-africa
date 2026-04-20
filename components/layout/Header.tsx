"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const MobileMenu = dynamic(() =>
  import("./MobileMenu").then((m) => m.MobileMenu), { ssr: false }
);

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: DropdownItem[] };

const navItems: NavItem[] = [
  {
    label: "Plateforme",
    children: [
      { label: "Vision plateforme", href: "/plateforme", description: "Inbound + Outbound réunis" },
      { label: "Capacités", href: "/plateforme/capacites", description: "11 capacités natives" },
      { label: "Intégrations", href: "/plateforme/integrations", description: "CRM, ERP, mobile money, Meta" },
      { label: "Analytique & pilotage", href: "/plateforme/analytique-pilotage", description: "Dashboards temps réel" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Acquisition & conversion", href: "/solutions/acquisition-conversion", description: "Transformer les conversations en ventes" },
      { label: "Service & décongestion", href: "/solutions/service-decongestion", description: "Désaturer le service client" },
      { label: "Encaissement & recouvrement", href: "/solutions/encaissement-recouvrement", description: "Recouvrer sans friction" },
      { label: "Engagement & fidélisation", href: "/solutions/engagement-fidelisation", description: "Construire une relation durable" },
    ],
  },
  { label: "Secteurs", href: "/secteurs" },
  {
    label: "Ressources",
    children: [
      { label: "FAQ", href: "/ressources/faq", description: "Questions fréquentes" },
      { label: "Glossaire", href: "/ressources/glossaire", description: "Termes clés" },
      { label: "Toutes les ressources", href: "/ressources" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200"
            : "bg-black/60 backdrop-blur-sm border-b border-white/5"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-8 w-48">
                <img
                  src="/images/logo-white.svg"
                  alt="Place Africa"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300",
                    scrolled ? "opacity-0" : "opacity-100"
                  )}
                />
                <img
                  src="/images/logo-dark.svg"
                  alt="Place Africa"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300",
                    scrolled ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        scrolled
                          ? "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                          : "text-white/80 hover:text-white hover:bg-white/8"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        scrolled
                          ? "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                          : "text-white/80 hover:text-white hover:bg-white/8"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                      />
                    </button>
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-hover border border-neutral-200 overflow-hidden z-50">
                        <div className="p-1.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-neutral-900 group-hover:text-brand-accent">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-xs text-neutral-400">{child.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.docaya.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  scrolled ? "text-neutral-500 hover:text-neutral-900" : "text-white/50 hover:text-white"
                )}
              >
                App Docaya
                <ExternalLink size={12} />
              </a>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="sm"
                  className={cn(
                    "rounded-lg font-semibold",
                    !scrolled && "bg-white text-black hover:bg-neutral-100"
                  )}
                >
                  Demander une démo
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-neutral-700 hover:bg-neutral-100" : "text-white hover:bg-white/10"
              )}
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
