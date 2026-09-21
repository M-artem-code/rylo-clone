export const capsuleHero = {
  eyebrow: "VEHICLE",
  title: "КАПСУЛА",
  name: "ORBITAL C-1",
  lead: "Между премиальным автомобильным показом и аэрокосмическим интерфейсом. Шесть мест, панорама 220°, автономные системы.",
  image: "/orbital/plate-capsule-studio.png",
  hotspots: [
    { label: "Панорама 220°", x: "42%", y: "18%" },
    { label: "Кресла Signature", x: "62%", y: "28%" },
    { label: "Жизнеобеспечение", x: "78%", y: "58%" },
    { label: "Оболочка Ti-C", x: "28%", y: "70%" },
  ],
  specs: [
    { value: "9.4 м", label: "длина" },
    { value: "6", label: "мест" },
    { value: "24 ч", label: "автономия" },
    { value: "3.2 g", label: "макс. g" },
  ],
  cta: { label: "Посмотреть доступные миссии →", href: "/missions" },
};

export const capsuleInterior = {
  eyebrow: "ИНТЕРЬЕР И СИСТЕМЫ",
  title: "Шесть кресел смотрят на Землю.",
  interiorImage: "/orbital/plate-capsule-interior.png",
  explodedImage: "/orbital/plate-capsule-exploded.png",
  items: [
    { title: "Панорамный купол", desc: "Непрерывный обзор без стоек в поле зрения." },
    { title: "Кресла Signature", desc: "Фиксация на старте, свобода в невесомости." },
    { title: "Жизнеобеспечение", desc: "Замкнутый контур на 24 часа автономии." },
    { title: "Связь и архив", desc: "Канал с Землёй и личная 8K-запись полёта." },
  ],
};
