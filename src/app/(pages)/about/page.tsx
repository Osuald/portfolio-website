import type { Metadata } from "next";
import About      from "@/components/sections/About";
import Skills     from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Osuald Iradukunda — Flutter & Python developer based in Kigali, Rwanda.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
