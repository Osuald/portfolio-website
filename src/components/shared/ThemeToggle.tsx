"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative p-2 rounded-lg
                 bg-cream-200 dark:bg-night-800
                 hover:bg-cream-300 dark:hover:bg-night-700
                 border border-cream-300 dark:border-night-700
                 transition-colors duration-200"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4 text-zinc-700" />
        ) : (
          <Sun className="h-4 w-4 text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
