"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ROLES, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon,   href: SITE.github,                                 label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/osuald-iradukunda", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com/osuald_dev",            label: "Twitter/X" },
  { icon: WhatsAppIcon, href: SITE.whatsapp,                               label: "WhatsApp" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-950 dark:bg-surface-950" />
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary-600/20 filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-secondary-600/15 filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3  w-80 h-80 rounded-full bg-primary-800/15 filter blur-[120px] animate-blob animation-delay-4000" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Social Links – left side (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex fixed left-6 bottom-0 z-40 flex-col items-center gap-5 pb-8"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 text-zinc-500 hover:text-primary-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="w-px h-24 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="container-custom w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                             bg-primary-900/40 border border-primary-700/50 text-primary-300">
              <Sparkles className="h-3.5 w-3.5" />
              Available for hire · Kigali, Rwanda
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-white leading-[1.05]"
          >
            Osuald{" "}
            <span className="text-gradient">Iradukunda</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUp}
            className="h-12 flex items-center justify-center mb-6"
          >
            <p className="text-xl md:text-2xl font-mono font-semibold text-zinc-300">
              <span className="text-primary-400">&gt;</span>{" "}
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary-400 ml-0.5 animate-pulse align-middle" />
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I craft high-performance{" "}
            <span className="text-zinc-200 font-medium">Flutter mobile apps</span> and{" "}
            <span className="text-zinc-200 font-medium">Python-powered backends</span> that solve real-world
            problems — from ML models to scalable REST APIs. Computer Engineering student at{" "}
            <span className="text-zinc-200 font-medium">University of Rwanda</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="mailto:osualdiradukunda16@gmail.com"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden
                         bg-gradient-to-r from-primary-600 to-secondary-600
                         hover:opacity-90 active:scale-[0.98]
                         shadow-lg shadow-primary-900/30 hover:shadow-primary-700/40
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <Sparkles className="h-4 w-4" />
              Hire Me
            </a>

            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold
                         border border-zinc-700 text-zinc-300 bg-zinc-900/50
                         hover:border-primary-600/60 hover:text-primary-300 hover:bg-primary-900/20
                         active:scale-[0.98] transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold
                         border border-zinc-700 text-zinc-300 bg-zinc-900/50
                         hover:border-secondary-600/60 hover:text-secondary-300 hover:bg-secondary-900/20
                         active:scale-[0.98] transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Mobile Social Links */}
          <motion.div
            variants={fadeUp}
            className="lg:hidden flex items-center justify-center gap-4 mb-14"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50
                           text-zinc-400 hover:text-primary-400 hover:border-primary-700/50
                           transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-20"
          >
            {[
              { value: "10+", label: "Projects Built" },
              { value: "2+",  label: "Years Coding" },
              { value: "3",   label: "Languages" },
              { value: "∞",   label: "Curiosity" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-4 px-2 rounded-xl
                           bg-zinc-900/50 border border-zinc-800/60"
              >
                <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                <span className="text-xs text-zinc-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
          className="mx-auto flex flex-col items-center gap-2 text-zinc-500 hover:text-primary-400
                     transition-colors duration-200 cursor-pointer group"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary-400" />
        </motion.button>
      </div>
    </section>
  );
}
