import { Phone } from "lucide-react";
import { TelegramIcon, InstagramIcon } from "@/components/ui/SocialIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Telefon",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "Telegram",
    value: site.social.telegramHandle,
    href: site.social.telegram,
    icon: TelegramIcon,
    external: true,
  },
  {
    label: "Instagram",
    value: site.social.instagramHandle,
    href: site.social.instagram,
    icon: InstagramIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink-50 py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Bog'lanish"
          title="Biz bilan bog'laning"
          description="Savollaringiz bormi yoki kurslar va kitoblar haqida ma'lumot kerakmi? Quyidagi kanallar orqali biz bilan tez bog'lanishingiz mumkin."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Aloqa kanallari - 3 ustunli muvozanatli tartib */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {channels.map((ch, i) => {
              const ChIcon = ch.icon;
              return (
                <Reveal key={ch.label} delay={i * 0.08} className="h-full">
                  <a
                    href={ch.href}
                    {...(ch.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                      <ChIcon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink-500">
                        {ch.label}
                      </span>
                      <span className="block truncate font-semibold text-ink-900 mt-0.5">
                        {ch.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
