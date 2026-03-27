"use client";

import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch("/api/admin-auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      className="inline-block rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 text-xs text-slate-200 hover:border-court-accent"
    >
      Sign Out
    </button>
  );
}
