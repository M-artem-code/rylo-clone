export type ChipKind = "cobalt" | "violet" | "ink" | "soft" | "ghost";

export type LaunchWindow = {
  code: string;
  date: string;
  site: string;
  capsule: string;
  mission: string;
  seats: string;
  weather: string;
  status: string;
  season: "autumn" | "winter";
  type: "shared" | "private" | "solo" | "ceremony";
};

export const launchWindows: LaunchWindow[] = [
  {
    code: "ORB-184",
    date: "12 окт 2026",
    site: "ARAL",
    capsule: "LUMEN",
    mission: "Shared Ascent",
    seats: "2 / 6",
    weather: "CLEAR",
    status: "OPEN",
    season: "autumn",
    type: "shared",
  },
  {
    code: "ORB-187",
    date: "28 окт 2026",
    site: "RIDGE",
    capsule: "VEIL",
    mission: "Private Arc",
    seats: "4 / 4",
    weather: "CLEAR",
    status: "OPEN",
    season: "autumn",
    type: "private",
  },
  {
    code: "ORB-191",
    date: "09 ноя 2026",
    site: "FJORD",
    capsule: "MONAD",
    mission: "Solo Apex",
    seats: "1 / 1",
    weather: "WATCH",
    status: "OPEN",
    season: "autumn",
    type: "solo",
  },
  {
    code: "ORB-196",
    date: "21 ноя 2026",
    site: "ARAL",
    capsule: "VEIL",
    mission: "Horizon Ceremony",
    seats: "3 / 4",
    weather: "CLEAR",
    status: "OPEN",
    season: "autumn",
    type: "ceremony",
  },
  {
    code: "ORB-201",
    date: "04 дек 2026",
    site: "RIDGE",
    capsule: "LUMEN",
    mission: "Shared Ascent",
    seats: "0 / 6",
    weather: "HOLD",
    status: "WEATHER HOLD",
    season: "winter",
    type: "shared",
  },
  {
    code: "ORB-208",
    date: "18 дек 2026",
    site: "FJORD",
    capsule: "MONAD",
    mission: "Solo Apex",
    seats: "0 / 1",
    weather: "CLEAR",
    status: "CLOSED",
    season: "winter",
    type: "solo",
  },
];

export const navItems = [
  { label: "Missions", href: "/missions", key: "missions" },
  { label: "Capsules", href: "/capsules", key: "capsules" },
  { label: "Preflight", href: "/preflight", key: "preflight" },
  { label: "Manifest", href: "/manifest", key: "manifest" },
] as const;

export const missions = [
  {
    index: "01",
    name: "Shared Ascent",
    manifesto: "Общий апогей не значит общий шум. Шесть кресел, один горизонт, тихий канал.",
    altitude: "100 км",
    weightless: "3 мин 40 с",
    gLoad: "3.8 G",
    season: "круглый год",
    seats: "6 кресел",
    who: "Самостоятельные пилоты после допуска",
    included: "LUMEN, комбинезон, архив, сертификат Кармана",
    price: "от $285 000",
    selected: false,
    type: "shared" as const,
  },
  {
    index: "02",
    name: "Private Arc",
    manifesto: "Капсула снимается с общего листа. Внутри только свои.",
    altitude: "104 км",
    weightless: "4 мин 05 с",
    gLoad: "4.0 G",
    season: "осень — весна",
    seats: "2–4 кресла",
    who: "Пары, семьи, партнёры",
    included: "VEIL, закрытый канал, двойной архив, гостевая галерея",
    price: "от $920 000",
    selected: true,
    type: "private" as const,
  },
  {
    index: "03",
    name: "Solo Apex",
    manifesto: "Максимальная траектория. Разговор с землёй — по желанию, не по расписанию.",
    altitude: "108 км",
    weightless: "4 мин 30 с",
    gLoad: "4.2 G",
    season: "6 окон в год",
    seats: "1 кресло",
    who: "Один пилот",
    included: "MONAD, solo cockpit, тренажёр отделения, callsign на корпусе",
    price: "от $1 450 000",
    selected: false,
    type: "solo" as const,
  },
  {
    index: "04",
    name: "Horizon Ceremony",
    manifesto: "Кто-то летит. Остальные стоят на белом павильоне и видят апогей на стекле.",
    altitude: "102 км",
    weightless: "4 мин 00 с",
    gLoad: "3.9 G",
    season: "по запросу",
    seats: "2–4 в капсуле",
    who: "Семья или круг до 12 гостей на площадке",
    included: "VEIL или LUMEN, павильон, ночной brief, общий архив",
    price: "от $1 800 000",
    selected: false,
    type: "ceremony" as const,
  },
];

