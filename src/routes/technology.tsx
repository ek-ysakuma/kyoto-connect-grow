import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTA } from "@/components/site/CTA";
import { company } from "@/lib/site-data";
import technology from "@/assets/technology.jpg";
import { Cpu, Radio, Zap, ShieldCheck, Code2, Ruler } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: `技術紹介 | ${company.name}` },
      {
        name: "description",
        content:
          "LED警告灯・LED駆動回路の特許技術、回転灯システム設計、車両用ハーネス製造、バーインボード実装まで。京成電子の技術基盤をご紹介します。",
      },
      { property: "og:title", content: `技術紹介 | ${company.name}` },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
});

const techs = [
  {
    Icon: ShieldCheck,
    title: "回転灯安全報知システム",
    desc: "センサー・制御盤・回転灯を組み合わせた駐車場向けの安全報知システム設計。KCI社／電材ランド様と連携し、パトライト社・日恵製作所社製回転灯を採用しています。",
  },
  {
    Icon: Zap,
    title: "LED照明・LED警告灯",
    desc: "LED警告灯（特許第4868237号）・発光ダイオード駆動回路（特許第4911747号）を軸に、小型LED照明 KTC-L002 などを自社設計・自社製造しています。",
  },
  {
    Icon: Cpu,
    title: "回路設計・製品開発",
    desc: "通信機器の組立・配線から発展した回路設計技術。用途に応じてLEDや制御回路、機能部品を組合せ、低コストで付加価値の高い製品を実現します。",
  },
  {
    Icon: Code2,
    title: "バーインボード実装",
    desc: "半導体評価用バーインボードの部品実装を1998年から受託。半導体メーカー様の評価工程を支える、高信頼のはんだ付け・実装品質を提供します。",
  },
  {
    Icon: Radio,
    title: "車両用ハーネス・車載機器",
    desc: "トラック向けワイヤーハーネス、パーキングアラーム、融雪装置部品、隊名標識灯、コーナーポール灯など、人と車の安全を支える車両用オプションの設計・製造。",
  },
  {
    Icon: Ruler,
    title: "現地施工・電気工事",
    desc: "回転灯システムは、現地調査・仕様決定・据付工事・電気工事までワンストップ。ネット販売品や他メーカー機器の設置ご相談も承ります。",
  },
];

function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="技術紹介"
        description="40年培った回路・ソフト・機構の総合技術力で、複合的な開発課題を解決します。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "技術紹介" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-xl overflow-hidden mb-16">
            <img
              src={technology}
              alt="京成電子の技術現場でオシロスコープを用いて回路の評価を行うエンジニア"
              width={1600}
              height={1024}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <SectionTitle
            eyebrow="Core Skills"
            title="6つのコア技術領域"
            description="各分野の専門エンジニアが在籍し、社内でクロスファンクショナルに開発を進めます。"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {techs.map((t) => (
              <div
                key={t.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-[0_12px_32px_rgb(15_23_42_/_0.08)] transition-all"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/8 text-primary mb-5">
                  <t.Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Quality"
            title="品質を支える体制"
            description="ISO 9001に基づく品質マネジメントと、社内評価設備で製品品質を保証します。"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { k: "ISO 9001", v: "品質マネジメントシステム認証取得" },
              { k: "ISO 14001", v: "環境マネジメントシステム認証取得" },
              { k: "自社評価設備", v: "EMC・恒温槽・振動試験機を完備" },
            ].map((c) => (
              <div key={c.k} className="bg-card border border-border rounded-xl p-8">
                <div className="font-display text-xl font-bold text-primary mb-2">
                  {c.k}
                </div>
                <p className="text-sm text-muted-foreground">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
