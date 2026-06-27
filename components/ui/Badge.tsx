import { cn } from "@/lib/utils";

type Tone = "primary" | "accent" | "neutral" | "soon";

const tones: Record<Tone, string> = {
  primary: "bg-primary-50 text-primary-700 ring-primary-100",
  accent: "bg-accent-50 text-accent-700 ring-accent-200",
  neutral: "bg-ink-100 text-ink-700 ring-ink-200",
  soon: "bg-accent-50 text-accent-700 ring-accent-200",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
