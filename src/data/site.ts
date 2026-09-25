export type NavItem = {
  label: string;
  href: string;
  id: "series" | "portrait" | "brands" | "studio" | "apply";
};

export const site = {
  name: "ARCANA",
  folio: "FOLIO 01",
  lang: "ru",
  title: "ARCANA — ночная авторская студия",
  description:
    "Авторская ночная студия. Не прокат площадки и не универсальный цех.",
  nav: [
    { id: "series", label: "Серии", href: "/series" },
    { id: "portrait", label: "Вход", href: "/portrait" },
    { id: "brands", label: "Brands", href: "/brands" },
    { id: "studio", label: "Студия", href: "/studio" },
    { id: "apply", label: "Заявка", href: "/apply" },
  ] satisfies NavItem[],
  telegramLabel: "Telegram · mock",
  telegramHandle: "@arcana.night",
  mockNote: "MOCK DATA — контакты не зафиксированы",
} as const;