export const calculatorSlots = {
  Shared: {
    code: "ORB-184",
    date: "12 окт 2026",
    site: "ARAL",
    detail: "2 места  ·  LUMEN",
    price: "ориентир  $285 000",
  },
  Private: {
    code: "ORB-187",
    date: "28 окт 2026",
    site: "RIDGE",
    detail: "4 места  ·  VEIL",
    price: "ориентир  $920 000",
  },
  Solo: {
    code: "ORB-191",
    date: "09 ноя 2026",
    site: "FJORD",
    detail: "1 место  ·  MONAD",
    price: "ориентир  $1 450 000",
  },
  Ceremony: {
    code: "ORB-196",
    date: "21 ноя 2026",
    site: "ARAL",
    detail: "3 места  ·  VEIL",
    price: "ориентир  $1 800 000",
  },
} as const;

export type CapsuleId = "LUMEN" | "VEIL" | "MONAD";

export const capsules: Record<
  CapsuleId,
  {
    line: string;
    seats: string;
    volume: string;
    view: string;
    maxG: string;
    eclss: string;
    landing: string;
    note: string;
    image: string;
    position: string;
    seatCount: number;
  }
> = {
  LUMEN: {
    line: "общий апогей",
    seats: "6",
    volume: "18.6 м³",
    view: "220°",
    maxG: "4.5",
    eclss: "90 мин",
    landing: "конус",
    note: "LUMEN  ·  NOMINAL APOGEE 100 KM  ·  SHARED ASCENT",
    image: "/orbital/podium.png",
    position: "center 48%",
    seatCount: 6,
  },
  VEIL: {
    line: "тихая капсула",
    seats: "2–4",
    volume: "14.2 м³",
    view: "240°",
    maxG: "4.5",
    eclss: "110 мин",
    landing: "конус",
    note: "VEIL  ·  NOMINAL APOGEE 104 KM  ·  PRIVATE ARC",
    image: "/orbital/hangar.png",
    position: "center 48%",
    seatCount: 4,
  },
  MONAD: {
    line: "solo cockpit",
    seats: "1",
    volume: "8.4 м³",
    view: "260°",
    maxG: "4.8",
    eclss: "120 мин",
    landing: "конус",
    note: "MONAD  ·  NOMINAL APOGEE 108 KM  ·  SOLO APEX",
    image: "/orbital/capsule-apogee.png",
    position: "center 42%",
    seatCount: 1,
  },
};

export const preflightDays = [
  {
    day: "01",
    title: "Медицинская комиссия",
    body: "Кардио, давление, зрение, кровь. Белая клиника, не больница.",
    image: "/orbital/lounge.png",
    alt: "Белый тренировочный зал ORBITAL с кобальтовой линией света",
    position: "center center",
  },
  {
    day: "03",
    title: "Вестибулярный тест",
    body: "Кресло вращения, глазные маркеры, порог укачивания. Решение — в цифрах, не в ощущении «я справлюсь».",
    image: null,
    alt: "",
    position: "center",
  },
  {
    day: "07",
    title: "Центрифуга",
    body: "Профиль 3.8–4.2 G. Дыхание под перегрузкой. Видеоразбор в тот же час.",
    image: "/orbital/centrifuge.png",
    alt: "Тренировка на центрифуге в белом комбинезоне",
    position: "center 45%",
  },
  {
    day: "11",
    title: "Симулятор отделения",
    body: "Отстрел, тишина, работа с иллюминатором, аварийный контур. Повторяем, пока жест не станет спокойным.",
    image: "/orbital/seat.png",
    alt: "Кресло капсулы с фиолетовой подсветкой",
    position: "center 40%",
  },
  {
    day: "15",
    title: "Fitting комбинезона",
    body: "Мерки, свой шлем, callsign на воротнике. Костюм остаётся вашим.",
    image: "/orbital/fitting.png",
    alt: "Примерка белого комбинезона и шлема",
    position: "center 35%",
  },
  {
    day: "20",
    title: "Night-before brief",
    body: "Погода, окно, кто в капсуле, ритуал утра. Никаких новых решений после полуночи.",
    image: null,
    alt: "",
    position: "center",
  },
  {
    day: "21",
    title: "Утро запуска",
    body: "Подъём, чистая зона, посадка в капсулу, T−0. Гости остаются в павильоне.",
    image: "/orbital/launch-dawn.png",
    alt: "Белая капсула у стартовой башни на рассвете",
    position: "center 42%",
  },
];

