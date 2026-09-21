import { images, routes } from "./site";

export const homeHero = {
  kicker: "01  /  Atmosphere",
  headline: ["LIGHT", "CHANGES", "EVERYTHING."],
  support: "Architectural lighting systems for spaces that must be felt.",
  image: images.livingNight,
  imageAlt: "Dark architectural volume with a single linear pendant",
  primary: { label: "Explore VANTA", href: routes.collection },
  secondary: { label: "Design your lighting", href: routes.studio },
  scene: {
    index: "Scene  04",
    name: "Night",
    meta: "22:14    2700K    Living",
    steps: ["Morning", "Day", "Evening", "Night"] as const,
    active: "Night",
  },
};

export const homePhilosophy = {
  kicker: "01  Philosophy",
  headline: ["We do not", "illuminate.", "We compose."],
  body: "VANTA designs complete lighting atmospheres for architecture — reading the space, placing every source, and calibrating the mood until light becomes the room.",
  cta: { label: "Design your space", href: routes.studio },
};

export const homeAtmospheres = {
  kicker: "02  Four atmospheres",
  items: [
    { name: "Night", image: images.livingNight, alt: "Night living volume", size: "large" as const },
    { name: "Morning", image: images.morning, alt: "Morning interior", size: "wide" as const },
    { name: "Day", image: images.day, alt: "Day interior", size: "small" as const },
    { name: "Evening", image: images.restaurant, alt: "Evening dining room", size: "small" as const },
  ],
};

export const homeObjects = {
  kicker: "03  Featured objects",
  items: [
    { name: "LINE", spec: "Linear systems  ·  1800 mm", image: images.line, href: routes.collection },
    { name: "VOID", spec: "Aperture ring  ·  Ø 420", image: images.voidRing, href: routes.void01 },
    { name: "ARC", spec: "Sculptural bronze  ·  1620 mm", image: images.arc, href: routes.collection },
  ],
  cta: { label: "Explore collection", href: routes.collection },
};

export const homeProject = {
  kicker: "04  Realized space",
  title: "Atelier Noir  —  Kyoto",
  image: images.hotelKyoto,
  cta: { label: "View project", href: routes.atelierNoir },
};

export const homeStudio = {
  kicker: "05  Light Studio",
  image: images.studioRoom,
  body: "Compose a room before a single fixture is installed.",
  mood: "Mood",
  kelvin: "2700K",
  cta: { label: "Design your space", href: routes.studio },
};
