import { a as news, c as services, l as technology_default, o as products, s as reasons, t as cases } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowDown, T as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as LinkButton } from "./Button-2gS9j1xx.mjs";
import { t as SectionTitle } from "./SectionTitle-DzvO4rXD.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as CaseStudyCard } from "./CaseStudyCard-DePu-nTJ.mjs";
import { t as NewsCard } from "./NewsCard-DSzaqebi.mjs";
import { t as ProductCard } from "./ProductCard-BUNnzzTq.mjs";
import { t as FeatureCard } from "./FeatureCard-DyRWyhwh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKMDBay-.js
var import_jsx_runtime = require_jsx_runtime();
var hero_electronics_default = "/assets/hero-electronics-B9_7AuQt.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 -z-10",
			style: { background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 order-2 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-px w-8 bg-primary",
								"aria-hidden": true
							}), "Safety Signal & LED Engineering"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.25] tracking-tight",
							children: [
								"光と音と文字で、",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"現場の安全を",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "見える化する。"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 md:mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl",
							children: "株式会社京成電子は、回転灯安全報知システム、小型LED照明、車両用ワイヤーハーネス、バーインボード実装を手がける横浜・戸塚の電子機器メーカーです。 1967年創業、設計から施工までワンストップでお客様の安全課題を解決します。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col sm:flex-row gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
								to: "/contact",
								size: "lg",
								withArrow: true,
								children: "無料で相談する"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
								to: "/services",
								variant: "outline",
								size: "lg",
								children: "事業内容を見る"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8",
							children: [
								{
									k: "創業",
									v: "1967",
									u: "年"
								},
								{
									k: "取得特許",
									v: "2",
									u: "件"
								},
								{
									k: "受託開始",
									v: "1998",
									u: "年〜"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-display text-3xl md:text-4xl font-bold text-primary tabular-nums",
								children: [s.v, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base text-foreground/70 ml-1",
									children: s.u
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.k
							})] }, s.k))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6 order-1 lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden bg-surface shadow-[0_20px_60px_-20px_rgb(0_91_172_/_0.35)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_electronics_default,
								alt: "京成電子が手がける回転灯安全報知システム／LED基板の技術を象徴する電子基板のクローズアップ。",
								width: 1920,
								height: 1280,
								fetchPriority: "high",
								className: "size-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-[0_12px_32px_rgb(15_23_42_/_0.10)] items-center gap-4",
							"aria-hidden": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center size-10 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm",
								children: "⚙"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "独自技術"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold text-foreground font-display",
								children: "LED警告灯 特許取得"
							})] })]
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:flex justify-center mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.3em] font-semibold uppercase",
						children: "Scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
						className: "size-4 animate-bounce",
						"aria-hidden": true
					})]
				})
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Services",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"安全と省エネを、",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							"光と電子で支える。"
						] }),
						description: "回転灯安全報知システム、小型LED照明、車両用ハーネス、バーインボード実装の4本柱を中心に、6つの領域で事業を展開しています。",
						className: "mb-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
						to: "/services",
						variant: "outline",
						withArrow: true,
						children: "事業内容一覧"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...s }, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Why Keisei Denshi",
					title: "京成電子が選ばれる4つの理由",
					description: "1967年創業。単なる製造委託先ではなく、安全課題を一緒に解決する技術パートナーとして伴走します。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
					children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...r }, r.num))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Products",
						title: "主要製品ラインアップ",
						description: "産業向け標準製品と、カスタム受託開発の両輪でご要望にお応えします。",
						className: "mb-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
						to: "/products",
						variant: "outline",
						withArrow: true,
						children: "全製品を見る"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: products.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2 lg:order-1 rounded-xl overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: technology_default,
							alt: "オシロスコープを操作するエンジニア。京成電子の設計・評価現場。",
							width: 1600,
							height: 1024,
							loading: "lazy",
							className: "w-full h-auto object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-1 lg:order-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								eyebrow: "Technology",
								title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"特許取得の独自技術で、",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"光と電子の応用を広げる。"
								] }),
								description: "LED警告灯・LED駆動回路の特許技術をベースに、回転灯システム／小型LED照明／車両用ハーネス／バーインボード実装まで、幅広い領域で技術を提供します。",
								className: "mb-8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4 mb-8",
								children: [
									"LED警告灯（特許第4868237号）",
									"発光ダイオード駆動回路（特許第4911747号）",
									"回転灯安全報知システムの設計・施工",
									"半導体評価用バーインボードの実装"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 size-1.5 rounded-full bg-primary shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: t
									})]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
								to: "/technology",
								withArrow: true,
								children: "技術紹介ページへ"
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Case Studies",
						title: "導入事例",
						description: "製造業・インフラ・設備メーカーなど、幅広い業界での実績があります。",
						className: "mb-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
						to: "/cases",
						variant: "outline",
						withArrow: true,
						children: "事例一覧"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: cases.slice(0, 3).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyCard, { ...c }, c.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "News",
						title: "お知らせ",
						className: "mb-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/news",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all",
						children: ["すべてのお知らせ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { ...n }, n.title)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Home as component };
