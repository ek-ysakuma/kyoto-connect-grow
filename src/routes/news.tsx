import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard } from "@/components/site/NewsCard";
import { CTA } from "@/components/site/CTA";
import { company, news } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: `NEWS・お知らせ | ${company.name}` },
      {
        name: "description",
        content:
          "京西電機からのお知らせ、新製品情報、展示会情報、採用情報などの最新ニュースをお届けします。",
      },
      { property: "og:title", content: `NEWS・お知らせ | ${company.name}` },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="NEWS・お知らせ"
        description="京西電機からのお知らせをお届けします。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "NEWS" }]}
      />
      <section className="section-y">
        <div className="container-x max-w-4xl">
          {[...news, ...news].map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
