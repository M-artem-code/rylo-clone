export type MissionStatus = "open" | "limited";

export type Mission = {
  slug: string;
  code: string;
  number: string;
  name: string;
  subtitle: string;
  filter: "Рассвет" | "Высота" | "Панорама" | "Ночной старт";
  date: string;
  dateShort: string;
  duration: string;
  durationLong: string;
  altitude: string;
  weightless: string;
  start: string;
  startFull: string;
  seats: string;
  seatsLabel: string;
  status: MissionStatus;
  statusLabel: string;
  briefingId: string;
  lead: string;
  route: string;
  window: string;
  trajectory: string[];
  image: string;
  cardImage: string;
};

export const missions: Mission[] = [
  {
    slug: "aurora",
    code: "AURORA",
    number: "01",
    name: "AURORA",
    subtitle: "Первый рассвет над Землёй",
    filter: "Рассвет",
    date: "18 марта 2026",
    dateShort: "18 мар 2026",
    duration: "12 мин",
    durationLong: "12 мин 40 с",
    altitude: "100 км",
    weightless: "4 мин 10 с",
    start: "Atlantic",
    startFull: "Atlantic SP",
    seats: "3 / 6",
    seatsLabel: "3 места",
    status: "open",
    statusLabel: "Открыта",
    briefingId: "ORB-AUR-026",
    lead: "Суборбитальная дуга на 100 км в момент восхода. Пассажиры видят линию терминатора — ночь и день на одной планете.",
    route: "Atlantic Spaceport → апогей 100 км → Тихий коридор",
    window: "Окно запуска 14:22 UTC  ·  3 места",
    trajectory: [
      "Старт 28.5°N  ·  Апогей 100.2 км  ·  Спуск 19.1°N",
      "Скорость макс. 3 700 км/ч  ·  Перегрузка 3.2 g  ·  Коридор C-4",
      "Маршрут согласован с окном 14:22–14:41 UTC",
    ],
    image: "/orbital/plate-earth-window.png",
    cardImage: "/orbital/plate-earth-curve-dawn.png",
  },
  {
    slug: "zenith",
    code: "ZENITH",
    number: "02",
    name: "ZENITH",
    subtitle: "Максимальная высота",
    filter: "Высота",
    date: "4 июня 2026",
    dateShort: "4 июн 2026",
    duration: "14 мин",
    durationLong: "14 мин",
    altitude: "110 км",
    weightless: "4 мин 40 с",
    start: "Atlantic",
    startFull: "Atlantic SP",
    seats: "2 / 6",
    seatsLabel: "2 места",
    status: "limited",
    statusLabel: "Ограничена",
    briefingId: "ORB-ZEN-026",
    lead: "Суборбитальная дуга на максимальную высоту программы. Земля читается как целый объект.",
    route: "Atlantic Spaceport → апогей 110 км → Тихий коридор",
    window: "Окно запуска согласуется индивидуально  ·  2 места",
    trajectory: [
      "Старт 28.5°N  ·  Апогей 110 км",
      "Скорость макс. 3 700 км/ч  ·  Коридор C-4",
      "Маршрут согласован с окном запуска",
    ],
    image: "/orbital/plate-earth-window.png",
    cardImage: "/orbital/plate-earth-window.png",
  },
  {
    slug: "horizon",
    code: "HORIZON",
    number: "03",
    name: "HORIZON",
    subtitle: "Круговая панорама",
    filter: "Панорама",
    date: "21 сентября 2026",
    dateShort: "21 сен 2026",
    duration: "13 мин",
    durationLong: "13 мин",
    altitude: "104 км",
    weightless: "4 мин 20 с",
    start: "Pacific",
    startFull: "Pacific SP",
    seats: "4 / 6",
    seatsLabel: "4 места",
    status: "open",
    statusLabel: "Открыта",
    briefingId: "ORB-HOR-026",
    lead: "Круговая панорама 360°. Горизонт остаётся в кадре на всём протяжении дуги.",
    route: "Pacific Spaceport → апогей 104 км → океанский коридор",
    window: "Окно запуска согласуется индивидуально  ·  4 места",
    trajectory: [
      "Апогей 104 км  ·  панорама 360°",
      "Скорость макс. 3 700 км/ч  ·  Коридор C-4",
      "Маршрут согласован с окном запуска",
    ],
    image: "/orbital/plate-earth-light-orbit.png",
    cardImage: "/orbital/plate-earth-light-orbit.png",
  },
  {
    slug: "eclipse",
    code: "ECLIPSE",
    number: "04",
    name: "ECLIPSE",
    subtitle: "Ночной старт и звёзды",
    filter: "Ночной старт",
    date: "11 декабря 2026",
    dateShort: "11 дек 2026",
    duration: "13 мин",
    durationLong: "13 мин",
    altitude: "102 км",
    weightless: "4 мин 05 с",
    start: "Atlantic",
    startFull: "Atlantic SP",
    seats: "5 / 6",
    seatsLabel: "5 мест",
    status: "open",
    statusLabel: "Открыта",
    briefingId: "ORB-ECL-026",
    lead: "Ночной старт и звёздное небо. Земля читается огнями, а не дневным рельефом.",
    route: "Atlantic Spaceport → апогей 102 км → ночной коридор",
    window: "Окно запуска согласуется индивидуально  ·  5 мест",
    trajectory: [
      "Ночной старт  ·  Апогей 102 км",
      "Скорость макс. 3 700 км/ч  ·  Коридор C-4",
      "Маршрут согласован с окном запуска",
    ],
    image: "/orbital/plate-night-launch.png",
    cardImage: "/orbital/plate-night-launch.png",
  },
];

export const missionFilters = ["Все", "Рассвет", "Высота", "Панорама", "Ночной старт"] as const;

export const itineraryScenes = [
  { num: "01", title: "База", time: "T−3 ч", desc: "Прибытие, медитация вида, личный брифинг." },
  { num: "02", title: "Капсула", time: "T−40 мин", desc: "Посадка, проверка герметичности, связь с семьёй." },
  { num: "03", title: "Запуск", time: "T+0", desc: "Голубое пламя, набор, голос оператора." },
  { num: "04", title: "Высота", time: "T+2:10", desc: "Небо чернеет. Земля становится шаром." },
  { num: "05", title: "Невесомость", time: "T+4:40", desc: "Тело отпускает. Панорама 220°." },
  { num: "06", title: "Возвращение", time: "T+12", desc: "Плазма, тишина, вода, первое слово." },
];

export const capsuleSeats = [
  { code: "A2", name: "Рассветный край", status: "free" as const, statusLabel: "Свободно" },
  { code: "B1", name: "Центр панорамы", status: "selected" as const, statusLabel: "Выбрано вами" },
  { code: "B2", name: "Звёздный борт", status: "taken" as const, statusLabel: "Занято" },
];

export function getMission(slug: string): Mission | undefined {
  return missions.find((mission) => mission.slug === slug);
}
