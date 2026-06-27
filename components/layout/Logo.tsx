import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt={`${site.name} logotipi`}
      width={190}
      height={44}
      priority
      className={className}
    />
  );
}
