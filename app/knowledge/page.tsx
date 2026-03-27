import { Card } from "@/components/ui/Card";
import { DailyCycleBar } from "@/components/layout/DailyCycleBar";
import { competitionLevels, universalPlaySupport, unknownPlayFlow } from "@/data/knowledge";

const coreSystem = [
  ["Before Practice", "Plan your role jobs, reads, and film checkpoints so you enter reps with clarity."],
  ["During Practice", "Decode live confusion fast: what happened, your responsibility, and best next decision."],
  ["After Practice", "Review mistakes without ego and convert them into clear next-session adjustments."]
] as const;

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <DailyCycleBar current="knowledge" />
      <section className="rounded-2xl border border-court-line bg-court-panel p-6">
        <h1 className="text-3xl font-bold">Knowledge Engine</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Court IQ is a private, dependable learning system for players who cannot rely on constant access, ranking perks, or extra coach time.
        </p>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        {coreSystem.map(([name, desc]) => (
          <Card key={name} title={name}><p className="text-sm text-slate-300">{desc}</p></Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Any Level Coverage">
          <div className="mb-3 flex flex-wrap gap-2">{competitionLevels.map((level) => <span key={level} className="rounded-full bg-court-panelSoft px-3 py-1 text-xs">{level}</span>)}</div>
          <ul className="text-sm text-slate-300">{universalPlaySupport.map((item) => <li key={item}>• {item}</li>)}</ul>
        </Card>

        <Card title="Unknown Play: Learn-on-the-Fly Pipeline">
          <p className="mb-2 text-sm text-slate-300">When nobody can explain a clip clearly, Court IQ runs this pipeline and teaches it in plain language.</p>
          <ul className="text-sm text-slate-300">{unknownPlayFlow.map((step) => <li key={step}>• {step}</li>)}</ul>
        </Card>
      </div>

      <Card title="What This Means For Under-Supported Players">
        <div className="grid gap-3 md:grid-cols-2 text-sm text-slate-300">
          <p><span className="font-semibold text-white">No special treatment needed:</span> you get structure, not favoritism.</p>
          <p><span className="font-semibold text-white">No private trainer required:</span> role jobs and reads are broken down clearly.</p>
          <p><span className="font-semibold text-white">No constant coach access needed:</span> use the system as your daily learning base.</p>
          <p><span className="font-semibold text-white">No guessing:</span> every session ties to clear decisions and film proof.</p>
        </div>
      </Card>

    </div>
  );
}
