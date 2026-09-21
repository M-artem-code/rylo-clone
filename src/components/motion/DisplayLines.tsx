"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { duration, easeOutLux, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type DisplayLinesProps = {
  as?: "h1" | "h2";
  lines: readonly ReactNode[];
  accentIndex?: number;
  className?: string;
  delay?: number;
  inView?: boolean;
};

export function DisplayLines({
  as: Tag = "h1",
  lines,
  accentIndex,
  className,
  delay = 0,
  inView = false,
}: DisplayLinesProps) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className={cn("orbital-clip-line block", accentIndex === index && "text-cobalt")}
            initial={{ y: "112%" }}
            animate={inView ? undefined : { y: "0%" }}
            whileInView={inView ? { y: "0%" } : undefined}
            viewport={inView ? viewportOnce : undefined}
            transition={{
              duration: duration.headline,
              delay: delay + index * 0.1,
              ease: easeOutLux,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
