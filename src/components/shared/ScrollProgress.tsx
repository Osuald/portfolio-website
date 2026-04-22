"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setVisible(v > 0.01));
    return unsub;
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400"
      aria-hidden="true"
    />
  );
}
