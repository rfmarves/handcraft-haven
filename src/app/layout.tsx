import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HandcraftHeader from "./components/handcraft-header";
import HandcraftFooter from "./components/handcraft-footer";
import { auth } from "@/auth";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HandcraftHeader userSession={session}/>
        {children}
        <HandcraftFooter />
      </body>
    </html>
  );
}
