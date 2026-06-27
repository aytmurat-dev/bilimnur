import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "bilimnur",
    "SAT kurslari",
    "olimpiada",
    "IELTS",
    "Multilevel",
    "Milliy sertifikat",
    "Prezident maktablari",
    "ixtisoslashtirilgan maktablar",
    "ta'lim platformasi",
    "online kurslar",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink-900">{children}</body>
    </html>
  );
}
