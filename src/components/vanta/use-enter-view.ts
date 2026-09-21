"use client";

import { useEffect, useState, type RefObject } from "react";

export function useEnterView(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [inView, setInView] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const reveal = () => {
      setArmed(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setInView(true));
      });
    };

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (rect.top < vh * 0.94 && rect.bottom > 40) {
      reveal();
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        io.disconnect();
      },
      { rootMargin: "10% 0px -6% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, ref]);

  return { inView, armed };
}
