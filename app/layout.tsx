import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppNav } from "@/components/layout/AppNav";

export const metadata: Metadata = {
  title: "Court IQ",
  description: "Personal basketball intelligence system"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <AppNav />
          <main className="flex-1 p-6 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
