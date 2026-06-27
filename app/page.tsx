import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Books } from "@/components/sections/Books";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Books />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
