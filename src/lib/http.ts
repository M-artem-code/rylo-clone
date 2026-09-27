import { NextResponse } from "next/server";

export function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

export async function guard(fn: () => Promise<Response>) {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof Error && error.message === "no_database") {
      return json({ error: "no_database" }, 503);
    }
    console.error(error);
    return json({ error: "server" }, 500);
  }
}
