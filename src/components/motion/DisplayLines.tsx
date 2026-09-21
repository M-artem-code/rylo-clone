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
        <motion.span
          key={index}
          className="block overflow-hidden"
          initial="hidden"
          animate={inView ? undefined : "show"}
          whileInView={inView ? "show" : undefined}
          viewport={inView ? viewportOnce : undefined}
        >
          <motion.span
            className={cn("orbital-clip-line block", accentIndex === index && "text-cobalt")}
            variants={{
              hidden: { y: "112%" },
              show: { y: "0%" },
            }}
            transition={{
              duration: duration.headline,
              delay: delay + index * 0.1,
              ease: easeOutLux,
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
