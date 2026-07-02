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
          "京西電機の会社概要・沿革・拠点情報。40年にわたり電子機器の設計・製造でものづくりを支えてきた技術パートナーです。",
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
  { k: "設立", v: "1985年4月" },
  { k: "資本金", v: "8,000万円" },
  { k: "代表者", v: "代表取締役 京西 太郎" },
  { k: "従業員数", v: "180名（2026年4月現在）" },
  { k: "本社所在地", v: company.address },
  { k: "電話番号", v: company.tel },
  { k: "事業内容", v: "電子機器の設計・開発・製造、OEM・ODM、保守サポート" },
  { k: "認証", v: "ISO 9001 / ISO 14001" },
  { k: "取引銀行", v: "○○銀行、△△銀行" },
];

const history = [
  { y: "1985", t: "東京都○○区にて創業。産業用制御機器の設計を開始。" },
  { y: "1992", t: "自社工場を開設し、量産事業を本格化。" },
  { y: "2003", t: "ISO 9001 認証を取得。" },
  { y: "2011", t: "OEM・ODM事業部を新設。" },
  { y: "2020", t: "第2工場稼働。海外量産ネットワークを構築。" },
  { y: "2026", t: "設計部門を拡張し、DX/IoT関連分野へ進出。" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="会社案内"
        description="京西電機は、産業用電子機器の設計・開発・製造を通じて、社会インフラを支える技術パートナーです。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "会社案内" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={factory}
                alt="京西電機の量産工場フロア。清潔で整然としたクリーンな生産環境。"
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
                  1985年の創業以来、京西電機は「見えないところで社会を支える電子機器」を作り続けてきました。派手さはなくとも、10年、20年、30年と稼働し続ける産業機器の裏側には、確かな設計と品質が不可欠です。
                </p>
                <p>
                  私たちは、単なる製造委託先ではなく、お客様の技術パートナーとして課題解決に伴走します。試作1台からのお付き合いを、10年20年の長期取引へと育てていくこと。それが私たちの誇りです。
                </p>
                <p className="font-semibold text-foreground">代表取締役 京西 太郎</p>
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
