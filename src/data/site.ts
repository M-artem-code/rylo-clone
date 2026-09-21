export const site = {
  name: "ORBITAL",
  domain: "orbital.space",
  tagline: "Премиальные суборбитальные путешествия",
  copyright: "© 2026 ORBITAL · Atlantic Spaceport",
  spaceport: "Atlantic Spaceport",
  spaceportCoord: "28.5°N",
  email: "concierge@orbital.space",
  phone: "+1 305 010 1000",
};

export const nav = [
  { label: "Миссии", href: "/missions" },
  { label: "Капсула", href: "/capsule" },
  { label: "Опыт", href: "/experience" },
  { label: "Подготовка", href: "/preparation" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
] as const;

export type NavLabel = (typeof nav)[number]["label"];
