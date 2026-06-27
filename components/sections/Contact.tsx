import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
  {
    label: "Email",
    value: site.contact.email,
    href: site.contact.emailHref,
    icon: Mail,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Bog'lanish"
          title="Biz bilan bog'laning"
          description="Savollaringiz bormi yoki kurslar va kitoblar haqida ma'lumot kerakmi? Quyidagi kanallar orqali biz bilan tez bog'lanishingiz mumkin."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Aloqa kanallari */}
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((ch, i) => {
              const ChIcon = ch.icon;
              return (
                <Reveal key={ch.label} delay={i * 0.06}>
                  <a
                    href={ch.href}
                    {...(ch.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                      <ChIcon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-ink-400">
                        {ch.label}
                      </span>
                      <span className="block truncate font-semibold text-ink-900">
                        {ch.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Manzil / ish vaqti kartasi */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-950 p-8 text-white shadow-card sm:p-10">
              <div>
                <h3 className="text-2xl font-bold">Tashrif buyuring</h3>
                <p className="mt-2 text-primary-100">
                  Offline darslar va maslahat uchun bizni kuting.
                </p>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  <div>
                    <p className="text-sm text-primary-200">Manzil</p>
                    <p className="font-medium">{site.contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  <div>
                    <p className="text-sm text-primary-200">Ish vaqti</p>
                    <p className="font-medium">{site.contact.workHours}</p>
                  </div>
                </li>
              </ul>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-ink-950 transition-colors hover:bg-accent-400"
              >
                <Phone className="h-5 w-5" />
                Hoziroq qo'ng'iroq qiling
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
