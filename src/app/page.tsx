
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Education from "@/components/Education";
import NewsEvents from "@/components/NewsEvents";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "大垣市民病院集中治療科 - トップページ",
  description: "大垣市民病院集中治療科の公式ウェブサイト。最先端の救急・集中治療と若手医師の教育に取り組んでいます。",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Education />
      <NewsEvents />
      <CTA />
    </>
  );
}