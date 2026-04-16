import { cn } from "@/lib/utils/cn";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest",
        className
      )}
    >
      {children}
    </span>
  );
}
