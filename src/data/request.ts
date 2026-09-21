import type { PackageId } from "@/data/site";
import { packages } from "@/data/site";

export const requestPage = {
  kicker: "Заявка",
  title: "Заявка на съёмку",
  subline: "Выберите пакет. Мы свяжемся с вами.",
  submit: "Отправить заявку",
  note: "Мы напишем или позвоним после заявки.",
  successTitle: "Заявка отправлена",
  successBody: "Мы напишем или позвоним после заявки.",
  image: {
    src: "/images/request.png",
    alt: "Ночной портрет в студии Nigma",
    caption: "Студия · Ночь · Портрет",
  },
};

export const requestFields = {
  name: {
    id: "name",
    label: "Имя",
    placeholder: "Как к вам обращаться",
  },
  phone: {
    id: "phone",
    label: "Телефон",
    placeholder: "+7 (___) ___-__-__",
  },
  messenger: {
    id: "messenger",
    label: "Telegram или WhatsApp",
    placeholder: "@username или номер",
  },
  package: {
    label: "Пакет",
    options: packages,
    selectedMark: "выбрано",
  },
  time: {
    id: "time",
    label: "Желаемое время",
    options: ["18:00", "20:00", "22:00", "00:00", "02:00", "Пока не знаю"] as const,
    defaultValue: "22:00",
  },
  comment: {
    id: "comment",
    label: "Комментарий к образу",
    placeholder: "Настроение, свет, что важно в кадре",
  },
};

export const defaultPackageId: PackageId = "nigma";
