import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { CTA } from "@/components/site/CTA";
import { cases, company } from "@/lib/site-data";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: `導入事例 | ${company.name}` },
      {
        name: "description",
        content:
          "京成電子の導入事例。駐車場向け回転灯安全報知システム、車両用ハーネス、大型LED照明、バーインボード実装などの事例をご紹介します。",
      },
      { property: "og:title", content: `導入事例 | ${company.name}` },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: Cases,
});

function Cases() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="導入事例"
        description="長期取引を支えてきた実績から、代表的な事例をご紹介します。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "導入事例" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...cases, ...cases].map((c, i) => (
              <CaseStudyCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
