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
          "回転灯安全報知システム、小型LED照明、車両用ハーネス、バーインボード実装ほか、株式会社京成電子の事業領域と開発フローをご紹介します。",
      },
      { property: "og:title", content: `事業内容 | ${company.name}` },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const flow = [
  { n: "01", t: "お問い合わせ・ヒアリング", d: "メール／お電話でご相談内容を伺い、必要に応じて秘密保持契約（NDA）を締結します。" },
  { n: "02", t: "現地調査・要件定義", d: "回転灯システムなどは設置場所の現地調査を実施。用途・運用形態に合わせて仕様を決定します。" },
  { n: "03", t: "お見積・仕様提案", d: "詳細仕様、施工／製造範囲、費用のお見積をご提出します。" },
  { n: "04", t: "設計・部材手配", d: "自社設計にて回路・実装・機構を設計。回転灯・センサー・制御盤などの部材を手配します。" },
  { n: "05", t: "製造・施工", d: "小型LED照明・ハーネス・バーインボードは自社製造。回転灯システムは現地据付・電気工事まで実施します。" },
  { n: "06", t: "運用サポート", d: "納入後の増設、部品の追加変更、他メーカー機器の設置ご相談まで柔軟に対応します。" },
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
              "商業施設・物流拠点の駐車場",
              "配送センター／運送事業者",
              "自動車関連（車体架装・部品メーカー）",
              "半導体・電子デバイスメーカー",
              "施設・建物向け大型LED照明導入",
              "看板・サイン照明",
              "設備メーカー様の受託実装",
              "住宅隣接地の光害対策",
              "官公庁・公共施設",
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
