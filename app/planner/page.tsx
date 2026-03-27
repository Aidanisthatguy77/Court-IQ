"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";

export default function PlannerPage() {
  const [minutes, setMinutes] = useState(90);
  const [goal, setGoal] = useState("Decision-making in PnR");
  const [recovery, setRecovery] = useState("Managed");

  const plan = useMemo(() => {
    const warmup = Math.round(minutes * 0.15);
    const skill = Math.round(minutes * 0.4);
    const iq = Math.round(minutes * 0.25);
    const cooldown = minutes - warmup - skill - iq;
    return [
      `${warmup} min prep and movement quality`,
      `${skill} min primary skill block: ${goal}`,
      `${iq} min guided reads + film transfer`,
      `${cooldown} min recovery closeout (${recovery})`
    ];
  }, [minutes, goal, recovery]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Practice Planner</h1>
      <Card title="Build Daily Workout">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="text-sm">Available time (min)<input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="mt-1 w-full rounded border border-court-line bg-court-panelSoft p-2" /></label>
          <label className="text-sm">Goal<input value={goal} onChange={(e) => setGoal(e.target.value)} className="mt-1 w-full rounded border border-court-line bg-court-panelSoft p-2" /></label>
          <label className="text-sm">Recovery status<select value={recovery} onChange={(e) => setRecovery(e.target.value)} className="mt-1 w-full rounded border border-court-line bg-court-panelSoft p-2"><option>Green</option><option>Managed</option><option>Restricted</option></select></label>
        </div>
        <ul className="mt-4 text-sm text-slate-300">{plan.map((step) => <li key={step}>• {step}</li>)}</ul>
      </Card>
    </div>
  );
}
