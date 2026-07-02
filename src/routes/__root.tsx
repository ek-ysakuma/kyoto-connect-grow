import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { company } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-7xl md:text-8xl font-bold text-primary">404</div>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          お探しのページが見つかりませんでした
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          URLが変更されたか、削除された可能性があります。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
          >
            トップへ戻る
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-foreground">
          ページの読み込みに失敗しました
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          時間をおいて再度お試しいただくか、トップページからアクセスしてください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
          >
            再読み込み
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-foreground font-semibold hover:border-primary"
          >
            トップへ戻る
          </a>
        </div>
      </div>
    </div>
  );
}

const siteTitle = `${company.name} | 電子機器の設計・開発・製造・OEM/ODM`;
const siteDescription =
  "京西電機は電子機器の設計・開発・製造・OEM/ODMを行うBtoBメーカーです。試作から量産、長期保守まで一貫対応。設備メーカー・インフラ企業様の開発課題を解決します。";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: company.name },
      { name: "theme-color", content: "#005BAC" },
      { property: "og:site_name", content: company.name },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          alternateName: company.nameEn,
          url: "/",
          description: siteDescription,
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            streetAddress: company.address,
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: company.tel,
            contactType: "sales",
            areaServed: "JP",
            availableLanguage: ["ja"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        本文へスキップ
      </a>
      <Header />
      <main id="main" className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
