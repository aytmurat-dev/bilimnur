"use client";

import { Clock, Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { courses } from "@/lib/data";

export function Courses() {
  return (
    <section id="courses" className="relative overflow-hidden bg-ink-50 py-20 sm:py-28">
      {/* Murakkab orqa fon dekoratsiyalari */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-accent-100/30 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Kurslarimiz"
          title="Siz uchun eng kerakli yo'nalishlar"
          description="Bizning kurslarimiz tajribali murabbiylar tomonidan tizimli dastur asosida o'tiladi. O'zingizga mos kursni tanlang va kelajak poydevorini hozirdan quring."
        />

        {/* Kurslar kartalari to'plami */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={(i % 3) * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-glow">
                
                {/* Karta ichidagi orqa fon glow chiziqlari */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-500/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />

                <div>
                  <div className="flex items-start justify-between">
                    {/* Ikonka konteyneri yorug'lik effekti bilan */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-glow">
                      <Icon name={course.icon} className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Tez orada belgisi va pulsatsiya qiluvchi nuqta */}
                    {course.comingSoon && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50/70 border border-accent-200 px-3 py-1 text-xs font-semibold text-accent-700 backdrop-blur">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                        </span>
                        Tez orada
                      </span>
                    )}
                  </div>

                  {/* Kurs Sarlavhasi */}
                  <h3 className="mt-6 text-xl font-extrabold text-ink-900 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Kurs Tavsifi */}
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {course.description}
                  </p>

                  <div className="my-6 border-t border-dashed border-ink-100" />

                  {/* Asosiy Xususiyatlar */}
                  <h5 className="text-xs font-bold uppercase tracking-wider text-ink-400">
                    Kursda o'rganiladi:
                  </h5>
                  <ul className="mt-3 space-y-2.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-medium text-ink-700">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Harakat qilish (CTA) havolasi */}
                <div className="mt-8">
                  <a
                    href={site.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink-50 py-3 text-center text-sm font-bold text-ink-800 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-glow active:scale-[0.98]"
                  >
                    <span>Xabardor bo'lish</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </article>
            </Reveal>
          ))}

          {/* Muqobil Yo'nalishlar CTA Kartasi (Dizayn elementlari bilan) */}
          <Reveal delay={0.16} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-primary-300 bg-primary-50/40 p-8 text-center backdrop-blur">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-primary-300/10 blur-2xl" />
              
              <div className="flex flex-col items-center pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 text-accent-600 animate-pulse">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-ink-900">
                  Boshqa yo'nalish qiziqmi?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 max-w-xs">
                  Agar o'zingiz izlagan yo'nalishni topa olmagan bo'lsangiz, bizga yozing. Sizga mos dasturni birgalikda tanlaymiz.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3 text-center text-sm font-bold text-white shadow-soft transition-all duration-300 hover:bg-primary-700 hover:shadow-glow"
                >
                  Biz bilan bog'lanish
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
