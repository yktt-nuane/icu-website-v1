"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Education = () => {
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
      // 正しいクリーンアップ方法
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                若手医師の<span className="text-primary dark:text-primary-light">成長</span>をサポート
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                大垣市民病院集中治療科では、救急・集中治療の専門医を目指す若手医師に充実した教育プログラムを提供しています。実践的な技術習得と最新の医学知識の両方を重視した研修を通じて、次世代の救急・集中治療を担う医師を育成します。
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "実践的なハンズオンセミナー",
                  "シミュレーショントレーニング",
                  "定期的な症例検討会とジャーナルクラブ",
                  "学会発表や論文作成の指導",
                  "専門医資格取得へのサポート",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/education"
                className="btn-primary inline-flex items-center justify-center"
              >
                教育プログラムの詳細
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
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl scroll-reveal">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <Image
                  src="/images/medical-education.jpg"
                  alt="医学教育の様子"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* オーバーレイカード */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 border-t-4 border-primary dark:border-primary-light">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2025年度 研修医募集中
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  救急・集中治療に興味のある若手医師の皆様、ぜひ見学にお越しください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;