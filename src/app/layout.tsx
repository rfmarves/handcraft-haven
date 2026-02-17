import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HandcraftHeader from "./components/handcraft-header";
import HandcraftFooter from "./components/handcraft-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcraft Haven",
  description: "The ultimate marketplace for handmade crafts and artisanal goods.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HandcraftHeader />
        {children}
        <HandcraftFooter />
      </body>
    </html>
  );
}
