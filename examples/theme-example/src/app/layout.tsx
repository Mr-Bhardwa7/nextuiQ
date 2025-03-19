import type { Metadata } from "next";
import { ThemeProviderWrapper } from "@/components/providers/theme-provider";
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
        <ThemeProviderWrapper>
          <div className="min-h-screen text-[oklch(var(--theme-foreground))]">
            {children}
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
