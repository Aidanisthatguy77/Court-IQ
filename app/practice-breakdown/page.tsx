"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

const analysis = {
  playName: "Spain Twist",
  type: "Spain Pick-and-Roll",
  purpose: "Force the tag defender into a two-choice conflict: roller or popper.",
  defensiveCoverage: "Switch + late peel",
  primaryReads: ["Low man tag timing", "Backscreener defender top-lock", "Roller pocket lane"],
  secondaryReads: ["Shake lift to slot", "Ghost into re-screen if switch is early"],
  mistakes: ["Backscreen too early", "No corner spacing depth", "Skipping weak-side timing call"],
  whyItMatters: "This action creates predictable reads under pressure and helps guards make fast, repeatable decisions.",
  specificAction: "As the 1, engage hip of on-ball defender, keep live dribble to foul line, hit roller if low man is late; skip if tag is loaded.",
  roles: [
    "1 (PG): set pace, force defender over, read low man before second dribble",
    "2: backscreen roller defender then pop to arc with hands ready",
    "3: weak-side shake to passing window and one-more relay",
    "4: set screen, sprint roll to front of rim",
    "5: hold corner or dunker to occupy rim help"
  ],
  film: [
    "https://www.youtube.com/results?search_query=spain+pick+and+roll+breakdown",
    "https://www.youtube.com/results?search_query=horns+twist+basketball+film"
  ]
};

export default function PracticeBreakdownPage() {
  const [videoLink, setVideoLink] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Practice Breakdown / Play Recognition</h1>
      <div className="grid gap-4 lg:grid-cols-[1.1fr,1fr,1.2fr]">
        <Card title="Video Panel" subtitle="Upload clip (mock) or paste video link.">
          <input type="file" className="mb-3 block w-full text-sm text-slate-400" />
          <input value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Paste Hudl/YouTube link" className="w-full rounded-lg border border-court-line bg-court-panelSoft p-2 text-sm" />
          <p className="mt-2 text-xs text-slate-400">Linked video: {videoLink || "No link provided"}</p>
        </Card>
        <Card title="Notes Panel" subtitle="Type exactly what happened.">
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="h-52 w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-sm" placeholder="Example: We ran horns twist, weak-side tag was early, I missed shake pass..." />
        </Card>
        <Card title="AI Analysis Panel" subtitle="Action-level feedback with 5-spot clarity.">
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Play:</span> {analysis.playName}</p>
            <p><span className="font-semibold">Type:</span> {analysis.type}</p>
            <p><span className="font-semibold">Offensive purpose:</span> {analysis.purpose}</p>
            <p><span className="font-semibold">Defensive coverage:</span> {analysis.defensiveCoverage}</p>
            <p><span className="font-semibold">Why it matters:</span> {analysis.whyItMatters}</p>
            <p><span className="font-semibold">What you should do:</span> {analysis.specificAction}</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Primary + Secondary Reads">
          <h4 className="mb-1 font-semibold">Primary Reads</h4>
          <ul className="mb-3 text-sm text-slate-300">{analysis.primaryReads.map((x) => <li key={x}>• {x}</li>)}</ul>
          <h4 className="mb-1 font-semibold">Secondary Reads</h4>
          <ul className="text-sm text-slate-300">{analysis.secondaryReads.map((x) => <li key={x}>• {x}</li>)}</ul>
        </Card>
        <Card title="Player Roles (1–5)">
          <ul className="text-sm text-slate-300">{analysis.roles.map((x) => <li key={x}>• {x}</li>)}</ul>
        </Card>
      </div>

      <Card title="Common Mistakes + Film Study Links">
        <ul className="mb-4 text-sm text-slate-300">{analysis.mistakes.map((x) => <li key={x}>• {x}</li>)}</ul>
        <div className="flex flex-wrap gap-3">
          {analysis.film.map((url) => <a key={url} href={url} target="_blank" rel="noreferrer" className="rounded-lg border border-court-line px-3 py-2 text-xs text-court-accent">Film Search</a>)}
        </div>
      </Card>
    </div>
  );
}
