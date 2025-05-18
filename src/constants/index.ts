// src/constants/index.ts のNAV_ITEMS部分を修正
export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "ホーム",
    href: "/",
  },
  {
    label: "診療科について",
    href: "/about",
  },
  {
    label: "ミッション・ビジョン",
    href: "/mission",
  },
  {
    label: "多職種チーム医療",
    href: "/team",
  },
  {
    label: "スタッフ紹介",
    href: "/staff",
  },
  {
    label: "研究活動",
    href: "/research",
  },
  {
    label: "お問い合わせ",
    href: "/contact",
  },
];