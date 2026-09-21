"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { duration, easeOutLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ParallaxMediaProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  fromScale?: number;
  toScale?: number;
};

export function ParallaxMedia({
  children,
  className,
  strength = 42,
  fromScale = 1.16,
  toScale = 1.08,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-[-14%]"
        style={reduce || !fine ? undefined : { y }}
        initial={reduce ? false : { scale: fromScale }}
        animate={{ scale: toScale }}
        transition={{ duration: duration.cinematic, ease: easeOutLux }}
      >
        {children}
      </motion.div>
    </div>
  );
}
