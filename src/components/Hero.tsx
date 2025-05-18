"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // DOMの更新を直接行うため、再レンダリングが発生しない
    if (heroRef.current) {
      heroRef.current.classList.add('loaded');
    }
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden hero-section">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/icu-background.jpg"
          alt="集中治療室"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              急性期医療の<br />
              <span className="text-accent">最後の砦</span>
            </h1>

            <p className="hero-description text-xl text-white/90 mb-8">
              大垣市民病院集中治療科は、様々な医療機器を用いた最先端治療と
              多職種連携による総力戦で重症患者さんに高度な集中治療を提供しています。
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center justify-center"
              >
                診療科について
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              
              <Link
                href="/team"
                className="btn-secondary inline-flex items-center justify-center"
              >
                チーム医療
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;