"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { lingoTerms } from "@/data/lingo";
import { mockCoachResponse, quickPrompts } from "@/data/coach";

type Tab = "Coach" | "Live Research" | "Lingo";

export default function CoachPage() {
  const [tab, setTab] = useState<Tab>("Coach");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const filteredLingo = useMemo(() => lingoTerms.slice(0, 45), []);

  const submitPrompt = (prompt: string) => {
    if (!prompt.trim()) return;
    setHistory((h) => [prompt, ...h]);
    setInput("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Coach</h1>
      <div className="flex gap-2">
        {(["Coach", "Live Research", "Lingo"] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-lg px-4 py-2 text-sm ${tab === t ? "bg-court-accent text-court-bg" : "bg-court-panelSoft text-slate-300"}`}>{t}</button>
        ))}
      </div>

      {tab === "Coach" && (
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <Card title="Coach Chat" subtitle="Structured answers to reduce on-court confusion.">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button key={prompt} onClick={() => submitPrompt(prompt)} className="rounded-full border border-court-line px-3 py-1 text-xs text-slate-300 hover:border-court-accent">{prompt}</button>
              ))}
            </div>
            <div className="space-y-3">
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask: What is my weak-side job in Spain PnR?" className="h-24 w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-sm outline-none focus:border-court-accent" />
              <button onClick={() => submitPrompt(input)} className="rounded-lg bg-court-accent px-4 py-2 text-sm font-semibold text-court-bg">Send</button>
            </div>
            {history.length > 0 && <p className="mt-4 text-xs text-slate-400">Recent prompts: {history.slice(0, 3).join(" • ")}</p>}
          </Card>

          <Card title="Coach Response">
            <div className="space-y-3 text-sm text-slate-200">
              <section><h4 className="font-semibold text-white">1) Explanation</h4><p>{mockCoachResponse.explanation}</p></section>
              <section><h4 className="font-semibold text-white">2) What you should do</h4><ul>{mockCoachResponse.whatToDo.map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section><h4 className="font-semibold text-white">3) What to look for</h4><ul>{mockCoachResponse.whatToLookFor.map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section><h4 className="font-semibold text-white">4) Common mistakes</h4><ul>{mockCoachResponse.commonMistakes.map((x) => <li key={x}>• {x}</li>)}</ul></section>
              <section>
                <h4 className="font-semibold text-white">5) Film Search Links</h4>
                <ul>{mockCoachResponse.filmSearchLinks.map((link) => <li key={link.label}><a className="text-court-accent underline" target="_blank" href={link.url} rel="noreferrer">{link.label}</a></li>)}</ul>
              </section>
            </div>
          </Card>
        </div>
      )}

      {tab === "Live Research" && (
        <Card title="Film Study Research" subtitle="Cross-platform search tools for live topic research.">
          <div className="mb-3 grid gap-3 md:grid-cols-2">
            {["YouTube", "Twitter/X", "Reddit", "TikTok", "Hudl"].map((platform) => (
              <div key={platform} className="rounded-lg border border-court-line bg-court-panelSoft p-3">
                <p className="font-semibold">{platform}</p>
                <a
                  href={platform === "YouTube" ? "https://www.youtube.com/results?search_query=spain+pick+and+roll+reads" : "#"}
                  className="mt-2 inline-block text-xs text-court-accent underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open {platform} Search
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400">V1 uses link-outs; V2 can add aggregated result indexing and account-level watchlists.</p>
        </Card>
      )}

      {tab === "Lingo" && (
        <Card title="Basketball Lingo (40+ terms)">
          <div className="grid gap-3 md:grid-cols-2">
            {filteredLingo.map((term) => (
              <div key={term.term} className="rounded-lg border border-court-line bg-court-panelSoft p-3">
                <h4 className="font-semibold text-white">{term.term}</h4>
                <p className="text-sm text-slate-300">{term.definition}</p>
                <p className="mt-1 text-xs text-slate-400">{term.context}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
