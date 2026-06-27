"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, BookOpen, ShoppingBag, X, ZoomIn, BadgeCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";
import { books, type Book } from "@/lib/data";

/**
 * Muqova ramkasi — featured va grid kartalarida qayta ishlatiladi.
 * Rasm ustiga bosilganda (tugma) lightbox ochiladi; klaviatura bilan ham ishlaydi.
 */
function CoverFrame({
  book,
  priority,
  sizes,
  onZoom,
}: {
  book: Book;
  priority?: boolean;
  sizes: string;
  onZoom: () => void;
}) {
  return (
    <div className="relative">
      {book.tag && (
        <Badge
          tone={book.tag === "Bestseller" ? "accent" : "primary"}
          className="absolute left-3 top-3 z-10 shadow-soft"
        >
          {book.tag}
        </Badge>
      )}

      {book.cover ? (
        <button
          type="button"
          onClick={onZoom}
          aria-label={`${book.title} muqovasini kattalashtirish`}
          className="group/img relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-ink-100/60 bg-gradient-to-br from-ink-50 to-ink-100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
        >
          <Image
            src={book.cover}
            alt={book.title}
            fill
            sizes={sizes}
            priority={priority}
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover/img:scale-105"
          />
          {/* Kattalashtirish belgisi — telefonlarda ham doim ko'rinadi (hover shart emas) */}
          <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/55 text-white backdrop-blur transition-colors group-hover/img:bg-ink-950/75">
            <ZoomIn className="h-4.5 w-4.5" />
          </span>
        </button>
      ) : (
        <div className="relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-100/40 bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
          <BookOpen className="h-8 w-8 text-white/80" />
          <span className="text-lg font-bold leading-tight">{book.title}</span>
        </div>
      )}
    </div>
  );
}

export function Books() {
  const [selected, setSelected] = useState<Book | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lightbox ochiq bo'lganda: Escape bilan yopish, sahifa scrollini bloklash,
  // fokusni yopish tugmasiga olib o'tish va yopilgach qaytarish (a11y).
  useEffect(() => {
    if (!selected) return;
    const prevFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocused?.focus?.();
    };
  }, [selected]);

  // Bestseller (yoki birinchi kitob) — "featured" sifatida ajratiladi.
  const featured = books.find((b) => b.tag === "Bestseller") ?? books[0];
  const rest = books.filter((b) => b.id !== featured.id);

  return (
    <section id="books" className="relative overflow-hidden bg-ink-50/30 py-14 sm:py-20 lg:py-28">
      {/* Orqa fon dekoratsiyasi */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />

      <Container>
        <SectionHeading
          align="left"
          eyebrow="Kitoblar va qo'llanmalar"
          title="Asoschilarimiz mualliflik kitoblari"
          description="Sifatli ta'lim va imtihonlarda yuqori natijalar kafolati bo'lgan maxsus darslik va qo'llanmalar to'plami."
          className="max-w-3xl mx-0"
        />

        {/* Ishonch belgilari */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-ink-500 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4 shrink-0 text-primary-600" />
              Mualliflik qo&apos;llanmalar
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 shrink-0 text-primary-600" />
              Imtihonlarga mos tayyorlangan
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary-600" />
              Nukus do&apos;konidan yetkazib berish
            </span>
          </div>
        </Reveal>

        {/* Featured (asosiy) kitob */}
        <Reveal className="mt-10">
          <div className="grid items-center gap-8 rounded-[32px] border border-ink-100 bg-white p-5 shadow-card sm:p-8 lg:grid-cols-12 lg:gap-12">
            <div className="relative mx-auto w-full max-w-[300px] lg:col-span-5 lg:max-w-none">
              <CoverFrame
                book={featured}
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                onZoom={() => featured.cover && setSelected(featured)}
              />
            </div>

            <div className="flex flex-col lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
                {featured.author}
              </span>
              <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-2xl xl:text-[1.75rem]">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">
                {featured.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.bookstore.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-soft transition-all duration-300 hover:bg-accent-400 hover:shadow-glow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Sotib olish
                </a>
                {featured.cover && (
                  <button
                    type="button"
                    onClick={() => setSelected(featured)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 px-7 py-3.5 text-sm font-bold text-ink-700 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 sm:w-auto"
                  >
                    <ZoomIn className="h-4 w-4" />
                    Muqovani ko&apos;rish
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Qolgan kitoblar — moslashuvchan grid (3 tadan 12+ gacha cho'ziladi) */}
        {rest.length > 0 && (
          <div className="mt-8 grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(258px,340px))]">
            {rest.map((book, i) => (
              <Reveal key={book.id} delay={i * 0.05} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card">
                  <CoverFrame
                    book={book}
                    sizes="(max-width: 640px) 90vw, 320px"
                    onZoom={() => book.cover && setSelected(book)}
                  />

                  <span className="mt-5 block text-[10px] font-bold uppercase tracking-wider text-ink-500">
                    {book.author}
                  </span>
                  <h3 className="mt-2 line-clamp-2 text-base font-bold leading-tight tracking-tight text-ink-900 transition-colors group-hover:text-primary-600">
                    {book.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">
                    {book.description}
                  </p>

                  <div className="mt-auto flex items-stretch gap-2 pt-5">
                    {book.cover && (
                      <button
                        type="button"
                        onClick={() => setSelected(book)}
                        aria-label={`${book.title} muqovasini ko'rish`}
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                    )}
                    <a
                      href={site.bookstore.phoneHref}
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 text-sm font-bold text-ink-950 shadow-soft transition-all duration-300 hover:bg-accent-400 hover:shadow-glow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
                    >
                      <Phone className="h-4 w-4" />
                      Sotib olish
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Kitob do'koni buyurtma telefoni banneri */}
        <Reveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-[32px] border border-primary-800 bg-gradient-to-br from-primary-950 via-primary-900 to-ink-950 p-6 md:p-8 text-white shadow-glow max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Yorug'lik effekti */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl" />

            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-800/80 text-accent-400 sm:flex">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">Kitob do&apos;koni buyurtma xizmati</h3>
                <p className="text-sm text-primary-200 mt-0.5 max-w-md">
                  Kitoblarimizni Nukus shahridagi do&apos;konimizdan xarid qilishingiz yoki telefon orqali buyurtma berishingiz mumkin.
                </p>
              </div>
            </div>

            <a
              href={site.bookstore.phoneHref}
              className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-3.5 text-center font-bold text-ink-950 shadow-soft transition-all duration-300 hover:bg-accent-400 hover:shadow-glow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <Phone className="h-4 w-4" />
              Buyurtma: {site.bookstore.phone}
            </a>
          </div>
        </Reveal>
      </Container>

      {/* Rasm ustiga bosilganda kattalashadigan modal overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} muqovasi`}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelected(null)}
          >
            <button
              ref={closeRef}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-400 p-2.5 transition-colors duration-200 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Yopish"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.cover}
                alt={`${selected.title} muqovasi`}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
