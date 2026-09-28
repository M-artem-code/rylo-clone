import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

import { deleteSession, getMaidBySession } from "./db";

export const SESSION_COOKIE = "gornich_session";
const MONTH = 60 * 60 * 24 * 30;

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const next = scryptSync(password, salt, 32);
  const prev = Buffer.from(hash, "hex");
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
}

export function sessionCookie(token: string, maxAge = MONTH) {
  return {
    name: SESSION_COOKIE,
    value: token,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge,
    },
  };
}

export async function readSessionMaid() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return getMaidBySession(token);
}

export async function clearSessionCookie() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) await deleteSession(token);
  return token;
}
