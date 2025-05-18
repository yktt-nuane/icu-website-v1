"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TeamCare = () => {
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
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-primary dark:text-primary-light">多職種</span>による総力戦の医療
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                大垣市民病院集中治療科では、医師だけでなく看護師、臨床工学技士、薬剤師、理学療法士、栄養士など多様な専門職が連携し、重症患者さんに対する総力戦の医療を提供しています。専門性を活かした「チーム医療」こそが、最高水準の集中治療を実現する鍵です。
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "集中治療専門医と各科専門医の連携",
                  "ICU専従看護師による24時間体制のケア",
                  "臨床工学技士による高度医療機器の管理",
                  "早期リハビリテーションの積極的導入",
                  "集中治療に精通した薬剤師の処方支援",
                  "栄養サポートチームとの密接な連携"
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
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                私たちは医療従事者の専門性と経験を最大限に活かし、職種の壁を越えて協働することで、重症患者さんの救命と機能回復を目指しています。様々な職種の若手医療従事者が集中治療の専門性を高められる環境づくりに取り組んでいます。
              </p>
              
              <Link
                href="/team"
                className="btn-primary inline-flex items-center justify-center"
              >
                チーム医療について詳しく
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
                  src="/images/team-care.jpg"
                  alt="多職種チーム医療"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 border-t-4 border-primary dark:border-primary-light">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  多職種連携カンファレンス
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  毎朝のカンファレンスでは、すべての職種が参加し患者さんの治療方針を協議しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCare;