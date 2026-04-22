"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const category = skills.categories[activeTab];

  return (
    <section id="skills" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-600/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-primary-400 uppercase tracking-[0.2em] mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-[15px]">
            A curated set of technologies I've worked with in production projects and personal builds.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeTab === i
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-900/40"
                  : "bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:border-primary-700/50 hover:text-primary-300"
                }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-zinc-200 font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{skill.level}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-600 to-secondary-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Tech Ticker */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs", "WebSockets", "CI/CD", "JWT Auth", "Agile / Scrum",
              "Unit Testing", "Clean Architecture", "MVC", "OOP", "Open Source",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs text-zinc-500 border border-zinc-800/80
                           bg-zinc-900/50 hover:border-zinc-700 hover:text-zinc-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
