"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Seamless infinite marquee. Renders children twice and translates -50%.
 */
export default function Marquee({ children, duration = 40, className = "" }) {
  const reduce = useReducedMotion();
  const content = (
    <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
  );

  if (reduce) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex items-center gap-12">{children}</div>
      </div>
    );
  }

  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}
