import { AREAS, LANGS, SERVICES } from "@/lib/catalog";
import { listMaids } from "@/lib/db";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return guard(async () => {
    const url = new URL(req.url);
    const type = url.searchParams.get("type") || "";
    const areas = url.searchParams.getAll("area").filter(Boolean);
    const langs = url.searchParams.getAll("lang").filter(Boolean);
    if (type && !SERVICES.includes(type as (typeof SERVICES)[number])) return json({ error: "invalid" }, 400);
    if (areas.some((area) => !AREAS.includes(area as (typeof AREAS)[number]))) return json({ error: "invalid" }, 400);
    if (langs.some((lang) => !LANGS.includes(lang as (typeof LANGS)[number]))) return json({ error: "invalid" }, 400);
    const maids = await listMaids({ type, areas, langs });
    return json({ maids });
  });
}
