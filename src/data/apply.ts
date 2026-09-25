export const applyPage = {
  mark: "ВХОД",
  word: "CASTING",
  headline: ["Короткий кастинг,", "не форма из шаблона"] as const,
  lead: "Portrait — мягче. Brand — глубже. Оба человеческие.",
  image: "/images/arcana/casting-seat.jpg",
  focus: "50% 42%",
  fields: [
    {
      id: "name",
      label: "Имя",
      placeholder: "как к вам обращаться",
      autocomplete: "name",
    },
    {
      id: "contact",
      label: "Контакт",
      placeholder: "Telegram / почта — mock",
      autocomplete: "email",
    },
    {
      id: "night",
      label: "Какая ночь нужна",
      placeholder: "Portrait  ·  Fashion  ·  Brand",
      autocomplete: "off",
    },
    {
      id: "task",
      label: "Образ или задача",
      placeholder: "Два-три предложения",
      autocomplete: "off",
    },
  ],
  modes: ["Portrait", "Fashion", "Brand"] as const,
  submit: "Отправить заявку  →",
  telegram: "или Telegram  ·  @arcana.night  ·  MOCK",
  disclaimer:
    "Реальных контактов нет. Всё на этом экране — визуальный placeholder.",
  success:
    "Заявка принята как демонстрация формы. Это mock — сообщение никуда не ушло.",
} as const;
