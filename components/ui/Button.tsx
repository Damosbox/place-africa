"use client";

import { cn } from "@/lib/utils/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none cursor-pointer";

    const variants = {
      // Black primary — Klaviyo style
      primary:
        "bg-neutral-900 text-white hover:bg-black shadow-cta active:scale-[0.98]",
      // Light secondary
      secondary:
        "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      // Black outline
      outline:
        "border-2 border-neutral-900 text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white",
      // Ghost / transparent
      ghost:
        "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
      // WhatsApp green
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20c55b] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
