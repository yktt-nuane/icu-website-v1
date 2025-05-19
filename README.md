# 大垣市民病院集中治療科 ウェブサイト

大垣市民病院集中治療科の公式ウェブサイトプロジェクトです。若手医療者向けに情報提供と教育プログラムの紹介を目的としたモダンで動的なウェブサイトを構築しています。

![大垣市民病院集中治療科ウェブサイト](./screenshot.png)

## 🌟 特徴

- 最新のNext.js 15とTypeScriptを使用した現代的なウェブサイト
- App Routerアーキテクチャによる効率的なルーティングとレンダリング
- レスポンシブデザインによるすべてのデバイス対応
- インターセクションオブザーバーを活用したスクロールアニメーション
- ダークモード対応
- SEO対策済み
- モダンでクリーンなUI

## 🛠️ 技術スタック

- **フレームワーク**: [Next.js 15.3.2](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS 4](https://tailwindcss.com/)
- **フォント**: [Geist](https://vercel.com/font) (Sans & Mono)
- **パッケージ管理**: npm/yarn
- **デプロイ**: [Vercel](https://vercel.com/)

## 📋 主要機能

- **ヒーローセクション**: 集中治療科の概要紹介 (アニメーション付き)
- **特長セクション**: 6つの特長をビジュアルで紹介 (スクロールアニメーション)
- **ミッション・ビジョン**: 診療科の理念と価値観の紹介
- **多職種チーム医療**: チーム医療の特徴と利点の紹介
  - チーム医療の哲学と基本原則
  - 多職種連携の実践方法
  - 効果的なコミュニケーションの取り組み
  - 職種間教育と研修活動
- **統計セクション**: アニメーションする診療実績の数値表示
- **ニュースセクション**: フィルタリング可能なニュース一覧
- **CTA**: 問い合わせと研修プログラム参加への誘導
- **レスポンシブナビゲーション**: モバイル/デスクトップに最適化されたナビゲーション
- **診療科について**: 医師体制と多職種連携の詳細紹介
  - 集中治療専門医と非専門医の配置状況
  - 24時間365日の勤務体制
  - 多職種カンファレンスの概要
  - 各専門職種の役割と連携体制
- **スタッフ紹介**: 各職種のスタッフ詳細情報
- **研究活動**: 論文発表や学会発表の実績紹介

## 🚀 セットアップと開発

### 前提条件

- Node.js 20.x以上
- npm 10.x以上または yarn 1.22.x以上

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/your-username/ogaki-icu-website.git
cd ogaki-icu-website

# 依存パッケージのインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
# 開発サーバーの起動
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認できます。

### ビルド

```bash
# 本番用ビルド
npm run build
# または
yarn build

# ビルドバージョンの実行
npm run start
# または
yarn start
```

## 📁 プロジェクト構造

```
/
├── public/               # 静的ファイル
│   ├── images/           # 画像ファイル
│   │   ├── icu-background.jpg          # ヒーローセクション背景
│   │   ├── team-background.jpg         # チーム医療ページ背景
│   │   ├── team-philosophy.jpg         # チーム医療の哲学画像
│   │   ├── team-communication.jpg      # チームコミュニケーション画像
│   │   ├── multidisciplinary-conference.jpg # 多職種カンファレンス画像
│   │   ├── case-conference.jpg         # 症例検討会画像
│   │   ├── journal-club.jpg            # ジャーナルクラブ画像
│   │   ├── simulation.jpg              # シミュレーション研修画像
│   │   ├── educational-lecture.jpg     # 教育講演画像
│   │   ├── skill-workshop.jpg          # スキルワークショップ画像
│   │   ├── debriefing.jpg              # デブリーフィング画像
│   │   ├── about-background.jpg        # 診療科紹介ページ背景
│   │   ├── icu-specialists.jpg         # 集中治療専門医の画像
│   │   ├── multidisciplinary-doctors.jpg # 多職種医師チームの画像
│   │   ├── medical-education.jpg       # 教育セクション画像
│   │   ├── team-care.jpg               # チーム医療セクション画像
│   │   ├── news-conference.jpg         # ニュース画像
│   │   └── news-seminar.jpg            # セミナー画像
│   ├── hospital-logo.svg # 病院ロゴ
│   └── ...
├── src/                  # ソースコード
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   ├── globals.css   # グローバルスタイル
│   │   ├── about/        # 診療科について
│   │   │   └── page.tsx  # 診療科紹介ページ
│   │   ├── team/         # 多職種チーム医療
│   │   │   └── page.tsx  # チーム医療ページ
│   │   ├── mission/      # ミッション・ビジョン
│   │   ├── staff/        # スタッフ紹介
│   │   ├── research/     # 研究活動
│   │   ├── news/         # ニュース
│   │   ├── education/    # 教育プログラム
│   │   ├── contact/      # お問い合わせ
│   │   └── ...           # その他のページ
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── NavBar.tsx    # ナビゲーションバー (クライアントコンポーネント)
│   │   ├── Footer.tsx    # フッター
│   │   ├── Hero.tsx      # ヒーローセクション (クライアントコンポーネント)
│   │   ├── Features.tsx  # 特長セクション
│   │   ├── FeatureCard.tsx # 特長カード (クライアントコンポーネント)
│   │   ├── MissionVision.tsx # ミッション・ビジョン (クライアントコンポーネント)
│   │   ├── TeamCare.tsx  # チーム医療 (クライアントコンポーネント)
│   │   ├── Stats.tsx     # 統計セクション (クライアントコンポーネント)
│   │   ├── NewsEvents.tsx # ニュースイベント (クライアントコンポーネント)
│   │   ├── Education.tsx # 教育セクション (クライアントコンポーネント)
│   │   ├── CTA.tsx       # コールトゥアクション
│   │   ├── about/        # 診療科紹介関連コンポーネント
│   │   │   ├── AboutHero.tsx     # 診療科紹介ヒーロー
│   │   │   ├── AboutTeam.tsx     # 医師体制紹介 
│   │   │   └── AboutMultidisciplinary.tsx # 多職種連携紹介
│   │   ├── team/         # チーム医療関連コンポーネント
│   │   │   ├── TeamHero.tsx       # チーム医療ヒーロー
│   │   │   ├── TeamPhilosophy.tsx # チーム医療の哲学
│   │   │   ├── TeamCollaboration.tsx # 多職種連携の実践
│   │   │   ├── TeamCommunication.tsx # チームコミュニケーション
│   │   │   └── TeamEducation.tsx     # 職種間教育と研修
│   │   ├── staff/        # スタッフ紹介関連コンポーネント
│   │   │   ├── StaffHero.tsx      # スタッフ紹介ヒーロー
│   │   │   ├── StaffDirectory.tsx # スタッフディレクトリ
│   │   │   └── StaffMessage.tsx   # 診療部長メッセージ
│   │   ├── research/     # 研究活動関連コンポーネント
│   │   │   ├── ResearchHero.tsx      # 研究活動ヒーロー
│   │   │   ├── ResearchOverview.tsx  # 研究概要
│   │   │   ├── PublicationList.tsx   # 論文リスト
│   │   │   └── ConferenceList.tsx    # 学会発表リスト
│   │   ├── mission/      # ミッション・ビジョン関連コンポーネント
│   │   │   ├── MissionHero.tsx      # ミッションヒーロー
│   │   │   ├── MissionMain.tsx      # ミッション詳細
│   │   │   ├── ValueCards.tsx       # 価値観カード
│   │   │   └── MissionStrategy.tsx  # 戦略的取り組み
│   │   └── ...           # その他のコンポーネント
│   ├── constants/        # 定数ファイル
│   │   └── index.ts      # ナビゲーション項目・組織情報など
│   └── ...
├── eslint.config.mjs     # ESLint設定
├── next.config.ts        # Next.js設定
├── package.json          # 依存パッケージと設定
├── postcss.config.mjs    # PostCSS設定
├── tsconfig.json         # TypeScript設定
├── .gitignore            # Gitの除外ファイル設定
└── ...
```

## 🔄 コンポーネントとデータフロー

- **クライアントコンポーネント**: `"use client"` ディレクティブを使用したインタラクティブなコンポーネント
  - `NavBar.tsx` - スクロール検出とモバイルメニュー状態管理
  - `Hero.tsx` - ロード時のアニメーション効果
  - `MissionVision.tsx` - スクロールアニメーション
  - `Stats.tsx` - カウントアップアニメーション
  - `FeatureCard.tsx` - 遅延アニメーション効果
  - `NewsEvents.tsx` - フィルタリング機能
  - `TeamHero.tsx` - チーム医療ページのヒーローセクション (アニメーション付き)
  - `TeamPhilosophy.tsx` - チーム医療の哲学 (スクロールアニメーション)
  - `TeamCollaboration.tsx` - 多職種連携の実践 (フェード効果とカード)
  - `TeamCommunication.tsx` - 効果的なコミュニケーション (スクロールアニメーション)
  - `TeamEducation.tsx` - 職種間教育と研修 (インタラクティブな教育活動表示)

- **サーバーコンポーネント**: `page.tsx` や一部のUIコンポーネント
  - 優れたパフォーマンスとSEO最適化のため、静的に生成できるコンポーネントはサーバーコンポーネントとして実装

## 🖼️ 画像の追加

サイトで使用する画像は `/public/images/` ディレクトリに配置してください。以下の画像が必要です：

### メインページと共通部分
- `icu-background.jpg` - ホームページのヒーローセクションの背景
- `team-care.jpg` - チーム医療セクションの画像
- `news-conference.jpg` - 学会発表のニュース画像
- `news-seminar.jpg` - セミナーのニュース画像

### 診療科紹介ページ
- `about-background.jpg` - 診療科紹介ページの背景
- `icu-specialists.jpg` - 集中治療専門医の画像
- `multidisciplinary-doctors.jpg` - 多職種医師チームの画像
- `multidisciplinary-conference.jpg` - 多職種カンファレンスの画像
- `medical-education.jpg` - 教育セクションの画像

### チーム医療ページ
- `team-background.jpg` - チーム医療ページの背景
- `team-philosophy.jpg` - チーム医療の哲学を表す画像
- `team-communication.jpg` - チームコミュニケーションの様子
- `case-conference.jpg` - 症例検討会の様子
- `journal-club.jpg` - ジャーナルクラブの様子
- `simulation.jpg` - シミュレーション研修の様子
- `educational-lecture.jpg` - 教育講演の様子
- `skill-workshop.jpg` - スキルワークショップの様子
- `debriefing.jpg` - デブリーフィングの様子

画像生成AIを利用する場合は、以下のようなプロンプトが有効です：

```
A professional Japanese ICU team meeting in a modern hospital setting. Multiple healthcare professionals (doctors, nurses, clinical engineers) gathered around a patient bed or conference table discussing treatment plans. Clean, modern medical environment with blue color accents. No identifiable patients. Japanese ethnicity for staff members. Photorealistic style.
```

あるいは、著作権フリーのものを使用するか、病院で撮影した画像を使用してください。

## 📤 デプロイ

このプロジェクトは [Vercel](https://vercel.com/) へのデプロイを推奨します。

```bash
# Vercel CLIのインストール
npm install -g vercel

# デプロイ
vercel
```

または、Vercelダッシュボードから GitHub リポジトリを接続してデプロイすることもできます。

## 📝 カスタマイズ

### 内容の更新

- `src/components/` 内の各コンポーネントファイルを編集して内容を更新
- ナビゲーション項目は `src/constants/index.ts` の `NAV_ITEMS` を更新
- ニュース記事は `src/components/NewsEvents.tsx` 内の `newsData` 配列を更新
- 統計情報は `src/components/Stats.tsx` 内の数値を更新
- 医師体制情報は `src/components/about/AboutTeam.tsx` の内容を更新
- 多職種連携情報は `src/components/about/AboutMultidisciplinary.tsx` の内容を更新
- チーム教育活動は `src/components/team/TeamEducation.tsx` の `educationEvents` 配列を更新

### スタイルの変更

- グローバルスタイルは `src/app/globals.css` で変更
- カラースキームはCSS変数で定義されており、同じファイルの`:root`セレクタで変更可能
- ダークモード設定は `@media (prefers-color-scheme: dark)` 内で定義

### アニメーションのカスタマイズ

- スクロールアニメーションは `src/app/globals.css` の `.scroll-reveal` クラスで設定
- カウントアップアニメーションは `src/components/Stats.tsx` で調整可能
- ヒーローセクションのアニメーションは `src/components/Hero.tsx` と `globals.css` で設定

## 🤝 貢献

このプロジェクトへの貢献は歓迎します。バグ報告、機能追加、デザイン改善などの提案があれば、Issues または Pull Requests を作成してください。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📞 連絡先

大垣市民病院集中治療科  
〒503-8502 岐阜県大垣市南頬町4-86  
TEL: 0584-81-3341

---

© 2025 大垣市民病院集中治療科 All Rights Reserved.