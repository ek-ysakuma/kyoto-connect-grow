import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { company, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `よくあるご質問 | ${company.name}` },
      {
        name: "description",
        content:
          "京西電機へよくいただくご質問と回答。小ロット対応、NDA、開発フロー、長期供給などについて。",
      },
      { property: "og:title", content: `よくあるご質問 | ${company.name}` },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="よくあるご質問"
        description="お客様からよくいただくご質問への回答をまとめました。掲載のない内容はお気軽にお問い合わせください。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "よくあるご質問" }]}
      />
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <FAQ items={faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
