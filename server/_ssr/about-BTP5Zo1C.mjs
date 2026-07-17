import { n as company, r as factory_default } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as SectionTitle } from "./SectionTitle-DzvO4rXD.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BTP5Zo1C.js
var import_jsx_runtime = require_jsx_runtime();
var info = [
	{
		k: "会社名",
		v: company.name
	},
	{
		k: "英文表記",
		v: company.nameEn
	},
	{
		k: "設立",
		v: "1967年（昭和42年）7月"
	},
	{
		k: "資本金",
		v: "1,000万円"
	},
	{
		k: "従業員数",
		v: "12名"
	},
	{
		k: "本社所在地",
		v: company.address
	},
	{
		k: "電話番号",
		v: `${company.tel}（FAX：${company.fax}）`
	},
	{
		k: "事業内容",
		v: "回転灯安全報知システムの設計・施工・販売／小型LED照明の設計・製造・販売／車両用オプション機器・ワイヤーハーネスの設計・製造／バーインボード部品実装受託"
	},
	{
		k: "主要取引先",
		v: "いすゞ車体（株）／市光工業（株）／（株）KCI（電材ランド）／（株）ティーネットジャパン／（株）レスターエレクトロニクス"
	},
	{
		k: "取得特許",
		v: "発光ダイオード駆動回路（特許第4911747号）／LED警告灯（特許第4868237号）"
	}
];
var history = [
	{
		y: "1967",
		t: "7月、有限会社京成電子を設立。通信機器の組立・配線・加工、電子機器の製造販売を開始。"
	},
	{
		y: "1983",
		t: "株式会社京成電子に社名変更。通信機器の組立・配線・加工に加え、各種商品開発と販売を開始。"
	},
	{
		y: "1998",
		t: "バーインボードの部品実装受託事業を開始。"
	},
	{
		y: "2001",
		t: "事業主体を、投光器・回転警告灯・施設照明分野のLED照明機器設計/製造/販売、および車用オプション機器・ハーネスの設計/製造へ変更。"
	},
	{
		y: "2011",
		t: "ティーネットジャパン社の販売代理店として、大型LED照明機器の販売／施工を開始。"
	},
	{
		y: "2011",
		t: "「LED警告灯」で特許取得（特許第4868237号）。"
	},
	{
		y: "2012",
		t: "「発光ダイオード駆動回路」で特許取得（特許第4911747号）。"
	},
	{
		y: "2015",
		t: "KCI社と連携し、回転灯安全報知システムの設計／施工を開始。"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Company",
			title: "会社案内",
			description: "株式会社京成電子は、1967年の創業以来、通信機器の組立から始まり、LED照明・回転灯安全報知システム・車両用ハーネス・バーインボード実装まで、社会の安全を支える電子機器の設計・製造を続けています。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "会社案内" }]
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
							alt: "京成電子の製造フロア。回転灯・LED照明・ハーネスの実装作業を行う現場。",
							width: 1600,
							height: 1024,
							loading: "lazy",
							className: "w-full h-auto"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Message",
						title: "ものづくりの本質に、誠実に。",
						className: "mb-6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-foreground/85 leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1967年の創業以来、京成電子は「見えないところで社会の安全を支える電子機器」を作り続けてきました。回転灯・LED照明・車両用ハーネス・バーインボード実装──いずれも派手さはありませんが、駐車場、車両、半導体評価装置といった現場を、確かな設計と品質で支える仕事です。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "少数精鋭の12名だからこそ、単なる製造委託先ではなく、お客様の技術パートナーとして課題解決に伴走できます。1社1台のご相談から、大手メーカー様との10年20年のお取引まで、腰を据えてお付き合いさせていただきます。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-foreground",
								children: "株式会社京成電子"
							})
						]
					})] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Corporate Profile",
					title: "会社概要"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-card border border-border rounded-xl overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "divide-y divide-border",
						children: info.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 p-6 md:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-semibold text-muted-foreground",
								children: row.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-foreground",
								children: row.v
							})]
						}, row.k))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "History",
					title: "沿革"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative border-l-2 border-border ml-3",
					children: history.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "pl-8 pb-10 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -left-[9px] top-1 size-4 rounded-full bg-primary border-4 border-background",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-bold text-primary tabular-nums mb-1",
								children: h.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/85",
								children: h.t
							})
						]
					}, h.y))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { About as component };
