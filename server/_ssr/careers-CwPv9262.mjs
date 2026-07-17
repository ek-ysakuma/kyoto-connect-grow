import { r as factory_default } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Award, a as TrendingUp, h as Heart, i as Users } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { n as LinkButton } from "./Button-2gS9j1xx.mjs";
import { t as SectionTitle } from "./SectionTitle-DzvO4rXD.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-CwPv9262.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		Icon: Users,
		t: "少数精鋭",
		d: "一人ひとりが設計から量産まで見渡せる、風通しの良い組織です。"
	},
	{
		Icon: TrendingUp,
		t: "成長機会",
		d: "多分野・多工程に触れられる環境で、幅広い技術力が身につきます。"
	},
	{
		Icon: Heart,
		t: "長期就業",
		d: "平均勤続年数15年以上。腰を据えて技術と向き合える会社です。"
	},
	{
		Icon: Award,
		t: "評価制度",
		d: "スキル・成果ベースの評価。若手からベテランまで公平に活躍できます。"
	}
];
var positions = [
	{
		t: "電子回路設計エンジニア",
		type: "正社員",
		exp: "経験3年以上"
	},
	{
		t: "組込ソフトウェアエンジニア",
		type: "正社員",
		exp: "経験2年以上"
	},
	{
		t: "生産技術エンジニア",
		type: "正社員",
		exp: "経験不問"
	},
	{
		t: "新卒 総合職（技術）",
		type: "新卒",
		exp: "2027年卒"
	}
];
function Careers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: "採用情報",
			description: "社会を支える電子機器を、共に作り続ける仲間を募集しています。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "採用" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: factory_default,
							alt: "京成電子の製造現場で作業する現場スタッフ",
							width: 1600,
							height: 1024,
							loading: "lazy",
							className: "w-full h-auto"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							eyebrow: "Message",
							title: "ものづくりに、真摯であること。",
							className: "mb-6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/85 leading-relaxed mb-4",
							children: "私たちは派手な会社ではありません。しかし、10年、20年、30年と社会を支える機器を、確かな技術で作り続けています。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/85 leading-relaxed",
							children: "「見えないところで社会を支えたい」「腰を据えて技術と向き合いたい」——そんな想いを持った方と、ぜひ一緒に働きたいと考えています。"
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Why Keisei",
					title: "京成電子で働く4つの魅力"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border border-border rounded-xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center justify-center size-12 rounded-lg bg-accent/10 text-accent mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.Icon, {
									className: "size-6",
									strokeWidth: 1.5,
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-foreground mb-3",
								children: v.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: v.d
							})
						]
					}, v.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Positions",
						title: "募集職種"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-card border border-border rounded-xl overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-border",
							children: positions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-col md:flex-row md:items-center gap-3 md:gap-8 p-6 md:p-7 hover:bg-surface transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold px-2.5 py-1 rounded bg-primary/8 text-primary self-start",
										children: p.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-base font-semibold text-foreground",
										children: p.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: p.exp
									})
								]
							}, p.t))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
							to: "/contact",
							withArrow: true,
							children: "採用について問い合わせる"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Careers as component };
