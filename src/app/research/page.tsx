// src/app/research/page.tsx
import { Metadata } from "next";
import ResearchHero from "@/components/research/ResearchHero";
import ResearchOverview from "@/components/research/ResearchOverview";
import PublicationList from "@/components/research/PublicationList";
import ConferenceList from "@/components/research/ConferenceList";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "研究活動 | 大垣市民病院集中治療科",
  description: "大垣市民病院集中治療科の学会発表や論文発表などの研究活動をご紹介します。最新の研究成果や臨床研究への取り組みについて掲載しています。",
  keywords: "大垣市民病院, 集中治療科, 研究活動, 学会発表, 論文発表, 臨床研究, 医学研究",
};

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <ResearchOverview />
      <PublicationList />
      <ConferenceList />
      <CTA />
    </>
  );
}