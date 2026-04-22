"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/experience";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-zinc-900/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary-600/30 to-transparent" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-secondary-400 uppercase tracking-[0.2em] mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-primary-900/40 border border-primary-800/40">
                <Briefcase className="h-5 w-5 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Work Experience</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative pl-6 space-y-6"
            >
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600/60 via-primary-800/30 to-transparent" />

              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={fadeLeft}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[1.375rem] top-5 h-3 w-3 rounded-full border-2 border-primary-500 z-10"
                    style={{ backgroundColor: exp.logoColor }}
                  />

                  <div className="bg-zinc-900 border border-zinc-800/60 rounded-2xl p-5 hover:border-primary-700/40 transition-colors duration-300">
                    {/* Header */}
                    <div
                      className="h-10 w-10 rounded-xl mb-4 flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: exp.logoColor + "33" }}
                    >
                      <span style={{ color: exp.logoColor }}>{exp.company.charAt(0)}</span>
                    </div>

                    <h4 className="text-white font-bold text-base">{exp.position}</h4>
                    <p className="text-primary-400 font-medium text-sm mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-primary-500 mt-0.5 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium
                                     bg-zinc-800 border border-zinc-700/60 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-secondary-900/40 border border-secondary-800/40">
                <GraduationCap className="h-5 w-5 text-secondary-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative pl-6 space-y-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-600/60 via-secondary-800/30 to-transparent" />

              {education.map((edu) => (
                <motion.div key={edu.id} variants={fadeRight} className="relative">
                  <div
                    className="absolute -left-[1.375rem] top-5 h-3 w-3 rounded-full border-2 border-secondary-500 z-10"
                    style={{ backgroundColor: edu.logoColor }}
                  />

                  <div className="bg-zinc-900 border border-zinc-800/60 rounded-2xl p-5 hover:border-secondary-700/40 transition-colors duration-300">
                    <div className="h-10 w-10 rounded-xl mb-4 flex items-center justify-center bg-secondary-900/30 border border-secondary-800/30">
                      <GraduationCap className="h-5 w-5 text-secondary-400" />
                    </div>

                    <h4 className="text-white font-bold text-base">{edu.institution}</h4>
                    <p className="text-secondary-400 font-medium text-sm">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-zinc-600 text-xs italic mb-3">{edu.field}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.startDate} — {edu.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-secondary-500 mt-0.5 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary-900/30 to-secondary-900/20
                         border border-primary-800/30"
            >
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "The best engineers are lifelong learners. Every project is a classroom,
                every bug is a lesson, and every shipped feature is a milestone worth celebrating."
              </p>
              <p className="text-primary-400 text-xs font-medium mt-3">— Osuald Iradukunda</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
