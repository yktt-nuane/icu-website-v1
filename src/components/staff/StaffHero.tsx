// src/components/staff/StaffHero.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const StaffHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('loaded');
    }
  }, []);

  return (
    <div ref={heroRef} className="relative py-32 overflow-hidden hero-section">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/staff-background.jpg"
          alt="集中治療科スタッフ"
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: "cover" }}
          className="brightness-[0.7]"
        />
      </div>

      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-transparent z-10"></div>

      {/* コンテンツ */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              スタッフ紹介
            </h1>

            <p className="hero-description text-xl text-white/90 mb-6">
              大垣市民病院集中治療科では、経験豊富な医師をはじめ、専門的な知識と技術を持つ
              看護師、臨床工学技士など多職種のスタッフが連携して診療にあたっています。
            </p>
            
            <p className="hero-description text-xl text-white/90">
              24時間365日、重症患者さんの救命と機能予後の改善に全力で取り組む
              私たちのチームメンバーをご紹介します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffHero;