import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { CTA } from "@/components/site/CTA";
import { company, products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `製品一覧 | ${company.name}` },
      {
        name: "description",
        content:
          "京西電機の標準製品と受託開発ラインアップ。産業用コントローラ、センサユニット、カスタム基板など。",
      },
      { property: "og:title", content: `製品一覧 | ${company.name}` },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="製品一覧"
        description="産業向けの標準製品から、貴社仕様のカスタム開発まで対応します。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "製品一覧" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
