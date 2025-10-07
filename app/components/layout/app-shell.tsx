import type { PropsWithChildren } from "react";

import { MainNav } from "@/components/layout/main-nav";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold">Stox</span>
            <MainNav />
          </div>
          <span className="text-sm text-muted-foreground">MVP bootstrap</span>
        </div>
      </header>
      <main className="container flex-1 py-8">{children}</main>
      <footer className="border-t py-6">
        <div className="container text-sm text-muted-foreground">
          Built for tracking portfolios across brokerages.
        </div>
      </footer>
    </div>
  );
}
