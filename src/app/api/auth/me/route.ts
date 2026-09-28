import { readSessionMaid } from "@/lib/auth";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET() {
  return guard(async () => {
    const maid = await readSessionMaid();
    if (!maid) return json({ error: "unauthorized" }, 401);
    return json({ maid });
  });
}
