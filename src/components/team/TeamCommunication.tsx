"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const TeamCommunication = () => {
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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl scroll-reveal">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <Image
                  src="/images/team-communication.jpg"
                  alt="チームコミュニケーション"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 border-t-4 border-primary dark:border-primary-light">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  オープンなディスカッション
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  職種や経験年数に関わらず、全てのスタッフが自由に意見を交わせる
                  環境づくりを重視しています。
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-2">
            <div className="scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                効果的な<span className="text-primary dark:text-primary-light">コミュニケーション</span>の実践
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                多職種チーム医療の要となるのは、効果的なコミュニケーションです。
                大垣市民病院集中治療科では、以下のようなコミュニケーション原則と実践により、
                チームの連携を強化し、最適な医療を提供しています。
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    心理的安全性の確保
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    どのスタッフも質問や意見、懸念を自由に表明できる環境を大切にしています。
                    「間違いを恐れずに発言できる」「わからないことを素直に聞ける」文化が根付いており、
                    これにより問題の早期発見や新たなアイデアの創出が促進されています。
                    不快な言動に対しては、ゼロトレランス（絶対的非容認）の姿勢で臨み、全ての医療者が
                    安心して働ける環境を維持しています。
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    構造化されたコミュニケーション
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    日々のカンファレンスや申し送りでは、以下のような構造化されたコミュニケーション方法を採用しています：
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">SBAR（状況、背景、評価、提案）形式による情報共有</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">重要情報の「クローズドループ」確認（情報を復唱して確実に共有）</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">定期的なTimeOutによる状況確認と方針共有</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    建設的フィードバック
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    「人」ではなく「行動」や「状況」に焦点を当てたフィードバックを心がけています。
                    批判ではなく改善を目的とした建設的な意見交換により、チーム全体のスキルアップと
                    医療の質向上を図っています。定期的なデブリーフィング（振り返り）を行い、
                    良かった点と改善点を共有することで、継続的な成長を促しています。
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    チームとしての意思決定
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    重要な治療方針の決定は、チーム全体で行います。各職種の専門的視点からの意見を
                    集約し、患者さんにとって最適な方針を見出していきます。意見の相違がある場合も
                    オープンに議論し、根拠に基づいた合意形成を目指します。最終的な決断はチームの総意として
                    受け止め、全員で責任を共有します。これにより、一部のスタッフに過度な負担がかかることを
                    防ぎ、持続可能なチーム医療を実現しています。
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                これらのコミュニケーション実践により、職種間の壁を越えた真の連携が可能になり、
                患者さんに最適な医療を提供できるだけでなく、医療者自身も働きがいを感じられる
                環境が生まれています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCommunication;