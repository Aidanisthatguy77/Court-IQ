import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-court-bg via-slate-900 to-court-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,169,255,0.25),_transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-court-accent">Court IQ</p>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">Understand the Game</h1>
        <p className="mb-10 text-lg text-slate-300">
          A complete basketball intelligence system for reads, spacing, film study, injury-aware planning, and on-court confidence.
        </p>
        <Link
          href="/dashboard"
          className="rounded-xl bg-court-accent px-8 py-4 text-base font-semibold text-court-bg shadow-glow transition hover:brightness-110"
        >
          Enter App
        </Link>
      </div>
    </div>
  );
}
