"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer, scaleUp, viewportOptions } from "@/lib/animations";

const categories = ["All", "Mobile App", "ML / Web", "Web", "CLI Tool"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const others   = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-zinc-900/30 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary-600/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-600/30 to-transparent" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-10"
        >
          <p className="text-sm font-mono text-secondary-400 uppercase tracking-[0.2em] mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-[15px]">
            A selection of work spanning Flutter apps, Python backends, and ML solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-900/30"
                  : "bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:border-primary-700/50 hover:text-primary-300"
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
              key={activeCategory + "-featured"}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            >
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center mb-6"
            >
              Other Projects
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        )}

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-zinc-500 py-20"
          >
            No projects in this category yet.
          </motion.p>
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
  return (
    <motion.article
      variants={scaleUp}
      className="group relative flex flex-col rounded-2xl overflow-hidden
                 bg-zinc-900 border border-zinc-800/60
                 hover:border-primary-700/50
                 shadow-lg hover:shadow-primary-900/20
                 transition-all duration-300 hover:-translate-y-1 card-hover"
    >
      {/* Gradient top accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} opacity-80`} />

      {/* Icon area */}
      <div className={`h-36 flex items-center justify-center bg-gradient-to-br ${project.color} bg-opacity-10 relative`}>
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-black via-transparent to-black" />
        <span className="text-6xl relative z-10 drop-shadow-lg animate-float">
          {project.icon}
        </span>
        {featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-900/60 border border-amber-700/50">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span className="text-[10px] text-amber-300 font-medium">Featured</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Category badge */}
        <span className="text-xs font-mono text-secondary-400 mb-2">{project.category}</span>

        {/* Title & Description */}
        <h3 className="text-white font-bold text-base mb-2 line-clamp-1 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium
                         bg-zinc-800 border border-zinc-700/60 text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] text-zinc-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-zinc-800/60 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="flex items-center gap-1.5 text-sm text-zinc-400
                         hover:text-primary-400 transition-colors duration-200"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 text-sm text-zinc-400
                         hover:text-secondary-400 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-xs text-zinc-600 italic">Coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
