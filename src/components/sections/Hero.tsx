"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import { ROLES, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon,   href: SITE.github,   label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/osuald-iradukunda", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com/_osuald16",             label: "Twitter/X" },
  { icon: WhatsAppIcon, href: SITE.whatsapp, label: "WhatsApp" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,   setDisplayed]  = useState("");
  const [isDeleting,  setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed   = isDeleting ? 45 : 75;
    const timer   = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) setTimeout(() => setIsDeleting(true), 2200);
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cream-100 dark:bg-night-950">

      {/* Subtle warm paper texture */}
      <div className="absolute inset-0 paper-texture opacity-30 dark:opacity-0 pointer-events-none" />

      {/* Very faint seafoam glow — top right (dark mode only) */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full
                      dark:bg-seafoam-900/10 opacity-0 dark:opacity-30 blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="py-16 lg:py-0"
          >
            {/* Location badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                               bg-seafoam-50 dark:bg-seafoam-900/30 text-seafoam-700 dark:text-seafoam-400
                               border border-seafoam-200 dark:border-seafoam-800/50">
                <MapPin className="h-3 w-3" />
                Kigali, Rwanda · Open to work
              </span>
            </motion.div>

            {/* Name — medium, font-mono */}
            <motion.h1
              variants={fadeUp}
              className="font-mono text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-ink-900 dark:text-cream-100 leading-tight mb-3"
            >
              Osuald Iradukunda
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={fadeUp} className="h-8 flex items-center mb-5">
              <p className="font-mono text-base text-seafoam-600 dark:text-seafoam-400">
                {displayed}
                <span className="inline-block w-0.5 h-4 bg-seafoam-500 ml-0.5 align-middle animate-pulse" />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-ink-800 dark:text-ink-400 leading-relaxed mb-8 max-w-md text-[15px]"
            >
              Computer Engineering student (GPA 4.61/5) building across{" "}
              <span className="text-ink-900 dark:text-cream-200 font-semibold">Flutter mobile</span>,{" "}
              <span className="text-ink-900 dark:text-cream-200 font-semibold">Java Spring Boot</span>, and{" "}
              <span className="text-ink-900 dark:text-cream-200 font-semibold">Node.js / Python</span>{" "}
              backends — open to new opportunities.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <a
                href="mailto:osualdiradukunda16@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                           bg-seafoam-500 hover:bg-seafoam-600 text-white
                           shadow-md shadow-seafoam-200 dark:shadow-seafoam-900/30
                           active:scale-[0.98] transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-seafoam-500 focus:ring-offset-2"
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
              </a>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                           border border-cream-300 dark:border-night-700 text-ink-700 dark:text-cream-200
                           bg-white dark:bg-night-800
                           hover:border-seafoam-400 dark:hover:border-seafoam-700 hover:text-seafoam-700 dark:hover:text-seafoam-400
                           active:scale-[0.98] transition-all duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                           border border-cream-300 dark:border-night-700 text-ink-700 dark:text-cream-200
                           bg-white dark:bg-night-800
                           hover:border-seafoam-400 dark:hover:border-seafoam-700 hover:text-seafoam-700 dark:hover:text-seafoam-400
                           active:scale-[0.98] transition-all duration-200"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Mobile social links */}
            <motion.div variants={fadeUp} className="lg:hidden flex items-center gap-3 mb-10">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-cream-200 dark:bg-night-800 border border-cream-300 dark:border-night-700
                             text-ink-500 dark:text-ink-400
                             hover:border-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-400
                             transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              {[
                { value: "4.61", label: "GPA / 5.0" },
                { value: "3+",   label: "Projects" },
                { value: "4",    label: "Certificates" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-mono text-xl font-bold text-seafoam-600 dark:text-seafoam-400">{s.value}</p>
                  <p className="text-xs text-ink-600 dark:text-ink-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Code card (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-seafoam-100/50 dark:shadow-night-950/50
                              border border-cream-300 dark:border-night-700 w-[340px]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-cream-200 dark:bg-night-800 border-b border-cream-300 dark:border-night-700">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs text-ink-400">developer.ts</span>
                </div>

                {/* Code body */}
                <div className="bg-white dark:bg-night-900 px-5 py-6 font-mono text-[13px] leading-loose">
                  <p className="text-ink-500 dark:text-night-700">{"// My profile"}</p>
                  <p>
                    <span className="text-seafoam-600 dark:text-seafoam-400">const </span>
                    <span className="text-ink-800 dark:text-cream-200">developer</span>
                    <span className="text-ink-600"> = {"{"}</span>
                  </p>
                  <div className="pl-4 space-y-0.5">
                    <p>
                      <span className="text-ink-700 dark:text-ink-400">name</span>
                      <span className="text-ink-600">: </span>
                      <span className="text-seafoam-700 dark:text-seafoam-300">"Osuald"</span>
                      <span className="text-ink-600">,</span>
                    </p>
                    <p>
                      <span className="text-ink-700 dark:text-ink-400">role</span>
                      <span className="text-ink-600">: </span>
                      <span className="text-seafoam-700 dark:text-seafoam-300">"Software Engineer"</span>
                      <span className="text-ink-600">,</span>
                    </p>
                    <p>
                      <span className="text-ink-700 dark:text-ink-400">stack</span>
                      <span className="text-ink-600">: [</span>
                    </p>
                    <div className="pl-4">
                      {["Flutter", "Python", "Next.js"].map((s) => (
                        <p key={s}>
                          <span className="text-seafoam-700 dark:text-seafoam-300">"{s}"</span>
                          <span className="text-ink-600">,</span>
                        </p>
                      ))}
                    </div>
                    <p><span className="text-ink-600">],</span></p>
                    <p>
                      <span className="text-ink-700 dark:text-ink-400">location</span>
                      <span className="text-ink-600">: </span>
                      <span className="text-seafoam-700 dark:text-seafoam-300">"Kigali, Rwanda"</span>
                      <span className="text-ink-600">,</span>
                    </p>
                    <p>
                      <span className="text-ink-700 dark:text-ink-400">available</span>
                      <span className="text-ink-600">: </span>
                      <span className="text-emerald-600 dark:text-emerald-400">true</span>
                    </p>
                  </div>
                  <p><span className="text-ink-600">{"}"}</span></p>

                  {/* Blinking cursor */}
                  <p className="mt-2">
                    <span className="text-seafoam-500">&#x276F; </span>
                    <span className="inline-block w-2 h-4 bg-seafoam-500 align-middle animate-pulse" />
                  </p>
                </div>
              </div>

              {/* Floating "Open to Work" tag */}
              <div className="absolute -bottom-4 -left-6 px-3.5 py-2 rounded-xl
                              bg-white dark:bg-night-800 border border-seafoam-200 dark:border-seafoam-800
                              shadow-lg shadow-seafoam-100/30
                              flex items-center gap-2 text-sm font-medium text-ink-700 dark:text-cream-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Work
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5
                     text-ink-300 dark:text-night-700 hover:text-seafoam-500 dark:hover:text-seafoam-500
                     transition-colors duration-200 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
