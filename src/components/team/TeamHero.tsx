"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const TeamHero = () => {
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
          src="/images/team-background.jpg"
          alt="多職種チーム医療"
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
              多職種<span className="text-accent">チーム</span>医療
            </h1>

            <p className="hero-description text-xl text-white/90 mb-6">
              大垣市民病院集中治療科では、医師だけでなく看護師、臨床工学技士、薬剤師、
              理学療法士、栄養士など多様な専門職が一丸となり、患者さん中心の医療を提供しています。
            </p>
            
            <p className="hero-description text-xl text-white/90">
              重症患者さんの治療には「総力戦」が必要です。
              職種の壁を越えて知識と経験を共有し、チーム全体で患者さんをサポートします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;