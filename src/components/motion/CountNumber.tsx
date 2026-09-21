"use client";

import { animate, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { easeOutLux } from "@/lib/motion";

export function formatEuro(value: number) {
  return `${value.toLocaleString("fr-FR").replace(/\u202f/g, " ")} €`;
}

export function CountNumber({
  value,
  className,
  format = formatEuro,
}: {
  value: number;
  className?: string;
  format?: (value: number) => string;
}) {
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(value);
  const [display, setDisplay] = useState(value);
  const shown = reduce ? value : display;

  useEffect(() => {
    if (reduce) return;
    const controls = animate(motionValue, value, { duration: 0.55, ease: easeOutLux });
    const unsubscribe = motionValue.on("change", (next) => {
      setDisplay(Math.round(next));
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, reduce, value]);

  return <span className={className}>{format(shown)}</span>;
}
