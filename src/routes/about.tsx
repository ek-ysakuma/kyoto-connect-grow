import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTA } from "@/components/site/CTA";
import { company } from "@/lib/site-data";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `会社案内 | ${company.name}` },
      {
        name: "description",
        content:
          "株式会社京成電子の会社概要・沿革・拠点情報。1967年創業、横浜・戸塚区から回転灯安全報知システム、LED照明、車両用ハーネス、バーインボード実装で社会の安全を支える電子機器メーカーです。",
      },
      { property: "og:title", content: `会社案内 | ${company.name}` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const info = [
  { k: "会社名", v: company.name },
  { k: "英文表記", v: company.nameEn },
  { k: "設立", v: "1967年（昭和42年）7月" },
  { k: "資本金", v: "1,000万円" },
  { k: "従業員数", v: "12名" },
  { k: "本社所在地", v: company.address },
  { k: "電話番号", v: `${company.tel}（FAX：${company.fax}）` },
  {
    k: "事業内容",
    v: "回転灯安全報知システムの設計・施工・販売／小型LED照明の設計・製造・販売／車両用オプション機器・ワイヤーハーネスの設計・製造／バーインボード部品実装受託",
  },
  {
    k: "主要取引先",
    v: "いすゞ車体（株）／市光工業（株）／（株）KCI（電材ランド）／（株）ティーネットジャパン／（株）レスターエレクトロニクス",
  },
  {
    k: "取得特許",
    v: "発光ダイオード駆動回路（特許第4911747号）／LED警告灯（特許第4868237号）",
  },
];

const history = [
  { y: "1967", t: "7月、有限会社京成電子を設立。通信機器の組立・配線・加工、電子機器の製造販売を開始。" },
  { y: "1983", t: "株式会社京成電子に社名変更。通信機器の組立・配線・加工に加え、各種商品開発と販売を開始。" },
  { y: "1998", t: "バーインボードの部品実装受託事業を開始。" },
  {
    y: "2001",
    t: "事業主体を、投光器・回転警告灯・施設照明分野のLED照明機器設計/製造/販売、および車用オプション機器・ハーネスの設計/製造へ変更。",
  },
  { y: "2011", t: "ティーネットジャパン社の販売代理店として、大型LED照明機器の販売／施工を開始。" },
  { y: "2011", t: "「LED警告灯」で特許取得（特許第4868237号）。" },
  { y: "2012", t: "「発光ダイオード駆動回路」で特許取得（特許第4911747号）。" },
  { y: "2015", t: "KCI社と連携し、回転灯安全報知システムの設計／施工を開始。" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="会社案内"
        description="株式会社京成電子は、1967年の創業以来、通信機器の組立から始まり、LED照明・回転灯安全報知システム・車両用ハーネス・バーインボード実装まで、社会の安全を支える電子機器の設計・製造を続けています。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "会社案内" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={factory}
                alt="京成電子の製造フロア。回転灯・LED照明・ハーネスの実装作業を行う現場。"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="Message"
                title="ものづくりの本質に、誠実に。"
                className="mb-6"
              />
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  1967年の創業以来、京成電子は「見えないところで社会の安全を支える電子機器」を作り続けてきました。回転灯・LED照明・車両用ハーネス・バーインボード実装──いずれも派手さはありませんが、駐車場、車両、半導体評価装置といった現場を、確かな設計と品質で支える仕事です。
                </p>
                <p>
                  少数精鋭の12名だからこそ、単なる製造委託先ではなく、お客様の技術パートナーとして課題解決に伴走できます。1社1台のご相談から、大手メーカー様との10年20年のお取引まで、腰を据えてお付き合いさせていただきます。
                </p>
                <p className="font-semibold text-foreground">株式会社京成電子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle eyebrow="Corporate Profile" title="会社概要" />
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <dl className="divide-y divide-border">
              {info.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 p-6 md:p-7"
                >
                  <dt className="text-sm font-semibold text-muted-foreground">{row.k}</dt>
                  <dd className="text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionTitle eyebrow="History" title="沿革" />
          <ol className="relative border-l-2 border-border ml-3">
            {history.map((h) => (
              <li key={h.y} className="pl-8 pb-10 relative">
                <span
                  className="absolute -left-[9px] top-1 size-4 rounded-full bg-primary border-4 border-background"
                  aria-hidden
                />
                <div className="font-display text-2xl font-bold text-primary tabular-nums mb-1">
                  {h.y}
                </div>
                <p className="text-foreground/85">{h.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
