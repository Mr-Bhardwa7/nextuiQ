"use client";

import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "../../../../src/context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <h1 className="text-3xl font-bold">
              Theme Example
            </h1>
            <ThemeToggle />
          </div>

          <div className="w-full max-w-4xl space-y-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Current Theme: {theme}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This example demonstrates theme switching functionality with smooth transitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Light Theme Colors
                </h3>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Dark Theme Colors
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}