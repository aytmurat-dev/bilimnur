"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Platforma haqida" },
  { href: "#books", label: "Kitoblar" },
  { href: "#courses", label: "Kurslar" },
  { href: "#contact", label: "Bog'lanish" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menyu ochilganda scrollni bloklash
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-18">
          <a href="#about" aria-label={site.name} className="flex items-center">
            <Logo className="h-8 w-auto sm:h-9" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={site.contact.phoneHref} variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
              {site.contact.phone}
            </Button>
            <Button href="#contact" variant="primary" size="sm">
              Bog'lanish
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-800 hover:bg-ink-100 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-ink-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[420px] border-b opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={site.contact.phoneHref} variant="outline" size="md">
                <Phone className="h-4 w-4" />
                {site.contact.phone}
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                onClick={() => setOpen(false)}
              >
                Bog'lanish
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
