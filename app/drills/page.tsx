import { Card } from "@/components/ui/Card";
import { drills } from "@/data/basketball";

export default function DrillsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Drill Library</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {drills.map((drill) => (
          <Card key={drill.name} title={drill.name} subtitle={drill.category}>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Goal:</span> {drill.goal}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Setup:</span> {drill.setup}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Reps:</span> {drill.reps}</p>
            <ul className="mt-2 text-sm text-slate-300">{drill.points.map((x) => <li key={x}>• {x}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
