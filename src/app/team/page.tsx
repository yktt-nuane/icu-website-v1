// src/app/team/page.tsx
import { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import TeamPhilosophy from "@/components/team/TeamPhilosophy";
import TeamCollaboration from "@/components/team/TeamCollaboration";
import TeamCommunication from "@/components/team/TeamCommunication";
import TeamEducation from "@/components/team/TeamEducation";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "多職種チーム医療 | 大垣市民病院集中治療科",
  description: "大垣市民病院集中治療科の多職種チーム医療についてご紹介します。医師、看護師、臨床工学技士、薬剤師など多様な職種が連携し、患者さん中心の最適な治療を提供しています。",
  keywords: "大垣市民病院, 集中治療科, チーム医療, 多職種連携, ICU, 集中治療, カンファレンス",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamPhilosophy />
      <TeamCollaboration />
      <TeamCommunication />
      <TeamEducation />
      <CTA />
    </>
  );
}