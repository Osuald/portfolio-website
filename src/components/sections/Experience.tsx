"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences, education, certifications } from "@/data/experience";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-night-950 relative overflow-hidden">
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
          <p className="label-mono mb-3">Background</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-ink-900 dark:text-cream-100">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work experience */}
          <div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="flex items-center gap-2.5 mb-8"
            >
              <div className="p-2 rounded-lg bg-seafoam-50 dark:bg-seafoam-900/20 border border-seafoam-200 dark:border-seafoam-800/40">
                <Briefcase className="h-4 w-4 text-seafoam-600 dark:text-seafoam-400" />
              </div>
              <h3 className="font-mono text-base font-bold text-ink-900 dark:text-cream-100">Work Experience</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative pl-5 space-y-5"
            >
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-seafoam-400/60 to-transparent" />

              {experiences.map((exp) => (
                <motion.div key={exp.id} variants={fadeLeft} className="relative">
                  <div
                    className="absolute -left-[1.3rem] top-5 h-2.5 w-2.5 rounded-full border-2 border-seafoam-500 bg-white dark:bg-night-950 z-10"
                  />

                  <div className="bg-cream-100 dark:bg-night-900 rounded-2xl p-5
                                  border border-cream-300 dark:border-night-700
                                  hover:border-seafoam-300 dark:hover:border-seafoam-800
                                  transition-colors duration-200">
                    <h4 className="text-ink-900 dark:text-cream-100 font-semibold text-[15px]">{exp.position}</h4>
                    <p className="text-seafoam-600 dark:text-seafoam-400 text-sm font-medium mb-2.5">{exp.company}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-ink-400 dark:text-ink-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-400">
                          <span className="text-seafoam-500 mt-0.5 shrink-0">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium
                                     bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700 text-ink-500 dark:text-ink-400">
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
              className="flex items-center gap-2.5 mb-8"
            >
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/40">
                <GraduationCap className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h3 className="font-mono text-base font-bold text-ink-900 dark:text-cream-100">Education</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative pl-5 space-y-5"
            >
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-300/60 to-transparent" />

              {education.map((edu) => (
                <motion.div key={edu.id} variants={fadeRight} className="relative">
                  <div className="absolute -left-[1.3rem] top-5 h-2.5 w-2.5 rounded-full border-2 border-indigo-400 bg-white dark:bg-night-950 z-10" />

                  <div className="bg-cream-100 dark:bg-night-900 rounded-2xl p-5
                                  border border-cream-300 dark:border-night-700
                                  hover:border-indigo-300 dark:hover:border-indigo-800
                                  transition-colors duration-200">
                    <h4 className="text-ink-900 dark:text-cream-100 font-semibold text-[15px]">{edu.institution}</h4>
                    <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mb-2.5">
                      {edu.degree} in {edu.field}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs text-ink-400 dark:text-ink-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.startDate} — {edu.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-400">
                          <span className="text-indigo-400 mt-0.5 shrink-0">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="mt-8"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40">
                  <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-mono text-base font-bold text-ink-900 dark:text-cream-100">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-4 rounded-xl
                               bg-cream-100 dark:bg-night-900
                               border border-cream-300 dark:border-night-700
                               hover:border-amber-300 dark:hover:border-amber-800
                               transition-colors duration-200"
                  >
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                    <div>
                      <p className="text-ink-900 dark:text-cream-100 text-sm font-semibold leading-snug">{cert.title}</p>
                      <p className="text-amber-600 dark:text-amber-400 text-xs font-medium mt-0.5">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
