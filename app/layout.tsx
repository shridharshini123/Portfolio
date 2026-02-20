import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Shri Dharshini J | Data Analyst & AI Developer",
  description:
    "Portfolio of Shri Dharshini J — Data Analyst & AI Developer crafting digital experiences that blend creativity with precision engineering.",
  keywords: [
    "Data Analyst",
    "AI Developer",
    "Machine Learning",
    "Power BI",
    "Python",
    "Tableau",
    "Portfolio",
  ],
  authors: [{ name: "Shri Dharshini J" }],
  openGraph: {
    title: "Shri Dharshini J | Data Analyst & AI Developer",
    description: "Behind every smart decision, there’s data.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf5ff" }, // Light violet bg
    { media: "(prefers-color-scheme: dark)", color: "#120a1f" },  // Dark violet bg
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}