import { Card } from "@/components/ui/Card";

const adminModules = [
  ["Dashboard", "View app health, route status, content freshness, and usage flags."],
  ["Site Editor", "Edit plays, drills, and lingo entries via structured JSON-backed forms."],
  ["Feature Builder", "Create scaffolded feature pages and reusable component templates."],
  ["AI Coach Config", "Tune response structure, prompt templates, and behavior guardrails."],
  ["Test Center", "Run smoke checks for routes, data shape, and UI consistency."],
  ["Repair Center", "Apply common fixes for missing data keys or broken panel wiring."],
  ["Version History + Rollback", "Review snapshots and rollback to stable content states."]
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Control Center</h1>
      <p className="text-slate-400">Private control system for platform operations and configuration.</p>
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
