import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

const columns = [
  {
    title: "事業",
    links: [
      { to: "/services", label: "事業内容" },
      { to: "/technology", label: "技術紹介" },
      { to: "/products", label: "製品一覧" },
      { to: "/cases", label: "導入事例" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { to: "/about", label: "会社案内" },
      { to: "/news", label: "NEWS" },
      { to: "/careers", label: "採用情報" },
    ],
  },
  {
    title: "サポート",
    links: [
      { to: "/faq", label: "よくあるご質問" },
      { to: "/contact", label: "お問い合わせ" },
      { to: "/privacy", label: "プライバシーポリシー" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-3">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <span className="grid place-items-center size-9 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm">
                KX
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground font-semibold">
                  KYOSEI DENKI
                </span>
                <span className="text-sm font-bold text-foreground">
                  {company.name}
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {company.description}
            </p>
            <address className="not-italic mt-6 text-sm text-muted-foreground space-y-1">
              <div>{company.address}</div>
              <div>
                TEL:{" "}
                <a
                  href={`tel:${company.tel.replace(/-/g, "")}`}
                  className="font-display tabular-nums hover:text-primary"
                >
                  {company.tel}
                </a>{" "}
                （{company.telHours}）
              </div>
            </address>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground font-display tracking-widest">
            {company.nameEn.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
