export const houseModels = [
  "HOUSE 01 / ЛЕС",
  "HOUSE 02 / ПОЛЕ",
  "HOUSE 03 / СКЛОН",
  "пока не знаю",
] as const;

export type HouseModel = (typeof houseModels)[number];

export const plotStatuses = [
  { id: "has", label: "есть участок" },
  { id: "searching", label: "в поиске" },
] as const;

export type PlotStatus = (typeof plotStatuses)[number]["id"];

export const site = {
  name: "BRUTAL",
  kicker: "BRUTAL · МОСКВА И МО",
  description: "Концептуальные модульные дома. Москва и область.",
  footerLine: "Проект и сопровождение строительства",
  contacts: [
    { key: "T", value: "+7 (•••) •••–••–••" },
    { key: "E", value: "mail@••••" },
    { key: "TG", value: "t.me/••••" },
  ],
  nav: [
    { id: "lineup", label: "ЛИНЕЙКА", href: "/#lineup" },
    { id: "path", label: "ПОДХОД", href: "/#path" },
  ],
  requestLabel: "ЗАЯВКА",
  houses: [
    { index: "01", name: "ЛЕС", href: "/les" },
    { index: "02", name: "ПОЛЕ", href: "/pole" },
    { index: "03", name: "СКЛОН", href: "/sklon" },
  ],
} as const;
