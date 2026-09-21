"use client";

import Image from "next/image";
import { useRef } from "react";

import type { CoverMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { useEnterView } from "./use-enter-view";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  priority?: boolean;
  motion?: CoverMotion;
};

export function CoverImage({
  src,
  alt,
  className,
  position = "center",
  priority = false,
  motion = "none",
}: CoverImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const needsView = motion === "expose" || motion === "aperture" || motion === "rise";
  useEnterView(ref, needsView);

  return (
    <div
      ref={ref}
      data-motion={motion}
      className={cn("vanta-cover relative overflow-hidden bg-void", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        loading={priority ? undefined : "eager"}
        className="vanta-cover-img object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
