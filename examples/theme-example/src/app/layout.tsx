import type { Metadata } from "next";
import { ThemeProvider } from "../../../../src/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextuiQ - Theme Example",
  description: "Theme customazation example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
