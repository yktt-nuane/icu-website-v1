"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const ResearchHero = () => {
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
          src="/images/research-background.jpg"
          alt="集中治療科の研究活動"
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
              研究活動
            </h1>

            <p className="hero-description text-xl text-white/90 mb-6">
              大垣市民病院集中治療科では、日々の臨床から得られた知見を
              学会発表や論文発表を通じて医学界に発信しています。
            </p>
            
            <p className="hero-description text-xl text-white/90">
              最新のエビデンスに基づいた診療を実践するとともに、
              新たなエビデンスの創出にも積極的に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchHero;