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
      label: "医療スタッフ",
      href: "/staff",
    },
    {
      label: "患者さまへ",
      href: "/for-patients",
    },
    {
      label: "施設・設備",
      href: "/facilities",
    },
    {
      label: "お問い合わせ",
      href: "/contact",
    },
  ];
  
  export const DEPARTMENT_INFO = {
    name: "大垣市民病院集中治療科",
    shortName: "大垣市民病院ICU",
    address: "〒503-8502 岐阜県大垣市南頬町4-86",
    phone: "0584-81-3341",
    fax: "0584-81-3633",
    email: "icu@ogaki-mh.jp",
    hours: "面会時間: 15:00〜19:00（平日）, 13:00〜19:00（土日祝）",
  };
  
  export const HERO_CONTENT = {
    title: "最先端の集中治療",
    subtitle: "重症患者さまへの高度医療の提供と専門的ケア",
    description:
      "大垣市民病院集中治療科（ICU）では、高度な医療技術と専門的な知識を持つチームが、重症患者様の24時間体制での集中的治療とケアを行っています。",
  };
  
  export const FEATURE_ITEMS = [
    {
      title: "24時間体制",
      description: "専門医師と看護師による24時間365日の集中ケア体制",
      icon: "clock",
    },
    {
      title: "最新医療機器",
      description: "最先端の医療機器による高度な治療と患者モニタリング",
      icon: "activity",
    },
    {
      title: "専門チーム",
      description: "集中治療専門医、看護師、臨床工学技士などの多職種連携",
      icon: "users",
    },
    {
      title: "救急対応",
      description: "緊急時の迅速な対応と救命処置",
      icon: "alert-circle",
    },
  ];
  
  export const ABOUT_CONTENT = {
    title: "集中治療科について",
    description:
      "大垣市民病院集中治療科は、重症患者さまに対する高度な集中治療を提供する部門です。最新の医療技術と設備を駆使し、患者さま一人ひとりに最適な治療とケアを行っています。",
    stats: [
      { value: "12", label: "ベッド数" },
      { value: "24", label: "専門医・看護師" },
      { value: "365", label: "年中無休" },
    ],
  };