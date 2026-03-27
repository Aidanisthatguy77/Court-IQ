import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { SignOutButton } from "@/components/admin/SignOutButton";

const adminModules = [
  ["Dashboard", "View app health, route status, content freshness, and usage flags."],
  ["Site Editor", "Edit plays, drills, and lingo entries via structured JSON-backed forms."],
  ["Feature Builder", "Create scaffolded feature pages and reusable component templates."],
  ["AI Coach Config", "Tune response structure, prompt templates, and behavior guardrails."],
  ["Test Center", "Run smoke checks for routes, data shape, and UI consistency."],
  ["Repair Center", "Apply common fixes for missing data keys or broken panel wiring."],
  ["Version History + Rollback", "Review snapshots and rollback to stable content states."]
];

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="rounded-2xl border border-court-line bg-court-panel p-5">
        <h1 className="text-3xl font-bold">Admin Control Center</h1>
        <p className="text-slate-400">Protected route. Access requires server-side authenticated session.</p>
        <div className="mt-3 flex gap-3">
          <Link href="/dashboard" className="inline-block rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 text-xs text-slate-200 hover:border-court-accent">Back to Player App</Link>
          <SignOutButton />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {adminModules.map(([name, description]) => (
          <Card key={name} title={name as string}>
            <p className="text-sm text-slate-300">{description}</p>
            <button className="mt-3 rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 text-xs hover:border-court-accent">Open Module</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
