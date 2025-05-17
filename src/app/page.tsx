import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <Image
              src="/hospital-logo.svg"
              alt="大垣市民病院ロゴ"
              width={50}
              height={50}
              className="bg-white p-1 rounded"
              priority
            />
            <div>
              <h1 className="text-xl font-bold">大垣市民病院</h1>
              <p className="text-sm">集中治療科</p>
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6 justify-center text-sm">
              <li><Link href="#about" className="hover:underline">当科について</Link></li>
              <li><Link href="#team" className="hover:underline">スタッフ紹介</Link></li>
              <li><Link href="#facilities" className="hover:underline">施設・設備</Link></li>
              <li><Link href="#treatment" className="hover:underline">診療内容</Link></li>
              <li><Link href="#contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800">
          <div className="w-full h-full flex items-center justify-center text-white bg-blue-900 bg-opacity-70">
            <div className="text-center px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">大垣市民病院 集中治療科</h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                高度な医療と温かな看護で命を支えます
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-12 px-6">
        {/* 当科について */}
        <section id="about" className="mb-20">
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">当科について</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                大垣市民病院集中治療科は、生命の危機に瀕した重症患者さんに対して、24時間体制で高度な医療を提供しています。
                最新の医療機器と専門的な知識・技術を持つ医療スタッフが連携し、集中的な治療とケアを行っています。
              </p>
              <p>
                当科では、心臓血管外科、脳神経外科、救急科など様々な診療科と密に連携し、重症患者さんの救命と回復をサポートしています。
                また、家族の皆様への精神的サポートも大切にしており、治療方針の説明や面会の調整など、きめ細かな対応を心がけています。
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">ICUの基本情報</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">病床数:</span>
                  <span>12床（集中治療室10床、ハイケアユニット2床）</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">スタッフ:</span>
                  <span>医師8名、看護師30名、臨床工学技士5名</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">対応疾患:</span>
                  <span>重症感染症、多臓器不全、心肺停止後症候群、術後管理など</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">面会時間:</span>
                  <span>10:00～12:00、15:00～19:00（状況により変更あり）</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* スタッフ紹介 */}
        <section id="team" className="mb-20">
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">スタッフ紹介</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">診療体制</h3>
            <p>
              当科では、集中治療専門医を中心に、各専門分野のスペシャリストが協力して診療にあたっています。
              また、24時間体制で看護師と臨床工学技士が患者さんを見守り、迅速な対応を行っています。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* スタッフカード例 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold">山田 太郎</h3>
                <p className="text-sm text-gray-600 mb-2">集中治療科 部長</p>
                <p className="text-sm mb-3">
                  日本集中治療医学会専門医・指導医<br />
                  日本救急医学会専門医
                </p>
                <p className="text-sm text-gray-700">
                  重症感染症と多臓器不全の治療を専門としています。患者さん一人ひとりに最適な治療を提供できるよう努めています。
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold">佐藤 花子</h3>
                <p className="text-sm text-gray-600 mb-2">集中治療科 医長</p>
                <p className="text-sm mb-3">
                  日本集中治療医学会専門医<br />
                  日本麻酔科学会専門医
                </p>
                <p className="text-sm text-gray-700">
                  呼吸管理と術後管理を専門としています。早期回復を目指した周術期管理に力を入れています。
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold">鈴木 一郎</h3>
                <p className="text-sm text-gray-600 mb-2">看護師長</p>
                <p className="text-sm mb-3">
                  集中ケア認定看護師<br />
                  救急看護認定看護師
                </p>
                <p className="text-sm text-gray-700">
                  20年以上の集中治療室での経験を活かし、質の高い看護ケアの提供とスタッフ教育に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 施設・設備 */}
        <section id="facilities" className="mb-20">
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">施設・設備</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                当科では、最新の医療機器を導入し、重症患者さんの治療に必要な高度な医療を提供できる環境を整えています。
                全ての病床に生体情報モニタや人工呼吸器を設置し、24時間体制で患者さんの状態を監視しています。
              </p>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">主な設備</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>高機能人工呼吸器</li>
                <li>ECMO（体外式膜型人工肺）</li>
                <li>CHDF（持続的血液濾過透析）</li>
                <li>IABP（大動脈内バルーンパンピング）</li>
                <li>超音波診断装置</li>
                <li>ベッドサイドモニタリングシステム</li>
                <li>ベッドサイド血液浄化装置</li>
              </ul>
              <p>
                また、感染対策として陰圧室を完備し、院内感染の予防に努めています。
                面会エリアも整備し、ご家族の方々にもできるだけ快適に過ごしていただけるよう配慮しています。
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="aspect-w-16 aspect-h-9 w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-500">ICU施設画像</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-xs">設備1</p>
                </div>
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-xs">設備2</p>
                </div>
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-xs">設備3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 診療内容 */}
        <section id="treatment" className="mb-20">
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">診療内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">術後管理</h3>
              <p>
                心臓血管外科、脳神経外科、消化器外科などの大手術後の患者さんの全身管理を行っています。
                術後の回復を促進し、合併症を予防するための専門的なケアを提供しています。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">重症感染症</h3>
              <p>
                敗血症、肺炎などの重症感染症に対して、適切な抗菌薬治療と全身管理を行います。
                必要に応じて人工呼吸器や血液浄化療法などの高度な治療も実施しています。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">多臓器不全</h3>
              <p>
                ショックや敗血症による多臓器不全に対して、各臓器の機能をサポートする集中治療を提供しています。
                ECMOやCHDFなどの高度な医療機器を用いた治療も積極的に取り入れています。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">呼吸不全</h3>
              <p>
                ARDSなどの重症呼吸不全に対して、人工呼吸器による治療を行っています。
                難治性の呼吸不全には、ECMOを導入し救命に努めています。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">循環不全</h3>
              <p>
                心不全や心原性ショックなどの循環不全に対して、適切な薬物療法や機械的補助循環を行っています。
                IABPやPCPS（経皮的心肺補助装置）などを用いた高度な治療も提供しています。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">心肺停止後症候群</h3>
              <p>
                心肺停止後の患者さんに対して、脳機能保護を目的とした体温管理療法や循環・呼吸管理を行っています。
                神経学的予後改善を目指した集学的治療を提供しています。
              </p>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact" className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">お問い合わせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">連絡先</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">住所:</span>
                  <span>〒503-8502 岐阜県大垣市南頬町4-86</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">電話:</span>
                  <span>0584-81-3341（代表）</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">FAX:</span>
                  <span>0584-75-5715</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">メール:</span>
                  <span>icu@ogaki-mh.jp</span>
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-medium mb-1">面会について</h4>
                <p className="text-sm">
                  面会時間: 10:00～12:00、15:00～19:00<br />
                  ※患者さんの状態により変更する場合があります。<br />
                  ※感染対策のため、面会制限を行っている場合があります。詳細は病院へお問い合わせください。
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">アクセス</h3>
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center mb-3">
                <p className="text-gray-500">地図</p>
              </div>
              <p className="text-sm">
                <span className="font-medium">電車でお越しの場合:</span><br />
                JR大垣駅から徒歩15分、またはバスで5分（市民病院前下車）
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium">お車でお越しの場合:</span><br />
                名神高速道路大垣ICから約10分<br />
                ※病院内に有料駐車場があります。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-blue-800 text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">大垣市民病院 集中治療科</h2>
              <p className="text-sm mt-1">〒503-8502 岐阜県大垣市南頬町4-86</p>
              <p className="text-sm">TEL: 0584-81-3341（代表）</p>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-4 justify-center text-sm">
                <li><Link href="#about" className="hover:underline">当科について</Link></li>
                <li><Link href="#team" className="hover:underline">スタッフ紹介</Link></li>
                <li><Link href="#facilities" className="hover:underline">施設・設備</Link></li>
                <li><Link href="#treatment" className="hover:underline">診療内容</Link></li>
                <li><Link href="#contact" className="hover:underline">お問い合わせ</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 大垣市民病院 集中治療科 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}