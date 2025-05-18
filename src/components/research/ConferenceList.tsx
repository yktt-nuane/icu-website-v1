"use client";

import { useState, useRef, useEffect } from "react";

type Conference = {
  id: string;
  title: string;
  presenters: string;
  conference: string;
  year: number;
  month: number;
  location: string;
  type: "oral" | "poster" | "symposium" | "workshop";
  award?: string;
  abstract?: string;
  isInternational: boolean;
  category: "clinical" | "basic" | "education" | "other";
};

const conferenceData: Conference[] = [
  {
    id: "conf1",
    title: "重症COVID-19患者におけるサイトカインストームの新規バイオマーカーの検討",
    presenters: "田中健太郎, 山田優子, 鈴木明彦, 中村拓也",
    conference: "第51回日本集中治療医学会学術集会",
    year: 2024,
    month: 3,
    location: "札幌市",
    type: "oral",
    award: "優秀演題賞",
    abstract: "重症COVID-19患者におけるサイトカインストームの早期発見と重症度評価のための新規バイオマーカーについて検討した。当院ICUに入室した重症COVID-19患者50例を対象に、従来のマーカーと新規マーカーの比較検討を行った結果、新規マーカーが早期診断と予後予測に有用である可能性が示唆された。",
    isInternational: false,
    category: "clinical"
  },
  {
    id: "conf2",
    title: "Novel Biomarkers for Early Detection of Cytokine Storm in Severe COVID-19 Patients",
    presenters: "Tanaka K, Yamada Y, Suzuki A, Nakamura T",
    conference: "Society of Critical Care Medicine (SCCM) 2024 Critical Care Congress",
    year: 2024,
    month: 1,
    location: "Phoenix, Arizona, USA",
    type: "poster",
    abstract: "This study investigated novel biomarkers for early detection and severity assessment of cytokine storm in severe COVID-19 patients. We analyzed samples from 50 ICU patients with severe COVID-19 and compared conventional and novel markers. Results suggest that the novel markers may be useful for early diagnosis and prognosis prediction.",
    isInternational: true,
    category: "clinical"
  },
  {
    id: "conf3",
    title: "ECMOを用いた重症呼吸不全患者の管理における多職種連携の重要性",
    presenters: "山田優子, 田中健太郎, 吉田健一, 木村直子",
    conference: "第41回日本呼吸療法医学会学術集会",
    year: 2023,
    month: 7,
    location: "東京都",
    type: "oral",
    abstract: "ECMO管理における多職種連携の重要性について、当院ICUでの経験をもとに検討した。医師、看護師、臨床工学技士による専門的チーム医療の実践により、ECMO管理の安全性向上と合併症減少につながることが示された。",
    isInternational: false,
    category: "clinical"
  },
  {
    id: "conf4",
    title: "Prognostic Factors for Survival in Patients Requiring ECMO Support for Severe Acute Respiratory Failure",
    presenters: "Yamada Y, Tanaka K, Yoshida K, Kimura N",
    conference: "European Society of Intensive Care Medicine (ESICM) LIVES 2023",
    year: 2023,
    month: 10,
    location: "Milan, Italy",
    type: "oral",
    abstract: "This study aimed to identify prognostic factors for survival in patients requiring ECMO support for severe acute respiratory failure. We retrospectively analyzed 45 patients who received ECMO support at our institution. Pre-ECMO factors including age, immunocompromised status, and duration of mechanical ventilation were significantly associated with mortality.",
    isInternational: true,
    category: "clinical"
  },
  {
    id: "conf5",
    title: "早期リハビリテーション介入によるICU-AWの予防効果：単施設後ろ向き観察研究",
    presenters: "小川真理子, 山田優子, 田中健太郎",
    conference: "第50回日本集中治療医学会学術集会",
    year: 2023,
    month: 3,
    location: "広島市",
    type: "poster",
    abstract: "ICUにおける早期リハビリテーション介入のICU-AW予防効果について後ろ向きに検討した。ICU在室48時間以内にリハビリテーションを開始した群では、開始が遅れた群と比較してICU-AWの発生率が有意に低かった。",
    isInternational: false,
    category: "clinical"
  },
  {
    id: "conf6",
    title: "集中治療室における終末期医療の現状と課題：多職種へのアンケート調査",
    presenters: "高橋久美子, 田中健太郎, 山田優子",
    conference: "第20回日本クリティカルケア看護学会学術集会",
    year: 2023,
    month: 5,
    location: "大阪市",
    type: "oral",
    abstract: "集中治療室における終末期医療の現状と課題を明らかにするために、ICU勤務の医師、看護師など多職種にアンケート調査を実施。終末期医療に対する認識の職種間差異や教育ニーズを明らかにした。",
    isInternational: false,
    category: "education"
  },
  {
    id: "conf7",
    title: "急性呼吸窮迫症候群に対する腹臥位療法の効果と安全な実施法に関する検討",
    presenters: "鈴木明彦, 山田優子, 田中健太郎, 伊藤裕太",
    conference: "第45回日本呼吸療法医学会学術集会",
    year: 2022,
    month: 8,
    location: "名古屋市",
    type: "oral",
    abstract: "ARDSに対する腹臥位療法の効果と安全な実施法について検討した。当院ICUにおける腹臥位療法プロトコルの導入前後で、実施率と合併症発生率を比較した結果、プロトコル導入後は合併症が減少し、より安全に実施できることが示された。",
    isInternational: false,
    category: "clinical"
  },
  {
    id: "conf8",
    title: "Efficacy of a Multidisciplinary Rapid Response System in a Tertiary Care Hospital in Japan",
    presenters: "Tanaka K, Kobayashi M, Suzuki A",
    conference: "American Thoracic Society (ATS) International Conference 2022",
    year: 2022,
    month: 5,
    location: "San Francisco, California, USA",
    type: "poster",
    abstract: "This study evaluated the efficacy of a newly implemented multidisciplinary rapid response system (RRS) in reducing in-hospital cardiac arrests and unplanned ICU admissions. Implementation of the RRS was associated with a significant reduction in cardiac arrests outside the ICU and improved outcomes for patients requiring emergency intervention.",
    isInternational: true,
    category: "clinical"
  },
  {
    id: "conf9",
    title: "集中治療領域における薬剤師の役割拡大と業務の標準化",
    presenters: "松本亮平, 田中健太郎",
    conference: "第32回日本医療薬学会年会",
    year: 2022,
    month: 10,
    location: "福岡市",
    type: "symposium",
    abstract: "集中治療領域における薬剤師の役割拡大と業務の標準化について、当院ICUでの取り組みを報告。薬剤師の継続的な介入により、有害事象の減少や薬剤費削減など様々な効果が得られた。",
    isInternational: false,
    category: "education"
  },
  {
    id: "conf10",
    title: "集中治療科における初期研修医教育プログラムの開発と評価",
    presenters: "山田優子, 田中健太郎, 中村拓也",
    conference: "第54回日本医学教育学会大会",
    year: 2022,
    month: 7,
    location: "岡山市",
    type: "oral",
    abstract: "集中治療科における初期研修医教育プログラムの開発と評価について報告。シミュレーション教育やハンズオンセミナーを取り入れたプログラムの導入により、研修医の集中治療に関する知識と技術の向上が示された。",
    isInternational: false,
    category: "education"
  },
  {
    id: "conf11",
    title: "重症敗血症に伴う急性腎障害に対するCHDF導入タイミングの検討",
    presenters: "田中健太郎, 鈴木明彦, 吉田健一, 木村直子",
    conference: "第49回日本集中治療医学会学術集会",
    year: 2022,
    month: 3,
    location: "京都市",
    type: "oral",
    abstract: "重症敗血症に伴う急性腎障害に対するCHDF導入タイミングについて、当院ICUにおける5年間の後ろ向きコホート研究を行った。早期CHDF導入群と晩期導入群とを比較し、早期導入群での予後改善効果を検討した。",
    isInternational: false,
    category: "clinical"
  },
  {
    id: "conf12",
    title: "Implementation of a Multidisciplinary ICU Diary Program: Effects on Post-Intensive Care Syndrome",
    presenters: "Takahashi K, Yamada Y, Tanaka K",
    conference: "World Federation of Critical Care Nurses (WFCCN) Congress 2021",
    year: 2021,
    month: 11,
    location: "Virtual Conference",
    type: "oral",
    abstract: "This study evaluated the impact of a multidisciplinary ICU diary program on Post-Intensive Care Syndrome (PICS) in patients who survived critical illness. The implementation of ICU diaries was associated with reduced anxiety, depression, and post-traumatic stress symptoms among ICU survivors.",
    isInternational: true,
    category: "clinical"
  }
];

