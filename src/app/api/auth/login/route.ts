import { sessionCookie, verifyPassword } from "@/lib/auth";
import { createSession, findAuthByEmail } from "@/lib/db";
import { guard, json } from "@/lib/http";
import { isEmail } from "@/lib/profile";

export const dynamic = "force-dynamic";

export function POST(req: Request) {
  return guard(async () => {
    const body = (await req.json().catch(() => null)) as { email?: unknown; password?: unknown } | null;
    if (!body || !isEmail(body.email) || typeof body.password !== "string") return json({ error: "invalid" }, 400);
    const found = await findAuthByEmail(body.email);
    if (!found?.passwordHash || !verifyPassword(body.password, found.passwordHash)) {
      return json({ error: "unauthorized" }, 401);
    }
    const token = await createSession(found.maid.id);
    const res = json({ maid: found.maid });
    const cookie = sessionCookie(token);
    res.cookies.set(cookie.name, cookie.value, cookie.options);
    return res;
  });
}
