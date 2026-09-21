export const motionEase = {
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
  expose: "cubic-bezier(0.22, 1, 0.36, 1)",
  ui: "cubic-bezier(0.2, 0.8, 0.2, 1)",
} as const;

export type CoverMotion = "none" | "hero" | "expose" | "aperture" | "rise" | "scene" | "contact";
