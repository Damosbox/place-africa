"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Plateforme", href: "/plateforme" },
  { label: "Solutions", href: "/solutions" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 10.38 1.89 11.67 2.55 12.78L1.5 16.5L5.22 15.45C6.33 16.11 7.62 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className={cn(
                  "font-bold text-xl tracking-tight transition-colors",
                  scrolled ? "text-neutral-900" : "text-white"
                )}
              >
                docaya
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
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
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button variant="outline" size="sm"
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
        links={navLinks}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
