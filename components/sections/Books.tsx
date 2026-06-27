"use client";

import Image from "next/image";
import { Phone, BookOpen, MapPin, Clock, ShoppingBag, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";
import { books } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Books() {
  return (
    <section id="books" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Orqa fon dekoratsiyasi */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-accent-100/40 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Kitoblar va qo'llanmalar"
          title="Asoschilarimiz mualliflik kitoblari"
          description="Sifatli ta'lim va imtihonlarda yuqori natijalar kafolati bo'lgan maxsus darslik va qo'llanmalar to'plami."
        />

        {/* Galereya va CTA Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Chap tomondagi Do'kon va Buyurtma CTA oynasi (3/12 ustun) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-primary-800 bg-gradient-to-br from-primary-950 via-primary-900 to-ink-950 p-8 text-white shadow-glow">
                {/* Yorug'lik effekti */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-800/80 text-accent-400">
                  <ShoppingBag className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">
                  Kitob do'koni
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-200">
                  Kitoblarimizni Toshkentdagi rasmiy do'konimizdan xarid qilishingiz yoki telefon orqali yetkazib berish bilan buyurtma berishingiz mumkin.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Telefon raqam */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-800/50 text-accent-400">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                        Buyurtma telefoni
                      </p>
                      <a
                        href={site.contact.phoneHref}
                        className="mt-1 block text-lg font-bold text-white transition-colors hover:text-accent-400"
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Manzil */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-800/50 text-accent-400">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                        Do'kon manzili
                      </p>
                      <p className="mt-1 font-medium leading-relaxed text-white">
                        {site.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Ish vaqti */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-800/50 text-accent-400">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                        Ish tartibi
                      </p>
                      <p className="mt-1 font-medium text-white">
                        {site.contact.workHours}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={site.contact.phoneHref}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-500 py-4 text-center font-bold text-ink-950 shadow-soft transition-all duration-300 hover:bg-accent-450 hover:shadow-glow active:scale-[0.98]"
                >
                  <Phone className="h-5 w-5" />
                  Qo'ng'iroq qilish
                </a>
              </div>
            </Reveal>
          </div>

          {/* O'ng tomondagi Kitoblar Galereyasi (8/12 ustun) */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book, i) => (
                <Reveal key={book.id} delay={i * 0.08}>
                  <article className="group flex h-full flex-col justify-between rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-100 hover:shadow-card">
                    <div>
                      {/* 3D effektli Muqova konteyneri */}
                      <div className="relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-ink-50 [perspective:1000px]">
                        {/* 3D soya va burilish */}
                        <div
                          className="relative h-[90%] w-[80%] transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-18deg)_translateZ(15px)] shadow-[5px_5px_15px_rgba(0,0,0,0.15)] group-hover:shadow-[15px_15px_30px_rgba(0,0,0,0.25)]"
                        >
                          {book.cover ? (
                            <Image
                              src={book.cover}
                              alt={book.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="rounded-lg object-cover"
                              priority={i === 0}
                            />
                          ) : (
                            <div
                              className={cn(
                                "flex h-full w-full flex-col justify-between bg-gradient-to-br p-6 text-white rounded-lg",
                                book.accent
                              )}
                            >
                              <BookOpen className="h-8 w-8 text-white/80" />
                              <span className="font-bold leading-tight">{book.title}</span>
                            </div>
                          )}

                          {/* Kitob varag'i cheti effekti */}
                          <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Kitob ustidagi teg */}
                        {book.tag && (
                          <span className="absolute left-3 top-3 z-10">
                            <Badge tone={book.tag === "Bestseller" ? "accent" : "primary"}>
                              {book.tag}
                            </Badge>
                          </span>
                        )}

                        {/* Hoverda yuzaga chiquvchi yorug'lik shishasi */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      {/* Kitob Tafsilotlari */}
                      <div className="mt-5 px-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                          {book.author}
                        </span>
                        <h4 className="mt-1.5 text-lg font-bold text-ink-900 leading-snug group-hover:text-primary-600 transition-colors">
                          {book.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-600 line-clamp-3">
                          {book.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 px-1">
                      <a
                        href={site.contact.phoneHref}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-ink-200 bg-white py-3 text-sm font-semibold text-ink-800 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                      >
                        <Phone className="h-4 w-4" />
                        Sotib olish
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
