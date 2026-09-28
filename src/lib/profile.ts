import { AREAS, LANGS, SERVICES } from "./catalog";

export type ShopInput = {
  name: string;
  hour: number;
  areas: string[];
  langs: string[];
  services: string[];
  slots: string[];
  photo: string;
};

function list(value: unknown) {
  if (!Array.isArray(value)) return null;
  return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean);
}

export function parseShop(body: Record<string, unknown>, previousPhoto = ""): ShopInput | null {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const hour = Number(body.hour);
  const areas = list(body.areas);
  const langs = list(body.langs);
  const services = list(body.services);
  const slots = list(body.slots);
  const photo = typeof body.photo === "string" ? body.photo : previousPhoto;
  if (name.length < 2 || name.length > 60) return null;
  if (!Number.isInteger(hour) || hour < 40 || hour > 500) return null;
  if (!areas || areas.length < 1 || areas.some((area) => !AREAS.includes(area as (typeof AREAS)[number]))) return null;
  if (!langs || langs.length < 1 || langs.some((lang) => !LANGS.includes(lang as (typeof LANGS)[number]))) return null;
  if (!services || services.length < 1 || services.some((service) => !SERVICES.includes(service as (typeof SERVICES)[number]))) return null;
  if (!slots || slots.length < 1 || slots.length > 12 || slots.some((slot) => !/^\d{2}:\d{2}$/.test(slot))) return null;
  if (photo && (!photo.startsWith("data:image/") && !photo.startsWith("/assets/photos/"))) return null;
  if (photo.startsWith("data:image/") && photo.length > 1_000_000) return null;
  return {
    name,
    hour,
    areas: [...new Set(areas)],
    langs: [...new Set(langs)],
    services: [...new Set(services)],
    slots: [...new Set(slots)],
    photo,
  };
}

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 120;
}
