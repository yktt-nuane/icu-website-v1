// src/constants/index.ts
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

export type DepartmentInfo = {
  shortName: string;
  fullName: string;
  address: string;
  phone: string;
  email?: string;
};

export const DEPARTMENT_INFO: DepartmentInfo = {
  shortName: "大垣市民病院集中治療科",
  fullName: "大垣市民病院集中治療科",
  address: "〒503-8502 岐阜県大垣市南頬町4-86",
  phone: "0584-81-3341"
};