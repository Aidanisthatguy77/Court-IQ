import { Card } from "@/components/ui/Card";
import { mockPlayer } from "@/data/player";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Player Profile</h1>
      <Card title={mockPlayer.name} subtitle={`${mockPlayer.position} • ${mockPlayer.height} • ${mockPlayer.weight}`}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold text-slate-100">Skill Level</h4>
            <p className="text-slate-300">{mockPlayer.skillLevel}</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-slate-100">Return-to-Play Stage</h4>
            <p className="text-slate-300">{mockPlayer.returnToPlayStage}</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Strengths</h4>
            <ul className="text-sm text-slate-300">{mockPlayer.strengths.map((i) => <li key={i}>• {i}</li>)}</ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Weaknesses</h4>
            <ul className="text-sm text-slate-300">{mockPlayer.weaknesses.map((i) => <li key={i}>• {i}</li>)}</ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Goals</h4>
            <ul className="text-sm text-slate-300">{mockPlayer.goals.map((i) => <li key={i}>• {i}</li>)}</ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Injury History</h4>
            <ul className="text-sm text-slate-300">{mockPlayer.injuryHistory.map((i) => <li key={i}>• {i}</li>)}</ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
