import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "大垣市民病院 集中治療科",
  description: "大垣市民病院集中治療科（ICU）は、生命の危機に瀕した重症患者さんに対して、24時間体制で高度な医療を提供しています。",
  keywords: "大垣市民病院, 集中治療科, ICU, 救急医療, 重症患者, 集中治療, 岐阜県",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}