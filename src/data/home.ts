import { packages } from "@/data/site";

export const homeHero = {
  cluster: ["Москва", "18:00–02:00", "Студия"] as const,
  titleLines: ["НОЧЬ.", "СВЕТ. ТЫ."] as const,
  subline: "Индивидуальный портрет в ночной студии Nigma. Москва.",
  primaryCta: "Оставить заявку",
  primaryHref: "/request",
  secondaryCta: "Смотреть пакеты",
  secondaryHref: "#packages",
  image: {
    src: "/images/hero.png",
    alt: "Ночной портрет в студии Nigma",
  },
};

export const homeAtmosphere = {
  kicker: "Студия",
  title: "Студия, которая работает после заката",
  body: "Nigma снимает индивидуальные ночные портреты в собственной тёмной студии. Сессии проходят только здесь — не на улице и не как аренда зала. После заката в кадре остаётесь вы и направленный свет.",
  labels: ["Только портрет", "Только студия", "Только ночь"] as const,
  image: {
    src: "/images/studio.png",
    alt: "Тёмная студия Nigma с неоновым светом",
    caption: "Циклорама · Москва",
  },
};

export const homePackages = {
  id: "packages",
  kicker: "01 / 03",
  title: "Три формата",
  intro: "Выберите пакет и оставьте заявку — мы свяжемся с вами.",
  items: packages,
};

export const homeFlow = {
  kicker: "02 / 03",
  title: "Как это проходит",
  steps: [
    { num: "01", title: "Заявка", text: "Оставляете заявку и выбираете пакет" },
    { num: "02", title: "Образ", text: "Мы связываемся и уточняем образ" },
    { num: "03", title: "Съёмка", text: "Ночная съёмка в студии" },
    { num: "04", title: "Портреты", text: "Вы получаете готовые портреты" },
  ] as const,
};

export const homeTeaser = {
  kicker: "03 / 03",
  title: "Готовы к ночному кадру?",
  cta: "Оставить заявку",
  href: "/request",
  image: {
    src: "/images/streak.png",
    alt: "",
  },
};
