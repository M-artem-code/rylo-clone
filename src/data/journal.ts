import { images, routes } from "./site";

export const journalPage = {
  featured: {
    kicker: "Essay   ·   14 min   ·   Issue 03",
    headline: ["LIGHT &", "ARCHITECTURE"],
    image: images.gallery,
    cta: { label: "Read article", href: routes.article },
  },
  categories: ["Essays", "Materials", "Guides", "Technology"] as const,
  activeCategory: "Essays",
  items: [
    {
      title: "Inside Modern Lighting",
      deck: "How a single source can hold an entire room.",
      image: images.lumen,
      href: routes.article,
    },
    {
      title: "Material Stories",
      deck: "Bronze, glass, stone — finishes that keep the light.",
      image: images.materialsBronze,
      href: routes.article,
    },
    {
      title: "Design Guides",
      deck: "A lighting plan is a score, not a shopping list.",
      image: images.lightingPlan,
      href: routes.article,
    },
    {
      title: "Technology",
      deck: "From source to atmosphere, in five movements.",
      image: images.materialsPolar,
      href: routes.technology,
    },
    {
      title: "Projects",
      deck: "Atelier Noir and the quiet hotel.",
      image: images.hotelKyoto,
      href: routes.atelierNoir,
    },
  ],
};

export const journalArticle = {
  kicker: "Essay",
  issue: "Journal  ·  Issue 03",
  headline: ["When light", "becomes", "structure"],
  pull: "Atmosphere is a material.",
  left: "Architectural lighting is not the art of making rooms brighter. It is the discipline of deciding what remains in shadow, and what is allowed to appear. VANTA treats every source as a structural line.",
  right: "In the absence of daylight, artificial light must sculpt the room. A hidden linear slot can do the work of a wall. A single ring can hold a table the way a column holds a roof.",
  diningCaption: "Private dining  ·  2700K  ·  LINE concealed",
  next: {
    kicker: "Next essay",
    title: "Inside Modern Lighting",
  },
  readCta: { label: "Read article", href: routes.journal },
  projectCta: { label: "Start a project", href: routes.contact },
};

export const contactPage = {
  kicker: "Studio  ·  Milan",
  headline: ["LET'S CREATE", "THE LIGHT."],
  fields: [
    "Name",
    "Email",
    "Phone",
    "Project type",
    "Location",
    "Space type",
    "Approximate area",
    "Message",
  ] as const,
  submit: "Start your project",
  success: "Received. The studio will write back.",
};
