export type NavKey = "directions" | "projects" | "process" | "materials" | "contact";

export type NavItem = {
  key: NavKey;
  label: string;
  href: string;
};

export const site = {
  name: "NORTHLINE",
  tagline: "Студия индивидуальной мебели",
  locale: "ru",
  discussHref: "/contact",
  discussLabel: "Обсудить проект",
  nav: [
    { key: "directions", label: "Направления", href: "/directions" },
    { key: "projects", label: "Проекты", href: "/projects" },
    { key: "process", label: "Процесс", href: "/process" },
    { key: "materials", label: "Материалы", href: "/materials" },
    { key: "contact", label: "Контакты", href: "/contact" },
  ] satisfies NavItem[],
  contact: {
    phone: "+7 495 120 44 80",
    phoneHref: "tel:+74951204480",
    email: "studio@northline.ru",
    emailHref: "mailto:studio@northline.ru",
    telegram: "@northline.studio",
    telegramHref: "https://t.me/northline.studio",
    address: "Москва, Большая Никитская, 21",
    studioNote: "Студия и шоурум материалов",
    area: "Работаем в Москве и области.",
    areaNote: "Проекты по России — по запросу.",
    footerLine: "Москва · студия и производство",
    footerMeta: "+7 495 120 44 80  ·  studio@northline.ru  ·  @northline.studio",
  },
} as const;
