"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const MissionMain = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ミッション */}
          <div className="lg:w-1/2">
            <div className="scroll-reveal">
              <div className="mb-4 text-primary dark:text-primary-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                私たちの<span className="text-primary dark:text-primary-light">ミッション</span>
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  地域医療に貢献する、急性期治療の最後の砦になる
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  大垣市民病院集中治療科は、西濃医療圏における重症患者診療の中核として、
                  24時間365日体制で高度な集中治療を提供します。
                  あらゆる重症患者を受け入れ、最善の医療を通じて救命率の向上と機能予後の改善を実現します。
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  私たちは、集中治療室内外を問わず地域の急性期医療を担い、
                  患者さん、そのご家族、そして地域の医療機関が必要とする時に、
                  いつでも頼りになる「急性期治療の最後の砦」となります。
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  知の結集を図り、提供できる医療を最大化する
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  複雑な病態を持つ重症患者の治療には、多様な知識と経験が必要です。
                  私たちは、医師、看護師をはじめとする多職種の「知の結集」によって、
                  高度な病態把握と最適な医療を実現します。
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  診療科や職種の壁を超えたシームレスな連携によって、
                  患者さん一人ひとりに最高水準の集中治療を提供します。
                </p>
              </div>
            </div>
          </div>
          
          {/* ビジョン */}
          <div className="lg:w-1/2">
            <div className="scroll-reveal" style={{animationDelay: "0.2s"}}>
              <div className="mb-4 text-primary dark:text-primary-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                私たちの<span className="text-primary dark:text-primary-light">ビジョン</span>
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  コミュニケーションのハブになる
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  集中治療科は、重症患者をめぐる様々な診療科や職種をつなぐ
                  「コミュニケーションのハブ」となり、意思決定の中心となります。
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  複雑な医療情報を整理し、患者さんやご家族、そして医療者全員が
                  同じ目標に向かって進めるよう、対話と情報共有を促進します。
                  私たちは、患者さんを中心に据えた全人的医療のコーディネーターとなります。
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  診療科、職種を超えた知識の共有を促進する
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  集中治療は、様々な専門領域の知識を統合する学際的分野です。
                  私たちは診療科の枠を超えて、救急医療、内科的集中治療、外科的集中治療、
                  周術期管理などの知識を統合し、重症患者に対する包括的なアプローチを実現します。
                  また、職種間の相互理解と教育を通じて、チーム全体の診療能力を高めていきます。
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  集中治療室での看取りの質を高める
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  集中治療室は救命を目指す場所ですが、同時に尊厳ある最期を迎える場所でもあります。
                  私たちは、患者さんの意思を尊重し、ACPを含めた終末期医療の質を高め、
                  患者さんとご家族の精神的サポートも含めた、
                  急性期終末期治療の充実と適切な看取りの実現に取り組みます。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ビジョンの図解 */}
        <div className="mt-16">
          <div className="scroll-reveal" style={{animationDelay: "0.4s"}}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <Image
                  src="/images/mission-diagram.jpg"
                  alt="ミッション・ビジョンの図解"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 border-t-4 border-primary dark:border-primary-light">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  大垣市民病院集中治療科の未来像
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  地域医療の中核として、科学的根拠に基づいた最高水準の集中治療を提供し、
                  教育と研究を通じて次世代の集中治療を担う医療者を育成します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionMain;