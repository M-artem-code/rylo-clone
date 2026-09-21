"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import { homeJourney } from "@/data/home";
import { easeOutLux } from "@/lib/motion";

export function FlightTimeline({ steps }: { steps: typeof homeJourney.steps }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.78", "end 0.55"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });

  return (
    <ol ref={ref} className="relative mt-10 space-y-6">
      <motion.span
        aria-hidden
        className="orbital-timeline-draw absolute top-2 left-[5px] h-[calc(100%-14px)] w-px origin-top bg-linear-to-b from-violet via-cobalt to-line"
        style={{ scaleY }}
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.time}
          className="relative flex gap-6 pl-1"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.48, delay: index * 0.03, ease: easeOutLux }}
        >
          <span className="relative mt-1.5 size-2.5 shrink-0 rounded-full bg-violet">
            {index < steps.length - 1 ? (
              <span className="absolute top-3 left-1/2 h-10 w-px -translate-x-1/2 bg-line" />
            ) : null}
          </span>
          <div>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-mono text-[11px] text-violet">{step.time}</span>
              <span className="font-ui text-[16px] font-semibold text-navy">{step.title}</span>
            </div>
            <p className="mt-1 font-body text-[14px] text-mute">{step.desc}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
