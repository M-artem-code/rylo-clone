import type { HouseModel } from "@/data/site";

export type HousePage = {
  slug: "les" | "pole" | "sklon";
  name: string;
  kicker: string;
  oneLiner: string;
  hero: { src: string; alt: string };
  mass: { src: string; alt: string };
  landscape: { src: string; alt: string };
  concept: string;
  siteCopy: string;
  planting: string;
  modulesKind: "les" | "pole" | "sklon";
  modulesCaption: string;
  formTitle: string;
  model: HouseModel;
};

export const houses: Record<HousePage["slug"], HousePage> = {
  les: {
    slug: "les",
    name: "ЛЕС",
    kicker: "HOUSE 01",
    oneLiner: "Короткий объём для участка с деревьями.",
    hero: {
      src: "/brutal/house-01-les-hero.png",
      alt: "HOUSE 01 / ЛЕС — короткий бетонный объём среди сосен",
    },
    mass: {
      src: "/brutal/house-01-les-mass.png",
      alt: "HOUSE 01 как вырезанная масса в лесу",
    },
    landscape: {
      src: "/brutal/landscape-forest-edge.png",
      alt: "Кромка леса",
    },
    concept:
      "Короткий объём, чтобы оставить деревья. Вход из тени, свет — щелью в прогал или на вид.",
    siteCopy:
      "Край леса задаёт тень и дистанцию. Дом стоит как вырезанная масса, без декоративной маскировки под избу.",
    planting: "лес",
    modulesKind: "les",
    modulesCaption: "Модули собираются в короткий объём и сдвигаются под деревья.",
    formTitle: "ОБСУДИТЬ HOUSE 01",
    model: "HOUSE 01 / ЛЕС",
  },
  pole: {
    slug: "pole",
    name: "ПОЛЕ",
    kicker: "HOUSE 02",
    oneLiner: "Длинный горизонтальный дом для открытого поля и горизонта.",
    hero: {
      src: "/brutal/house-02-pole-hero.png",
      alt: "HOUSE 02 / ПОЛЕ — длинный горизонтальный дом на поле",
    },
    mass: {
      src: "/brutal/house-02-pole-mass.png",
      alt: "HOUSE 02 как длинная масса на поле",
    },
    landscape: {
      src: "/brutal/landscape-field.png",
      alt: "Открытое поле и горизонт",
    },
    concept:
      "Длинная горизонталь садится на открытое поле. Дом держит горизонт, а не спорит с ним.",
    siteCopy:
      "Поле и горизонт — главные границы участка. Длинный бар читается как линия, а не как усадьба.",
    planting: "поле",
    modulesKind: "pole",
    modulesCaption:
      "Модули выстраиваются в длинную горизонталь и держат линию горизонта.",
    formTitle: "ОБСУДИТЬ HOUSE 02",
    model: "HOUSE 02 / ПОЛЕ",
  },
  sklon: {
    slug: "sklon",
    name: "СКЛОН",
    kicker: "HOUSE 03",
    oneLiner: "Ступенчатые модули для рельефа.",
    hero: {
      src: "/brutal/house-03-sklon-hero.png",
      alt: "HOUSE 03 / СКЛОН — ступенчатые модули на склоне",
    },
    mass: {
      src: "/brutal/house-03-sklon-mass.png",
      alt: "HOUSE 03 как ступени по рельефу",
    },
    landscape: {
      src: "/brutal/landscape-slope.png",
      alt: "Склон с берёзами",
    },
    concept:
      "Модули встают ступенью по падению земли. Платформы повторяют рельеф, а не выравнивают его.",
    siteCopy:
      "Рельеф не мешает — он программа. Ступени держат уровень и вид, не превращая склон в цоколь-декор.",
    planting: "склон",
    modulesKind: "sklon",
    modulesCaption:
      "Модули садятся ступенью и сдвигаются вдоль падения рельефа.",
    formTitle: "ОБСУДИТЬ HOUSE 03",
    model: "HOUSE 03 / СКЛОН",
  },
};

export const specKeys = [
  { key: "тип", value: "модульный дом" },
  { key: "программа", value: "загородный / гостевой" },
  { key: "адаптация", value: "под участок" },
  { key: "стоимость", value: "от …", muted: true },
] as const;
