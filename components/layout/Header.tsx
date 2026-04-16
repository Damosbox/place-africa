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

const placeAfricaLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const docayaLinks = [
  {
    label: "Plateforme",
    href: "/plateforme",
    description: "WhatsApp API, Chatbots, Agents IA",
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "7 modules métiers activables",
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    description: "Assurances, Banques, Éducation…",
  },
  {
    label: "Tarifs",
    href: "/tarifs",
    description: "Estimez votre budget en direct",
  },
];

const allMobileLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "— Docaya —", href: "#", disabled: true },
  { label: "Plateforme", href: "/plateforme" },
  { label: "Solutions", href: "/solutions" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Tarifs", href: "/tarifs" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [docayaOpen, setDocayaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDocayaOpen(false);
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
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-neutral-200"
            : "bg-transparent"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo — Place Africa */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" />
                </svg>
              </div>
              <span
                className={cn(
                  "font-bold text-xl tracking-tight transition-colors",
                  scrolled ? "text-neutral-900" : "text-white"
                )}
              >
                Place Africa
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Place Africa links */}
              {placeAfricaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    scrolled
                      ? "text-neutral-700 hover:text-brand hover:bg-brand-subtle"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Separator */}
              <div
                className={cn(
                  "mx-2 h-5 w-px",
                  scrolled ? "bg-neutral-200" : "bg-white/20"
                )}
              />

              {/* Docaya dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDocayaOpen((o) => !o)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                    scrolled
                      ? "text-brand hover:bg-brand-subtle"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  Docaya
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      docayaOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown panel */}
                {docayaOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-hover border border-neutral-200 overflow-hidden z-50">
                    <div className="p-2">
                      {docayaLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setDocayaOpen(false)}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-brand-subtle transition-colors group"
                        >
                          <span className="text-sm font-medium text-neutral-900 group-hover:text-brand">
                            {link.label}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {link.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.docaya.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-neutral-600 hover:text-brand"
                    : "text-white/80 hover:text-white"
                )}
              >
                App Docaya
                <ExternalLink size={13} />
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    !scrolled && "border-white/50 text-white hover:bg-white hover:text-brand"
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
                scrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        links={allMobileLinks}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
