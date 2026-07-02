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
              title={<>電子機器のすべてを、<br className="hidden md:block" />ワンストップで。</>}
              description="回路設計から量産・保守まで、6つの領域で貴社の開発を支援します。"
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
            eyebrow="Why Kyosei Denki"
            title="京西電機が選ばれる4つの理由"
            description="単なる製造委託先ではなく、貴社の技術パートナーとして長期的に伴走します。"
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
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 技術紹介 */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden">
              <img
                src={technology}
                alt="オシロスコープを操作するエンジニア。京西電機の技術ラボでの評価工程。"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                eyebrow="Technology"
                title={<>40年培った、<br />ハードとソフトの融合技術。</>}
                description="アナログ・デジタル回路設計、組込ソフトウェア、通信、電源、機構まで。多分野のエンジニアが在籍し、複合的な技術課題に応えます。"
                className="mb-8"
              />
              <ul className="space-y-4 mb-8">
                {[
                  "アナログ/デジタル/ミックスド回路設計",
                  "組込ソフトウェア（RTOS/Linux）",
                  "産業用通信プロトコル対応",
                  "EMC・信頼性試験対応設計",
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
            {cases.map((c) => (
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
