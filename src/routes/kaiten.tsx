import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { LinkButton } from "@/components/site/Button";
import { company, kaiten } from "@/lib/site-data";
import { AlertTriangle, CheckCircle2, Circle } from "lucide-react";

const title = `回転灯 安全報知システム | 駐車場出入口の事故防止 | ${company.name}`;
const description =
  "駐車場出入口の事故防止に。「光・音・文字」で出庫を知らせる回転灯 安全報知システム。現地調査から据付・電気工事までワンストップ。機器のみの販売は全国対応、工事付きは関東・東海で実績多数。";

export const Route = createFileRoute("/kaiten")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kaiten" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: kaiten.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: KaitenPage,
});

function KaitenPage() {
  return (
    <>
      <PageHero
        eyebrow="回転灯 安全報知システム"
        title={kaiten.catch}
        description={kaiten.lead}
        crumbs={[
          { label: "ホーム", to: "/" },
          { label: "事業内容", to: "/services" },
          { label: "回転灯 安全報知システム" },
        ]}
      />

      {/* 実績サマリー */}
      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {kaiten.stats.map((s) => (
            <div key={s.label} className="p-6 md:p-8 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary tabular-nums">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* お困りごと */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow="Problems"
            title="こんなお悩みはありませんか？"
            description="駐車場出入口の安全対策は、事故が起きてからでは遅すぎます。"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {kaiten.problems.map((p) => (
              <article
                key={p.title}
                className="bg-card border border-border rounded-xl p-7 flex flex-col gap-5"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <h3 className="text-base font-bold text-foreground leading-relaxed">
                    {p.title}
                  </h3>
                </div>
                <div className="mt-auto flex items-start gap-3 rounded-lg bg-primary/5 border border-primary/15 p-4">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm font-semibold text-primary">{p.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* システム構成 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="System"
            title="システム構成"
            description="赤外線センサー・回転灯（文字表示付き）・制御盤の3点で構成します。"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {kaiten.components.map((c, i) => (
              <article key={c.name} className="bg-card border border-border rounded-xl p-8">
                <div className="font-display text-4xl font-bold text-primary/15 mb-4" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 設置プラン */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow="Plans"
            title="回転灯システム 設置プラン"
            description="その他プランも多数ございます。現場状況に合わせてカスタマイズいたします。"
          />
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {kaiten.plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-xl border p-8 md:p-10 bg-card ${
                  plan.recommended ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {plan.badge}
                  </span>
                </div>

                <dl className="divide-y divide-border border-y border-border">
                  <div className="py-5">
                    <dt className="text-sm font-semibold text-muted-foreground mb-3">基本構成</dt>
                    <dd className="flex flex-wrap gap-2">
                      {plan.config.map((c) => (
                        <span
                          key={c}
                          className="text-sm px-3 py-1.5 rounded-md bg-surface border border-border text-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div className="py-5">
                    <dt className="text-sm font-semibold text-muted-foreground mb-3">特徴</dt>
                    <dd>
                      <ul className="space-y-2.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                            <Circle className="size-2 fill-accent text-accent shrink-0 mt-1.5" aria-hidden />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="py-5">
                    <dt className="text-sm font-semibold text-muted-foreground mb-2">設置工事</dt>
                    <dd className="text-sm text-foreground">{plan.work}</dd>
                  </div>
                  <div className="py-5">
                    <dt className="text-sm font-semibold text-muted-foreground mb-2">参考価格</dt>
                    <dd className="text-sm text-foreground">{plan.price}</dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <LinkButton to="/contact" withArrow className="w-full sm:w-auto">
                    このプランを相談する
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle eyebrow="Why us" title="京成電子が選ばれる理由" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {kaiten.reasons.map((r) => (
              <article key={r.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow="Flow"
            title="導入の流れ"
            description="お問い合わせから据付・アフターまで、ワンストップで承ります。"
          />
          <ol className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {kaiten.flow.map((f) => (
              <li key={f.step} className="bg-card border border-border rounded-xl p-6">
                <div className="font-display text-sm font-bold text-primary mb-3">{f.step}</div>
                <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 駐車場以外の用途 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Other uses"
            title="駐車場以外での使用事例も多数"
            description="安全報知が必要なあらゆる現場でご活用いただけます。是非お問い合わせください。"
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kaiten.otherUses.map((u) => (
              <li
                key={u}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-5 text-sm text-foreground"
              >
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" aria-hidden />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくあるご質問" align="center" />
          <FAQ items={kaiten.faqs} />
        </div>
      </section>

      <CTA />
    </>
  );
}
