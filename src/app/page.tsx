import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = {
  title: "Home | Osuald Iradukunda",
  description:
    "Portfolio of Osuald Iradukunda – Software & Computer Engineering student.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <MotionWrapper>
        <Skills />
      </MotionWrapper>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
