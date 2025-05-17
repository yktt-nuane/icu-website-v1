import React from "react";
import Link from "next/link";
import { NAV_ITEMS, DEPARTMENT_INFO } from "@/constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0a] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[color:var(--primary)]">
                {DEPARTMENT_INFO.shortName}
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/emergency"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-base font-medium text-white"
            >
              救急情報
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="bg-white dark:bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded="false"
            >
              <span className="sr-only">メニューを開く</span>
              {/* Menu icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on mobile menu state */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/emergency"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700"
          >
            救急情報
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;