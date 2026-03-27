"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { DailyCycleBar } from "@/components/layout/DailyCycleBar";
import { lingoTerms } from "@/data/lingo";
import { coachScenarios, defaultCoachResponse, quickPrompts } from "@/data/coach";
import { competitionLevels, unknownPlayFlow } from "@/data/knowledge";
import { coachingPhilosophy, toneGuidance } from "@/data/philosophy";

type Tab = "Coach" | "Live Research" | "Lingo";
type PlayerRole = "PG" | "SG" | "SF" | "PF" | "C";

function selectScenario(prompt: string) {
  const normalized = prompt.toLowerCase();
  return coachScenarios.find((scenario) => scenario.trigger.some((token) => normalized.includes(token)));
}

export default function CoachPage() {
  const [tab, setTab] = useState<Tab>("Coach");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [latestPrompt, setLatestPrompt] = useState(quickPrompts[0]);
  const [role, setRole] = useState<PlayerRole>("PG");

  const filteredLingo = useMemo(() => lingoTerms.slice(0, 45), []);
  const scenario = useMemo(() => selectScenario(latestPrompt), [latestPrompt]);

  const submitPrompt = (prompt: string) => {
    if (!prompt.trim()) return;
    setHistory((h) => [prompt, ...h]);
    setLatestPrompt(prompt);
    setInput("");
  };

  const roleJob = scenario?.roleJobs[role] ?? "Keep spacing clean, communicate early, and make the next right pass on time.";

  return (
    <div className="space-y-6">
      <DailyCycleBar current="coach" />

      <div className="rounded-2xl border border-court-line bg-court-panel p-5">
        <h1 className="text-3xl font-bold">AI Coach</h1>
        <p className="mt-1 text-sm text-slate-300">A serious teaching system for players who may not get constant coach access but still want to master reads, role jobs, and decision timing.</p>
        <p className="mt-2 text-xs text-slate-400">{toneGuidance}</p>
      </div>

      <div className="flex gap-2">
        {(["Coach", "Live Research", "Lingo"] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-lg px-4 py-2 text-sm ${tab === t ? "bg-court-accent text-court-bg" : "bg-court-panelSoft text-slate-300"}`}>{t}</button>
        ))}
      </div>

      {tab === "Coach" && (
        <div className="grid gap-4 xl:grid-cols-[1fr,1.4fr]">
          <Card title="Ask Coach" subtitle="Tell the exact moment where you felt unsure in practice or games.">
            <div className="mb-3 flex flex-wrap gap-2">{(["PG", "SG", "SF", "PF", "C"] as PlayerRole[]).map((r) => <button key={r} onClick={() => setRole(r)} className={`rounded-full px-3 py-1 text-xs ${role === r ? "bg-court-accent text-court-bg" : "bg-court-panelSoft text-slate-300"}`}>{r}</button>)}</div>
            <div className="mb-4 flex flex-wrap gap-2">{quickPrompts.map((prompt) => <button key={prompt} onClick={() => submitPrompt(prompt)} className="rounded-full border border-court-line px-3 py-1 text-xs text-slate-300 hover:border-court-accent">{prompt}</button>)}</div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Example: I'm SF, weak-side corner in Spain. I keep lifting too early. What's my timing rule?" className="h-32 w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-sm outline-none focus:border-court-accent" />
            <button onClick={() => submitPrompt(input)} className="mt-3 rounded-lg bg-court-accent px-4 py-2 text-sm font-semibold text-court-bg">Get Coaching Breakdown</button>
            <div className="mt-4 rounded-lg border border-court-line bg-court-panelSoft p-3 text-xs text-slate-300">
              <p className="font-semibold text-white">Your selected role: {role}</p>
              <p className="mt-1">Role-specific focus: {roleJob}</p>
            </div>
          </Card>

          <Card title="Coach Breakdown" subtitle={scenario?.title ?? "Core Decision Framework"}>
            <div className="grid gap-3 text-sm text-slate-200">
              <section><h4 className="font-semibold text-white">1) What&apos;s happening</h4><p>{scenario?.explanation ?? defaultCoachResponse.explanation}</p></section>
              <section><h4 className="font-semibold text-white">2) What your job is ({role})</h4><p>{roleJob}</p><ul className="mt-1 space-y-1">{(scenario?.decisions ?? defaultCoachResponse.whatToDo).map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section><h4 className="font-semibold text-white">3) Why it matters</h4><p>When your role is clear, your decisions get faster, turnovers drop, and teammates trust your timing.</p></section>
              <section><h4 className="font-semibold text-white">4) Common mistakes</h4><ul className="space-y-1">{(scenario?.errors ?? defaultCoachResponse.commonMistakes).map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section><h4 className="font-semibold text-white">5) What to watch for on film</h4><ul className="space-y-1">{(scenario?.visualCues ?? defaultCoachResponse.whatToLookFor).map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section><h4 className="font-semibold text-white">6) Simple version</h4><p>Force help. Read help. Make the easiest pass on time.</p></section>
              <section><h4 className="font-semibold text-white">7) Advanced version</h4><ul className="space-y-1">{(scenario?.gameTeaching ?? ["Train read timing with constraints and clip review at decision point."]).map((x) => <li key={x}>• {x}</li>)}</ul></section>
            </div>
          </Card>
        </div>
      )}

      {tab === "Coach" && scenario && (
        <Card title="Specific Film Assignments" subtitle="Don’t just watch highlights—watch decisions.">
          <div className="grid gap-3 md:grid-cols-3">
            {scenario.filmSearchLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="rounded-lg border border-court-line bg-court-panelSoft p-3 text-sm hover:border-court-accent">
                <p className="font-semibold text-court-accent">{link.label}</p>
                <p className="mt-1 text-xs text-slate-400">Watch for: {link.watchFor}</p>
              </a>
            ))}
          </div>
        </Card>
      )}

      {tab === "Coach" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card title={coachingPhilosophy.title}><p className="mb-2 text-sm text-slate-300">{coachingPhilosophy.intro}</p><ul className="text-sm text-slate-300">{coachingPhilosophy.commitments.slice(0, 4).map((i) => <li key={i}>• {i}</li>)}</ul></Card>
          <Card title="Any Level Coverage + Unknown Play Flow"><div className="mb-2 flex flex-wrap gap-2">{competitionLevels.map((l) => <span key={l} className="rounded-full bg-court-panelSoft px-3 py-1 text-xs">{l}</span>)}</div><ul className="text-sm text-slate-300">{unknownPlayFlow.slice(0, 4).map((s) => <li key={s}>• {s}</li>)}</ul></Card>
        </div>
      )}

      {tab === "Live Research" && (
        <Card title="Live Research" subtitle="Use this when you need reliable examples and nobody is around to explain it.">
          <div className="grid gap-3 md:grid-cols-2">
            {[["YouTube", "search full possessions + coverage name"],["Twitter/X", "search coach clips and clinic threads"],["Reddit", "search detailed breakdown discussions"],["TikTok", "search short technique clips"],["Hudl", "review team-specific film tendencies"]].map(([platform, tip]) => (
              <div key={platform} className="rounded-lg border border-court-line bg-court-panelSoft p-3"><p className="font-semibold">{platform}</p><p className="text-xs text-slate-400">{tip}</p></div>
            ))}
          </div>
        </Card>
      )}

      {tab === "Lingo" && (
        <Card title="Basketball Lingo" subtitle="Plain language first, advanced context second.">
          <div className="grid gap-3 md:grid-cols-2">{filteredLingo.map((term) => <div key={term.term} className="rounded-lg border border-court-line bg-court-panelSoft p-3"><h4 className="font-semibold text-white">{term.term}</h4><p className="text-sm text-slate-300">{term.definition}</p><p className="mt-1 text-xs text-slate-400">{term.context}</p></div>)}</div>
        </Card>
      )}
    </div>
  );
}
