import { hoursFor, SERVICES } from "@/lib/catalog";
import { readSessionMaid } from "@/lib/auth";
import { createOrder, getOpenMaid, listOrdersForMaid } from "@/lib/db";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET() {
  return guard(async () => {
    const maid = await readSessionMaid();
    if (!maid) return json({ error: "unauthorized" }, 401);
    const orders = await listOrdersForMaid(maid.id);
    return json({ orders });
  });
}

export function POST(req: Request) {
  return guard(async () => {
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || typeof body.maidId !== "string") return json({ error: "invalid" }, 400);
    const maid = await getOpenMaid(body.maidId);
    if (!maid) return json({ error: "not_found" }, 404);
    const clientName = typeof body.clientName === "string" ? body.clientName.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const city = typeof body.city === "string" ? body.city.trim().slice(0, 80) : "";
    const type = typeof body.type === "string" ? body.type : "";
    const slot = typeof body.slot === "string" ? body.slot : "";
    const date = typeof body.date === "string" ? body.date : "";
    const m2 = Number(body.m2);
    if (clientName.length < 2 || clientName.length > 80) return json({ error: "invalid" }, 400);
    if (phone.length < 5 || phone.length > 40) return json({ error: "invalid" }, 400);
    if (!SERVICES.includes(type as (typeof SERVICES)[number]) || !maid.services.includes(type)) return json({ error: "invalid" }, 400);
    if (!maid.slots.includes(slot)) return json({ error: "invalid" }, 400);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({ error: "invalid" }, 400);
    if (!Number.isFinite(m2) || m2 < 20 || m2 > 300) return json({ error: "invalid" }, 400);
    const hours = hoursFor(m2, type);
    const order = await createOrder({
      maidId: maid.id,
      clientName,
      phone,
      city,
      m2: Math.round(m2),
      type,
      hours,
      date,
      slot,
      sum: hours * maid.hour,
    });
    return json({ order }, 201);
  });
}
