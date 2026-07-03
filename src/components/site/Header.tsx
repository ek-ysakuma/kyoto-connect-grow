import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton } from "./Button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/about", label: "会社案内" },
  { to: "/services", label: "事業内容" },
  { to: "/products", label: "製品一覧" },
  { to: "/technology", label: "技術紹介" },
  { to: "/cases", label: "導入事例" },
  { to: "/news", label: "NEWS" },
  { to: "/careers", label: "採用" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="grid place-items-center size-9 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm">
            KD
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] tracking-[0.15em] text-muted-foreground font-semibold">
              KEISEI DENSHI
            </span>
            <span className="text-sm font-bold text-foreground">株式会社京成電子</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="主要ナビゲーション">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton to="/contact" size="md" withArrow>
            お問い合わせ
          </LinkButton>
        </div>

        <button
          type="button"
          className="lg:hidden grid place-items-center size-11 rounded-md text-foreground hover:bg-muted"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="container-x py-6 flex flex-col" aria-label="モバイルナビゲーション">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-foreground border-b border-border"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-6">
              <LinkButton
                to="/contact"
                size="lg"
                withArrow
                className="w-full"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
