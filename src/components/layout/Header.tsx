"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { NAV_ITEMS, SITE } from "@/lib/constants";
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

export default function Header() {
  const [isOpen,  setIsOpen]  = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,  setActive]  = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "projects", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const jump = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-cream-100/90 dark:bg-night-950/90 backdrop-blur-md border-b border-cream-300/70 dark:border-night-800/60 shadow-sm shadow-seafoam-100/20"
          : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="h-7 w-7 rounded-md bg-seafoam-500 flex items-center justify-center
                            text-white font-bold text-sm font-mono
                            group-hover:bg-seafoam-600 transition-colors">
              O
            </div>
            <span className="font-mono text-base font-semibold text-ink-900 dark:text-cream-100
                             group-hover:text-seafoam-600 dark:group-hover:text-seafoam-400 transition-colors">
              suald
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === "/" ? active === "/" : active === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => jump(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive
                      ? "text-seafoam-700 dark:text-seafoam-400"
                      : "text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-200/60 dark:hover:bg-night-800/60"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-seafoam-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-0.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-ink-400 dark:text-ink-400
                             hover:text-seafoam-600 dark:hover:text-seafoam-400
                             hover:bg-seafoam-50 dark:hover:bg-night-800/60
                             transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <ThemeToggle />

            <button
              className="md:hidden p-2 rounded-lg text-ink-600 dark:text-ink-400
                         hover:bg-cream-200 dark:hover:bg-night-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink-900/20 dark:bg-black/40 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden
                         bg-cream-100 dark:bg-night-900 border-l border-cream-300 dark:border-night-700"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-cream-300 dark:border-night-800">
                <span className="font-mono font-semibold text-ink-900 dark:text-cream-100">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-cream-200 dark:hover:bg-night-800 transition-colors">
                  <X className="h-5 w-5 text-ink-600 dark:text-ink-400" />
                </button>
              </div>

              <nav className="px-4 py-5 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => jump(item.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                               text-ink-700 dark:text-cream-200
                               hover:bg-seafoam-50 dark:hover:bg-night-800
                               hover:text-seafoam-700 dark:hover:text-seafoam-400
                               transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="px-5 py-4 border-t border-cream-300 dark:border-night-800 space-y-4">
                <div className="flex gap-2.5">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-lg bg-cream-200 dark:bg-night-800 text-ink-600 dark:text-ink-400
                                 hover:bg-seafoam-100 dark:hover:bg-seafoam-900/30 hover:text-seafoam-700 dark:hover:text-seafoam-400
                                 transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:osualdiradukunda16@gmail.com"
                  className="block w-full text-center py-2.5 px-4 rounded-xl
                             bg-seafoam-500 hover:bg-seafoam-600 text-white font-semibold text-sm
                             transition-colors duration-200"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
