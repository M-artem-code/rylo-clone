export const homeHero = {
  eyebrow: "YOUR FIRST ORBIT  ·  ОКНО 14:22 UTC",
  lines: ["ВАША", "ПЕРВАЯ", "ОРБИТА"],
  lead: "Премиальный космический туризм нового поколения. Суборбитальные путешествия для частных клиентов — от выбора миссии до возвращения на Землю.",
  primaryCta: { label: "Выбрать свою миссию →", href: "/missions" },
  secondaryCta: { label: "Изучить капсулу", href: "/capsule" },
  coords: "51.2°N  ·  107.3°W  ·  ALT 100.2 KM",
  image: "/orbital/plate-earth-light-orbit.png",
  stats: [
    { value: "100 км", label: "Высота апогея" },
    { value: "12 мин", label: "Длительность" },
    { value: "4 мин", label: "Невесомость" },
    { value: "6 мест", label: "Капсула" },
    { value: "14:22", label: "Окно запуска" },
  ],
};

export const homeAdvantages = {
  eyebrow: "ЗАЧЕМ ЛЕТЕТЬ",
  title: "Не отдых. Событие.",
  items: [
    { num: "01", title: "Кривизна", desc: "Увидеть Землю как целый объект, а не как страну." },
    { num: "02", title: "Невесомость", desc: "Четыре минуты, которые меняют схему тела." },
    { num: "03", title: "Экипаж", desc: "Персональное сопровождение на каждом этапе." },
    { num: "04", title: "Капсула", desc: "Панорама и тишина вместо шумного шоу." },
  ],
};

export const homeMissionsIntro = {
  eyebrow: "LAUNCH WINDOW 2026",
  title: ["БЛИЖАЙШИЕ", "МИССИИ"],
  lead: "Каждая миссия — отдельный премиальный опыт: маршрут, высота, окно запуска и характер вида на Землю.",
};

export const homeJourney = {
  eyebrow: "YOUR JOURNEY",
  title: ["КАК ПРОХОДИТ", "ПОЛЁТ"],
  image: "/orbital/plate-earth-capsule-orbit.png",
  steps: [
    { time: "T−03:00", title: "База", desc: "Прибытие на космодром и персональный брифинг миссии." },
    { time: "T−00:40", title: "Подготовка", desc: "Костюм, проверка систем и посадка в капсулу." },
    { time: "T+00:00", title: "Запуск", desc: "Старт носителя и выход на суборбитальную дугу." },
    { time: "T+02:10", title: "Высота", desc: "100 км. Кривизна Земли становится очевидной." },
    { time: "T+04:40", title: "Невесомость", desc: "Четыре минуты свободного полёта у панорамы." },
    { time: "T+12:00", title: "Возвращение", desc: "Спуск в атмосфере и посадка на воду / полосу." },
  ],
  techLabel: "ТЕХНОЛОГИЯ КАПСУЛЫ",
  specs: [
    { label: "Панорама", value: "220°" },
    { label: "Места", value: "6" },
    { label: "Автономия", value: "24 ч" },
    { label: "Оболочка", value: "Ti / carbon" },
  ],
};

export const homeRoute = {
  eyebrow: "МАРШРУТ",
  text: "Суборбитальная дуга над океаном. Апогей 100 км. Возвращение на воду.",
  stats: ["Высота 100 км", "Скорость 3 700 км/ч", "Окно 14:22 UTC"],
  image: "/orbital/plate-earth-curve-dawn.png",
};

export const homeCta = {
  title: "Готовы увидеть Землю целиком?",
  quote: "Земля становится личной историей.",
  lead: "Выберите миссию и начните подготовку к первому полёту.",
  cta: { label: "Выбрать свою миссию →", href: "/missions" },
};
