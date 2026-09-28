import { createMaid, createSession } from "@/lib/db";
import { hashPassword, sessionCookie } from "@/lib/auth";
import { guard, json } from "@/lib/http";
import { isEmail, parseShop } from "@/lib/profile";

export const dynamic = "force-dynamic";

export function POST(req: Request) {
  return guard(async () => {
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || !isEmail(body.email) || typeof body.password !== "string") return json({ error: "invalid" }, 400);
    if (body.password.length < 6 || body.password.length > 72) return json({ error: "invalid" }, 400);
    const shop = parseShop(body);
    if (!shop) return json({ error: "invalid" }, 400);
    try {
      const maid = await createMaid({
        email: body.email,
        passwordHash: hashPassword(body.password),
        ...shop,
      });
      const token = await createSession(maid.id);
      const res = json({ maid });
      const cookie = sessionCookie(token);
      res.cookies.set(cookie.name, cookie.value, cookie.options);
      return res;
    } catch (error) {
      const pg = error as { code?: string };
      if (pg.code === "23505") return json({ error: "email_taken" }, 409);
      throw error;
    }
  });
}
