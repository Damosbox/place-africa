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
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-brand text-white hover:bg-brand-light shadow-cta hover:shadow-hover active:scale-[0.98]",
      secondary:
        "bg-brand-subtle text-brand hover:bg-brand hover:text-white",
      outline:
        "border-2 border-brand text-brand bg-transparent hover:bg-brand hover:text-white",
      ghost:
        "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
      whatsapp:
        "bg-whatsapp text-white hover:bg-[#20c55b] shadow-cta active:scale-[0.98]",
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
