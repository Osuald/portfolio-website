import { type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, x: "100%", transition: { duration: 0.3 } },
};

export const popIn: Variants = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export const viewportOptions = { once: true, amount: 0.15 } as const;
