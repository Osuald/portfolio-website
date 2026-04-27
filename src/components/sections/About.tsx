"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Brain, Heart } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from "@/lib/animations";
import { techStack } from "@/data/skills";

const pillars = [
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Cross-platform Flutter apps that feel native on every device.",
    color: "text-seafoam-600 dark:text-seafoam-400",
    bg: "bg-seafoam-50 dark:bg-seafoam-900/20 border-seafoam-200 dark:border-seafoam-800/40",
  },
  {
    icon: Brain,
    title: "ML / Python",
    desc: "Turning data into decisions — predictive models to automation pipelines.",
    color: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800/40",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Readable, maintainable code following SOLID principles.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/40",
  },
  {
    icon: Heart,
    title: "User-Centric",
    desc: "Every feature serves a real user — performance and UX matter.",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800/40",
  },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-night-900 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 divider-seafoam" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <p className="label-mono mb-3">About Me</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-ink-900 dark:text-cream-100">
            Turning ideas into <span className="text-gradient">reality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Left — Photo */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden
                              border-2 border-cream-300 dark:border-night-700
                              bg-cream-200 dark:bg-night-800 shadow-xl shadow-seafoam-100/30 dark:shadow-night-950/50">
                {imgError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="h-20 w-20 rounded-full bg-seafoam-500 flex items-center justify-center
                                    text-3xl font-bold text-white font-mono">
                      OI
                    </div>
                    <p className="text-ink-600 dark:text-ink-400 text-sm">Osuald Iradukunda</p>
                  </div>
                ) : (
                  <Image
                    src="/images/avatar.jpg"
                    alt="Osuald Iradukunda"
                    fill
                    className="object-cover object-top"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl
                              bg-white dark:bg-night-800 border border-seafoam-200 dark:border-seafoam-800
                              shadow-lg text-sm font-semibold text-emerald-700 dark:text-emerald-400
                              flex items-center gap-2 z-10">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Work
              </div>
            </div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            <div className="space-y-4 text-ink-800 dark:text-ink-400 leading-relaxed text-[15px]">
              <p>
                Hi! I'm{" "}
                <span className="text-ink-900 dark:text-cream-100 font-semibold">Osuald Iradukunda</span>,
                a Computer Engineering student (GPA 4.61/5) at the{" "}
                <span className="text-seafoam-700 dark:text-seafoam-400 font-semibold">University of Rwanda</span>{" "}
                with hands-on experience in web, mobile, and embedded systems development.
              </p>
              <p>
                I build across the full stack —{" "}
                <span className="text-ink-900 dark:text-cream-200 font-semibold">Flutter & Dart</span>{" "}
                for cross-platform mobile,{" "}
                <span className="text-ink-900 dark:text-cream-200 font-semibold">Java Spring Boot</span>{" "}
                and{" "}
                <span className="text-ink-900 dark:text-cream-200 font-semibold">Node.js / Python</span>{" "}
                for backends, and{" "}
                <span className="text-ink-900 dark:text-cream-200 font-semibold">Next.js</span>{" "}
                for web frontends. I have professional experience delivering production systems and am actively looking for new opportunities.
              </p>
              <p>
                Passionate about building scalable, efficient software that solves real problems —
                from public-sector digital services to IoT systems and data-driven tools.
                My goal is to contribute to innovative technology solutions across Africa and beyond.
              </p>
            </div>

            {/* Tech tags */}
            <div>
              <p className="label-mono mb-3">Tech I work with</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium
                               bg-cream-100 dark:bg-night-800 border border-cream-300 dark:border-night-700
                               text-ink-700 dark:text-cream-200
                               hover:border-seafoam-400 hover:text-seafoam-700 dark:hover:text-seafoam-400
                               transition-colors duration-200 cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                         border border-seafoam-400 text-seafoam-700 dark:text-seafoam-400
                         hover:bg-seafoam-50 dark:hover:bg-seafoam-900/20
                         active:scale-[0.98] transition-all duration-200"
            >
              Download CV
              <span className="text-xs">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`p-5 rounded-2xl border ${p.bg} card-hover`}
            >
              <p.icon className={`h-5 w-5 mb-3 ${p.color}`} />
              <h3 className="text-ink-900 dark:text-cream-100 font-semibold text-sm mb-1.5">{p.title}</h3>
              <p className="text-ink-700 dark:text-ink-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
