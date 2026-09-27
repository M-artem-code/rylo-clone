export const AREAS = ["Тель-Авив", "Яффо", "Рамат-Ган", "Холон", "Хайфа", "Петах-Тиква"] as const;
export const LANGS = ["русский", "иврит", "English"] as const;
export const SERVICES = ["Стандарт", "Генеральная", "После ремонта", "Окна", "Глажка"] as const;

export type Service = (typeof SERVICES)[number];

export function hoursFor(m2: number, type: string) {
  const n = Number(m2) || 72;
  if (type === "Генеральная" || type === "ניקיון כללי") return Math.max(1, Math.round(n / 12));
  if (type === "После ремонта" || type === "אחרי שיפוץ") return Math.max(1, Math.round(n / 10));
  if (type === "Окна" || type === "חלונות") return Math.max(1, Math.round(n / 24));
  if (type === "Глажка" || type === "גיהוץ") return Math.max(1, Math.round(n / 36));
  return Math.max(1, Math.round(n / 18));
}

export const SEED = [
  { id: "daria", name: "Дарья К.", hour: 92, areas: ["Тель-Авив", "Яффо"], langs: ["русский", "иврит"], services: ["Стандарт", "Глажка", "Окна"], slots: ["09:00", "11:00", "14:00", "16:00"], photo: "/assets/photos/daria.png" },
  { id: "noa", name: "Noa R.", hour: 105, areas: ["Рамат-Ган"], langs: ["иврит", "English"], services: ["Генеральная", "Окна"], slots: ["10:00", "13:00", "15:00"], photo: "/assets/photos/noa.png" },
  { id: "marina", name: "Марина Л.", hour: 85, areas: ["Холон"], langs: ["русский", "иврит"], services: ["Стандарт", "После ремонта"], slots: ["09:00", "12:00", "16:00"], photo: "/assets/photos/marina.png" },
  { id: "yael", name: "Yael S.", hour: 110, areas: ["Тель-Авив"], langs: ["иврит", "English"], services: ["Окна", "Генеральная"], slots: ["11:00", "14:00", "17:00"], photo: "/assets/photos/yael.png" },
  { id: "olga", name: "Ольга П.", hour: 88, areas: ["Петах-Тиква"], langs: ["русский"], services: ["Стандарт", "Глажка", "Окна"], slots: ["08:30", "12:30", "15:30"], photo: "/assets/photos/olga.png" },
  { id: "tamar", name: "Tamar B.", hour: 95, areas: ["Хайфа"], langs: ["иврит", "русский"], services: ["Стандарт", "Генеральная"], slots: ["09:00", "13:00", "16:00"], photo: "/assets/photos/tamar.png" },
];
