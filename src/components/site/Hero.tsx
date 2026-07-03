import heroImg from "@/assets/hero-electronics.jpg";
import { LinkButton } from "./Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)",
        }}
        aria-hidden
      />
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
              <span className="h-px w-8 bg-primary" aria-hidden />
              Safety Signal & LED Engineering
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.25] tracking-tight">
              光と音と文字で、
              <br />
              現場の安全を
              <span className="text-primary">見える化する。</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              株式会社京成電子は、回転灯安全報知システム、小型LED照明、車両用ワイヤーハーネス、バーインボード実装を手がける横浜・戸塚の電子機器メーカーです。
              1967年創業、設計から施工までワンストップでお客様の安全課題を解決します。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <LinkButton to="/contact" size="lg" withArrow>
                無料で相談する
              </LinkButton>
              <LinkButton to="/services" variant="outline" size="lg">
                事業内容を見る
              </LinkButton>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
              {[
                { k: "創業", v: "1967", u: "年" },
                { k: "取得特許", v: "2", u: "件" },
                { k: "受託開始", v: "1998", u: "年〜" },
              ].map((s) => (
                <div key={s.k}>
                  <dd className="font-display text-3xl md:text-4xl font-bold text-primary tabular-nums">
                    {s.v}
                    <span className="text-base text-foreground/70 ml-1">{s.u}</span>
                  </dd>
                  <dt className="mt-1 text-xs text-muted-foreground">{s.k}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden bg-surface shadow-[0_20px_60px_-20px_rgb(0_91_172_/_0.35)]">
                <img
                  src={heroImg}
                  alt="京成電子が手がける回転灯安全報知システム／LED基板の技術を象徴する電子基板のクローズアップ。"
                  width={1920}
                  height={1280}
                  fetchPriority="high"
                  className="size-full object-cover"
                />
              </div>
              <div
                className="hidden md:flex absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-[0_12px_32px_rgb(15_23_42_/_0.10)] items-center gap-4"
                aria-hidden
              >
                <div className="grid place-items-center size-10 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm">
                  ⚙
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">独自技術</div>
                  <div className="text-sm font-bold text-foreground font-display">
                    LED警告灯 特許取得
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-[10px] tracking-[0.3em] font-semibold uppercase">
              Scroll
            </span>
            <ArrowDown className="size-4 animate-bounce" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
