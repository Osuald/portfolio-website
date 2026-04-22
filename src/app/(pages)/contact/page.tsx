import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Osuald Iradukunda for projects, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
