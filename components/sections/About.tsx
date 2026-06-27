"use client";

import { CheckCircle2, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";

const missionPoints = [
  "Har bir o'quvchiga individual yondashuv",
  "Imtihon va olimpiadalarga aniq yo'naltirilgan dastur",
  "Online va offline qulay formatdagi darslar",
];

// Rang mavzulari har bir afzallik kartasi uchun
const themeStyles = [
  {
    bg: "from-emerald-50 to-green-50/40",
    text: "text-emerald-600",
    border: "group-hover:border-emerald-200",
    glow: "group-hover:text-emerald-100/50",
  },
  {
    bg: "from-amber-50 to-orange-50/40",
    text: "text-amber-600",
    border: "group-hover:border-amber-200",
    glow: "group-hover:text-amber-100/50",
  },
  {
    bg: "from-teal-50 to-emerald-50/40",
    text: "text-teal-600",
    border: "group-hover:border-teal-200",
    glow: "group-hover:text-teal-100/50",
  },
  {
    bg: "from-green-50 to-emerald-50/40",
    text: "text-green-600",
    border: "group-hover:border-green-200",
    glow: "group-hover:text-green-100/50",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pb-28">
      {/* Dekorativ orqa fon */}
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-primary-50/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-accent-50/30 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Platforma haqida"
          title={
            <>
              <span className="text-primary-600 font-black">BILIM</span>
              <span className="text-accent-500 font-black">NUR</span> — natijaga yo'naltirilgan ta'lim makoni
            </>
          }
          description="BILIMNUR o'quvchilarni xalqaro va milliy imtihonlarga, olimpiadalarga hamda nufuzli maktablarga puxta tayyorlaydi. Maqsadimiz — sifatli bilimni har bir o'quvchiga yetkazish."
        />

        {/* Missiya + afzalliklar yangi dizaynda */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Chap tomondagi Maqsad va Missiya bloklari (5/12 ustun) */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-ink-50/30 p-8 shadow-soft transition-all duration-300 hover:border-primary-100 hover:shadow-card">
                
                {/* Chap tarafdagi nozik gradient chiziq */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary-600 to-primary-800" />
                
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Target className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-extrabold text-ink-900">Bizning maqsadimiz</h3>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink-600">
                    Zamonaviy va tizimli ta'lim orqali o'quvchilarning bilim darajasini
                    oshirish, ularni kelajak imtihonlari va kasb tanloviga ishonch bilan
                    tayyorlash.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-500">
                    Asosiy tamoyillarimiz:
                  </p>
                  {missionPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3.5 rounded-2xl border border-ink-100/50 bg-white p-3.5 shadow-soft/50 transition-all duration-300 hover:border-primary-200 hover:bg-primary-50/20"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-ink-800">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* O'ng tomondagi 2x2 Afzalliklar kartalari tarmog'i (7/12 ustun) */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2 h-full">
              {features.map((feature, i) => {
                const theme = themeStyles[i] ?? themeStyles[0];
                return (
                  <Reveal key={feature.title} delay={i * 0.08} className="h-full">
                    <div
                      className={cn(
                        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
                        theme.border
                      )}
                    >
                      {/* Katta shaffof fon raqami */}
                      <span
                        className={cn(
                          "absolute right-6 top-3 text-7xl font-black text-ink-50/60 opacity-60 select-none transition-colors duration-300",
                          theme.glow
                        )}
                      >
                        0{i + 1}
                      </span>

                      <div>
                        {/* Ikonka idishi */}
                        <div
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 shadow-sm",
                            theme.bg,
                            theme.text
                          )}
                        >
                          <Icon name={feature.icon} className="h-6 w-6" />
                        </div>

                        <h3 className="mt-6 text-lg font-bold text-ink-900 group-hover:text-primary-600 transition-colors">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-ink-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
