"use client";

import { AnimatePresence, motion } from "motion/react";

import { duration, easeOutLux } from "@/lib/motion";

export function SwapText({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span className="relative block overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          className={className}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.micro, ease: easeOutLux }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
