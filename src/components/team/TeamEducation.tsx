"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type EducationEvent = {
  id: string;
  title: string;
  description: string;
  frequency: string;
  participantTypes: string[];
  imageUrl: string;
};

const educationEvents: EducationEvent[] = [
  {
    id: "case-conference",
    title: "症例検討会",
    description: "興味深い症例や教訓的な症例について多職種で振り返り、診断・治療のプロセスを検証します。各職種の視点から「何が良かったか」「何を改善できるか」を議論し、次の症例に活かします。",
    frequency: "月1回",
    participantTypes: ["医師", "看護師", "臨床工学技士", "薬剤師", "理学療法士", "栄養士"],
    imageUrl: "/images/case-conference.jpg"
  },
  {
    id: "journal-club",
    title: "ジャーナルクラブ",
    description: "最新の医学論文を各職種が持ち寄り、エビデンスの質と臨床応用の可能性について議論します。職種特有の専門誌から重要な知見を共有し、チーム全体の知識アップデートを図ります。",
    frequency: "隔週",
    participantTypes: ["医師", "看護師", "臨床工学技士", "薬剤師"],
    imageUrl: "/images/journal-club.jpg"
  },
  {
    id: "simulation",
    title: "シミュレーション研修",
    description: "心停止、ショック、呼吸不全などの急変対応や、ECMO導入など高度な処置をシミュレーターを用いて多職種で訓練します。危機的状況でのチームワークと効率的なコミュニケーションを実践的に学びます。",
    frequency: "月1回",
    participantTypes: ["医師", "看護師", "臨床工学技士"],
    imageUrl: "/images/simulation.jpg"
  },
  {
    id: "educational-lecture",
    title: "教育講演",
    description: "各職種のエキスパートが専門分野について講義を行い、知識と経験を共有します。職種を越えた相互理解を深め、それぞれの専門性を尊重するチーム医療の基盤を強化します。",
    frequency: "月1回",
    participantTypes: ["全職種"],
    imageUrl: "/images/educational-lecture.jpg"
  },
  {
    id: "skill-workshop",
    title: "スキルワークショップ",
    description: "人工呼吸器管理、ECMO管理、CHDF操作など特定の医療技術について、ハンズオンで学ぶ実践的なワークショップです。経験豊富なスタッフから直接技術を学び、安全かつ効果的な医療提供を目指します。",
    frequency: "2ヶ月に1回",
    participantTypes: ["医師", "看護師", "臨床工学技士"],
    imageUrl: "/images/skill-workshop.jpg"
  },
  {
    id: "debriefing",
    title: "デブリーフィング",
    description: "重症症例や急変対応後に、チーム全体で振り返りを行います。良かった点と改善点を率直に共有し、継続的な質の向上につなげています。心理的な負担にも配慮し、スタッフ間のサポート体制も強化します。",
    frequency: "都度実施",
    participantTypes: ["関わった全職種"],
    imageUrl: "/images/debriefing.jpg"
  }
];

const TeamEducation = () => {
  const [activeEvent, setActiveEvent] = useState<EducationEvent>(educationEvents[0]);
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
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            職種間<span className="text-primary dark:text-primary-light">教育</span>と研修
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            多職種の専門性を相互に理解し、チームとしての総合力を高めるために、
            様々な教育・研修活動を実施しています。「教えることに誠実に」をモットーに、
            職種を超えた知識と技術の共有を推進しています。
          </p>
        </div>

        <div className="mb-8 scroll-reveal">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              教育・研修の<span className="text-primary dark:text-primary-light">基本理念</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  教育・研修の目的
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">各職種の専門性を深く理解し尊重する文化の醸成</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">職種間の知識ギャップの解消と共通理解の構築</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">最新のエビデンスと技術を全職種で共有し実践</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">チームとしての問題解決能力と危機対応力の強化</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  教育・研修のアプローチ
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">多職種が等しく参加し、教え学び合う双方向型教育</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">座学と実践的トレーニングを組み合わせた総合的学習</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">失敗を恐れず挑戦できる心理的安全性の確保</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">個人に過度な負荷がかからないよう配慮した研修設計</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 scroll-reveal">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            主な<span className="text-primary dark:text-primary-light">教育・研修</span>活動
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {educationEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event)}
                className={`p-4 rounded-lg transition-all ${
                  activeEvent.id === event.id
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <h4 className="font-semibold text-lg">{event.title}</h4>
                <p className={`text-sm ${
                  activeEvent.id === event.id 
                    ? "text-white/80" 
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {event.frequency}
                </p>
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 md:hidden"></div>
                <div className="absolute bottom-0 left-0 p-4 md:hidden">
                  <h3 className="text-xl font-bold text-white">{activeEvent.title}</h3>
                  <p className="text-white/80 text-sm">{activeEvent.frequency}</p>
                </div>
                
                <div className="h-full relative">
                  <div className="bg-gray-300 dark:bg-gray-700 h-full w-full animate-pulse absolute"></div>
                  <div className="relative h-full">
                    <Image
                      src={activeEvent.imageUrl}
                      alt={activeEvent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-6">
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeEvent.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{activeEvent.frequency}</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {activeEvent.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">参加職種</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeEvent.participantTypes.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            これらの教育・研修活動を通じて、個々の専門性を尊重しながらも、
            チームとしての総合力を高め、最高水準の集中治療を提供できる
            医療チームの育成を目指しています。
          </p>
          
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center"
          >
            研修見学のお問い合わせ
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

export default TeamEducation;