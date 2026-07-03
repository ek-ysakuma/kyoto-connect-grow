import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `プライバシーポリシー | ${company.name}` },
      {
        name: "description",
        content: `${company.name}の個人情報保護方針についてご説明します。`,
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "1. 個人情報の定義",
    p: "本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律に定める「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別できるものをいいます。",
  },
  {
    h: "2. 個人情報の取得と利用目的",
    p: "当社は、お問い合わせ対応、製品・サービスに関するご案内、採用選考、法令に基づく対応等の目的に必要な範囲で個人情報を取得し、利用いたします。取得の際はご本人の同意を得たうえで、適切な手段によって行います。",
  },
  {
    h: "3. 第三者提供の制限",
    p: "当社は、あらかじめご本人の同意を得た場合、または法令に基づく場合を除き、個人情報を第三者に提供いたしません。",
  },
  {
    h: "4. 個人情報の安全管理",
    p: "当社は、個人情報の漏洩、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して必要な教育を実施します。",
  },
  {
    h: "5. 開示・訂正・削除等の請求",
    p: "ご本人からの個人情報の開示、訂正、追加、削除、利用停止等のご請求については、ご本人であることを確認のうえ、法令に従い適切に対応いたします。",
  },
  {
    h: "6. お問い合わせ窓口",
    p: `個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n${company.name}　個人情報保護担当\nメール：${company.email}\n電話：${company.tel}`,
  },
  {
    h: "7. 本ポリシーの改定",
    p: "当社は、法令の変更、事業内容の変化等に応じて、本ポリシーを改定することがあります。改定後の内容は当ウェブサイトに掲載した時点から効力を生じるものとします。",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="プライバシーポリシー"
        description="当社は個人情報の重要性を認識し、以下の方針に基づき適切に取り扱います。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "プライバシーポリシー" }]}
      />
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-bold text-foreground mb-3">{s.h}</h2>
                <p className="text-foreground/85 leading-relaxed whitespace-pre-line">
                  {s.p}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
            制定日：2020年4月1日 / 最終改定：2026年4月1日
            <br />
            {company.name}
          </div>
        </div>
      </section>
    </>
  );
}
