import { cn } from "@/lib/utils/cn";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-sm font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
}
