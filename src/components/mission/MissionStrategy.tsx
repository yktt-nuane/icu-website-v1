"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

type StrategyItemProps = {
  title: string;
  description: string;
  index: number;
  delay?: number;
};

const StrategyItem = ({ title, description, index, delay = 0 }: StrategyItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentItem = itemRef.current;

    if (currentItem) {
      observer.observe(currentItem);
    }

    return () => {
      if (currentItem) {
        observer.unobserve(currentItem);
      }
    };
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className="scroll-reveal flex gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
    >
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-primary dark:bg-primary-dark rounded-full text-white font-bold text-2xl">
        {index}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const MissionStrategy = () => {
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
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            戦略的<span className="text-primary dark:text-primary-light">取り組み</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            私たちのミッション・ビジョンを実現するための具体的な取り組みです。
            これらの活動を通じて、集中治療の質を高め、地域医療への貢献を拡大していきます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StrategyItem
            index={1}
            title="集中治療室内の医療の質を高める"
            description="標準化されたプロトコルの導入、多職種カンファレンスの充実、最新エビデンスの実装により、集中治療室内の医療の質を継続的に向上させます。定期的な質評価と改善活動を通じて、患者アウトカムの向上を目指します。"
            delay={0}
          />
          
          <StrategyItem
            index={2}
            title="相互教育を推進する"
            description="医師、看護師、臨床工学技士など各職種間での知識と技術の共有を促進します。定期的な勉強会やシミュレーショントレーニングを実施し、実践的な技術習得と最新の医学知識の両方を重視した教育プログラムを提供します。"
            delay={100}
          />
          
          <StrategyItem
            index={3}
            title="急性期終末期治療を充実させる"
            description="救命が困難な状況においても、患者さんの尊厳を守り、ご家族の心理的サポートを含めた質の高い終末期ケアを提供します。患者さんの意思を尊重したACPを推進し、集中治療室での看取りの質を高めます。"
            delay={200}
          />
          
          <StrategyItem
            index={4}
            title="集中治療室外の重症患者への対応を充実させる"
            description="Rapid Response System（RRS）の導入と拡充により、集中治療室外での急変対応と予防的介入を強化します。一般病棟の重症患者管理についてのコンサルテーション体制を整備し、病院全体の急性期医療の質向上を支援します。"
            delay={300}
          />
          
          <StrategyItem
            index={5}
            title="急性期のジェネラリストとして活動する"
            description="診療科の枠を超えた「共通言語」を話すジェネラリストとして、複数の専門領域にまたがる複雑な病態に対応します。緩和ケア、救急医療、疼痛管理など、活動の領域を広げ、病院全体の医療の質向上に貢献します。"
            delay={400}
          />
          
          <StrategyItem
            index={6}
            title="安心して働ける環境を整備する"
            description="患者さん、ご家族、そして医療者全員が安心して過ごせる環境づくりに取り組みます。心理的安全性の確保、適切な労働環境の整備、コミュニケーションの円滑化を通じて、医療者が最高のパフォーマンスを発揮できる職場を目指します。"
            delay={500}
          />
        </div>

        <div className="text-center scroll-reveal" style={{animationDelay: "600ms"}}>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            これらの取り組みを通じて、大垣市民病院集中治療科は、
            西濃医療圏における集中治療の拠点として、患者さんの救命と
            機能予後の改善に貢献します。私たちと一緒に、
            地域の急性期医療を支える仲間になりませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
            
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              お問い合わせ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStrategy;