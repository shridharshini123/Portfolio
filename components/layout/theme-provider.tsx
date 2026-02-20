"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"      // Start in light violet
      enableSystem={true}       // Allow system override if user prefers
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
