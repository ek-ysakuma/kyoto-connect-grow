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
          "アナログ/デジタル回路設計、組込ソフトウェア、産業通信、EMC設計まで。京西電機の技術基盤をご紹介します。",
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
    Icon: Cpu,
    title: "回路設計",
    desc: "アナログ・デジタル・ミックスド信号回路の設計。低ノイズ・低消費電力設計まで対応。",
  },
  {
    Icon: Code2,
    title: "組込ソフトウェア",
    desc: "RTOS、組込Linux、ベアメタルまで。産業用途に求められる堅牢性を担保します。",
  },
  {
    Icon: Radio,
    title: "産業通信",
    desc: "Ethernet/IP、Modbus、CAN、RS-485、無線通信（Wi-SUN, LoRa等）に対応。",
  },
  {
    Icon: Zap,
    title: "電源設計",
    desc: "産業機器向け電源設計、絶縁設計、突入電流対策など、実装レベルの経験があります。",
  },
  {
    Icon: ShieldCheck,
    title: "EMC・信頼性",
    desc: "初期段階からEMC・信頼性を考慮した設計を行い、認証取得までサポートします。",
  },
  {
    Icon: Ruler,
    title: "機構・筐体",
    desc: "板金・切削・樹脂成形筐体まで、電気設計と連動した機構設計を実施します。",
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
              alt="京西電機の技術ラボでオシロスコープを用いて回路の評価を行うエンジニア"
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
