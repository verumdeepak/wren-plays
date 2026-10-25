import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Wren Plays | Tamil Gaming & Minecraft",
  description:
    "Welcome to Wren Plays! Explore Tamil Minecraft adventures, SMP stories, gaming challenges, featured videos, and our gaming community.",
  openGraph: {
    title: "Wren Plays | Enter the Gaming Universe",
    description:
      "Minecraft adventures, Tamil gaming content, and a growing gaming community. Welcome to Wren Plays!",
    siteName: "Wren Plays",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
