import React from "react";
import Link from "next/link";
import { NAV_ITEMS, DEPARTMENT_INFO } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-[color:var(--primary)] mb-4">
              {DEPARTMENT_INFO.name}
            </h2>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>{DEPARTMENT_INFO.address}</p>
              <p className="mt-2">
                TEL: {DEPARTMENT_INFO.phone}
                <br />
                FAX: {DEPARTMENT_INFO.fax}
              </p>
              <p className="mt-2">{DEPARTMENT_INFO.hours}</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              サイトマップ
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              関連リンク
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.ogaki-mh.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary)]"
                >
                  大垣市民病院
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.jsicm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary)]"
                >
                  日本集中治療医学会
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary)]"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} 大垣市民病院集中治療科. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;