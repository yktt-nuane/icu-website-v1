"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const AboutTeam = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            医師<span className="text-primary dark:text-primary-light">体制</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            大垣市民病院集中治療科では、専門医と各科の経験豊富な医師が連携し、24時間365日体制で重症患者さんの診療にあたっています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                集中治療専門医
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">専従医</span>
                  <span className="text-3xl font-bold text-primary dark:text-primary-light">1名</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  集中治療室専従の集中治療専門医が、ICUでの診療に特化して勤務しています。
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">兼任医</span>
                  <span className="text-3xl font-bold text-primary dark:text-primary-light">2名</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  他科と兼任している集中治療専門医が、専門的な知識と技術で診療を支援しています。
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl scroll-reveal">
              <Image
                src="/images/icu-specialists.jpg"
                alt="集中治療専門医"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl scroll-reveal">
              <Image
                src="/images/multidisciplinary-doctors.jpg"
                alt="多職種連携の医師たち"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-2">
            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                非専門医（兼任）
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">兼任医</span>
                  <span className="text-3xl font-bold text-primary dark:text-primary-light">20名</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  集中治療の経験が豊富な以下の診療科の医師が兼任で診療を担当しています：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">胸部外科</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">循環器内科</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">麻酔科</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">勤務体制</h4>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary dark:text-primary-light mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">24時間365日</p>
                    <p className="text-gray-600 dark:text-gray-300">1名の医師が専任で対応</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;