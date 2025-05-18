// src/app/mission/page.tsx
import { Metadata } from "next";
import MissionHero from "@/components/mission/MissionHero";
import MissionMain from "@/components/mission/MissionMain";
import ValueCards from "@/components/mission/ValueCards";
import MissionStrategy from "@/components/mission/MissionStrategy";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "ミッション・ビジョン | 大垣市民病院集中治療科",
  description: "大垣市民病院集中治療科のミッション、ビジョン、価値観、そして地域医療への貢献と、急性期医療の最後の砦としての取り組みについてご紹介します。",
  keywords: "大垣市民病院, 集中治療科, ミッション, ビジョン, 急性期医療, チーム医療, 地域医療",
};

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <MissionMain />
      <ValueCards />
      <MissionStrategy />
      <CTA />
    </>
  );
}