"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/dashboard", "Dashboard"],
  ["/profile", "Profile"],
  ["/knowledge", "Knowledge Engine"],
  ["/coach", "AI Coach"],
  ["/practice-breakdown", "Practice Breakdown"],
  ["/play-encyclopedia", "Play Encyclopedia"],
  ["/defense", "Defensive Systems"],
  ["/drills", "Drill Library"],
  ["/recovery", "Recovery + Injury Intel"],
  ["/film-study", "Film Study"],
  ["/quiz", "IQ Quiz"],
  ["/planner", "Practice Planner"],
] as const;

export function AppNav() {
  const pathname = usePathname();
  const inApp = pathname !== "/";
  const isAdminRoute = pathname.startsWith("/admin");

  if (!inApp || isAdminRoute) return null;

  return (
    <aside className="sticky top-0 h-screen w-72 border-r border-court-line bg-court-panel/70 p-4 backdrop-blur">
      <Link href="/dashboard" className="mb-6 block text-xl font-bold tracking-wide text-court-accent">
        COURT IQ
      </Link>
      <nav className="space-y-1">
        {links.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`block rounded-lg px-3 py-2 text-sm transition ${
                active
                  ? "bg-court-accent/20 text-court-accent"
                  : "text-slate-300 hover:bg-court-panelSoft hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
