export const easeOutLux = [0.16, 1, 0.3, 1] as const;
export const easeInOutOrbital = [0.76, 0, 0.24, 1] as const;
export const easeDecel = [0.22, 1, 0.36, 1] as const;

export const springUi = { type: "spring" as const, stiffness: 420, damping: 28, mass: 0.6 };
export const springMagnetic = { type: "spring" as const, stiffness: 260, damping: 20, mass: 0.4 };
export const springSoft = { type: "spring" as const, stiffness: 120, damping: 22, mass: 0.8 };

export const duration = {
  ui: 0.22,
  micro: 0.32,
  enter: 0.55,
  headline: 0.86,
  cinematic: 2.2,
  pageLine: 0.85,
};

export const viewportOnce = { once: true, margin: "-12% 0px" as const };