// 発表タイプに対応するラベルと色の設定
const typeConfig = {
  oral: {
    label: "口演",
    bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  },
  poster: {
    label: "ポスター",
    bgColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
  },
  symposium: {
    label: "シンポジウム",
    bgColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
  },
  workshop: {
    label: "ワークショップ",
    bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
  }
};

// カテゴリに対応するラベルと色の設定
const categoryConfig = {
  clinical: {
    label: "臨床研究",
    bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
  },
  basic: {
    label: "基礎研究",
    bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
  },
  education: {
    label: "教育研究",
    bgColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
  },
  other: {
    label: "その他",
    bgColor: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
  }
};

const ConferenceList = () => {
  const [activeType, setActiveType] = useState<string>("all");
  const [activeYear, setActiveYear] = useState<string>("all");
  const [selectedConf, setSelectedConf] = useState<Conference | null>(null);
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

  // 年度とタイプでフィルタリング
  const filteredConferences = conferenceData.filter((conf) => {
    const yearMatch = activeYear === "all" || conf.year.toString() === activeYear;
    const typeMatch = activeType === "all" || 
                      (activeType === "international" && conf.isInternational) ||
                      (activeType === "domestic" && !conf.isInternational) ||
                      conf.type === activeType ||
                      conf.category === activeType;
    return yearMatch && typeMatch;
  });

  // 学会開催年の一覧を取得（最新順）
  const years = Array.from(new Set(conferenceData.map(conf => conf.year))).sort((a, b) => b - a);

  // 学会発表の詳細モーダルを開く
  const openConfModal = (conf: Conference) => {
    setSelectedConf(conf);
    document.body.style.overflow = "hidden";
  };

  // 学会発表の詳細モーダルを閉じる
  const closeConfModal = () => {
    setSelectedConf(null);
    document.body.style.overflow = "auto";
  };

  // 月を日本語に変換する関数
  const getMonthInJapanese = (month: number) => {
    return `${month}月`;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            学会<span className="text-primary dark:text-primary-light">発表</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            国内外の学術集会で研究成果を発表しています。
          </p>

          {/* フィルターボタン：発表タイプ */}
          <div className="mb-4 mt-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">発表タイプ</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "すべて" },
                { id: "international", label: "国際学会" },
                { id: "domestic", label: "国内学会" },
                { id: "oral", label: "口演" },
                { id: "poster", label: "ポスター" },
                { id: "symposium", label: "シンポジウム" },
                { id: "workshop", label: "ワークショップ" }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeType === type.id
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* フィルターボタン：研究カテゴリー */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">研究カテゴリー</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "すべて" },
                { id: "clinical", label: "臨床研究" },
                { id: "basic", label: "基礎研究" },
                { id: "education", label: "教育研究" }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveType(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeType === category.id
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

        {/* 学会発表リスト */}
        <div className="space-y-6">
          {filteredConferences.length > 0 ? (
            filteredConferences.map((conference, index) => (
              <div
                key={conference.id}
                className="scroll-reveal bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openConfModal(conference)}
              >
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeConfig[conference.type].bgColor}`}>
                        {typeConfig[conference.type].label}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[conference.category].bgColor}`}>
                        {categoryConfig[conference.category].label}
                      </span>
                      {conference.isInternational && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                          国際学会
                        </span>
                      )}
                      {conference.award && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                          {conference.award}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {conference.year}年{getMonthInJapanese(conference.month)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {conference.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    発表者: {conference.presenters}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-400 mb-4 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{conference.conference} ({conference.location})</span>
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
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                該当する発表がありません
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                検索条件を変更してください
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 学会発表詳細モーダル */}
      {selectedConf && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeConfModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeConfig[selectedConf.type].bgColor}`}>
                  {typeConfig[selectedConf.type].label}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[selectedConf.category].bgColor}`}>
                  {categoryConfig[selectedConf.category].label}
                </span>
                {selectedConf.isInternational && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                    国際学会
                  </span>
                )}
                {selectedConf.award && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                    {selectedConf.award}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  {selectedConf.year}年{getMonthInJapanese(selectedConf.month)}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedConf.title}
              </h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  発表情報
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>発表者: {selectedConf.presenters}</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>学会: {selectedConf.conference}</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>開催地: {selectedConf.location}</span>
                  </p>
                </div>
              </div>
              
              {selectedConf.abstract && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    抄録
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    {selectedConf.abstract}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceList;