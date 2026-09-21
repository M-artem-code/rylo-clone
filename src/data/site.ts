export type PackageId = "dusk" | "nigma" | "afterdark";

export type NavItem = {
  label: string;
  href: string;
};

export type ContactRow = {
  label: string;
  value: string;
  href?: string;
};

export type Package = {
  id: PackageId;
  code: string;
  label: string;
  name: string;
  line: string;
  featured?: boolean;
};

export const site = {
  name: "Nigma",
  wordmark: "NIGMA",
  tagline: "Ночная портретная студия, Москва",
  city: "Москва",
  hours: "18:00–02:00",
  hoursFull: "ежедневно 18:00–02:00",
  copyright: "© Nigma",
} as const;

export const packages: Package[] = [
  {
    id: "dusk",
    code: "01 · DSK",
    label: "Пакет",
    name: "Dusk",
    line: "Короткая ночная сессия. Один образ.",
  },
  {
    id: "nigma",
    code: "02 · NGM",
    label: "Основной",
    name: "Nigma",
    line: "Основной формат. Два образа.",
    featured: true,
  },
  {
    id: "afterdark",
    code: "03 · ADK",
    label: "Пакет",
    name: "Afterdark",
    line: "Полный опыт. Три образа.",
  },
];

export const navigation: NavItem[] = [
  { label: "Пакеты", href: "/#packages" },
  { label: "Заявка", href: "/request" },
];

export const primaryCta = {
  label: "Оставить заявку",
  href: "/request",
} as const;

export const footerContactsLeft: ContactRow[] = [
  { label: "Город", value: "Москва" },
  { label: "Адрес", value: "не публикуется" },
  { label: "График", value: "ежедневно 18:00–02:00" },
  { label: "Телефон", value: "+7 (495) 000-00-00", href: "tel:+74950000000" },
];

export const footerContactsRight: ContactRow[] = [
  { label: "Email", value: "hello@nigma.studio", href: "mailto:hello@nigma.studio" },
  { label: "Telegram", value: "@nigma_studio", href: "https://t.me/nigma_studio" },
  { label: "WhatsApp", value: "+7 (495) 000-00-00", href: "https://wa.me/74950000000" },
];

export function isPackageId(value: string | undefined): value is PackageId {
  return value === "dusk" || value === "nigma" || value === "afterdark";
}

export function resolvePackageId(value: string | string[] | undefined): PackageId {
  const raw = Array.isArray(value) ? value[0] : value;
  return isPackageId(raw) ? raw : "nigma";
}

export function requestHref(packageId?: PackageId): string {
  if (!packageId) return "/request";
  return `/request?package=${packageId}`;
}
