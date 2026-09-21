import { images, routes } from "./site";

export const technologyPage = {
  kicker: "Engineering",
  headline: ["LIGHT", "BECOMES", "ATMOSPHERE."],
  chain: ["Source", "Optics", "Distribution", "Space", "Atmosphere"],
  optics: {
    kicker: "Optics  ·  linear module",
    image: images.opticsModule,
    flow: "LED array  →  lens  →  batwing distribution  →  room",
    note: "12°  –  80° beam    ·    142 lm/W    ·    flicker-free",
  },
  specs: [
    { label: "CRI", value: "98" },
    { label: "Efficacy", value: "142 lm/W" },
    { label: "Control", value: "DALI / Casambi / 0–10V" },
    { label: "Lifetime", value: "60 000 h" },
  ],
  cta: { label: "Explore technology", href: routes.technology },
};
