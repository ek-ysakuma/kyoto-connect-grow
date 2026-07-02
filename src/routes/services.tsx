import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTA } from "@/components/site/CTA";
import { services, company } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `事業内容 | ${company.name}` },
      {
        name: "description",
        content:
          "電子機器設計、制御機器開発、OEM/ODM、試作、量産、保守サポート。京西電機の6つの事業領域をご紹介します。",
      },
      { property: "og:title", content: `事業内容 | ${company.name}` },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const flow = [
  { n: "01", t: "お問い合わせ・NDA締結", d: "秘密保持契約を締結し、ご要件を安心してお話しいただける環境を整えます。" },
  { n: "02", t: "ヒアリング・要件定義", d: "エンジニアが直接ヒアリング。技術的な実現性と概算費用をご提示します。" },
  { n: "03", t: "お見積・仕様提案", d: "詳細仕様と開発スケジュール、費用のお見積をご提出します。" },
  { n: "04", t: "設計・試作", d: "回路・基板・筐体・ソフトを並行して設計。試作機を製作します。" },
  { n: "05", t: "評価・改善", d: "各種試験を実施し、量産へ向けた改善・仕様確定を行います。" },
  { n: "06", t: "量産・保守", d: "量産立ち上げ後も長期にわたる保守・部品供給でサポートします。" },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="事業内容"
        description="電子機器のあらゆる工程を、ワンストップでお引き受けします。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "事業内容" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow="6 Services"
            title="6つの事業領域"
            description="単独工程のご依頼から、全工程一貫でのお任せまで、柔軟に対応します。"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <FeatureCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Workflow"
            title="開発フロー"
            description="お問い合わせから量産まで、標準的な流れをご紹介します。"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {flow.map((f) => (
              <div
                key={f.n}
                className="bg-card border border-border rounded-xl p-8 relative"
              >
                <div
                  className="font-display text-5xl font-bold text-primary/15 absolute top-6 right-6"
                  aria-hidden
                >
                  {f.n}
                </div>
                <div className="text-xs font-semibold tracking-widest text-primary mb-3">
                  STEP {f.n}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow="Support"
            title="対応可能な業界・分野"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "製造業（FA・生産設備）",
              "設備メーカー",
              "インフラ企業（電力・通信・鉄道）",
              "公共・官需関連",
              "計測・分析機器",
              "医療機器周辺装置",
              "エネルギー関連装置",
              "研究・開発部門",
              "スタートアップの試作支援",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 p-5 bg-surface rounded-lg border border-border"
              >
                <CheckCircle2
                  className="size-5 text-primary shrink-0 mt-0.5"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
