import { readSessionMaid } from "@/lib/auth";
import { getOrderBySecret, setOrderStatus } from "@/lib/db";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return guard(async () => {
    const { id } = await ctx.params;
    const secret = new URL(req.url).searchParams.get("secret") || "";
    if (!secret) return json({ error: "unauthorized" }, 401);
    const order = await getOrderBySecret(id, secret);
    if (!order) return json({ error: "not_found" }, 404);
    return json({ order });
  });
}

export function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return guard(async () => {
    const maid = await readSessionMaid();
    if (!maid) return json({ error: "unauthorized" }, 401);
    const { id } = await ctx.params;
    const body = (await req.json().catch(() => null)) as { status?: unknown } | null;
    const status = body?.status;
    if (status !== "accepted" && status !== "declined") return json({ error: "invalid" }, 400);
    const order = await setOrderStatus(id, maid.id, status);
    if (!order) return json({ error: "conflict" }, 409);
    return json({ order });
  });
}
