// src/app/staff/page.tsx
import { Metadata } from "next";
import StaffHero from "@/components/staff/StaffHero";
import StaffDirectory from "@/components/staff/StaffDirectory";
import StaffMessage from "@/components/staff/StaffMessage";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "スタッフ紹介 | 大垣市民病院集中治療科",
  description: "大垣市民病院集中治療科の医師、看護師、臨床工学技士などの多職種チームをご紹介します。24時間365日、重症患者さんの治療にあたる専門スタッフの紹介です。",
  keywords: "大垣市民病院, 集中治療科, ICU, 医師, 看護師, 臨床工学技士, スタッフ, チーム医療",
};

export default function StaffPage() {
  return (
    <>
      <StaffHero />
      <StaffDirectory />
      <StaffMessage />
      <CTA />
    </>
  );
}