"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const AboutHero = () => {
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
          src="/images/about-background.jpg"
          alt="集中治療室の様子"
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
              診療科について
            </h1>

            <p className="hero-description text-xl text-white/90 mb-6">
              大垣市民病院集中治療科は、西濃医療圏における重症患者診療の中核として、24時間365日体制で高度な集中治療を提供しています。
            </p>
            
            <p className="hero-description text-xl text-white/90">
              最先端の医療機器を駆使し、多職種の専門家によるチーム医療を実践することで、
              重症患者さんの救命と機能予後の改善に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;