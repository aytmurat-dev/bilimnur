import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fon dekoratsiyasi */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent-500" />
              Online va offline ta'lim platformasi
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Bilim sari ishonchli{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                yo'ldoshingiz
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600 sm:text-xl">
              SAT, fan olimpiadalari, Prezident va ixtisoslashtirilgan maktablar, Milliy
              sertifikat hamda IELTS/Multilevel bo'yicha tizimli tayyorgarlik — bir joyda.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#courses" variant="primary" size="lg" className="w-full sm:w-auto">
                Kurslar bilan tanishish
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href={site.contact.phoneHref}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Bog'lanish
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Statistika */}
        <Reveal delay={0.32}>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink-100 bg-white/70 p-5 text-center shadow-soft backdrop-blur"
              >
                <div className="text-3xl font-extrabold tracking-tight text-primary-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
