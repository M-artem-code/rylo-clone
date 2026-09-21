"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

function useMotionPrefs() {
  const [prefs, setPrefs] = useState({
    reduced: false,
    cursor: false,
    ready: false,
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    const pointer = window.matchMedia("(pointer: fine)");
    const sync = () => {
      const reduce = reduced.matches;
      setPrefs({
        reduced: reduce,
        cursor: !reduce && hover.matches && pointer.matches,
        ready: true,
      });
    };
    sync();
    reduced.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    pointer.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
      pointer.removeEventListener("change", sync);
    };
  }, []);

  return prefs;
}

function Grain({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;
  return <div className="vanta-grain" aria-hidden />;
}

function ApertureCursor({ enabled }: { enabled: boolean }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, cx: -40, cy: -40 });
  const [state, setState] = useState<"default" | "hover" | "image">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("vanta-cursor-on");

    let raf = 0;
    const tick = () => {
      const next = pos.current;
      next.cx += (next.x - next.cx) * 0.22;
      next.cy += (next.y - next.cy) * 0.22;
      const node = nodeRef.current;
      if (node) {
        node.style.transform = `translate3d(${next.cx}px, ${next.cy}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (event: PointerEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      setVisible(true);
      const target = event.target;
      if (!(target instanceof Element)) {
        setState("default");
        return;
      }
      if (target.closest("input, textarea, select, [data-cursor='native']")) {
        setVisible(false);
        setState("default");
        return;
      }
      if (target.closest("img, .vanta-cover, [data-cursor='image']")) {
        setState("image");
        return;
      }
      if (target.closest("a, button, label, [role='button'], [data-cursor='hover']")) {
        setState("hover");
        return;
      }
      setState("default");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("vanta-cursor-on");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={nodeRef}
      className="vanta-cursor"
      data-state={state}
      data-visible={visible ? "true" : "false"}
      aria-hidden
    >
      <span className="vanta-cursor-plate">
        <span className="vanta-cursor-slit" />
      </span>
    </div>
  );
}

function PageVeil({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const first = useRef(true);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!enabled) return;
    setOn(true);
    const timer = window.setTimeout(() => setOn(false), 560);
    return () => window.clearTimeout(timer);
  }, [enabled, pathname]);

  return (
    <div className={on ? "vanta-veil is-on" : "vanta-veil"} aria-hidden>
      <span className="vanta-veil-slit" />
    </div>
  );
}

export function MotionRoot({ children }: { children: ReactNode }) {
  const prefs = useMotionPrefs();

  useEffect(() => {
    if (!prefs.ready) return;
    document.documentElement.classList.toggle("vanta-motion", !prefs.reduced);
    return () => document.documentElement.classList.remove("vanta-motion");
  }, [prefs.ready, prefs.reduced]);

  return (
    <>
      <Grain enabled={prefs.ready && !prefs.reduced} />
      <ApertureCursor enabled={prefs.cursor} />
      <PageVeil enabled={prefs.ready && !prefs.reduced} />
      {children}
    </>
  );
}
