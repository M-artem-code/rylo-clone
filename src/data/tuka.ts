export const brand = {
  name: "Tuka",
  eyebrow: "Дом какао",
  hours: "Пн–сб · 12–21",
} as const;

export const nav = [
  { href: "/polka", label: "Полка" },
  { href: "/vecher", label: "Вечер" },
  { href: "/zapis", label: "Запись" },
] as const;

export const actions = {
  bookTable: "Записать стол",
  bookCompany: "Записать компанию",
  sendDate: "Отправить дату",
  putOnTable: "Поставить на стол",
  see: "Смотреть",
  fullCourse: "Весь ход",
  bookShort: "Запись",
  anotherDate: "Другая дата",
} as const;

export const images = {
  hero: {
    src: "/tuka/tuka-photo-hero.png",
    alt: "Сырой срез плитки на мокром бетоне рядом с толстым бокалом",
  },
  table: {
    src: "/tuka/tuka-photo-table.png",
    alt: "Длинный дубовый стол в бетонной комнате, дневной боковой свет",
  },
  edge: {
    src: "/tuka/tuka-photo-edge.png",
    alt: "Открытый край плитки какао на мокром бетоне",
  },
} as const;

export type TasteBand = "soft" | "mid" | "bitter";
export type PairingId = "coffee" | "tea" | "wine";

export type Lot = {
  id: string;
  index: string;
  name: string;
  origin: string;
  percent: number;
  taste: string;
  band: TasteBand;
  swatch: string;
  marks: readonly string[];
  mark: number;
  pairingId: PairingId;
  pairingLabel: string;
  process: readonly string[] | null;
  fermentation: string | null;
};

export const lots: readonly Lot[] = [
  {
    id: "finca-ladera",
    index: "01",
    name: "Finca Ladera",
    origin: "Tumaco · CO",
    percent: 58,
    taste: "яблоко · молоко",
    band: "soft",
    swatch: "#c6a36a",
    marks: ["Молоко", "Яблоко", "Орех"],
    mark: 0.42,
    pairingId: "wine",
    pairingLabel: "сухое вино",
    process: null,
    fermentation: null,
  },
  {
    id: "lote-12",
    index: "02",
    name: "Lote 12",
    origin: "Huila · CO",
    percent: 66,
    taste: "орех · какао",
    band: "soft",
    swatch: "#a97848",
    marks: ["Орех", "Какао", "Дерево"],
    mark: 0.34,
    pairingId: "tea",
    pairingLabel: "чай",
    process: null,
    fermentation: null,
  },
  {
    id: "parcela-norte",
    index: "03",
    name: "Parcela Norte",
    origin: "Esmeraldas · EC",
    percent: 72,
    taste: "ягода · дерево",
    band: "mid",
    swatch: "#7d4a30",
    marks: ["Кислота", "Орех", "Дым"],
    mark: 0.36,
    pairingId: "wine",
    pairingLabel: "сухое вино",
    process: ["Сбор", "5 дней", "Сушка", "Плитка"],
    fermentation: null,
  },
  {
    id: "finca-seca",
    index: "04",
    name: "Finca Seca",
    origin: "San Martín · PE",
    percent: 78,
    taste: "табак · какао",
    band: "mid",
    swatch: "#5a3224",
    marks: ["Какао", "Табак", "Дерево"],
    mark: 0.55,
    pairingId: "coffee",
    pairingLabel: "кофе",
    process: null,
    fermentation: null,
  },
  {
    id: "quebrada",
    index: "05",
    name: "Quebrada",
    origin: "Cusco · PE",
    percent: 85,
    taste: "дым · земля",
    band: "bitter",
    swatch: "#3a221c",
    marks: ["Земля", "Дым", "Кора"],
    mark: 0.62,
    pairingId: "coffee",
    pairingLabel: "кофе",
    process: null,
    fermentation: null,
  },
  {
    id: "alto-lote",
    index: "06",
    name: "Alto Lote",
    origin: "Barahona · DO",
    percent: 90,
    taste: "кора · горечь",
    band: "bitter",
    swatch: "#1c1412",
    marks: ["Дым", "Кора", "Горечь"],
    mark: 0.84,
    pairingId: "coffee",
    pairingLabel: "кофе",
    process: null,
    fermentation: null,
  },
];

