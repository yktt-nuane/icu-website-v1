"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 relative mr-3">
                <Image
                  src="/hospital-logo.svg"
                  alt="大垣市民病院ロゴ"
                  fill
                  className={`transition-all duration-300 ${
                    scrolled ? "invert-0 dark:invert" : "invert-0 dark:invert"
                  }`}
                />
              </div>
              <span
                className={`font-semibold text-lg transition-all duration-300 ${
                  scrolled
                    ? "text-primary dark:text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                大垣市民病院集中治療科
              </span>
            </Link>
          </div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="/" label="ホーム" scrolled={scrolled} />
              <NavLink href="/about" label="診療科について" scrolled={scrolled} />
              <NavLink href="/staff" label="スタッフ紹介" scrolled={scrolled} />
              <NavLink href="/education" label="若手医師教育" scrolled={scrolled} />
              <NavLink href="/research" label="研究活動" scrolled={scrolled} />
              <NavLink href="/contact" label="お問い合わせ" scrolled={scrolled} />
            </div>
          </div>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all ${
                scrolled
                  ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-gray-800/20"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">メニューを開く</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        } fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl transition-all transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/" label="ホーム" setIsOpen={setIsOpen} />
          <MobileNavLink href="/about" label="診療科について" setIsOpen={setIsOpen} />
          <MobileNavLink href="/staff" label="スタッフ紹介" setIsOpen={setIsOpen} />
          <MobileNavLink href="/education" label="若手医師教育" setIsOpen={setIsOpen} />
          <MobileNavLink href="/research" label="研究活動" setIsOpen={setIsOpen} />
          <MobileNavLink href="/contact" label="お問い合わせ" setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, scrolled }: { href: string; label: string; scrolled: boolean }) => {
  return (
    <Link href={href}>
      <span
        className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
          scrolled
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "text-gray-900 dark:text-white hover:bg-white/10 dark:hover:bg-gray-800/10"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

const MobileNavLink = ({
  href,
  label,
  setIsOpen,
}: {
  href: string;
  label: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Link href={href} onClick={() => setIsOpen(false)}>
      <span className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
        {label}
      </span>
    </Link>
  );
};

export default NavBar;