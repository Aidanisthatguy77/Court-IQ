import { Card } from "@/components/ui/Card";
import { defensiveSystems } from "@/data/basketball";

export default function DefensePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Defensive Systems</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {defensiveSystems.map((system) => (
          <Card key={system.name} title={system.name}>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Description:</span> {system.description}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">When used:</span> {system.when}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Strengths:</span> {system.strengths}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">Weaknesses:</span> {system.weaknesses}</p>
            <ul className="mt-2 text-sm text-slate-300">{system.responsibilities.map((x) => <li key={x}>• {x}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
