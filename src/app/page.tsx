// src/app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import MissionVision from "@/components/MissionVision";
import TeamCare from "@/components/TeamCare";
import NewsEvents from "@/components/NewsEvents";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "大垣市民病院集中治療科 - 急性期医療の最後の砦",
  description: "大垣市民病院集中治療科の公式ウェブサイト。多職種連携による最先端の救急・集中治療の提供と重症患者の救命に取り組んでいます。",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MissionVision />
      <TeamCare />
      <Stats />
      <NewsEvents />
      <CTA />
    </>
  );
}