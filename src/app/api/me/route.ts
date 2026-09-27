import { readSessionMaid } from "@/lib/auth";
import { updateMaid } from "@/lib/db";
import { guard, json } from "@/lib/http";
import { parseShop } from "@/lib/profile";

export const dynamic = "force-dynamic";

export function PUT(req: Request) {
  return guard(async () => {
    const maid = await readSessionMaid();
    if (!maid) return json({ error: "unauthorized" }, 401);
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) return json({ error: "invalid" }, 400);
    const shop = parseShop(body, maid.photo);
    if (!shop) return json({ error: "invalid" }, 400);
    const open = typeof body.open === "boolean" ? body.open : maid.open;
    const next = await updateMaid(maid.id, { ...shop, open });
    if (!next) return json({ error: "not_found" }, 404);
    return json({ maid: next });
  });
}
