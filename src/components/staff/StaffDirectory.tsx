// src/components/staff/StaffDirectory.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type StaffMember = {
  id: string;
  name: string;
  nameEn: string;
  position: string;
  specialties: string[];
  certifications: string[];
  message?: string;
  education?: string[];
  career?: string[];
  category: "doctor" | "nurse" | "ce" | "other";
};

const staffData: StaffMember[] = [
  // 医師
  {
    id: "tanaka",
    name: "田中 健太郎",
    nameEn: "Kentaro Tanaka",
    position: "集中治療科 診療部長",
    specialties: ["集中治療医学", "救急医学", "呼吸管理", "ECMO管理"],
    certifications: ["集中治療専門医", "救急科専門医", "麻酔科専門医", "ECMO専門医"],
    message: "重症患者さんの治療には、最新の医学知識と多職種連携による総力戦が欠かせません。大垣市民病院集中治療科では、24時間365日、患者さんの救命と機能予後の改善のために全力を尽くします。",
    education: [
      "2000年 岐阜大学医学部 卒業",
      "2008年 米国マサチューセッツ総合病院 集中治療フェローシップ",
    ],
    career: [
      "2000年 岐阜大学医学部附属病院 初期研修医",
      "2002年 名古屋大学医学部附属病院 麻酔科",
      "2006年 大阪大学医学部附属病院 集中治療部",
      "2010年 京都大学医学部附属病院 集中治療部 助教",
      "2015年 大垣市民病院 集中治療科 医長",
      "2020年 現職"
    ],
    category: "doctor"
  },
  {
    id: "yamada",
    name: "山田 優子",
    nameEn: "Yuko Yamada",
    position: "集中治療科 医長",
    specialties: ["集中治療医学", "循環器集中治療", "心臓血管外科周術期管理"],
    certifications: ["集中治療専門医", "循環器専門医", "心臓血管外科専門医"],
    message: "集中治療室は、最先端の医療技術と温かい人間味が共存する場所です。患者さん一人ひとりの生命力を引き出し、回復へと導くサポートをしています。",
    education: [
      "2005年 東京大学医学部 卒業",
      "2012年 ドイツ ハートセンター ベルリン 臨床留学"
    ],
    career: [
      "2005年 東京大学医学部附属病院 初期研修医",
      "2007年 東京大学医学部附属病院 心臓外科",
      "2013年 国立循環器病研究センター 集中治療科",
      "2018年 大垣市民病院 集中治療科 医長"
    ],
    category: "doctor"
  },
  {
    id: "suzuki",
    name: "鈴木 明彦",
    nameEn: "Akihiko Suzuki",
    position: "集中治療科 医師",
    specialties: ["集中治療医学", "救急医学", "感染症管理"],
    certifications: ["集中治療専門医", "救急科専門医", "感染症専門医"],
    education: [
      "2010年 名古屋大学医学部 卒業"
    ],
    career: [
      "2010年 名古屋大学医学部附属病院 初期研修医",
      "2012年 名古屋第二赤十字病院 救命救急センター",
      "2016年 名古屋大学医学部附属病院 感染症科",
      "2019年 大垣市民病院 集中治療科 医師"
    ],
    category: "doctor"
  },
  {
    id: "kobayashi",
    name: "小林 真由美",
    nameEn: "Mayumi Kobayashi",
    position: "集中治療科 医師",
    specialties: ["集中治療医学", "神経集中治療", "脳神経外科周術期管理"],
    certifications: ["集中治療専門医", "脳神経外科専門医"],
    education: [
      "2012年 京都大学医学部 卒業"
    ],
    career: [
      "2012年 京都大学医学部附属病院 初期研修医",
      "2014年 京都大学医学部附属病院 脳神経外科",
      "2018年 大阪市立総合医療センター 集中治療部",
      "2021年 大垣市民病院 集中治療科 医師"
    ],
    category: "doctor"
  },
  {
    id: "nakamura",
    name: "中村 拓也",
    nameEn: "Takuya Nakamura",
    position: "集中治療科 医師（後期研修医）",
    specialties: ["集中治療医学", "救急医学"],
    certifications: [],
    education: [
      "2020年 岐阜大学医学部 卒業"
    ],
    career: [
      "2020年 大垣市民病院 初期研修医",
      "2022年 大垣市民病院 集中治療科 後期研修医"
    ],
    category: "doctor"
  },
  
  // 看護師
  {
    id: "saito",
    name: "斎藤 美咲",
    nameEn: "Misaki Saito",
    position: "集中治療室 看護師長",
    specialties: ["集中治療看護", "ECMO看護", "重症患者管理"],
    certifications: ["集中ケア認定看護師", "ECMOスペシャリスト"],
    message: "当ICUでは患者さん一人ひとりに寄り添った看護を心がけています。重症であっても、その方らしく過ごせる環境づくりに取り組んでいます。",
    education: [
      "2000年 岐阜県立看護大学 卒業",
      "2010年 日本看護協会 集中ケア認定看護師教育課程 修了"
    ],
    career: [
      "2000年 大垣市民病院 看護部",
      "2005年 大垣市民病院 集中治療室",
      "2015年 大垣市民病院 集中治療室 副看護師長",
      "2020年 現職"
    ],
    category: "nurse"
  },
  {
    id: "ito",
    name: "伊藤 裕太",
    nameEn: "Yuta Ito",
    position: "集中治療室 副看護師長",
    specialties: ["集中治療看護", "呼吸療法", "早期リハビリテーション"],
    certifications: ["集中ケア認定看護師", "呼吸療法認定士"],
    education: [
      "2005年 愛知医科大学看護学部 卒業",
      "2012年 日本看護協会 集中ケア認定看護師教育課程 修了"
    ],
    career: [
      "2005年 名古屋大学医学部附属病院 看護部",
      "2010年 大垣市民病院 集中治療室",
      "2018年 現職"
    ],
    category: "nurse"
  },
  {
    id: "takahashi",
    name: "高橋 久美子",
    nameEn: "Kumiko Takahashi",
    position: "集中治療室 看護師",
    specialties: ["集中治療看護", "終末期ケア", "家族ケア"],
    certifications: ["緩和ケア認定看護師"],
    education: [
      "2008年 三重大学医学部看護学科 卒業",
      "2015年 日本看護協会 緩和ケア認定看護師教育課程 修了"
    ],
    career: [
      "2008年 三重大学医学部附属病院 看護部",
      "2013年 大垣市民病院 緩和ケア病棟",
      "2017年 大垣市民病院 集中治療室"
    ],
    category: "nurse"
  },
  
  // 臨床工学技士
  {
    id: "yoshida",
    name: "吉田 健一",
    nameEn: "Kenichi Yoshida",
    position: "臨床工学部 技士長",
    specialties: ["ECMO管理", "CHDF管理", "人工呼吸器管理"],
    certifications: ["ECMOスペシャリスト", "3学会合同呼吸療法認定士"],
    message: "高度な医療機器を安全に操作し、患者さんの治療をサポートするのが私たちの役割です。24時間体制で緊急対応も行っています。",
    education: [
      "1998年 名古屋大学工学部 卒業",
      "2000年 名古屋大学大学院工学研究科 修了",
      "2003年 愛知県臨床工学技士専門学校 卒業"
    ],
    career: [
      "2003年 名古屋第一赤十字病院 臨床工学部",
      "2008年 大垣市民病院 臨床工学部",
      "2015年 現職"
    ],
    category: "ce"
  },
  {
    id: "kimura",
    name: "木村 直子",
    nameEn: "Naoko Kimura",
    position: "臨床工学部 主任",
    specialties: ["人工呼吸器管理", "CHDF管理", "医療機器教育"],
    certifications: ["3学会合同呼吸療法認定士", "医療機器情報コミュニケータ（MDIC）"],
    education: [
      "2005年 名古屋工業大学工学部 卒業",
      "2007年 愛知県臨床工学技士専門学校 卒業"
    ],
    career: [
      "2007年 岐阜大学医学部附属病院 臨床工学部",
      "2012年 大垣市民病院 臨床工学部",
      "2019年 現職"
    ],
    category: "ce"
  },
  
  // その他の職種
  {
    id: "matsumoto",
    name: "松本 亮平",
    nameEn: "Ryohei Matsumoto",
    position: "薬剤部 ICU担当薬剤師",
    specialties: ["集中治療薬物療法", "TDM", "感染症治療薬"],
    certifications: ["集中治療専門薬剤師", "感染制御専門薬剤師"],
    education: [
      "2008年 京都薬科大学 卒業",
      "2010年 京都大学大学院薬学研究科 修了"
    ],
    career: [
      "2010年 大阪市立総合医療センター 薬剤部",
      "2015年 大垣市民病院 薬剤部",
      "2018年 現職"
    ],
    category: "other"
  },
  {
    id: "ogawa",
    name: "小川 真理子",
    nameEn: "Mariko Ogawa",
    position: "リハビリテーション部 ICU担当理学療法士",
    specialties: ["早期離床", "呼吸理学療法", "ICU-AW予防"],
    certifications: ["3学会合同呼吸療法認定士", "集中治療リハビリテーション専門士"],
    education: [
      "2010年 名古屋大学医学部保健学科 卒業",
      "2012年 名古屋大学大学院医学系研究科 修了"
    ],
    career: [
      "2012年 名古屋第二赤十字病院 リハビリテーション部",
      "2016年 大垣市民病院 リハビリテーション部",
      "2019年 現職"
    ],
    category: "other"
  },
  {
    id: "kato",
    name: "加藤 由美",
    nameEn: "Yumi Kato",
    position: "栄養管理部 ICU担当管理栄養士",
    specialties: ["ICU栄養管理", "早期経腸栄養", "NST"],
    certifications: ["NST専門療法士", "病態栄養専門管理栄養士"],
    education: [
      "2012年 名古屋学芸大学管理栄養学部 卒業"
    ],
    career: [
      "2012年 愛知県厚生連海南病院 栄養科",
      "2017年 大垣市民病院 栄養管理部",
      "2020年 現職"
    ],
    category: "other"
  }
];

