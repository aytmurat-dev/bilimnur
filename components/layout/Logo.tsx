import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5 group">
      <Image
        src="/logo.png"
        alt={`${site.name} logotipi`}
        width={44}
        height={35}
        priority
        style={{ width: "auto" }}
        className={cn("object-contain transition-transform duration-300 group-hover:scale-105", className)}
      />
      <span className="font-black text-xl tracking-tight select-none">
        <span className="text-primary-600">BILIM</span>
        <span className="text-accent-500 transition-colors duration-300 group-hover:text-accent-400">NUR</span>
      </span>
    </div>
  );
}
