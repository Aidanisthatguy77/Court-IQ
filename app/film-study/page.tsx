import { Card } from "@/components/ui/Card";

const sections = [
  ["What to Watch", ["Who creates first advantage?", "Where is low man before drive?", "How fast does defense rotate on paint touch?"]],
  ["Spacing", ["Check slot depth and corner discipline", "Identify if dunker spot occupies rim help", "Track timing of lift/replace movements"]],
  ["Reads", ["Call primary and secondary read before replay", "Find decision window timing", "Note pass type and target accuracy"]],
  ["Help Defense", ["Locate nail and low man each possession", "Measure stunt-recover quality", "Watch closeout control"]],
  ["Rotations", ["Do weak-side defenders x-out correctly?", "Does team scram mismatches?", "Who misses final box out?"]]
];

export default function FilmStudyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Film Study Guide</h1>
      <p className="text-sm text-slate-400">If film has felt confusing, start here. We break down what to look for in plain language and then in advanced reads.</p>
      <div className="grid gap-4 lg:grid-cols-2">
        {sections.map(([title, bullets]) => (
          <Card key={title} title={title as string}>
            <ul className="text-sm text-slate-300">{(bullets as string[]).map((item) => <li key={item}>• {item}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
