"use client";

import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
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
  const motionValue = useMotionValue(value);
  const [display, setDisplay] = useState(value);

  useMotionValueEvent(motionValue, "change", (next) => {
    setDisplay(Math.round(next));
  });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(motionValue, value, {
      duration: reduce ? 0 : 0.55,
      ease: easeOutLux,
    });
    return () => controls.stop();
  }, [motionValue, value]);

  return <span className={className}>{format(display)}</span>;
}
