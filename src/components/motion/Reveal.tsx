"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { easeOutLux, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, x = 0, y = 18 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.62, delay, ease: easeOutLux }}
    >
      {children}
    </motion.div>
  );
}
