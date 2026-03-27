import Link from "next/link";
import { coachingPhilosophy } from "@/data/philosophy";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-court-bg via-slate-900 to-court-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,169,255,0.25),_transparent_40%)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr,1fr]">
        <section className="self-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-court-accent">Court IQ</p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">Understand the Game</h1>
          <p className="mb-8 text-lg text-slate-300">
            Built for players who are tired of guessing. Learn where to be, what your job is, and why each decision matters.
          </p>
          <Link href="/dashboard" className="rounded-xl bg-court-accent px-8 py-4 text-base font-semibold text-court-bg shadow-glow transition hover:brightness-110">
            Enter App
          </Link>
        </section>

        <section className="rounded-2xl border border-court-line bg-court-panel/80 p-6 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">{coachingPhilosophy.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{coachingPhilosophy.intro}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {coachingPhilosophy.commitments.map((item) => <li key={item}>• {item}</li>)}
          </ul>
          <p className="mt-5 text-xs uppercase tracking-wider text-slate-400">Who this is for</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {coachingPhilosophy.playerStages.map((stage) => (
              <span key={stage} className="rounded-full bg-court-panelSoft px-3 py-1 text-xs text-slate-200">{stage}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
