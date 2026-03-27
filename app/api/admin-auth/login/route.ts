import { NextResponse } from "next/server";
import { ADMIN_COOKIE, LOCKOUT_MS, processLoginAttempt, getClientKey } from "@/lib/adminAuth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const password = typeof body.password === "string" ? body.password : "";
  const clientKey = getClientKey(req.headers);
  const result = processLoginAttempt(clientKey, password);

  if (!result.configured) {
    return NextResponse.json(
      { ok: false, message: "Admin auth is not configured on the server (set ADMIN_PASSWORD or ADMIN_PASSWORD_HASH and ADMIN_AUTH_SECRET)." },
      { status: 500 }
    );
  }

  if (!result.ok) {
    const message =
      result.reason === "locked"
        ? "Too many failed attempts. Locked for 60 minutes."
        : `Incorrect password. ${result.attemptsRemaining} attempt(s) remaining.`;
    return NextResponse.json(
      {
        ok: false,
        message,
        attemptsRemaining: result.attemptsRemaining,
        lockUntil: result.lockUntil
      },
      { status: result.reason === "locked" ? 429 : 401 }
    );
  }

  const response = NextResponse.json({ ok: true, message: "Access granted." });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: result.token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: LOCKOUT_MS,
    path: "/"
  });

  return response;
}
