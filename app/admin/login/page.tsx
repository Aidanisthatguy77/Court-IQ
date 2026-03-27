"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter admin password to continue.");
  const [attemptsRemaining, setAttemptsRemaining] = useState(7);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const locked = useMemo(() => Boolean(lockUntil && Date.now() < lockUntil), [lockUntil]);
  const minutesLeft = useMemo(() => {
    if (!lockUntil) return 0;
    return Math.max(1, Math.ceil((lockUntil - Date.now()) / 60000));
  }, [lockUntil]);

  const onSubmit = async () => {
    if (locked || loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/admin-auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await res.json();

      if (data.ok) {
        setMessage("Access granted.");
        setPassword("");
        router.push("/admin");
        router.refresh();
        return;
      }

      setMessage(data.message ?? "Login failed.");
      setAttemptsRemaining(data.attemptsRemaining ?? attemptsRemaining);
      setLockUntil(data.lockUntil ?? null);
      setPassword("");
    } catch {
      setMessage("Unable to reach auth service. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-lg space-y-4">
      <Card title="Admin Access" subtitle="Private route. Direct access only via /admin/login.">
        <p className="mb-3 text-sm text-slate-300">7 attempts max. After 7 failed attempts, access is locked for 60 minutes.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit()}
          disabled={locked || loading}
          className="w-full rounded-lg border border-court-line bg-court-panelSoft p-2 text-sm"
          placeholder="Enter admin password"
        />
        <button
          onClick={onSubmit}
          disabled={locked || loading}
          className="mt-3 rounded-lg bg-court-accent px-4 py-2 text-sm font-semibold text-court-bg disabled:opacity-50"
        >
          {loading ? "Checking..." : "Unlock Admin"}
        </button>
        <p className="mt-3 text-xs text-slate-400">{message}</p>
        {locked && <p className="mt-1 text-xs text-court-danger">Locked for {minutesLeft} more minute(s).</p>}
        <p className="mt-2 text-xs text-slate-400">Attempts remaining: {attemptsRemaining}</p>
        <Link href="/dashboard" className="mt-3 inline-block text-xs text-court-accent underline">Back to Player App</Link>
      </Card>
    </div>
  );
}
