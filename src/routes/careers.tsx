import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTA } from "@/components/site/CTA";
import { LinkButton } from "@/components/site/Button";
import { company } from "@/lib/site-data";
import factory from "@/assets/factory.jpg";
import { Users, TrendingUp, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: `採用情報 | ${company.name}` },
      {
        name: "description",
        content:
          "京西電機の採用情報。電子回路設計、組込ソフト、生産技術など、ものづくりを愛する仲間を募集しています。",
      },
      { property: "og:title", content: `採用情報 | ${company.name}` },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const values = [
  { Icon: Users, t: "少数精鋭", d: "一人ひとりが設計から量産まで見渡せる、風通しの良い組織です。" },
  { Icon: TrendingUp, t: "成長機会", d: "多分野・多工程に触れられる環境で、幅広い技術力が身につきます。" },
  { Icon: Heart, t: "長期就業", d: "平均勤続年数15年以上。腰を据えて技術と向き合える会社です。" },
  { Icon: Award, t: "評価制度", d: "スキル・成果ベースの評価。若手からベテランまで公平に活躍できます。" },
];

const positions = [
  { t: "電子回路設計エンジニア", type: "正社員", exp: "経験3年以上" },
  { t: "組込ソフトウェアエンジニア", type: "正社員", exp: "経験2年以上" },
  { t: "生産技術エンジニア", type: "正社員", exp: "経験不問" },
  { t: "新卒 総合職（技術）", type: "新卒", exp: "2027年卒" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="採用情報"
        description="社会を支える電子機器を、共に作り続ける仲間を募集しています。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "採用" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={factory}
                alt="京西電機の量産工場フロアで働く現場スタッフ"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="Message"
                title="ものづくりに、真摯であること。"
                className="mb-6"
              />
              <p className="text-foreground/85 leading-relaxed mb-4">
                私たちは派手な会社ではありません。しかし、10年、20年、30年と社会を支える機器を、確かな技術で作り続けています。
              </p>
              <p className="text-foreground/85 leading-relaxed">
                「見えないところで社会を支えたい」「腰を据えて技術と向き合いたい」——そんな想いを持った方と、ぜひ一緒に働きたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Kyosei"
            title="京西電機で働く4つの魅力"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-xl p-8">
                <div className="inline-flex items-center justify-center size-12 rounded-lg bg-accent/10 text-accent mb-5">
                  <v.Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionTitle eyebrow="Positions" title="募集職種" />
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <ul className="divide-y divide-border">
              {positions.map((p) => (
                <li
                  key={p.t}
                  className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 p-6 md:p-7 hover:bg-surface transition-colors"
                >
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary/8 text-primary self-start">
                    {p.type}
                  </span>
                  <span className="flex-1 text-base font-semibold text-foreground">
                    {p.t}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.exp}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 text-center">
            <LinkButton to="/contact" withArrow>
              採用について問い合わせる
            </LinkButton>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
