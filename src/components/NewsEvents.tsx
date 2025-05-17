"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: "news" | "seminar" | "publication";
  imageSrc: string;
};

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "ECMOシミュレーショントレーニングを開催しました",
    date: "2025年5月5日",
    excerpt: "研修医・若手医師向けにECMO導入と管理のシミュレーショントレーニングを実施しました。実機を使用した実践的なセッションで好評でした。",
    category: "seminar",
    imageSrc: "/images/news-ecmo.jpg",
  },
  {
    id: "2",
    title: "集中治療医学会中部支部会で研究発表を行いました",
    date: "2025年4月15日",
    excerpt: "当科の若手医師が「重症COVID-19患者におけるサイトカインストームの新規バイオマーカー」について研究発表を行い、優秀演題賞を受賞しました。",
    category: "publication",
    imageSrc: "/images/news-conference.jpg",
  },
  {
    id: "3",
    title: "ICU病床を2床増床しました",
    date: "2025年4月1日",
    excerpt: "増加する重症患者需要に対応するため、最新設備を備えたICU病床を2床増床しました。これにより集中治療室は計14床になります。",
    category: "news",
    imageSrc: "/images/news-icu.jpg",
  },
  {
    id: "4",
    title: "救急・集中治療セミナー参加者募集中",
    date: "2025年3月20日",
    excerpt: "6月開催予定の若手医師向け救急・集中治療基礎セミナーの参加者を募集しています。気道管理、呼吸・循環管理の実践的スキルを学べます。",
    category: "seminar",
    imageSrc: "/images/news-seminar.jpg",
  },
];

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "news":
      return "お知らせ";
    case "seminar":
      return "セミナー";
    case "publication":
      return "研究・発表";
    default:
      return category;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "news":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
    case "seminar":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
    case "publication":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
  }
};

const NewsEvents = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredNews = activeFilter === "all"
    ? newsData
    : newsData.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            最新情報
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            大垣市民病院集中治療科の最新ニュースとイベント情報をお届けします。
          </p>

          {/* フィルターボタン */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["all", "news", "seminar", "publication"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {filter === "all" ? "すべて" : getCategoryLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover-scale"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-primary dark:text-primary-light font-medium inline-flex items-center"
                  >
                    続きを読む
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="btn-secondary inline-flex items-center justify-center"
          >
            すべてのニュースを見る
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

export default NewsEvents;