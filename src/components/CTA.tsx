import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          未来の救急・集中治療を一緒に創りませんか？
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-white/90 mb-10">
          大垣市民病院集中治療科では、情熱を持った医師を求めています。
          最先端の医療環境で、共に患者さんの命を救い、医療の発展に貢献しましょう。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            お問い合わせ
          </Link>
          <Link
            href="/education"
            className="px-8 py-4 bg-transparent text-white border-2 border-white font-medium rounded-full hover:bg-white/10 transition-all"
          >
            研修プログラムを見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;