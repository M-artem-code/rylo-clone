"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { springMagnetic, springUi } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "inverse" | "royal";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt/90",
  ghost: "border border-line bg-white text-navy hover:border-cobalt/40",
  inverse: "bg-white text-royal hover:bg-ice",
  royal: "bg-royal text-white hover:bg-royal/90",
};

type OrbitalButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

function withArrow(children: ReactNode) {
  if (typeof children !== "string" || !children.includes("→")) {
    return children;
  }
  const [lead, ...rest] = children.split("→");
  return (
    <>
      {lead}
      <span className="orbital-arrow">→</span>
      {rest.join("→")}
    </>
  );
}

export function OrbitalButton({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: OrbitalButtonProps) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springMagnetic);
  const springY = useSpring(y, springMagnetic);
  const magnetic = fine && !reduce;

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!magnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "orbital-btn inline-flex h-11 w-full items-center justify-center rounded-full px-[22px] font-ui text-[15px] font-semibold whitespace-nowrap transition-colors",
    variants[variant],
  );
  const label = withArrow(children);

  return (
    <motion.div
      className={cn("inline-flex", className)}
      style={magnetic ? { x: springX, y: springY } : undefined}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={springUi}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {href ? (
        <Link href={href} className={classes}>
          {label}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={classes}>
          {label}
        </button>
      )}
    </motion.div>
  );
}
