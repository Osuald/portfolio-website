"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Heart } from "lucide-react";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewportOptions,
} from "@/lib/animations";
import { techStack } from "@/data/skills";

const pillars = [
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Building cross-platform Flutter apps that feel native on every device.",
    color: "text-primary-400",
    bg: "bg-primary-900/30 border-primary-800/40",
  },
  {
    icon: Brain,
    title: "ML / Python",
    desc: "Turning data into decisions — from predictive models to automation pipelines.",
    color: "text-secondary-400",
    bg: "bg-secondary-900/30 border-secondary-800/40",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing readable, maintainable code following SOLID principles and best practices.",
    color: "text-emerald-400",
    bg: "bg-emerald-900/20 border-emerald-800/30",
  },
  {
    icon: Heart,
    title: "User-Centric",
    desc: "Every line of code serves a real user — performance, accessibility, and UX matter.",
    color: "text-rose-400",
    bg: "bg-rose-900/20 border-rose-800/30",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-zinc-950 dark:bg-surface-950 relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary-400 uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Turning Ideas into <span className="text-gradient">Reality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Avatar placeholder + decorative ring */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer spinning gradient ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800 opacity-20 blur-xl animate-float" />

              {/* 1. Updated Container: added 'relative' and 'z-0' */}
              <div
                className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden border-2 border-zinc-800/80
                    bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center shadow-2xl"
              >
                {/* 2. Your Image with the fit fix */}
                <Image
                  src="/images/avatar.jpg"
                  alt="Osuald Iradukunda"
                  fill
                  className="object-cover object-top z-10" // added object-top and z-index
                  priority
                />

                {/* 3. Fallback: This only shows if the image fails to load or is transparent */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-4xl font-extrabold text-white">
                    OI
                  </div>
                  <p className="text-zinc-400 text-sm font-medium">
                    Osuald Iradukunda
                  </p>
                  <p className="text-zinc-600 text-xs">Software Engineer</p>
                </div>
              </div>

              {/* Status badge - added z-20 to ensure it stays on top of the image */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-emerald-400 text-sm font-semibold flex items-center gap-2 shadow-lg z-20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
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
            <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                Hey! I'm{" "}
                <span className="text-white font-semibold">
                  Osuald Iradukunda
                </span>
                , a passionate Computer Engineering student at the{" "}
                <span className="text-primary-400 font-medium">
                  University of Rwanda
                </span>{" "}
                and a self-driven software engineer with a love for building
                things that matter.
              </p>
              <p>
                My stack centers on{" "}
                <span className="text-white font-medium">Flutter & Dart</span>{" "}
                for mobile apps and{" "}
                <span className="text-white font-medium">Python</span> for
                backends, data pipelines, and machine-learning solutions. I
                believe great software starts with understanding the{" "}
                <em>problem</em>, not the technology.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source
                projects, exploring new frameworks, or mentoring peers at
                university. I'm on a mission to build tools that genuinely
                improve lives across Africa and beyond.
              </p>
            </div>

            {/* Tech stack tags */}
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                               bg-zinc-800/70 border border-zinc-700/50 text-zinc-300
                               hover:border-primary-600/50 hover:text-primary-300 transition-colors duration-200"
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CV download */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm
                         border border-primary-700/60 text-primary-300 bg-primary-900/20
                         hover:bg-primary-900/40 hover:border-primary-600
                         active:scale-[0.98] transition-all duration-200"
            >
              Download CV
              <span className="text-xs">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`p-5 rounded-2xl border ${p.bg} card-hover`}
            >
              <p.icon className={`h-6 w-6 mb-3 ${p.color}`} />
              <h3 className="text-white font-bold mb-1.5">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
