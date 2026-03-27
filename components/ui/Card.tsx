import { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, className = "" }: CardProps) {
  return (
    <section className={`rounded-xl border border-court-line bg-court-panel p-5 ${className}`}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
