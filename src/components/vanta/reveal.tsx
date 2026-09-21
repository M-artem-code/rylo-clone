"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { useEnterView } from "./use-enter-view";

type RevealTag = "div" | "section" | "figure" | "li" | "ol";

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { inView, armed } = useEnterView(ref);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "vanta-reveal",
        armed && "is-armed",
        inView && "is-in",
        className,
      )}
      style={{ "--vanta-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
