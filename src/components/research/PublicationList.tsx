"use client";

import { useState, useRef, useEffect } from "react";

type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract?: string;
  category: "original" | "review" | "case" | "letter" | "other";
  isInternational: boolean;
};

const publicationData: Publication[] = [
  {
    id: "pub1",
    title: "重症COVID-19患者におけるサイトカインストームの新規バイオマーカーの検討",
    authors: "田中健太郎, 山田優子, 鈴木明彦, 中村拓也",
    journal: "日本集中治療医学会雑誌",
    year: 2024,
    volume: "31(2)",
    pages: "103-110",
    doi: "10.3918/jsicm.31.103",
    abstract: "重症COVID-19患者におけるサイトカインストームの早期発見と重症度評価のための新規バイオマーカーについて検討した。当院ICUに入室した重症COVID-19患者50例を対象に、従来のマーカーと新規マーカーの比較検討を行った結果、新規マーカーが早期診断と予後予測に有用である可能性が示唆された。",
    category: "original",
    isInternational: false
  },
  {
    id: "pub2",
    title: "Novel Biomarkers for Early Detection of Cytokine Storm in Severe COVID-19 Patients",
    authors: "Tanaka K, Yamada Y, Suzuki A, Nakamura T, et al.",
    journal: "Journal of Critical Care Medicine",
    year: 2024,
    volume: "48(3)",
    pages: "245-253",
    doi: "10.1016/j.jccm.2023.12.015",
    url: "https://www.example.com/jccm/article",
    abstract: "This study investigated novel biomarkers for early detection and severity assessment of cytokine storm in severe COVID-19 patients. We analyzed samples from 50 ICU patients with severe COVID-19 and compared conventional and novel markers. Results suggest that the novel markers may be useful for early diagnosis and prognosis prediction.",
    category: "original",
    isInternational: true
  },
  {
    id: "pub3",
    title: "ECMOを用いた重症呼吸不全患者の管理における多職種連携の重要性",
    authors: "山田優子, 田中健太郎, 吉田健一, 木村直子",
    journal: "日本呼吸療法医学会誌",
    year: 2023,
    volume: "28(4)",
    pages: "210-218",
    abstract: "ECMO管理における多職種連携の重要性について、当院ICUでの経験をもとに検討した。医師、看護師、臨床工学技士による専門的チーム医療の実践により、ECMO管理の安全性向上と合併症減少につながることが示された。",
    category: "original",
    isInternational: false
  },
  {
    id: "pub4",
    title: "早期リハビリテーション介入によるICU-AWの予防効果：単施設後ろ向き観察研究",
    authors: "小川真理子, 山田優子, 田中健太郎",
    journal: "日本集中治療医学会雑誌",
    year: 2023,
    volume: "30(5)",
    pages: "352-359",
    doi: "10.3918/jsicm.30.352",
    abstract: "ICUにおける早期リハビリテーション介入のICU-AW予防効果について後ろ向きに検討した。ICU在室48時間以内にリハビリテーションを開始した群では、開始が遅れた群と比較してICU-AWの発生率が有意に低かった。",
    category: "original",
    isInternational: false
  },
  {
    id: "pub5",
    title: "Prognostic Factors for Survival in Patients Requiring ECMO Support for Severe Acute Respiratory Failure",
    authors: "Yamada Y, Tanaka K, Yoshida K, Kimura N, et al.",
    journal: "ECMO Journal",
    year: 2023,
    volume: "12(2)",
    pages: "78-87",
    doi: "10.1007/s41748-023-00351-y",
    url: "https://www.example.com/ecmojournal/article",
    abstract: "This study aimed to identify prognostic factors for survival in patients requiring ECMO support for severe acute respiratory failure. We retrospectively analyzed 45 patients who received ECMO support at our institution. Pre-ECMO factors including age, immunocompromised status, and duration of mechanical ventilation were significantly associated with mortality.",
    category: "original",
    isInternational: true
  },
  {
    id: "pub6",
    title: "集中治療室における終末期医療の現状と課題：多職種へのアンケート調査",
    authors: "高橋久美子, 田中健太郎, 山田優子",
    journal: "日本クリティカルケア看護学会誌",
    year: 2022,
    volume: "18(3)",
    pages: "45-53",
    abstract: "集中治療室における終末期医療の現状と課題を明らかにするために、ICU勤務の医師、看護師など多職種にアンケート調査を実施。終末期医療に対する認識の職種間差異や教育ニーズを明らかにした。",
    category: "original",
    isInternational: false
  },
  {
    id: "pub7",
    title: "急性呼吸窮迫症候群に対する腹臥位療法の効果と安全な実施法に関する検討",
    authors: "鈴木明彦, 山田優子, 田中健太郎, 伊藤裕太",
    journal: "人工呼吸",
    year: 2022,
    volume: "39(1)",
    pages: "65-73",
    abstract: "ARDSに対する腹臥位療法の効果と安全な実施法について検討した。当院ICUにおける腹臥位療法プロトコルの導入前後で、実施率と合併症発生率を比較した結果、プロトコル導入後は合併症が減少し、より安全に実施できることが示された。",
    category: "original",
    isInternational: false
  },
  {
    id: "pub8",
    title: "Efficacy of a Multidisciplinary Rapid Response System in a Tertiary Care Hospital in Japan",
    authors: "Tanaka K, Kobayashi M, Suzuki A, et al.",
    journal: "Journal of Patient Safety",
    year: 2022,
    volume: "18(4)",
    pages: "312-319",
    doi: "10.1097/jps.0000000000013589",
    url: "https://www.example.com/jps/article",
    abstract: "This study evaluated the efficacy of a newly implemented multidisciplinary rapid response system (RRS) in reducing in-hospital cardiac arrests and unplanned ICU admissions. Implementation of the RRS was associated with a significant reduction in cardiac arrests outside the ICU and improved outcomes for patients requiring emergency intervention.",
    category: "original",
    isInternational: true
  },
  {
    id: "pub9",
    title: "集中治療領域における薬剤師介入の有効性に関する文献レビュー",
    authors: "松本亮平, 田中健太郎",
    journal: "日本病院薬剤師会雑誌",
    year: 2021,
    volume: "57(8)",
    pages: "875-882",
    abstract: "集中治療領域における薬剤師介入の有効性に関する文献レビュー。薬剤師の継続的な介入により、投薬関連有害事象の減少、抗菌薬適正使用の推進、薬剤費削減などの効果が示されている。",
    category: "review",
    isInternational: false
  },
  {
    id: "pub10",
    title: "重症敗血症に伴う急性腎障害に対するCHDF導入タイミングの検討",
    authors: "田中健太郎, 鈴木明彦, 吉田健一, 木村直子",
    journal: "日本集中治療医学会雑誌",
    year: 2021,
    volume: "28(6)",
    pages: "430-437",
    doi: "10.3918/jsicm.28.430",
    abstract: "重症敗血症に伴う急性腎障害に対するCHDF導入タイミングについて、当院ICUにおける5年間の後ろ向きコホート研究を行った。早期CHDF導入群と晩期導入群とを比較し、早期導入群での予後改善効果を検討した。",
    category: "original",
    isInternational: false
  }
];

