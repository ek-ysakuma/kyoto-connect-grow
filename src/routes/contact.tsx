import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { company } from "@/lib/site-data";
import { PhoneCall, Mail, Clock, Building2, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `お問い合わせ | ${company.name}` },
      {
        name: "description",
        content:
          "京西電機へのお問い合わせフォーム。電子機器の設計・開発・OEM・量産のご相談を承ります。営業日翌日までにご返信します。",
      },
      { property: "og:title", content: `お問い合わせ | ${company.name}` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const inputCls =
  "w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="電子機器の設計・開発・OEM・量産に関するご相談を承ります。ご要望に応じて秘密保持契約（NDA）の締結にも対応します。"
        crumbs={[{ label: "ホーム", to: "/" }, { label: "お問い合わせ" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              {sent ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-6">
                    <CheckCircle2 className="size-8" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    お問い合わせを受け付けました
                  </h2>
                  <p className="text-muted-foreground">
                    内容を確認のうえ、営業日翌日までにご返信いたします。
                    <br />
                    ありがとうございました。
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="会社名" name="company" required />
                    <Field label="部署・役職" name="dept" />
                    <Field label="ご担当者名" name="name" required />
                    <Field label="メールアドレス" name="email" type="email" required />
                    <Field label="電話番号" name="tel" type="tel" />
                    <div>
                      <Label required>お問い合わせ種別</Label>
                      <select name="type" required className={inputCls} defaultValue="">
                        <option value="" disabled>
                          選択してください
                        </option>
                        <option>製品について</option>
                        <option>OEM・ODMのご相談</option>
                        <option>設計・開発のご相談</option>
                        <option>技術相談</option>
                        <option>採用について</option>
                        <option>その他</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label required>お問い合わせ内容</Label>
                    <textarea
                      name="message"
                      required
                      rows={7}
                      className={`${inputCls} h-auto py-3 resize-y`}
                      placeholder="ご相談内容、想定数量、希望納期などをご記入ください。"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input type="checkbox" required className="mt-1 size-4 accent-primary" />
                    <span>
                      <a href="/privacy" className="text-primary underline">
                        プライバシーポリシー
                      </a>
                      に同意します。
                    </span>
                  </label>
                  <Button type="submit" size="lg" withArrow className="w-full md:w-auto">
                    この内容で送信する
                  </Button>
                </form>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <div className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-80">
                  Tel
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall className="size-5" aria-hidden />
                  <a
                    href={`tel:${company.tel.replace(/-/g, "")}`}
                    className="font-display text-2xl font-bold tabular-nums"
                  >
                    {company.tel}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Clock className="size-4" aria-hidden />
                  {company.telHours}
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <InfoRow Icon={Mail} label="Email" value={company.email} />
                <InfoRow Icon={Building2} label="所在地" value={company.address} />
              </div>
              <div className="bg-surface border border-border rounded-xl p-6 text-sm text-muted-foreground leading-relaxed">
                お急ぎの場合は、お電話でのお問い合わせもお受けしております。
                技術的なご相談は、担当エンジニアより折り返しご連絡いたします。
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="text-sm font-semibold text-foreground mb-2">
      {children}
      {required && <span className="text-accent ml-1">*</span>}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input type={type} name={name} required={required} className={inputCls} />
    </div>
  );
}

function InfoRow({
  Icon,
  label,
  value,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center size-10 rounded-lg bg-primary/8 text-primary shrink-0">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
          {label}
        </div>
        <div className="text-sm text-foreground break-all">{value}</div>
      </div>
    </div>
  );
}
