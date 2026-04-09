import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "green" | "orange" | "blue" | "red" | "yellow" | "indigo" | "purple" | "gray";
}

const colorMap: Record<string, string> = {
  brand: "bg-brand-subtle text-brand",
  green: "bg-emerald-50 text-emerald-700",
  orange: "bg-orange-50 text-orange-700",
  blue: "bg-blue-50 text-blue-700",
  red: "bg-red-50 text-red-700",
  yellow: "bg-amber-50 text-amber-700",
  indigo: "bg-indigo-50 text-indigo-700",
  purple: "bg-purple-50 text-purple-700",
  gray: "bg-neutral-100 text-neutral-700",
};

export function Badge({ variant = "brand", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
        colorMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
