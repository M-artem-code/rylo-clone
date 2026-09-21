"use client";

import { useEffect, type RefObject } from "react";

export function useEnterView(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const alreadyVisible = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      return rect.top < vh * 0.94 && rect.bottom > 40;
    };

    if (alreadyVisible()) {
      el.classList.add("is-armed");
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add("is-in"));
      });
      return () => cancelAnimationFrame(frame);
    }

    el.classList.add("is-armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add("is-in");
        io.disconnect();
      },
      { rootMargin: "10% 0px -6% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, ref]);
}
