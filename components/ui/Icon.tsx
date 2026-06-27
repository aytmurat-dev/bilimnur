import {
  GraduationCap,
  Trophy,
  School,
  BadgeCheck,
  Languages,
  MonitorSmartphone,
  Users,
  Target,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

/** data.ts dagi `icon` nomlarini lucide komponentlariga bog'laydi. */
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Trophy,
  School,
  BadgeCheck,
  Languages,
  MonitorSmartphone,
  Users,
  Target,
  BookOpen,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? BookOpen;
  return <Cmp className={className} aria-hidden="true" />;
}
