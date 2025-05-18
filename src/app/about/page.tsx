// src/app/about/page.tsx
import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutTeam from "@/components/about/AboutTeam";
import AboutMultidisciplinary from "@/components/about/AboutMultidisciplinary";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "診療科について | 大垣市民病院集中治療科",
  description: "大垣市民病院集中治療科は、最先端の医療機器を駆使し、多職種連携による総力戦で重症患者さんの治療にあたっています。24時間365日体制で専門医が対応し、胸部外科、循環器内科、麻酔科などの経験豊富な医師と連携しています。",
  keywords: "大垣市民病院, 集中治療科, ICU, 専門医, 多職種連携, チーム医療",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTeam />
      <AboutMultidisciplinary />
      <CTA />
    </>
  );
}