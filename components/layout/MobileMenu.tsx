"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
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
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 10.38 1.89 11.67 2.55 12.78L1.5 16.5L5.22 15.45C6.33 16.11 7.62 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-neutral-900">docaya</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-neutral-700 font-medium hover:bg-brand-subtle hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-neutral-200 flex flex-col gap-3">
          <Link href="/contact" onClick={onClose} className="w-full">
            <Button variant="primary" size="md" className="w-full">
              Demander une démo
            </Button>
          </Link>
          <a
            href="https://app.docaya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="ghost" size="md" className="w-full">
              Se connecter
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
