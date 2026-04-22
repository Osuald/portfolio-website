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
                 bg-zinc-100 dark:bg-zinc-800/60
                 hover:bg-zinc-200 dark:hover:bg-zinc-700
                 border border-zinc-200 dark:border-zinc-700/50
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
