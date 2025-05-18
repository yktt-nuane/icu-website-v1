"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const TeamPhilosophy = () => {
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
                <span className="text-primary dark:text-primary-light">チーム医療</span>の哲学
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                大垣市民病院集中治療科では、重症患者さんの治療にあたる多職種が「チームとしての強さ」を最大化するために、
                いくつかの重要な原則を掲げています。これらの原則は、単なる理想論ではなく、
                日々の診療の中で実践され、常に進化し続けています。
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
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
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">患者中心の視点</span>
                    <p className="text-gray-700 dark:text-gray-300">すべての議論と決断は「患者さんにとって何が最善か」を出発点とします。職種間の主張の対立が生じた場合も、この原点に立ち返ることで解決を図ります。</p>
                  </div>
                </li>
                <li className="flex items-start">
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
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">相互尊重</span>
                    <p className="text-gray-700 dark:text-gray-300">各職種の専門性と知識を深く尊重し、互いを対等なパートナーとして認め合います。医師、看護師、その他のスタッフが階層なく意見を交わせる環境を大切にしています。</p>
                  </div>
                </li>
                <li className="flex items-start">
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
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">共同責任</span>
                    <p className="text-gray-700 dark:text-gray-300">治療方針はチームで決定し、その結果についても責任を共有します。成功も失敗も「私たちの」ものとして捉え、互いに支え合います。</p>
                  </div>
                </li>
                <li className="flex items-start">
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
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">オープンコミュニケーション</span>
                    <p className="text-gray-700 dark:text-gray-300">建設的な意見交換を推奨し、疑問や懸念は遠慮なく表明できる雰囲気を作ります。不快な言動に対しては厳正に対応し、心理的安全性を確保します。</p>
                  </div>
                </li>
                <li className="flex items-start">
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
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">継続的学習</span>
                    <p className="text-gray-700 dark:text-gray-300">職種間の知識共有と相互教育を重視し、チーム全体のスキルアップを図ります。教えることにも誠実に取り組み、次世代の医療者を育成します。</p>
                  </div>
                </li>
              </ul>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                これらの原則に基づいたチーム医療により、専門知識の統合、ケアの質の向上、患者さんの満足度向上、
                そしてスタッフの働きがいの向上を実現しています。一人に過度な負荷がかからないよう配慮しながら、
                チームの総合力で患者さんを支えています。
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl scroll-reveal">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <Image
                  src="/images/team-philosophy.jpg"
                  alt="チーム医療の哲学"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 border-t-4 border-primary dark:border-primary-light">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  チームの強さは多様性から生まれる
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  多様な背景を持つスタッフが、それぞれの視点から患者さんを見ることで、
                  より包括的な最適な医療を提供することが可能になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPhilosophy;