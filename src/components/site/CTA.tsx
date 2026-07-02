import { LinkButton } from "./Button";
import { PhoneCall } from "lucide-react";
import { company } from "@/lib/site-data";

export function CTA() {
  return (
    <section
      className="section-y bg-primary text-primary-foreground relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
        aria-hidden
      />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-secondary-foreground/80">
            Contact
          </div>
          <h2
            id="cta-heading"
            className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-5"
          >
            電子機器開発でお困りですか？
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-10">
            設計から製造までお気軽にご相談ください。<br className="hidden md:block" />
            経験豊富なエンジニアが、貴社の課題に最適なご提案をいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton to="/contact" variant="accent" size="lg" withArrow>
              お問い合わせ
            </LinkButton>
            <a
              href={`tel:${company.tel.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <PhoneCall className="size-5" aria-hidden />
              <span className="font-display tabular-nums">{company.tel}</span>
              <span className="text-sm text-primary-foreground/70">
                （{company.telHours}）
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
