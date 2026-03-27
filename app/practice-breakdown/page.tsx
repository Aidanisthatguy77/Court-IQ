"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { DailyCycleBar } from "@/components/layout/DailyCycleBar";
import { practiceActions } from "@/data/practice";

const termDefinitions = [
  ["Tag", "Helper stepping toward the roller to stop the rim pass."],
  ["Shake", "Weak-side lift from corner to slot to open a safe passing lane."],
  ["Spain", "Ball screen + backscreen on the screener's defender."],
  ["Ghost", "Fake screen that slips early before contact."],
  ["Nail", "Middle free-throw area where help defenders stunt."],
  ["Slot", "Perimeter area between top and wing above the break."]
] as const;

type Spot = "1" | "2" | "3" | "4" | "5";

export default function PracticeBreakdownPage() {
  const [videoLink, setVideoLink] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedAction, setSelectedAction] = useState(practiceActions[0].key);
  const [spot, setSpot] = useState<Spot>("1");

  const analysis = useMemo(
    () => practiceActions.find((action) => action.key === selectedAction) ?? practiceActions[0],
    [selectedAction]
  );

  return (
    <div className="space-y-6">
      <DailyCycleBar current="practice-breakdown" />
      <div className="rounded-2xl border border-court-line bg-court-panel p-5">
        <h1 className="text-3xl font-bold">Practice Breakdown / Play Recognition</h1>
        <p className="mt-1 text-sm text-slate-300">This is where confusion gets turned into clear role jobs, read order, and correction points for your next rep.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr,1fr,1.2fr]">
        <Card title="Input + Context" subtitle="Upload clip (mock), paste link, and choose your action.">
          <input type="file" className="mb-3 block w-full text-sm text-slate-400" />
          <input value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Paste Hudl/YouTube link" className="w-full rounded-lg border border-court-line bg-court-panelSoft p-2 text-sm" />
          <label className="mt-3 block text-sm">Action
            <select value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)} className="mt-1 w-full rounded-lg border border-court-line bg-court-panelSoft p-2 text-sm">
              {practiceActions.map((action) => <option key={action.key} value={action.key}>{action.name}</option>)}
            </select>
          </label>
          <label className="mt-3 block text-sm">Your spot in this action
            <select value={spot} onChange={(e) => setSpot(e.target.value as Spot)} className="mt-1 w-full rounded-lg border border-court-line bg-court-panelSoft p-2 text-sm">
              {(["1", "2", "3", "4", "5"] as Spot[]).map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        </Card>

        <Card title="Practice Notes" subtitle="Describe the exact moment you felt unsure.">
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="h-64 w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-sm" placeholder="Example: On second dribble the low man tagged and I didn't know if I should pocket pass or skip." />
          <p className="mt-3 text-xs text-slate-400">Best notes include: coverage, help location, your decision, and result.</p>
        </Card>

        <Card title="Core Breakdown" subtitle="What is happening + your exact job.">
          <div className="space-y-2 text-sm text-slate-200">
            <p><span className="font-semibold">Action:</span> {analysis.name}</p>
            <p><span className="font-semibold">Type:</span> {analysis.type}</p>
            <p><span className="font-semibold">What is happening:</span> {analysis.offensivePurpose}</p>
            <p><span className="font-semibold">Coverage faced:</span> {analysis.defensiveCoverage}</p>
            <p><span className="font-semibold">Your job ({spot}-spot):</span> {analysis.roleFocus[spot]}</p>
            <p><span className="font-semibold">Why coaches teach it this way:</span> {analysis.whyItMatters}</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card title="All 5 Players: Clear Responsibilities">
          <div className="grid gap-2 md:grid-cols-2">
            {(Object.keys(analysis.fiveSpots) as Spot[]).map((s) => (
              <div key={s} className={`rounded-lg border p-3 text-sm ${spot === s ? "border-court-accent bg-court-accent/10" : "border-court-line bg-court-panelSoft"}`}>
                <p className="font-semibold text-white">{s}-Spot</p>
                <p className="text-slate-300">{analysis.fiveSpots[s]}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Plain Language + Term Guide">
          <p className="mb-2 text-sm text-slate-300">Simple version: force defenders to choose, then make the easiest accurate pass before they recover.</p>
          <ul className="text-sm text-slate-300">{termDefinitions.map(([term, def]) => <li key={term}>• <span className="font-semibold">{term}:</span> {def}</li>)}</ul>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card title="Read Sequence">
          <h4 className="mb-1 font-semibold">Primary reads</h4>
          <ul className="mb-3 text-sm text-slate-300">{analysis.primaryReads.map((x) => <li key={x}>• {x}</li>)}</ul>
          <h4 className="mb-1 font-semibold">Secondary reads</h4>
          <ul className="mb-3 text-sm text-slate-300">{analysis.secondaryReads.map((x) => <li key={x}>• {x}</li>)}</ul>
          <h4 className="mb-1 font-semibold">Common mistakes</h4>
          <ul className="text-sm text-slate-300">{analysis.commonMistakes.map((x) => <li key={x}>• {x}</li>)}</ul>
        </Card>

        <Card title="Specific Film Assignments" subtitle="Watch for decisions, not just makes.">
          <div className="space-y-3">
            {analysis.filmLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="block rounded-lg border border-court-line bg-court-panelSoft p-3 hover:border-court-accent">
                <p className="font-semibold text-court-accent">{link.label}</p>
                <p className="mt-1 text-xs text-slate-400">Watch for: {link.watchFor}</p>
              </a>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Use This Before / During / After Practice">
        <div className="grid gap-3 md:grid-cols-3 text-sm text-slate-300">
          <p><span className="font-semibold text-white">Before:</span> pick action + spot and study your job so first rep is intentional.</p>
          <p><span className="font-semibold text-white">During:</span> log confusion moments fast so you can adjust within the same session.</p>
          <p><span className="font-semibold text-white">After:</span> review mistakes and film assignments so next practice starts clearer.</p>
        </div>
      </Card>

    </div>
  );
}
