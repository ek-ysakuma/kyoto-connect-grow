import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { LinkButton } from "@/components/site/Button";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { cases, company, faqs, products, type Product } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const title = `${p.name} | 製品情報 | ${company.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.summary,
            category: p.category,
            image: p.image,
            manufacturer: { "@type": "Organization", name: company.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-2xl font-bold">製品が見つかりませんでした</h1>
      <Link to="/products" className="text-primary mt-4 inline-block">
        製品一覧へ戻る
      </Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={p.category}
        title={p.name}
        description={p.summary}
        crumbs={[
          { label: "ホーム", to: "/" },
          { label: "製品一覧", to: "/products" },
          { label: p.name },
        ]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="rounded-xl overflow-hidden bg-surface aspect-[4/3]">
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={768}
                className="size-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">主な特徴</h2>
              <ul className="space-y-4 mb-10">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className="size-5 text-primary shrink-0 mt-1"
                      aria-hidden
                    />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <LinkButton to="/contact" withArrow>
                この製品について問い合わせる
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle eyebrow="Usage" title="主な用途" as="h3" className="mb-6" />
              <ul className="space-y-3">
                {p.usage.map((u) => (
                  <li
                    key={u}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle eyebrow="Options" title="オプション" as="h3" className="mb-6" />
              <ul className="space-y-3">
                {p.options.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionTitle eyebrow="Specifications" title="仕様" as="h3" />
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <dl className="divide-y divide-border">
              {p.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 p-6"
                >
                  <dt className="text-sm font-semibold text-muted-foreground">{s.label}</dt>
                  <dd className="text-foreground font-display tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle eyebrow="Case Studies" title="関連する導入事例" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cases.map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくあるご質問" align="center" />
          <FAQ items={faqs.slice(0, 4)} />
        </div>
      </section>

      <CTA />
    </>
  );
}
