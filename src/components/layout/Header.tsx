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
  { icon: TwitterXIcon, href: "https://twitter.com/osuald_dev",            label: "Twitter/X" },
  { icon: WhatsAppIcon, href: SITE.whatsapp, label: "WhatsApp" },
];

export default function Header() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSection, setActive] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center  group"
          >
            <div className="h-8 w-6 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-900/30 group-hover:shadow-primary-600/40 transition-shadow">
              O
            </div>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              suald
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === "/" ? activeSection === "/" : activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 bottom-0.5 h-0.5 rounded-full bg-primary-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400
                             hover:text-primary-600 dark:hover:text-primary-400
                             hover:bg-zinc-100 dark:hover:bg-zinc-800/60
                             transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300
                         hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden
                         bg-white dark:bg-surface-900
                         border-l border-zinc-200 dark:border-zinc-800
                         flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-lg text-gradient">Osuald</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-base font-medium
                               text-zinc-700 dark:text-zinc-300
                               hover:bg-primary-50 dark:hover:bg-primary-900/20
                               hover:text-primary-600 dark:hover:text-primary-400
                               transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="p-5 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800
                                 text-zinc-600 dark:text-zinc-400
                                 hover:bg-primary-100 dark:hover:bg-primary-900/30
                                 hover:text-primary-600 dark:hover:text-primary-400
                                 transition-all duration-200"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:osualdiradukunda16@gmail.com"
                  className="block w-full text-center py-3 px-4 rounded-xl
                             bg-gradient-to-r from-primary-600 to-secondary-600
                             text-white font-semibold text-sm
                             hover:opacity-90 transition-opacity"
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
