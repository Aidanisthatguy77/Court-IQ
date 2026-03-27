import { createHmac, scryptSync, timingSafeEqual } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";

export const MAX_ATTEMPTS = 7;
export const LOCKOUT_MS = 60 * 60 * 1000;
export const ADMIN_COOKIE = "court_iq_admin_session";

interface AttemptRecord {
  attempts: number;
  lockUntil: number | null;
}

interface AttemptStore {
  attemptsByClient: Record<string, AttemptRecord>;
}

const STORE_PATH = join(process.cwd(), ".court-iq", "admin-auth.json");

function ensureStore(): void {
  const dir = dirname(STORE_PATH);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(STORE_PATH)) {
    const initial: AttemptStore = { attemptsByClient: {} };
    writeFileSync(STORE_PATH, JSON.stringify(initial), "utf8");
  }
}

function loadStore(): AttemptStore {
  ensureStore();
  try {
    const raw = readFileSync(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as AttemptStore;
    return parsed?.attemptsByClient ? parsed : { attemptsByClient: {} };
  } catch {
    return { attemptsByClient: {} };
  }
}

function saveStore(store: AttemptStore): void {
  ensureStore();
  writeFileSync(STORE_PATH, JSON.stringify(store), "utf8");
}

function base64UrlEncode(input: string): string {
  return Buffer.from(input).toString("base64url");
}

function base64UrlDecode(input: string): string {
  return Buffer.from(input, "base64url").toString("utf8");
}

function sign(input: string): string | null {
  const secret = process.env.ADMIN_AUTH_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret).update(input).digest("base64url");
}

export function getClientKey(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown-ip";
  const userAgent = headers.get("user-agent") ?? "unknown-agent";
  return `${forwardedFor}:${userAgent}`;
}

export function getAttemptRecord(clientKey: string): AttemptRecord {
  const store = loadStore();
  const current = store.attemptsByClient[clientKey] ?? { attempts: 0, lockUntil: null };
  if (current.lockUntil && Date.now() >= current.lockUntil) {
    const reset = { attempts: 0, lockUntil: null };
    store.attemptsByClient[clientKey] = reset;
    saveStore(store);
    return reset;
  }
  return current;
}

function setAttemptRecord(clientKey: string, record: AttemptRecord): void {
  const store = loadStore();
  store.attemptsByClient[clientKey] = record;
  saveStore(store);
}

function verifyWithHash(password: string, hashValue: string): boolean {
  const [salt, expected] = hashValue.split(":");
  if (!salt || !expected) return false;
  const derived = scryptSync(password, salt, 64).toString("hex");
  const derivedBuf = Buffer.from(derived, "hex");
  const expectedBuf = Buffer.from(expected, "hex");
  if (derivedBuf.length !== expectedBuf.length) return false;
  return timingSafeEqual(derivedBuf, expectedBuf);
}

export function verifyAdminPassword(password: string): { ok: boolean; configured: boolean } {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (hash) {
    return { ok: verifyWithHash(password, hash), configured: true };
  }

  const plaintext = process.env.ADMIN_PASSWORD;
  if (!plaintext) return { ok: false, configured: false };

  const input = Buffer.from(password);
  const expected = Buffer.from(plaintext);
  if (input.length !== expected.length) return { ok: false, configured: true };
  return { ok: timingSafeEqual(input, expected), configured: true };
}

export function createSessionToken(): { token: string | null; configured: boolean } {
  const now = Date.now();
  const payload = {
    sub: "court-iq-admin",
    iat: now,
    exp: now + LOCKOUT_MS
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(encodedPayload);
  if (!signature) return { token: null, configured: false };
  return { token: `${encodedPayload}.${signature}`, configured: true };
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payloadPart, signaturePart] = token.split(".");
  if (!payloadPart || !signaturePart) return false;
  const expectedSig = sign(payloadPart);
  if (!expectedSig) return false;
  const a = Buffer.from(signaturePart);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length) return false;
  if (!timingSafeEqual(a, b)) return false;

  try {
    const payload = JSON.parse(base64UrlDecode(payloadPart)) as { exp?: number };
    return Boolean(payload.exp && Date.now() < payload.exp);
  } catch {
    return false;
  }
}

export function processLoginAttempt(clientKey: string, password: string) {
  const record = getAttemptRecord(clientKey);
  if (record.lockUntil && Date.now() < record.lockUntil) {
    return {
      ok: false,
      reason: "locked" as const,
      attemptsRemaining: 0,
      lockUntil: record.lockUntil,
      configured: true
    };
  }

  const verification = verifyAdminPassword(password);
  const hasAuthSecret = Boolean(process.env.ADMIN_AUTH_SECRET);
  if (!verification.configured || !hasAuthSecret) {
    return {
      ok: false,
      reason: "not_configured" as const,
      attemptsRemaining: MAX_ATTEMPTS,
      lockUntil: null,
      configured: false
    };
  }

  if (verification.ok) {
    setAttemptRecord(clientKey, { attempts: 0, lockUntil: null });
    const tokenResult = createSessionToken();
    if (!tokenResult.configured || !tokenResult.token) {
      return {
        ok: false,
        reason: "not_configured" as const,
        attemptsRemaining: MAX_ATTEMPTS,
        lockUntil: null,
        configured: false
      };
    }
    return {
      ok: true,
      token: tokenResult.token,
      attemptsRemaining: MAX_ATTEMPTS,
      lockUntil: null,
      configured: true
    };
  }

  const nextAttempts = record.attempts + 1;
  if (nextAttempts >= MAX_ATTEMPTS) {
    const lockUntil = Date.now() + LOCKOUT_MS;
    setAttemptRecord(clientKey, { attempts: MAX_ATTEMPTS, lockUntil });
    return {
      ok: false,
      reason: "locked" as const,
      attemptsRemaining: 0,
      lockUntil,
      configured: true
    };
  }

  setAttemptRecord(clientKey, { attempts: nextAttempts, lockUntil: null });
  return {
    ok: false,
    reason: "invalid" as const,
    attemptsRemaining: MAX_ATTEMPTS - nextAttempts,
    lockUntil: null,
    configured: true
  };
}
