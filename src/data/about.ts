export const aboutHero = {
  eyebrow: "DOCUMENTARY",
  lines: ["МЫ ОТКРЫВАЕМ", "ЗЕМЛЮ ЗАНОВО"],
  story:
    "ORBITAL возник не как туристический бренд, а как способ вернуть человеку масштаб. Инженеры, операторы миссий и специалисты по полётам собирают путешествие, в котором техника исчезает — остаётся только вид.",
  image: "/orbital/plate-engineering-hall.png",
  people: [
    { name: "Лена Орлова", role: "Директор полётов" },
    { name: "Марк Эллис", role: "Главный инженер капсулы" },
    { name: "Айя Нгуен", role: "Подготовка пассажиров" },
    { name: "Ноа Берг", role: "Оператор миссий" },
  ],
  cta: { label: "Узнать больше об ORBITAL →", href: "/about#operations" },
  note: "Atlantic Spaceport  ·  конструкторский зал C-1",
};

export const aboutOps = {
  id: "operations",
  eyebrow: "КАК СОБИРАЕТСЯ ПОЛЁТ",
  title: "Не офис. Контур миссии.",
  left: {
    image: "/orbital/plate-mission-control.png",
    caption: "Операторы ведут траекторию как партитуру: окна, коридоры, погода, экипаж.",
  },
  right: {
    image: "/orbital/plate-briefing.png",
    caption: "Перед полётом человек встречает тех, кто будет говорить с ним из центра.",
  },
  cta: { label: "Узнать больше об ORBITAL →", href: "/contacts" },
};
