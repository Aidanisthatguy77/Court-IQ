import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { dashboardData } from "@/data/basketball";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-slate-400">Your daily operating center for decisions, recovery, and basketball IQ growth.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Today's Focus"><p className="text-slate-200">{dashboardData.focus}</p></Card>
        <Card title="Recommended Concept"><p className="text-slate-200">{dashboardData.recommendedConcept}</p></Card>
        <Card title="Recovery Status"><p className="text-court-success">{dashboardData.recoveryStatus}</p></Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Practice Plan Preview">
          <ul className="space-y-2 text-sm text-slate-300">
            {dashboardData.practicePreview.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </Card>
        <Card title="Quick Access" className="space-y-3">
          <Link className="block rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 hover:border-court-accent" href="/coach">Open AI Coach</Link>
          <Link className="block rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 hover:border-court-accent" href="/practice-breakdown">Run Practice Breakdown</Link>
          <Link className="block rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 hover:border-court-accent" href="/recovery">Update Recovery Log</Link>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="IQ Progress">
          <div className="mb-2 h-3 rounded-full bg-court-panelSoft">
            <div className="h-3 rounded-full bg-court-accent" style={{ width: `${dashboardData.iqProgress}%` }} />
          </div>
          <p className="text-sm text-slate-300">{dashboardData.iqProgress}% concept mastery this cycle.</p>
        </Card>
        <Card title="Saved Topics">
          <div className="flex flex-wrap gap-2">
            {dashboardData.savedTopics.map((topic) => <span key={topic} className="rounded-full bg-court-panelSoft px-3 py-1 text-xs">{topic}</span>)}
          </div>
        </Card>
      </div>
    </div>
  );
}
