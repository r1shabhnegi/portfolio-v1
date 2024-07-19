import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
