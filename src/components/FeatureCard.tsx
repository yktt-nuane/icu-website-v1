"use client";

import { useEffect, useRef } from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    // refの現在の値をキャプチャ
    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      // キャプチャした値を使用
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="scroll-reveal card p-6 flex flex-col items-center text-center sm:items-start sm:text-left hover-scale"
    >
      <div className="mb-4 text-primary dark:text-primary-light">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;