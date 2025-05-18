"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const MissionVision = () => {
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
            私たちの<span className="text-primary dark:text-primary-light">使命</span>と<span className="text-primary dark:text-primary-light">価値観</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            大垣市民病院集中治療科は、地域の急性期医療を支え、最高水準の集中治療を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ミッション */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg scroll-reveal">
            <div className="text-primary dark:text-primary-light text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">ミッション</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              地域の中核病院として急性期治療の最後の砦となり、重症患者さんに対して高度な集中治療を提供することで、救命率の向上と機能予後の改善を実現します。
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              西濃医療圏における集中治療の拠点として、24時間365日、あらゆる重症患者を受け入れ、最善の医療を提供します。
            </p>
          </div>

          {/* ビジョン */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg scroll-reveal" style={{animationDelay: "0.2s"}}>
            <div className="text-primary dark:text-primary-light text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">ビジョン</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              多職種による最高水準のチーム医療を実践し、患者さん一人ひとりに最適な集中治療を提供できる体制を構築します。
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              集中治療を専門とするスタッフを増やし、次世代の集中治療を担う多職種の若手医療従事者を育成することで、地域全体の集中治療の質向上に貢献します。
            </p>
          </div>

          {/* バリュー */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg scroll-reveal" style={{animationDelay: "0.4s"}}>
            <div className="text-primary dark:text-primary-light text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">バリュー</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>患者中心の医療</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>多職種による総力戦</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>科学的根拠に基づいた実践</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>チームの連携強化</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>門戸を広げた包括的医療</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center scroll-reveal" style={{animationDelay: "0.6s"}}>
          <Link
            href="/about"
            className="btn-primary inline-flex items-center justify-center"
          >
            私たちの理念について詳しく
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
    </section>
  );
};

export default MissionVision;