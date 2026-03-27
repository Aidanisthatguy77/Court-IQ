import { Card } from "@/components/ui/Card";
import { plays } from "@/data/basketball";

export default function PlayEncyclopediaPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Play Encyclopedia</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {plays.map((play) => (
          <Card key={play.name} title={play.name}>
            <p className="text-sm text-slate-300"><span className="font-semibold text-white">What it is:</span> {play.what}</p>
            <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-white">Why it works:</span> {play.why}</p>
            <p className="mt-2 text-sm font-semibold text-white">Reads</p>
            <ul className="text-sm text-slate-300">{play.reads.map((x) => <li key={x}>• {x}</li>)}</ul>
            <p className="mt-2 text-sm font-semibold text-white">Mistakes</p>
            <ul className="text-sm text-slate-300">{play.mistakes.map((x) => <li key={x}>• {x}</li>)}</ul>
            <p className="mt-2 text-sm font-semibold text-white">Player responsibilities</p>
            <ul className="text-sm text-slate-300">{play.responsibilities.map((x) => <li key={x}>• {x}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
