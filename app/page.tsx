import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Courses } from "@/components/sections/Courses";
import { Books } from "@/components/sections/Books";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Klaviatura foydalanuvchilari uchun kontentga o'tish havolasi (a11y) */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-900 focus:shadow-card focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        Asosiy kontentga o&apos;tish
      </a>
      <Navbar />
      <main>
        <About />
        <Founder />
        <Books />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
