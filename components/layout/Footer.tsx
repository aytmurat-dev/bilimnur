import { Phone, Mail, MapPin } from "lucide-react";
import { TelegramIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcon";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#about", label: "Platforma haqida" },
  { href: "#books", label: "Kitoblar" },
  { href: "#courses", label: "Kurslar" },
  { href: "#contact", label: "Bog'lanish" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ink-700 shadow-soft transition-colors hover:text-primary-600"
              >
                <TelegramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ink-700 shadow-soft transition-colors hover:text-primary-600"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ink-700 shadow-soft transition-colors hover:text-primary-600"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-ink-900">Bo'limlar</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-ink-900">Aloqa</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-600">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-primary-600"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="flex items-center gap-2 transition-colors hover:text-primary-600"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {site.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-6 text-sm text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Barcha huquqlar himoyalangan.
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
