"use client";

import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "nextuiq";
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <h1 className="text-3xl font-bold">
            Theme Example
          </h1>
          <ThemeToggle />
        </div>

        <div className="w-full max-w-4xl space-y-8 p-8 bg-[oklch(var(--theme-muted))] rounded-lg">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Current Theme: {theme}
            </h2>
            <p className="text-[oklch(var(--theme-muted-foreground))]">
              This example demonstrates theme switching functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[oklch(var(--theme-card))] rounded-lg shadow">
              <h3 className="text-lg font-medium">
                Light Theme Colors
              </h3>
            </div>
            <div className="p-6 bg-[oklch(var(--theme-card))] rounded-lg shadow">
              <h3 className="text-lg font-medium">
                Dark Theme Colors
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}