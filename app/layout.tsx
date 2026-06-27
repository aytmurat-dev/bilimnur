import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteTitle = "BILIMNUR — SAT, olimpiada va IELTS tayyorgarlik platformasi";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: siteTitle,
  description: site.description,
  alternates: {
    canonical: site.url,
  },
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
  authors: [{ name: "BILIMNUR" }],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: site.url,
    title: siteTitle,
    description: site.description,
    siteName: "BILIMNUR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: site.description,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink-900">{children}</body>
    </html>
  );
}