export const clearance = [
  {
    title: "Чеклист допуска",
    kind: "cobalt" as const,
    lines: [
      "кардиозаключение",
      "вестибулярный порог",
      "профиль центрифуги",
      "симулятор отделения",
      "свой комбинезон",
      "brief подписан",
    ],
  },
  {
    title: "Противопоказания",
    kind: "violet" as const,
    lines: [
      "нестабильное давление",
      "вестибулярный конфликт",
      "беременность",
      "недавняя операция",
      "отказ от центрифуги",
      "решает врач миссии",
    ],
  },
  {
    title: "Взять  /  нельзя",
    kind: "ink" as const,
    lines: [
      "линзы по списку",
      "документы dossier",
      "нельзя парфюм в капсулу",
      "алкоголь −72 часа",
      "незаявленные лекарства",
      "гости вне чистой зоны",
    ],
  },
];

export const archiveFlights = [
  {
    image: "/orbital/portrait.png",
    position: "center 28%",
    code: "ORB-161",
    name: "К. Волкова",
    meta: "02 авг 2026  ·  LUMEN  ·  ARAL",
    alt: "Портрет пилота в белом комбинезоне после апогея",
  },
  {
    image: "/orbital/pilot.png",
    position: "center 28%",
    code: "ORB-155",
    name: "М. Адлер",
    meta: "19 июл 2026  ·  MONAD  ·  FJORD",
    alt: "Портрет пилота миссии Solo Apex",
  },
  {
    image: "/orbital/earth-window.png",
    position: "center center",
    code: "ORB-149",
    name: "Семья Лин",
    meta: "28 июн 2026  ·  VEIL  ·  RIDGE",
    alt: "Кривизна Земли в иллюминаторе капсулы",
  },
];

export const sites = [
  {
    name: "ARAL",
    coord: "44.8° N",
    text: "Сухая равнина. Рассветные окна. Сейчас открыты ORB-184 и ORB-196.",
    meta: "2 OPEN",
  },
  {
    name: "RIDGE",
    coord: "28.1° N",
    text: "Океанский хребет. Длинная дуга на запад. Слот ORB-187 — Private Arc.",
    meta: "1 OPEN",
  },
  {
    name: "FJORD",
    coord: "69.4° N",
    text: "Северный холод. Редкие слоты Solo Apex. ORB-191 ещё открыт.",
    meta: "1 OPEN",
  },
];

export const requestSteps = [
  {
    num: "01",
    title: "Профиль пилота",
    meta: "Ева Саркис  ·  callsign ESI  ·  первый выход",
  },
  {
    num: "02",
    title: "Выбор миссии",
    meta: "Private Arc  ·  VEIL  ·  2 кресла",
  },
  {
    num: "03",
    title: "Желаемые окна",
    meta: "сейчас на листе",
  },
  {
    num: "04",
    title: "Медстатус",
    meta: "анкета не начата",
  },
  {
    num: "05",
    title: "Сопровождение",
    meta: "2 гостя на павильоне, не летят",
  },
  {
    num: "06",
    title: "Бюджетный диапазон",
    meta: "$900 000 — $1 100 000",
  },
];

export const defaultDossier = {
  pilot: "Ева Саркис  ·  ESI  ·  первый выход",
  mission: "Private Arc  ·  VEIL  ·  2 кресла",
  window: "ORB-187  ·  28 окт 2026  ·  RIDGE",
  backup: "ORB-196  ·  21 ноя 2026  ·  ARAL",
  guests: "2 на павильоне  ·  не летят",
  next: "Медицинский скрининг  ·  день 01",
  number: "ORB–D–2041",
};

export function statusKind(status: string): ChipKind {
  if (status === "OPEN") return "cobalt";
  if (status === "CLOSED") return "ink";
  return "violet";
}

export function weatherKind(weather: string): ChipKind {
  if (weather === "CLEAR") return "soft";
  return "ghost";
}
