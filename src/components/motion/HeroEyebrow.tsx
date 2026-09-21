"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { duration, easeOutLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HeroEyebrow({
  children,
  className,
  delay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.p
      className={cn(
        "font-mono text-[12px] font-medium tracking-[0.08em] text-violet uppercase",
        className,
      )}
      initial={{ opacity: 0, letterSpacing: "0.28em" }}
      animate={{ opacity: 1, letterSpacing: "0.08em" }}
      transition={{ duration: duration.headline, delay, ease: easeOutLux }}
    >
      {children}
    </motion.p>
  );
}