// カテゴリーに対応するラベルとスタイルの設定
const categoryConfig = {
  original: {
    label: "原著論文",
    bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  },
  review: {
    label: "総説",
    bgColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
  },
  case: {
    label: "症例報告",
    bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
  },
  letter: {
    label: "レター",
    bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
  },
  other: {
    label: "その他",
    bgColor: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
  }
};

const PublicationList = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeYear, setActiveYear] = useState<string>("all");
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
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

  // 年度とカテゴリーでフィルタリング
  const filteredPublications = publicationData.filter((pub) => {
    const yearMatch = activeYear === "all" || pub.year.toString() === activeYear;
    const categoryMatch = activeCategory === "all" || 
                          (activeCategory === "international" && pub.isInternational) ||
                          (activeCategory === "domestic" && !pub.isInternational) ||
                          pub.category === activeCategory;
    return yearMatch && categoryMatch;
  });

  // 出版年の一覧を取得（最新順）
  const years = Array.from(new Set(publicationData.map(pub => pub.year))).sort((a, b) => b - a);

  // 論文の詳細モーダルを開く
  const openPubModal = (pub: Publication) => {
    setSelectedPub(pub);
    document.body.style.overflow = "hidden";
  };

  // 論文の詳細モーダルを閉じる
  const closePubModal = () => {
    setSelectedPub(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            論文<span className="text-primary dark:text-primary-light">発表</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            最新の研究成果を国内外の学術雑誌に発表しています。
          </p>

          {/* フィルターボタン：カテゴリー */}
          <div className="mb-4 mt-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">カテゴリー</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "すべて" },
                { id: "international", label: "国際誌" },
                { id: "domestic", label: "国内誌" },
                { id: "original", label: "原著論文" },
                { id: "review", label: "総説" },
                { id: "case", label: "症例報告" }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* フィルターボタン：年度 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">発表年</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveYear("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeYear === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                すべて
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year.toString())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeYear === year.toString()
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {year}年
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 論文リスト */}
        <div className="space-y-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((publication, index) => (
              <div
                key={publication.id}
                className="scroll-reveal bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openPubModal(publication)}
              >
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[publication.category].bgColor} mr-2`}>
                        {categoryConfig[publication.category].label}
                      </span>
                      {publication.isInternational && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                          国際誌
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {publication.year}年
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {publication.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {publication.authors}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-400 italic mb-4">
                    {publication.journal}
                    {publication.volume && `, ${publication.volume}`}
                    {publication.pages && `: ${publication.pages}`}
                  </p>
                  
                  <button 
                    className="text-primary dark:text-primary-light font-medium inline-flex items-center"
                  >
                    詳細を見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                該当する論文がありません
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                検索条件を変更してください
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 論文詳細モーダル */}
      {selectedPub && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePubModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[selectedPub.category].bgColor} mr-2`}>
                  {categoryConfig[selectedPub.category].label}
                </span>
                {selectedPub.isInternational && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                    国際誌
                  </span>
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                  {selectedPub.year}年
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedPub.title}
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {selectedPub.authors}
              </p>
              
              <p className="text-gray-700 dark:text-gray-400 italic mb-6">
                {selectedPub.journal}
                {selectedPub.volume && `, ${selectedPub.volume}`}
                {selectedPub.pages && `: ${selectedPub.pages}`}
              </p>
              
              {selectedPub.abstract && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    抄録
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    {selectedPub.abstract}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                {selectedPub.doi && (
                  <a
                    href={`https://doi.org/${selectedPub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    DOI: {selectedPub.doi}
                  </a>
                )}
                
                {selectedPub.url && (
                  <a
                    href={selectedPub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    論文リンク
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PublicationList;