export const bands = [
  { id: "all", label: "Все" },
  { id: "soft", label: "Мягкий" },
  { id: "mid", label: "Середина" },
  { id: "bitter", label: "Горький" },
] as const;

export type BandId = (typeof bands)[number]["id"];

export const scaleEnds = {
  soft: "Мягкий",
  bitter: "Горький",
} as const;

export const home = {
  title: ["От мягкого", "к горькому"],
  lines: [
    "Закрытый стол на компанию.",
    "Проводник ведёт по сортам какао.",
    "Плитки уезжают с гостями.",
  ],
  captionName: "Finca Ladera",
  captionOrigin: "Tumaco · CO · 72%",
  captionNote: "Ферментация 6 дней",
  guestsEyebrow: "Хозяевам",
  guestsTitle: "Гостям",
  guestsLines: [
    "Люди из другого города.",
    "Стол уже собран под компанию.",
    "В финале набор делится на всех.",
  ],
  guestsCaption: "Комната · дневной свет",
  doors: [
    {
      eyebrow: "Маршрут",
      title: "Полка",
      text: "Сорта какао и карта вкуса",
      href: "/polka",
    },
    {
      eyebrow: "Час",
      title: "Вечер",
      text: "Закрытый стол без очереди",
      href: "/vecher",
    },
  ],
} as const;

export const course = [
  { index: "01", title: "Вход", text: "Компания садится одна" },
  { index: "02", title: "Мягкое", text: "Finca Ladera · 58%" },
  { index: "03", title: "Середина", text: "Parcela Norte · 72%" },
  { index: "04", title: "Горькое", text: "Quebrada · 85%" },
  { index: "05", title: "Бокал", text: "Кофе, чай или сухое" },
  { index: "06", title: "Делёж", text: "Набор тех же лотов на всех" },
] as const;

export const pairings = [
  { id: "coffee" as const, label: "Кофе", range: "78–90%" },
  { id: "tea" as const, label: "Чай", range: "66–78%" },
  { id: "wine" as const, label: "Сухое", range: "58–72%" },
];

export const evening = {
  title: "Вечер",
  subtitle: "Закрытый стол · без очереди · до восьми гостей",
  caption: "Длинный стол · один час",
  closing: "На стол ставят три лота. Остальные лежат на полке.",
} as const;

export const shelf = {
  title: "Полка",
  subtitle: "Сорта по ходу · мягкий → горький",
  glassLabel: "Бокал к",
  openId: "parcela-norte",
} as const;

export const booking = {
  title: "Запись",
  subtitle: "Дата закрытого стола",
  panelTitle: "Стол",
  panelEyebrow: "Что собрано",
  included: [
    "Проводник на час",
    "Ход от мягкого к горькому",
    "Бокал к проценту",
    "Набор плиток в финале",
    "Очереди нет",
  ],
  roomNote: "Комната открывается на компанию",
  fields: {
    date: "Дата",
    guests: "Гости",
    from: "Откуда",
    course: "Ход",
    pairing: "Пара",
    note: "Заметка",
  },
  placeholders: {
    date: "12 апреля",
    guests: "6",
    from: "другой город",
    note: "коротко, если нужно",
  },
  errors: {
    date: "Нужна дата",
    guests: "Нужно число гостей",
  },
  successTitle: "Дата принята",
  defaultMin: 58,
  defaultMax: 85,
  defaultPairing: "wine" as PairingId,
};

export const percents = lots.map((lot) => lot.percent);

export function lotById(id: string | undefined): Lot | undefined {
  if (!id) return undefined;
  return lots.find((lot) => lot.id === id);
}

export function lotsOnTable(min: number, max: number): Lot[] {
  const inRange = lots.filter((lot) => lot.percent >= min && lot.percent <= max);
  if (inRange.length <= 3) return inRange;
  const middle = inRange[Math.floor((inRange.length - 1) / 2)];
  return [inRange[0], middle, inRange[inRange.length - 1]].filter(
    (lot): lot is Lot => Boolean(lot),
  );
}
