"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";

interface NavLink {
  label: string;
  href: string;
  disabled?: boolean;
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
            <Image src="/images/logo-dark.png" alt="Place Africa" width={28} height={28} className="object-contain" />
            <span className="font-bold text-lg text-neutral-900">Place Africa</span>
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
          {links.map((link) =>
            link.disabled ? (
              <div
                key={link.label}
                className="px-4 py-2 text-xs font-semibold text-brand uppercase tracking-widest mt-3"
              >
                {link.label}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-neutral-700 font-medium hover:bg-brand-subtle hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
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
