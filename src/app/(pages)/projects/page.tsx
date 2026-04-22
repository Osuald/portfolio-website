import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Flutter apps, Python tools, and ML solutions built by Osuald Iradukunda.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Projects />
    </div>
  );
}
