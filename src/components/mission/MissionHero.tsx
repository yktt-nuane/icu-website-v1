"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const MissionHero = () => {
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
          src="/images/mission-background.jpg"
          alt="集中治療室での医療チーム"
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
              私たちの<span className="text-accent">使命</span>と<span className="text-accent">ビジョン</span>
            </h1>

            <p className="hero-description text-xl text-white/90 mb-6">
              大垣市民病院集中治療科は、地域の急性期医療を支える最後の砦として、
              24時間365日、高度な集中治療を提供します。
            </p>
            
            <p className="hero-description text-xl text-white/90">
              科学的根拠に基づいた医療と多職種連携による知の結集で、
              患者さんの救命と機能的予後の改善に全力で取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionHero;