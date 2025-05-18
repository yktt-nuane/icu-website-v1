// src/components/CTA.tsx
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          未来の集中治療を一緒に創る仲間を募集しています
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-white/90 mb-10">
          大垣市民病院集中治療科では、医師、看護師、臨床工学技士など、
          様々な職種の医療従事者を求めています。
          チーム医療の実践を通じて、共に患者さんの命を救い、医療の発展に貢献しましょう。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            お問い合わせ
          </Link>
          <Link
            href="/team"
            className="px-8 py-4 bg-transparent text-white border-2 border-white font-medium rounded-full hover:bg-white/10 transition-all"
          >
            チーム医療について詳しく
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;