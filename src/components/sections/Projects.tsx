"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Terminal, LineChart, Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer, scaleUp, viewportOptions } from "@/lib/animations";

const categories = ["All", "Mobile App", "ML / Web", "Web", "CLI Tool"];

const categoryIcon: Record<string, React.ElementType> = {
  "Mobile App": Smartphone,
  "ML / Web":   LineChart,
  "Web":        Globe,
  "CLI Tool":   Terminal,
  "Portfolio":  Folder,
};

const categoryColor: Record<string, string> = {
  "Mobile App": "bg-seafoam-500",
  "ML / Web":   "bg-indigo-400",
  "Web":        "bg-sky-400",
  "CLI Tool":   "bg-amber-400",
  "Portfolio":  "bg-rose-400",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const others   = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-cream-100 dark:bg-night-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 divider-seafoam" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-10"
        >
          <p className="label-mono mb-3">My Work</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-ink-900 dark:text-cream-100 mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-xl mx-auto text-[15px]">
            Flutter apps, Python backends, and ML solutions built for real problems.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? "bg-seafoam-500 text-white shadow-sm"
                  : "bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700 text-ink-600 dark:text-ink-400 hover:border-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Grid */}
        <AnimatePresence mode="wait">
          {featured.length > 0 && (
            <motion.div
              key={activeCategory + "-f"}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
            >
              {featured.map((p) => <ProjectCard key={p.id} project={p} featured />)}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="label-mono text-center mb-6"
            >
              More Projects
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {others.map((p) => <ProjectCard key={p.id} project={p} />)}
            </motion.div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-ink-400 py-16 text-sm">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const Icon  = categoryIcon[project.category] ?? Folder;
  const color = categoryColor[project.category] ?? "bg-slate-400";

  return (
    <motion.article
      variants={scaleUp}
      className="group flex flex-col rounded-2xl overflow-hidden
                 bg-white dark:bg-night-900
                 border border-cream-300 dark:border-night-700
                 hover:border-seafoam-400 dark:hover:border-seafoam-700
                 shadow-sm hover:shadow-md hover:shadow-seafoam-100/40 dark:hover:shadow-night-950/40
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Card top — colored stripe + icon */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className={`p-2.5 rounded-xl ${color} text-white shadow-sm`}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="font-mono text-[11px] text-ink-300 dark:text-ink-600 uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 px-5 pb-5">
        {/* Title */}
        <h3 className="text-ink-900 dark:text-cream-100 font-semibold text-[15px] mb-2 leading-snug
                       group-hover:text-seafoam-700 dark:group-hover:text-seafoam-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium
                         bg-cream-100 dark:bg-night-800 border border-cream-300 dark:border-night-700
                         text-ink-500 dark:text-ink-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-ink-300 dark:text-ink-600 px-1">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-cream-200 dark:border-night-800 pt-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-seafoam-600 dark:hover:text-seafoam-400 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-seafoam-600 dark:hover:text-seafoam-400 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          ) : null}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-[11px] text-ink-300 dark:text-ink-600 italic">Coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
