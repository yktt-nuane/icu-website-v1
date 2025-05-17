# 大垣市民病院集中治療科 ウェブサイト

大垣市民病院集中治療科の公式ウェブサイトプロジェクトです。若手医療者向けに情報提供と教育プログラムの紹介を目的としたモダンで動的なウェブサイトを構築しています。

![大垣市民病院集中治療科ウェブサイト](./screenshot.png)

## 🌟 特徴

- 最新のNext.js 15とTypeScriptを使用した現代的なウェブサイト
- レスポンシブデザインによるすべてのデバイス対応
- アニメーションとインタラクティブな要素による優れたUX
- ダークモード対応
- SEO対策済み
- モダンでクリーンなUI

## 🛠️ 技術スタック

- **フレームワーク**: [Next.js 15.3.2](https://nextjs.org/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS 4](https://tailwindcss.com/)
- **フォント**: [Geist](https://vercel.com/font)
- **デプロイ**: [Vercel](https://vercel.com/)

## 📋 主要機能

- **ヒーローセクション**: 集中治療科の概要紹介
- **特長セクション**: 6つの特長をビジュアルで紹介
- **統計セクション**: アニメーションする診療実績の数値表示
- **研修医教育セクション**: 若手医師向け教育プログラムの紹介
- **ニュースセクション**: フィルタリング可能なニュース一覧
- **CTA**: 問い合わせと研修プログラム参加への誘導

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
│   ├── hospital-logo.svg # ロゴ
│   └── ...
├── src/                  # ソースコード
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   ├── globals.css   # グローバルスタイル
│   │   └── ...           # 他のページ
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── NavBar.tsx    # ナビゲーションバー
│   │   ├── Footer.tsx    # フッター
│   │   ├── Hero.tsx      # ヒーローセクション
│   │   └── ...           # その他のコンポーネント
│   └── ...
├── next.config.ts        # Next.js設定
├── package.json          # 依存パッケージと設定
├── tsconfig.json         # TypeScript設定
└── ...
```

## 🖼️ 画像の追加

サイトで使用する画像は `/public/images/` ディレクトリに配置してください。以下の画像が必要です：

- `icu-background.jpg` - ヒーローセクションの背景
- `medical-education.jpg` - 教育セクションの画像
- `news-ecmo.jpg` - ECMOトレーニングのニュース画像
- `news-conference.jpg` - 学会発表のニュース画像
- `news-icu.jpg` - ICU増床のニュース画像
- `news-seminar.jpg` - セミナーのニュース画像

画像は著作権フリーのものを使用するか、病院で撮影した画像を使用してください。

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
- ニュース記事は `src/components/NewsEvents.tsx` 内の `newsData` 配列を更新
- 統計情報は `src/components/Stats.tsx` 内の数値を更新

### スタイルの変更

- グローバルスタイルは `src/app/globals.css` で変更
- カラースキームは CSS 変数で定義されており、同じファイルで変更可能

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
