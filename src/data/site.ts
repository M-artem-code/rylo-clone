export const site = {
  name: "VANTA",
  tagline: "Architectural lighting systems",
  coordinates: "45.4642 N   9.1900 E",
  studio: {
    city: "Milan",
    email: "studio@vanta.light",
    whatsapp: "+39 02 9475 1100",
    telegram: "@vanta.studio",
    address: "Via Piacenza 8, Milan",
  },
} as const;

export const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/studio" },
  { label: "Technology", href: "/technology" },
  { label: "Journal", href: "/journal" },
] as const;

export const routes = {
  home: "/",
  collection: "/collection",
  void01: "/collection/void/void-01",
  projects: "/projects",
  atelierNoir: "/projects/atelier-noir",
  studio: "/studio",
  technology: "/technology",
  services: "/services",
  journal: "/journal",
  article: "/journal/when-light-becomes-structure",
  contact: "/contact",
} as const;

export const images = {
  livingNight: "/vanta/living-night.png",
  morningDay: "/vanta/morning-day.png",
  hotelKyoto: "/vanta/hotel-kyoto.png",
  gallery: "/vanta/gallery.png",
  restaurant: "/vanta/restaurant.png",
  retailOffice: "/vanta/retail-office.png",
  line: "/vanta/line.png",
  voidRing: "/vanta/void.png",
  arc: "/vanta/arc.png",
  lumenForma: "/vanta/lumen-forma.png",
  materials: "/vanta/materials.png",
  lightingPlan: "/vanta/lighting-plan.png",
  studioRoom: "/vanta/studio-room.png",
  install: "/vanta/install.png",
  journalEssay: "/vanta/journal-essay.png",
  morning: "/vanta/morning.png",
  day: "/vanta/day.png",
  lumen: "/vanta/lumen.png",
  forma: "/vanta/forma.png",
  retail: "/vanta/retail.png",
  office: "/vanta/office.png",
  stair: "/vanta/stair.png",
  bronze: "/vanta/bronze.png",
  opticsModule: "/vanta/optics-module.png",
  materialsBronze: "/vanta/materials-bronze.png",
  materialsPolar: "/vanta/materials-polar.png",
} as const;
