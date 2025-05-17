"use client";

import { useState, useEffect, useRef } from "react";

type StatItemProps = {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
};

const StatItem = ({ value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    // refの現在の値をキャプチャ
    const currentCountRef = countRef.current;

    if (currentCountRef) {
      observer.observe(currentCountRef);
    }

    return () => {
      // キャプチャした値を使用
      if (currentCountRef) {
        observer.unobserve(currentCountRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={countRef} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary dark:text-primary-light mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            診療実績
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            大垣市民病院集中治療科は西濃医療圏の中核として、年間多数の重症患者の治療にあたっています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={1200} label="年間ICU入室患者数" suffix="+" />
          <StatItem value={95} label="重症患者救命率" suffix="%" />
          <StatItem value={24} label="ECMO症例数/年" />
          <StatItem value={300} label="教育セミナー実施回数/年" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;