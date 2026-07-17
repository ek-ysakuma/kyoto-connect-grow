import { n as __toESM } from "../_runtime.mjs";
import { i as faqs, n as company } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Menu, n as X } from "../_libs/lucide-react.mjs";
import { n as LinkButton, r as cn } from "./Button-2gS9j1xx.mjs";
import { t as Route$13 } from "./products._slug-CZCJd8DD.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BPnBVMv9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-RXPmscmn.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/about",
		label: "会社案内"
	},
	{
		to: "/services",
		label: "事業内容"
	},
	{
		to: "/products",
		label: "製品一覧"
	},
	{
		to: "/technology",
		label: "技術紹介"
	},
	{
		to: "/cases",
		label: "導入事例"
	},
	{
		to: "/news",
		label: "NEWS"
	},
	{
		to: "/careers",
		label: "採用"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/70 backdrop-blur-sm"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-16 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center size-9 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm",
						children: "KD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.15em] text-muted-foreground font-semibold",
							children: "KEISEI DENSHI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-foreground",
							children: "株式会社京成電子"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					"aria-label": "主要ナビゲーション",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors",
						activeProps: { className: "text-primary" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
						to: "/contact",
						size: "md",
						withArrow: true,
						children: "お問い合わせ"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "lg:hidden grid place-items-center size-11 rounded-md text-foreground hover:bg-muted",
					"aria-label": open ? "メニューを閉じる" : "メニューを開く",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background max-h-[calc(100dvh-4rem)] overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-x py-6 flex flex-col",
				"aria-label": "モバイルナビゲーション",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-4 text-base font-medium text-foreground border-b border-border",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
						to: "/contact",
						size: "lg",
						withArrow: true,
						className: "w-full",
						onClick: () => setOpen(false),
						children: "お問い合わせ"
					})
				})]
			})
		})]
	});
}
var columns = [
	{
		title: "事業",
		links: [
			{
				to: "/services",
				label: "事業内容"
			},
			{
				to: "/technology",
				label: "技術紹介"
			},
			{
				to: "/products",
				label: "製品一覧"
			},
			{
				to: "/cases",
				label: "導入事例"
			}
		]
	},
	{
		title: "会社情報",
		links: [
			{
				to: "/about",
				label: "会社案内"
			},
			{
				to: "/news",
				label: "NEWS"
			},
			{
				to: "/careers",
				label: "採用情報"
			}
		]
	},
	{
		title: "サポート",
		links: [
			{
				to: "/faq",
				label: "よくあるご質問"
			},
			{
				to: "/contact",
				label: "お問い合わせ"
			},
			{
				to: "/privacy",
				label: "プライバシーポリシー"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-surface border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2.5 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center size-9 rounded-md bg-primary text-primary-foreground font-display font-bold text-sm",
								children: "KX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] tracking-[0.15em] text-muted-foreground font-semibold",
									children: "KYOSEI DENKI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-foreground",
									children: company.name
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-md",
							children: company.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "not-italic mt-6 text-sm text-muted-foreground space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: company.address }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"TEL:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.tel.replace(/-/g, "")}`,
									className: "font-display tabular-nums hover:text-primary",
									children: company.tel
								}),
								" ",
								"（",
								company.telHours,
								"）"
							] })]
						})
					]
				}), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold tracking-widest text-foreground uppercase mb-4",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-sm text-muted-foreground hover:text-primary transition-colors",
						children: l.label
					}) }, l.to))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						company.name,
						". All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground font-display tracking-widest",
					children: company.nameEn.toUpperCase()
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-surface px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-7xl md:text-8xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-2xl font-bold text-foreground",
					children: "お探しのページが見つかりませんでした"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "URLが変更されたか、削除された可能性があります。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90",
						children: "トップへ戻る"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary",
						children: "お問い合わせ"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-foreground",
					children: "ページの読み込みに失敗しました"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "時間をおいて再度お試しいただくか、トップページからアクセスしてください。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90",
						children: "再読み込み"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-foreground font-semibold hover:border-primary",
						children: "トップへ戻る"
					})]
				})
			]
		})
	});
}
var siteTitle = `${company.name} | 回転灯安全報知システム・LED照明・電子基板・ハーネス`;
var siteDescription = "株式会社京成電子は、回転灯安全報知システム、小型LED照明、車両用ワイヤーハーネス、バーインボード実装を手がける電子機器メーカーです。1967年創業、横浜・戸塚から社会の安全を支えます。";
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteTitle },
			{
				name: "description",
				content: siteDescription
			},
			{
				name: "author",
				content: company.name
			},
			{
				name: "theme-color",
				content: "#005BAC"
			},
			{
				property: "og:site_name",
				content: company.name
			},
			{
				property: "og:title",
				content: siteTitle
			},
			{
				property: "og:description",
				content: siteDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ja_JP"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: siteTitle
			},
			{
				name: "twitter:description",
				content: siteDescription
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;800&display=swap"
			}
		],
		scripts: [{
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
					streetAddress: company.address
				},
				contactPoint: {
					"@type": "ContactPoint",
					telephone: company.tel,
					contactType: "sales",
					areaServed: "JP",
					availableLanguage: ["ja"]
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ja",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded",
				children: "本文へスキップ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "pt-16 md:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./technology-BdN8cNGL.mjs");
var Route$11 = createFileRoute("/technology")({
	head: () => ({
		meta: [
			{ title: `技術紹介 | ${company.name}` },
			{
				name: "description",
				content: "LED警告灯・LED駆動回路の特許技術、回転灯システム設計、車両用ハーネス製造、バーインボード実装まで。京成電子の技術基盤をご紹介します。"
			},
			{
				property: "og:title",
				content: `技術紹介 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/technology"
			}
		],
		links: [{
			rel: "canonical",
			href: "/technology"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var BASE_URL = "";
var Route$10 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/services",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/products",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/products/kx-controller-1000",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/products/kx-sensor-unit-200",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/products/kx-board-custom",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/technology",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/cases",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/faq",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/news",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/careers",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/privacy",
			changefreq: "monthly",
			priority: "0.3"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$9 = () => import("./services-C0XGFo_m.mjs");
var Route$9 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: `事業内容 | ${company.name}` },
			{
				name: "description",
				content: "回転灯安全報知システム、小型LED照明、車両用ハーネス、バーインボード実装ほか、株式会社京成電子の事業領域と開発フローをご紹介します。"
			},
			{
				property: "og:title",
				content: `事業内容 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./products-BIaCIoou.mjs");
var Route$8 = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: `製品一覧 | ${company.name}` },
			{
				name: "description",
				content: "文字付回転灯、回転灯マスキングプレート、小型LEDライト KTC-L002、車両用ワイヤーハーネス、配送車 鍵管理BOX、バーインボード実装まで、京成電子の製品ラインアップをご紹介します。"
			},
			{
				property: "og:title",
				content: `製品一覧 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./privacy-OoMnB1Ob.mjs");
var Route$7 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: `プライバシーポリシー | ${company.name}` },
			{
				name: "description",
				content: `${company.name}の個人情報保護方針についてご説明します。`
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./news-BR-EgN9A.mjs");
var Route$6 = createFileRoute("/news")({
	head: () => ({
		meta: [
			{ title: `NEWS・お知らせ | ${company.name}` },
			{
				name: "description",
				content: "京成電子からのお知らせ、新製品情報、展示会情報、特許情報などの最新ニュースをお届けします。"
			},
			{
				property: "og:title",
				content: `NEWS・お知らせ | ${company.name}`
			},
			{
				property: "og:url",
				content: "/news"
			}
		],
		links: [{
			rel: "canonical",
			href: "/news"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq--xF_AkZy.mjs");
var Route$5 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: `よくあるご質問 | ${company.name}` },
			{
				name: "description",
				content: "京成電子へよくいただくご質問と回答。回転灯システムの現地調査、LED照明のカスタム対応、車両用ハーネス、バーインボード実装などについて。"
			},
			{
				property: "og:title",
				content: `よくあるご質問 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-R-OWBndM.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: `お問い合わせ | ${company.name}` },
			{
				name: "description",
				content: "株式会社京成電子へのお問い合わせフォーム。回転灯安全報知システム、LED照明、車両用ハーネス、バーインボード実装に関するご相談を承ります。"
			},
			{
				property: "og:title",
				content: `お問い合わせ | ${company.name}`
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cases-ZEYRBXzi.mjs");
var Route$3 = createFileRoute("/cases")({
	head: () => ({
		meta: [
			{ title: `導入事例 | ${company.name}` },
			{
				name: "description",
				content: "京成電子の導入事例。駐車場向け回転灯安全報知システム、車両用ハーネス、大型LED照明、バーインボード実装などの事例をご紹介します。"
			},
			{
				property: "og:title",
				content: `導入事例 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/cases"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cases"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./careers-CwPv9262.mjs");
var Route$2 = createFileRoute("/careers")({
	head: () => ({
		meta: [
			{ title: `採用情報 | ${company.name}` },
			{
				name: "description",
				content: "株式会社京成電子の採用情報。LED製品開発、電子基板実装、車両用ハーネス、施工技術など、ものづくりを愛する仲間を募集しています。"
			},
			{
				property: "og:title",
				content: `採用情報 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/careers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BTP5Zo1C.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `会社案内 | ${company.name}` },
			{
				name: "description",
				content: "株式会社京成電子の会社概要・沿革・拠点情報。1967年創業、横浜・戸塚区から回転灯安全報知システム、LED照明、車両用ハーネス、バーインボード実装で社会の安全を支える電子機器メーカーです。"
			},
			{
				property: "og:title",
				content: `会社案内 | ${company.name}`
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DKMDBay-.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: "/"
		}],
		meta: [{
			property: "og:url",
			content: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TechnologyRoute = Route$11.update({
	id: "/technology",
	path: "/technology",
	getParentRoute: () => Route$12
});
var SitemapDotxmlRoute = Route$10.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var ServicesRoute = Route$9.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$12
});
var ProductsRoute = Route$8.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var NewsRoute = Route$6.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$12
});
var FaqRoute = Route$5.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var CasesRoute = Route$3.update({
	id: "/cases",
	path: "/cases",
	getParentRoute: () => Route$12
});
var CareersRoute = Route$2.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var ProductsRouteChildren = { ProductsSlugRoute: Route$13.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CareersRoute,
	CasesRoute,
	ContactRoute,
	FaqRoute,
	NewsRoute,
	PrivacyRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	ServicesRoute,
	SitemapDotxmlRoute,
	TechnologyRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
