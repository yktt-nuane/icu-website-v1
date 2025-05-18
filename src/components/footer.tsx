import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              大垣市民病院集中治療科
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              最高水準の救急・集中治療を提供し、若手医療者の育成に力を入れています。
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              〒503-8502<br />
              岐阜県大垣市南頬町4-86<br />
              TEL: 0584-81-3341
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              リンク
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  診療科について
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  ミッション・ビジョン
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  多職種チーム医療
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  スタッフ紹介
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  研究活動
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              関連リンク
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.ogaki-mh.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
                >
                  大垣市民病院 公式サイト
                </a>
              </li>
              <li>
                <a 
                  href="https://www.jsicm.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
                >
                  日本集中治療医学会
                </a>
              </li>
              <li>
                <a 
                  href="https://www.jaam.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
                >
                  日本救急医学会
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} 大垣市民病院集中治療科 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;