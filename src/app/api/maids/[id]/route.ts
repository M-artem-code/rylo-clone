import { getOpenMaid } from "@/lib/db";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  return guard(async () => {
    const { id } = await ctx.params;
    const maid = await getOpenMaid(id);
    if (!maid) return json({ error: "not_found" }, 404);
    return json({ maid });
  });
}
