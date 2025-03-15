import type { Metadata } from "next";
import { ThemeProvider } from "../../../../src/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextuiQ - Theme Example",
  description: "Theme customization example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[oklch(var(--theme-background))]">
        <ThemeProvider>
          <div className="min-h-screen text-[oklch(var(--theme-foreground))]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
