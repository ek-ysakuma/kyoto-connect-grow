import { l as technology_default } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Cpu, c as Ruler, l as Radio, o as ShieldCheck, t as Zap, v as CodeXml } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as SectionTitle } from "./SectionTitle-DzvO4rXD.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology-BdN8cNGL.js
var import_jsx_runtime = require_jsx_runtime();
var techs = [
	{
		Icon: ShieldCheck,
		title: "回転灯安全報知システム",
		desc: "センサー・制御盤・回転灯を組み合わせた駐車場向けの安全報知システム設計。KCI社／電材ランド様と連携し、パトライト社・日恵製作所社製回転灯を採用しています。"
	},
	{
		Icon: Zap,
		title: "LED照明・LED警告灯",
		desc: "LED警告灯（特許第4868237号）・発光ダイオード駆動回路（特許第4911747号）を軸に、小型LED照明 KTC-L002 などを自社設計・自社製造しています。"
	},
	{
		Icon: Cpu,
		title: "回路設計・製品開発",
		desc: "通信機器の組立・配線から発展した回路設計技術。用途に応じてLEDや制御回路、機能部品を組合せ、低コストで付加価値の高い製品を実現します。"
	},
	{
		Icon: CodeXml,
		title: "バーインボード実装",
		desc: "半導体評価用バーインボードの部品実装を1998年から受託。半導体メーカー様の評価工程を支える、高信頼のはんだ付け・実装品質を提供します。"
	},
	{
		Icon: Radio,
		title: "車両用ハーネス・車載機器",
		desc: "トラック向けワイヤーハーネス、パーキングアラーム、融雪装置部品、隊名標識灯、コーナーポール灯など、人と車の安全を支える車両用オプションの設計・製造。"
	},
	{
		Icon: Ruler,
		title: "現地施工・電気工事",
		desc: "回転灯システムは、現地調査・仕様決定・据付工事・電気工事までワンストップ。ネット販売品や他メーカー機器の設置ご相談も承ります。"
	}
];
function Technology() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Technology",
			title: "技術紹介",
			description: "40年培った回路・ソフト・機構の総合技術力で、複合的な開発課題を解決します。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "技術紹介" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl overflow-hidden mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: technology_default,
							alt: "京成電子の技術現場でオシロスコープを用いて回路の評価を行うエンジニア",
							width: 1600,
							height: 1024,
							loading: "lazy",
							className: "w-full h-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Core Skills",
						title: "6つのコア技術領域",
						description: "各分野の専門エンジニアが在籍し、社内でクロスファンクショナルに開発を進めます。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
						children: techs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-[0_12px_32px_rgb(15_23_42_/_0.08)] transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex items-center justify-center size-12 rounded-lg bg-primary/8 text-primary mb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, {
										className: "size-6",
										strokeWidth: 1.5,
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-foreground mb-3",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: t.desc
								})
							]
						}, t.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Patents & Partners",
					title: "独自技術と連携ネットワーク",
					description: "自社の特許技術と、業界パートナーとの連携で、確かな品質と施工力をお届けします。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6 md:gap-8",
					children: [
						{
							k: "特許 第4868237号",
							v: "LED警告灯（2011年11月取得）"
						},
						{
							k: "特許 第4911747号",
							v: "発光ダイオード駆動回路（2012年1月取得）"
						},
						{
							k: "パートナー",
							v: "KCI／電材ランド／ティーネットジャパン／いすゞ車体／市光工業 各社様"
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border border-border rounded-xl p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-primary mb-2",
							children: c.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: c.v
						})]
					}, c.k))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Technology as component };
