import Link from "next/link";

interface DailyCycleBarProps {
  current: "knowledge" | "coach" | "practice-breakdown" | "dashboard";
}

const hubs = [
  { href: "/knowledge", label: "Knowledge" },
  { href: "/coach", label: "Coach" },
  { href: "/practice-breakdown", label: "Practice Breakdown" }
] as const;

const stages = [
  { href: "/knowledge", label: "Before Practice" },
  { href: "/coach", label: "During Practice" },
  { href: "/practice-breakdown", label: "After Practice" }
] as const;

export function DailyCycleBar({ current }: DailyCycleBarProps) {
  return (
    <section className="rounded-2xl border border-court-line bg-court-panel p-4">
      <div className="flex flex-wrap gap-2">
        {hubs.map((hub) => {
          const active = current === hub.href.replace("/", "") || (current === "practice-breakdown" && hub.href === "/practice-breakdown");
          return (
            <Link
              key={hub.href}
              href={hub.href}
              className={`rounded-lg px-3 py-2 text-sm ${active ? "bg-court-accent text-court-bg" : "bg-court-panelSoft text-slate-200 hover:border-court-accent"}`}
            >
              {hub.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {stages.map((stage) => (
          <Link key={stage.label} href={stage.href} className="rounded-lg border border-court-line bg-court-panelSoft px-3 py-2 text-center text-xs text-slate-300 hover:border-court-accent">
            {stage.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
