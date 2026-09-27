import { SESSION_COOKIE, clearSessionCookie } from "@/lib/auth";
import { guard, json } from "@/lib/http";

export const dynamic = "force-dynamic";

export function POST() {
  return guard(async () => {
    await clearSessionCookie();
    const res = json({ ok: true });
    res.cookies.set(SESSION_COOKIE, "", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });
    return res;
  });
}
