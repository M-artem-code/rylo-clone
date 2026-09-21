export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type SolutionCard = {
  id: string;
  image: string;
  imageAlt: string;
  number: string;
  title: string;
  description: string;
  layout: "portrait" | "landscape";
};

export type StatItem = {
  number: string;
  label: string;
};

export type SystemNode = {
  kind: "sun" | "panel" | "inv" | "bat" | "home" | "dev";
  title: string;
  subtitle: string;
};

export type DashboardTile = {
  title: string;
  value: string;
  note: string;
};

export type ProjectItem = {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
};

export type WhyItem = {
  number: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ContactRow = {
  label: string;
  value: string;
  href?: string;
};

export const site = {
  name: "Tesla Volt",
  wordmark: "TESLA VOLT",
  locale: "ru",
  metadata: {
    title: "Tesla Volt — энергия вашего дома",
    description:
      "Проектируем и устанавливаем солнечные электростанции, системы бесперебойного питания и Умный дом под ключ.",
  },
  nav: [
    { label: "Решения", href: "/solutions", id: "solutions" },
    { label: "Система", href: "/system", id: "system" },
    { label: "Проекты", href: "/projects", id: "projects" },
    { label: "Процесс", href: "/process", id: "process" },
    { label: "Контакты", href: "/contacts", id: "contacts" },
  ] satisfies NavItem[],
  headerCta: {
    label: "Рассчитать проект",
    href: "/contacts",
  },
  footer: {
    wordmark: "TESLA VOLT",
    tagline: "Энергетическая независимость объекта",
  },
  hero: {
    eyebrow: "Инженерная компания",
    title: ["Энергия вашего дома.", "Полностью под контролем."],
    subtitle:
      "Проектируем и устанавливаем солнечные электростанции, системы бесперебойного питания и Умный дом под ключ.",
    image: "/images/tesla-volt/hero-house.png",
    imageAlt: "Современный загородный дом с панорамным остеклением и солнечными панелями",
    primaryCta: { label: "Рассчитать проект", href: "/contacts" },
    secondaryCta: { label: "Посмотреть решения", href: "/solutions" },
    chips: [
      { title: "Автономия", subtitle: "объект работает независимо" },
      { title: "Резерв 24/7", subtitle: "питание без перерывов" },
      { title: "Под ключ", subtitle: "от расчёта до запуска" },
    ],
  },
  solutions: {
    eyebrow: "Направления",
    title: "Решения Tesla Volt",
    subtitle: "Инженерные системы для частных и коммерческих объектов.",
    cards: [
      {
        id: "solar",
        image: "/images/tesla-volt/solar-roof.png",
        imageAlt: "Солнечные панели на кровле",
        number: "01",
        title: "Солнечные электростанции",
        description:
          "Проектирование и монтаж автономных и гибридных станций под архитектуру объекта.",
        layout: "portrait",
      },
      {
        id: "ups",
        image: "/images/tesla-volt/ups.png",
        imageAlt: "Шкафы резервного питания",
        number: "02",
        title: "ИБП и резервное питание",
        description:
          "Бесперебойное питание дома, офиса или ресторана при отключении сети.",
        layout: "portrait",
      },
      {
        id: "storage",
        image: "/images/tesla-volt/battery.png",
        imageAlt: "Аккумуляторные шкафы",
        number: "03",
        title: "Системы хранения энергии",
        description:
          "Аккумуляторные массивы, которые держат резерв и сглаживают пики потребления.",
        layout: "portrait",
      },
      {
        id: "smart",
        image: "/images/tesla-volt/interior.png",
        imageAlt: "Интерьер с управлением домом",
        number: "04",
        title: "Умный дом",
        description:
          "Освещение, климат, безопасность и энергия в одном спокойном интерфейсе.",
        layout: "landscape",
      },
      {
        id: "complex",
        image: "/images/tesla-volt/estate.png",
        imageAlt: "Премиальный дом с комплексной системой",
        number: "05",
        title: "Комплексные решения",
        description:
          "Солнце, резерв, хранение и автоматизация — одна система под ключ.",
        layout: "landscape",
      },
    ] satisfies SolutionCard[],
  },
  numbers: {
    eyebrow: "Ориентиры концепции",
    title: "Энергия в цифрах",
    subtitle:
      "Цифры задают характер системы. Это визуальные ориентиры концепции, а не подтверждённые показатели.",
    image: "/images/tesla-volt/hero-house.png",
    imageAlt: "Дом Tesla Volt вечером",
    stats: [
      { number: "100%", label: "индивидуальный проект" },
      { number: "24/7", label: "резервное питание" },
      { number: "10+", label: "лет инженерного опыта" },
      { number: "под ключ", label: "от проекта до запуска" },
    ] satisfies StatItem[],
  },
  system: {
    eyebrow: "Архитектура",
    title: "Как работает система",
    subtitle:
      "Солнце собирается на кровле, преобразуется, сохраняется и распределяется по дому — включая умные устройства.",
    image: "/images/tesla-volt/solar-roof.png",
    imageAlt: "Солнечные панели крупным планом",
    nodes: [
      { kind: "sun", title: "Солнце", subtitle: "источник" },
      { kind: "panel", title: "Панели", subtitle: "генерация" },
      { kind: "inv", title: "Инвертор", subtitle: "преобразование" },
      { kind: "bat", title: "Аккумулятор", subtitle: "хранение" },
      { kind: "home", title: "Дом", subtitle: "потребление" },
      { kind: "dev", title: "Устройства", subtitle: "автоматизация" },
    ] satisfies SystemNode[],
    note: "Поток энергии: генерация → преобразование → хранение → дом → сценарии умного дома",
  },
  smartHome: {
    eyebrow: "Автоматизация",
    title: "Умный дом",
    subtitle: "Один интерфейс для света, климата, безопасности и энергии.",
    image: "/images/tesla-volt/interior.png",
    imageAlt: "Вечерний интерьер резиденции",
    brand: "TESLA VOLT HOME",
    residence: "Резиденция · Основной контур",
    status: "Все системы в норме  ·  автономный режим",
    tiles: [
      { title: "Освещение", value: "Сцены · 68%", note: "тёплый вечер" },
      { title: "Климат", value: "22.5 °C", note: "тихо, стабильно" },
      { title: "Безопасность", value: "Охрана вкл.", note: "8 датчиков" },
      { title: "Электропитание", value: "Резерв 94%", note: "сеть + батарея" },
      { title: "Ворота", value: "Закрыты", note: "подъезд" },
      { title: "Камеры", value: "6 онлайн", note: "периметр" },
      { title: "Зарядка авто", value: "78% · 11 кВт", note: "ночная сессия" },
      { title: "Потребление", value: "3.2 кВт", note: "ниже обычного" },
    ] satisfies DashboardTile[],
    chartTitle: "Поток энергии за сутки",
    chartCaption: "генерация · хранение · дом",
    chartNow: "12.4 кВт сейчас",
    chartValues: [0.22, 0.34, 0.58, 0.8, 0.96, 0.88, 0.62, 0.48, 0.7, 0.54, 0.36, 0.24],
  },
  projects: {
    eyebrow: "Портфолио",
    title: "Реализованные проекты",
    subtitle:
      "Архитектурные объекты, для которых Tesla Volt собирает энергетический контур.",
    items: [
      {
        image: "/images/tesla-volt/cottage.png",
        imageAlt: "Загородный коттедж с солнечной кровлей",
        tag: "01  /  Резиденция",
        title: "Загородный коттедж",
        description: "Солнечная станция, резерв и тёплый контур",
      },
      {
        image: "/images/tesla-volt/estate.png",
        imageAlt: "Премиальный дом у воды",
        tag: "02  /  Поместье",
        title: "Премиальный дом",
        description: "Комплекс: генерация, хранение, умный дом",
      },
      {
        image: "/images/tesla-volt/commercial.png",
        imageAlt: "Стеклянный деловой павильон",
        tag: "03  /  Коммерция",
        title: "Деловой павильон",
        description: "Резерв ресторана и офисного контура",
      },
      {
        image: "/images/tesla-volt/minimal.png",
        imageAlt: "Минималистичный дом с бассейном",
        tag: "04  /  Минимум",
        title: "Минималистичный объект",
        description: "Скрытые панели и тихая автоматизация",
      },
    ] satisfies ProjectItem[],
  },
  why: {
    eyebrow: "Подход",
    title: "Почему Tesla Volt",
    subtitle:
      "Одна инженерная команда ведёт объект от первого расчёта до сервисного контура.",
    items: [
      {
        number: "01",
        title: "Индивидуальное проектирование",
        description:
          "Система собирается под архитектуру, нагрузку и сценарии конкретного здания.",
      },
      {
        number: "02",
        title: "Инженерный расчёт",
        description:
          "Генерация, резерв и ёмкость батареи считаются до закупки оборудования.",
      },
      {
        number: "03",
        title: "Комплект оборудования",
        description:
          "Подбираем согласованный стек: панели, инвертор, накопители, автоматика.",
      },
      {
        number: "04",
        title: "Профессиональный монтаж",
        description:
          "Аккуратная установка на кровле, в щитовой и по инженерным трассам объекта.",
      },
      {
        number: "05",
        title: "Настройка и автоматизация",
        description:
          "Сценарии света, климата, резерва и зарядки собираются в одном контуре.",
      },
      {
        number: "06",
        title: "Сервис и сопровождение",
        description:
          "Мониторинг, обслуживание и развитие системы после запуска.",
      },
    ] satisfies WhyItem[],
  },
  process: {
    eyebrow: "Маршрут",
    title: "Процесс работы",
    subtitle: "Пять этапов — от заявки до запуска системы на объекте.",
    steps: [
      {
        number: "01",
        title: "Заявка",
        description:
          "Короткий бриф: объект, задачи, желаемый уровень автономии.",
      },
      {
        number: "02",
        title: "Выезд и аудит",
        description:
          "Осмотр кровли, щитовой, нагрузок и сценариев использования.",
      },
      {
        number: "03",
        title: "Проектирование",
        description:
          "Схема, спецификация и расчёт генерации, резерва и хранения.",
      },
      {
        number: "04",
        title: "Монтаж и настройка",
        description:
          "Установка оборудования, трасс, автоматики и интерфейса.",
      },
      {
        number: "05",
        title: "Запуск системы",
        description: "Пусконаладка, обучение и передача объекта в сервис.",
      },
    ] satisfies ProcessStep[],
    note: "Срок и состав работ фиксируются после аудита объекта.",
    cta: { label: "Оставить заявку", href: "/contacts" },
  },
  cta: {
    eyebrow: "Следующий шаг",
    title: ["Сделайте свой объект", "энергетически", "независимым."],
    subtitle: "Рассчитаем систему под ваш дом или коммерческий объект.",
    button: { label: "Получить расчёт", href: "/contacts" },
    image: "/images/tesla-volt/estate.png",
    imageAlt: "Премиальный дом вечером",
  },
  contacts: {
    eyebrow: "Связь",
    title: "Контакты",
    subtitle: "Расскажите о объекте — подготовим предварительный расчёт.",
    intro: "Инженерные системы для домов и коммерции.",
    rows: [
      {
        label: "Телефон",
        value: "+7 495 120-45-80",
        href: "tel:+74951204580",
      },
      {
        label: "WhatsApp",
        value: "+7 495 120-45-80",
        href: "https://wa.me/74951204580",
      },
      {
        label: "Telegram",
        value: "@teslavolt",
        href: "https://t.me/teslavolt",
      },
      {
        label: "Email",
        value: "hello@teslavolt.ru",
        href: "mailto:hello@teslavolt.ru",
      },
      {
        label: "Зона работы",
        value: "Москва, МО и объекты ЦФО",
      },
    ] satisfies ContactRow[],
    form: {
      title: "Заявка на расчёт",
      caption: "Ответим в течение рабочего дня.",
      nameLabel: "Имя",
      namePlaceholder: "Александр",
      phoneLabel: "Телефон",
      phonePlaceholder: "+7",
      objectLabel: "Тип объекта",
      objectPlaceholder: "Загородный дом",
      commentLabel: "Комментарий",
      commentPlaceholder: "Нужна автономия и умный дом",
      submit: "Получить расчёт",
      consent: "Нажимая кнопку, вы соглашаетесь на связь по проекту.",
      successTitle: "Заявка принята",
      successText: "Свяжемся по проекту в течение рабочего дня.",
      errorText: "Заполните имя и телефон.",
    },
  },
} as const;
