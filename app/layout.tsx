import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});


export const metadata: Metadata = {
  title: "PÉYRO",
  description: "PÉYRO — AI systems, automation and digital products.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // No viewport-fit=cover: the page must NOT render under the iOS status
  // bar, so Safari paints that strip solid with the page background —
  // content can never show through it while scrolling.
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0a0a0a" }}>
        {/*
          Belt-and-suspenders fix for iOS Safari: a dedicated, independent
          solid bar pinned over the status bar / notch area. It has no
          transformed ancestors and the highest z-index on the page, so
          regardless of any sticky/scroll repaint glitch elsewhere, this
          strip can never show page content through it.
        */}
        <div
          className="fixed inset-x-0 top-0 z-[999] pointer-events-none"
          style={{
            height: "env(safe-area-inset-top, 0px)",
            backgroundColor: "#0a0a0a",
          }}
          aria-hidden
        />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
