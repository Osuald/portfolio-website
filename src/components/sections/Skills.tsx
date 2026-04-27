"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Wrench } from "lucide-react";
import { skills } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

const categoryIcons = [Smartphone, Code2, Wrench];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const category = skills.categories[activeTab];

  return (
    <section id="skills" className="section-padding bg-cream-200 dark:bg-night-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 divider-seafoam" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <p className="label-mono mb-3">Skills</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-ink-900 dark:text-cream-100">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-ink-700 dark:text-ink-400 mt-4 max-w-xl mx-auto text-[15px]">
            Technologies I rely on in production projects and personal builds.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {skills.categories.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${activeTab === i
                    ? "bg-seafoam-500 text-white shadow-sm"
                    : "bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700 text-ink-600 dark:text-ink-400 hover:border-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-400"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-cream-200 dark:border-night-700">
              {(() => { const Icon = categoryIcons[activeTab]; return <Icon className="h-5 w-5 text-seafoam-500" />; })()}
              <h3 className="font-mono text-base font-semibold text-ink-900 dark:text-cream-100">{category.name}</h3>
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
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-ink-700 dark:text-cream-200 text-sm font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-ink-400 dark:text-ink-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-cream-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-seafoam-500 to-seafoam-700"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Also familiar with */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-14 text-center"
        >
          <p className="label-mono mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "C", "C++", "PHP", "Laravel", "GraphQL", "WebSockets", "OAuth",
              "GitLab", "CI/CD", "Agile / Scrum", "MVC", "Clean Architecture",
              "OOP", "Embedded Systems", "Raspberry Pi",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium
                           bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700
                           text-ink-500 dark:text-ink-400
                           hover:border-seafoam-300 hover:text-seafoam-600 dark:hover:text-seafoam-400
                           transition-colors duration-200 cursor-default"
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
