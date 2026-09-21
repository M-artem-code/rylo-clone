import { images, routes } from "./site";

export const projectsPage = {
  title: "PROJECTS",
  kicker: "Architecture first. Light as the second material.",
  tiles: [
    {
      title: "Luxury Hotel",
      city: "Kyoto",
      image: images.hotelKyoto,
      href: routes.atelierNoir,
      span: "lead" as const,
    },
    {
      title: "Restaurant",
      city: "Paris",
      image: images.restaurant,
      href: routes.projects,
      span: "wide" as const,
    },
    {
      title: "Gallery",
      city: "Basel",
      image: images.gallery,
      href: routes.projects,
      span: "wide" as const,
      position: "center",
    },
    {
      title: "Private Residence",
      city: "Milan",
      image: images.morning,
      href: routes.projects,
      span: "third" as const,
    },
    {
      title: "Retail",
      city: "London",
      image: images.retail,
      href: routes.projects,
      span: "third" as const,
    },
    {
      title: "Office",
      city: "Zurich",
      image: images.office,
      href: routes.projects,
      span: "third" as const,
      position: "right",
    },
  ],
  compareLabel: "Architecture without lighting   →   Architecture with VANTA",
  compareImage: images.livingNight,
  cta: { label: "View project", href: routes.atelierNoir },
};

export const atelierNoir = {
  vertical: "ATELIER",
  meta: [
    { label: "Object", value: "Atelier Noir" },
    { label: "Type", value: "Luxury Hotel" },
    { label: "City", value: "Kyoto" },
    { label: "Concept", value: "Light as silence" },
    { label: "Products", value: "LINE  ·  VOID  ·  LUMEN" },
    { label: "Scenes", value: "Arrival  ·  Dining  ·  Suite  ·  Garden" },
  ],
  image: images.hotelKyoto,
  cta: { label: "Start a project", href: routes.contact },
};
