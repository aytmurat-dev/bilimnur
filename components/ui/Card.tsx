import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  interactive = false,
}: {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}
