"use client";

import { ThemeProvider } from "nextuiq";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}