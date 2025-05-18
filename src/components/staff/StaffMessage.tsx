// src/components/staff/StaffMessage.tsx
"use client";

import { useRef, useEffect } from "react";

const StaffMessage = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            診療部長<span className="text-primary dark:text-primary-light">メッセージ</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            集中治療科のビジョンと、スタッフに対する想い
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden scroll-reveal">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  田中 健太郎
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  集中治療科 診療部長
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                大垣市民病院集中治療科のホームページをご覧いただき、ありがとうございます。私たちは西濃医療圏の中核病院として、24時間365日、重症患者さんの診療にあたっています。
              </p>
              
              <p>
                集中治療の現場では、医師一人の力では患者さんを救うことはできません。多職種による「総力戦」が必要です。私たちの集中治療科では、医師、看護師、臨床工学技士、薬剤師、理学療法士、管理栄養士など、様々な専門職が一丸となって、患者さん一人ひとりに最適な治療を提供しています。
              </p>
              
              <p>
                また、集中治療は常に進化しています。新しい治療法や医療機器、エビデンスが次々と生まれる分野です。私たちは最新の医学知識と技術を学び続け、科学的根拠に基づいた治療を提供することを心がけています。
              </p>
              
              <p>
                集中治療科で働くスタッフには、高度な専門知識と技術だけでなく、患者さんとご家族に寄り添う温かい心も必要です。ICUという特殊な環境で不安を抱える患者さんやご家族に対して、常に思いやりを持って接することを大切にしています。
              </p>
              
              <p>
                私たちは、若い医療者の教育にも力を入れています。次世代の集中治療を担う医師、看護師、臨床工学技士などを育成することも、私たちの重要な使命です。救急・集中治療に興味のある若手の皆さん、ぜひ一度、大垣市民病院集中治療科を見学にいらしてください。門戸を広く開いてお待ちしています。
              </p>
              
              <p className="font-semibold">
                集中治療科 診療部長　田中 健太郎
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffMessage;