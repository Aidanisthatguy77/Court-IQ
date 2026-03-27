"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { injuryCategories, liveResearchMock, specialistLenses } from "@/data/recovery";

const sliderFields = ["pain", "soreness", "swelling", "stiffness", "instability", "confidence", "sleep", "tolerance"] as const;

type SliderKey = (typeof sliderFields)[number];

export default function RecoveryPage() {
  const [bodyArea, setBodyArea] = useState("knee");
  const [injuryName, setInjuryName] = useState("Patellar tendon irritation");
  const [onset, setOnset] = useState("Gradual over 3 weeks");
  const [severity, setSeverity] = useState(4);
  const [trainingStatus, setTrainingStatus] = useState("Modified full-court reps");
  const [goals, setGoals] = useState("Return to unrestricted PnR reps with stable pain <= 2/10");
  const [timeline, setTimeline] = useState("Week 2 of stage-based reload");
  const [factors, setFactors] = useState("Worse after repeated hard decels. Better with isometric prep and reduced jump volume.");
  const [metrics, setMetrics] = useState<Record<SliderKey, number>>({ pain: 4, soreness: 5, swelling: 1, stiffness: 3, instability: 2, confidence: 6, sleep: 7, tolerance: 6 });

  const confidenceColor = useMemo(() => (metrics.confidence < 5 ? "text-court-warning" : "text-court-success"), [metrics.confidence]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recovery + Injury Intelligence Mode</h1>
        <p className="mt-2 max-w-4xl text-sm text-slate-300">
          Education and decision-support only. Court IQ does not diagnose injuries and is not a substitute for licensed medical professionals.
          Use this system to track symptoms, understand return-to-play principles, and prepare better clinical conversations with calm, clear language.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="1) Injury Overview Panel">
          <div className="grid gap-3 text-sm">
            <label className="grid gap-1">Injury name or suspected issue<input value={injuryName} onChange={(e) => setInjuryName(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
            <label className="grid gap-1">Body area<select value={bodyArea} onChange={(e) => setBodyArea(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2">{injuryCategories.map((x) => <option key={x}>{x}</option>)}</select></label>
            <label className="grid gap-1">Symptom onset<input value={onset} onChange={(e) => setOnset(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
            <label className="grid gap-1">Severity slider: {severity}/10<input type="range" min={0} max={10} value={severity} onChange={(e) => setSeverity(Number(e.target.value))} /></label>
            <label className="grid gap-1">Training status<input value={trainingStatus} onChange={(e) => setTrainingStatus(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
            <label className="grid gap-1">Current goals<textarea value={goals} onChange={(e) => setGoals(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
            <label className="grid gap-1">Recovery timeline notes<textarea value={timeline} onChange={(e) => setTimeline(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
          </div>
        </Card>

        <Card title="2) Symptom / Recovery Log" subtitle="Track trends without diagnosis. Uncertainty is normal during recovery; this log helps you make safer decisions.">
          <div className="grid gap-2">
            {sliderFields.map((field) => (
              <label key={field} className="text-sm capitalize">{field}: {metrics[field]}/10
                <input type="range" min={0} max={10} value={metrics[field]} onChange={(e) => setMetrics((m) => ({ ...m, [field]: Number(e.target.value) }))} className="w-full" />
              </label>
            ))}
          </div>
          <label className="mt-3 grid gap-1 text-sm">What made it better or worse<textarea value={factors} onChange={(e) => setFactors(e.target.value)} className="rounded border border-court-line bg-court-panelSoft p-2" /></label>
          <p className={`mt-3 text-sm ${confidenceColor}`}>Movement confidence trend: {metrics.confidence >= 7 ? "Building" : metrics.confidence >= 5 ? "Mixed" : "Low - adjust load and seek guidance"}</p>
        </Card>
      </div>

      <Card title="3) Live Expertise Panel" subtitle="Medical research and education (not diagnosis). Built to inform, not alarm.">
        <p className="text-sm text-slate-300">Summary of current guidance: {liveResearchMock.summary}</p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Activity modification suggestions</h4>
            <ul className="text-sm text-slate-300">{liveResearchMock.activityMods.map((x) => <li key={x}>• {x}</li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold">Questions to ask a clinician</h4>
            <ul className="text-sm text-slate-300">{liveResearchMock.clinicianQuestions.map((x) => <li key={x}>• {x}</li>)}</ul>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-court-warning/50 bg-court-warning/10 p-3">
          <h4 className="font-semibold text-court-warning">Red flags / when to seek care</h4>
          <ul className="text-sm text-slate-200">{liveResearchMock.redFlags.map((x) => <li key={x}>• {x}</li>)}</ul>
        </div>
        <p className="mt-3 text-xs text-slate-400">Last refresh: {new Date(liveResearchMock.refreshedAt).toUTCString()}</p>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {liveResearchMock.sources.map((source) => (
            <div key={source.name} className="rounded-lg border border-court-line bg-court-panelSoft p-2 text-xs">
              <p className="font-semibold">{source.name}</p>
              <p className="text-slate-400">{source.type}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="4) Return-to-Play Guidance">
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Stage 1: symptom calm + baseline mobility restore.</li>
            <li>• Stage 2: controlled strength and landing mechanics.</li>
            <li>• Stage 3: non-contact basketball patterns with monitored load.</li>
            <li>• Stage 4: controlled contact + role-based practice minutes.</li>
            <li>• Stage 5: unrestricted training once objective criteria and clinician clearance align.</li>
          </ul>
          <p className="mt-3 text-sm text-slate-300">Regression triggers: symptom spike >2 points for 24h, instability episode, sleep drop with rising soreness, or decreased movement confidence.</p>
        </Card>
        <Card title="6) Specialist Lens">
          <div className="space-y-3 text-sm">
            {specialistLenses.map((lens) => (
              <div key={lens.role} className="rounded-lg border border-court-line bg-court-panelSoft p-3">
                <p className="font-semibold text-white">{lens.role}</p>
                <p className="text-slate-300"><span className="font-medium">Focus:</span> {lens.focus}</p>
                <p className="text-slate-400">{lens.guidance}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="5) Risk + Red Flag Section" className="border-court-danger/50">
        <p className="mb-2 text-sm text-slate-300">Stop activity and seek professional evaluation if serious symptoms are present. Web guidance is not enough for urgent presentations.</p>
        <ul className="text-sm text-court-danger">
          <li>• Sudden severe pain, deformity, or inability to bear weight.</li>
          <li>• Neurological symptoms (numbness, weakness, confusion, worsening headache).</li>
          <li>• Persistent or escalating pain despite load reduction and rest.</li>
        </ul>
      </Card>
    </div>
  );
}
