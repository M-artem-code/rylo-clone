"use client";

import { motion } from "motion/react";

import { duration, easeDecel } from "@/lib/motion";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-[72px] right-0 left-0 z-[45] h-px origin-left bg-linear-to-r from-cobalt via-violet to-transparent"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: duration.pageLine, ease: easeDecel }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
