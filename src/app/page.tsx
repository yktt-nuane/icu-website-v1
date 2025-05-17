import React from "react";
import Link from "next/link";
import { HERO_CONTENT, FEATURE_ITEMS, ABOUT_CONTENT } from "@/constants";

export default function Home() {
  // Icon mapping using SVG instead of lucide-react
  const iconMap: Record<string, React.ReactNode> = {
    clock: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[color:var(--primary)]">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    activity: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[color:var(--primary)]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[color:var(--primary)]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    "alert-circle": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[color:var(--primary)]">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    ),
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[color:var(--primary)] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary-dark)] to-[color:var(--primary)] opacity-90"></div>
          {/* Background image would go here in production */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {HERO_CONTENT.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6">{HERO_CONTENT.subtitle}</p>
              <p className="text-lg mb-8 max-w-xl">
                {HERO_CONTENT.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary bg-white text-[color:var(--primary)] hover:bg-gray-100">
                  詳しく見る
                </Link>
                <Link href="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Placeholder for hero image */}
              <div className="w-full h-96 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white">医療スタッフの画像が入ります</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <h2 className="section-title text-center">私たちの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {FEATURE_ITEMS.map((item, index) => (
              <div
                key={index}
                className="card flex flex-col items-center text-center p-6"
              >
                <div className="mb-4">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">{ABOUT_CONTENT.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {ABOUT_CONTENT.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {ABOUT_CONTENT.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[color:var(--primary)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary inline-block">
                詳しく見る
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              {/* Placeholder for about image */}
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400">
                  設備の画像が入ります
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">お知らせ・イベント</h2>
            <Link
              href="/news"
              className="text-[color:var(--primary)] hover:underline"
            >
              すべて見る
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  2025年5月{item + 10}日
                </div>
                <h3 className="text-lg font-bold mb-2">
                  集中治療科スタッフ勉強会のお知らせ
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  最新の人工呼吸器管理に関する勉強会を開催します。医療スタッフの方々はぜひご参加ください。
                </p>
                <Link
                  href={`/news/${item}`}
                  className="text-[color:var(--primary)] hover:underline"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[color:var(--primary)] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="max-w-2xl mx-auto mb-8">
            集中治療科についてのご質問やお問い合わせは、お電話またはメールフォームからお気軽にご連絡ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary bg-white text-[color:var(--primary)] hover:bg-gray-100"
            >
              お問い合わせフォーム
            </Link>
            <a
              href="tel:0584-81-3341"
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              TEL: 0584-81-3341
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}