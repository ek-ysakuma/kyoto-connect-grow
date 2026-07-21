import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { ProductCard } from "@/components/site/ProductCard";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { NewsCard } from "@/components/site/NewsCard";
import { CTA } from "@/components/site/CTA";
import { LinkButton } from "@/components/site/Button";
import { cases, news, products, reasons, services } from "@/lib/site-data";
import technology from "@/assets/technology.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      {/* 事業内容 */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionTitle
              eyebrow="Services"
              title={<>安全と省エネを、<br className="hidden md:block" />光と電子で支える。</>}
              description="回転灯安全報知システム、小型LED照明、車両用ハーネス、バーインボード実装の4本柱を中心に、6つの領域で事業を展開しています。"
              className="mb-0"
            />
            <LinkButton to="/services" variant="outline" withArrow>
              事業内容一覧
            </LinkButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <FeatureCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Keisei Denshi"
            title="京成電子が選ばれる4つの理由"
            description="1967年創業。単なる製造委託先ではなく、安全課題を一緒に解決する技術パートナーとして伴走します。"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((r) => (
              <FeatureCard key={r.num} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* 製品紹介 */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionTitle
              eyebrow="Products"
              title="主要製品ラインアップ"
              description="産業向け標準製品と、カスタム受託開発の両輪でご要望にお応えします。"
              className="mb-0"
            />
            <LinkButton to="/products" variant="outline" withArrow>
              全製品を見る
            </LinkButton>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 技術紹介 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden bg-surface aspect-[16/10] flex items-center justify-center">
              <img
                src={technology}
                alt="オシロスコープを操作するエンジニア。京成電子の設計・評価現場。"
                loading="lazy"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                eyebrow="Technology"
                title={<>特許取得の独自技術で、<br />光と電子の応用を広げる。</>}
                description="LED警告灯・LED駆動回路の特許技術をベースに、回転灯システム／小型LED照明／車両用ハーネス／バーインボード実装まで、幅広い領域で技術を提供します。"
                className="mb-8"
              />
              <ul className="space-y-4 mb-8">
                {[
                  "LED警告灯（特許第4868237号）",
                  "発光ダイオード駆動回路（特許第4911747号）",
                  "回転灯安全報知システムの設計・施工",
                  "半導体評価用バーインボードの実装",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1.5 rounded-full bg-primary shrink-0"
                      aria-hidden
                    />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
              <LinkButton to="/technology" withArrow>
                技術紹介ページへ
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* 導入事例 */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionTitle
              eyebrow="Case Studies"
              title="導入事例"
              description="製造業・インフラ・設備メーカーなど、幅広い業界での実績があります。"
              className="mb-0"
            />
            <LinkButton to="/cases" variant="outline" withArrow>
              事例一覧
            </LinkButton>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cases.slice(0, 3).map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <SectionTitle
              eyebrow="News"
              title="お知らせ"
              className="mb-0"
            />
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              すべてのお知らせ
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div>
            {news.map((n) => (
              <NewsCard key={n.title} {...n} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