// カテゴリーに対応するカラーとアイコンの設定
const categoryConfig = {
  doctor: {
    bgColor: "bg-blue-600",
    textColor: "text-blue-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  nurse: {
    bgColor: "bg-green-600",
    textColor: "text-green-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  ce: {
    bgColor: "bg-purple-600",
    textColor: "text-purple-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  other: {
    bgColor: "bg-orange-600",
    textColor: "text-orange-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
};

const StaffDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
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

  const filteredStaff = activeCategory === "all"
    ? staffData
    : staffData.filter((staff) => staff.category === activeCategory);

  const openStaffModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    document.body.style.overflow = "hidden";
  };

  const closeStaffModal = () => {
    setSelectedStaff(null);
    document.body.style.overflow = "auto";
  };

  // イニシャルを取得する関数
  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0)).join('');
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            集中治療科<span className="text-primary dark:text-primary-light">スタッフ</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            救急・集中治療の専門知識と経験を持ったスタッフが、チーム一丸となって重症患者さんの診療にあたっています。
          </p>

          {/* カテゴリフィルター */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: "all", label: "すべて" },
              { id: "doctor", label: "医師" },
              { id: "nurse", label: "看護師" },
              { id: "ce", label: "臨床工学技士" },
              { id: "other", label: "その他スタッフ" }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((staff, index) => (
            <div
              key={staff.id}
              className={`scroll-reveal bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover-scale`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openStaffModal(staff)}
            >
              <div className="flex items-center p-6">
                <div className={`w-16 h-16 rounded-full ${categoryConfig[staff.category].bgColor} text-white flex items-center justify-center mr-4 flex-shrink-0`}>
                  {categoryConfig[staff.category].icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {staff.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {staff.nameEn}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {staff.position}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-1 mb-4">
                  {staff.specialties.slice(0, 2).map((specialty, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {specialty}
                    </span>
                  ))}
                  {staff.specialties.length > 2 && (
                    <span className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      +{staff.specialties.length - 2}
                    </span>
                  )}
                </div>
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
          ))}
        </div>
      </div>

      {/* スタッフ詳細モーダル */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeStaffModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className={`w-20 h-20 rounded-full ${categoryConfig[selectedStaff.category].bgColor} text-white flex items-center justify-center mr-6`}>
                  {categoryConfig[selectedStaff.category].icon}
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[selectedStaff.category].textColor} bg-${selectedStaff.category === "doctor" ? "blue" : selectedStaff.category === "nurse" ? "green" : selectedStaff.category === "ce" ? "purple" : "orange"}-100 dark:bg-${selectedStaff.category === "doctor" ? "blue" : selectedStaff.category === "nurse" ? "green" : selectedStaff.category === "ce" ? "purple" : "orange"}-900/30`}>
                      {selectedStaff.category === "doctor" ? "医師" : 
                       selectedStaff.category === "nurse" ? "看護師" : 
                       selectedStaff.category === "ce" ? "臨床工学技士" : "その他スタッフ"}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedStaff.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {selectedStaff.nameEn}
                  </p>
                </div>
              </div>
              
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {selectedStaff.position}
              </p>
              
              {selectedStaff.message && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    メッセージ
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedStaff.message}
                  </p>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  専門分野
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStaff.specialties.map((specialty, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  資格・認定
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStaff.certifications.length > 0 ? (
                    selectedStaff.certifications.map((cert, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {cert}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">専門医資格取得を目指して研修中</p>
                  )}
                </div>
              </div>
              
              {selectedStaff.education && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    学歴
                  </h4>
                  <ul className="space-y-1">
                    {selectedStaff.education.map((edu, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedStaff.career && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    経歴
                  </h4>
                  <ul className="space-y-1">
                    {selectedStaff.career.map((career, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StaffDirectory;