import { c as services } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as SectionTitle } from "./SectionTitle-DzvO4rXD.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as FeatureCard } from "./FeatureCard-DyRWyhwh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C0XGFo_m.js
var import_jsx_runtime = require_jsx_runtime();
var flow = [
	{
		n: "01",
		t: "お問い合わせ・ヒアリング",
		d: "メール／お電話でご相談内容を伺い、必要に応じて秘密保持契約（NDA）を締結します。"
	},
	{
		n: "02",
		t: "現地調査・要件定義",
		d: "回転灯システムなどは設置場所の現地調査を実施。用途・運用形態に合わせて仕様を決定します。"
	},
	{
		n: "03",
		t: "お見積・仕様提案",
		d: "詳細仕様、施工／製造範囲、費用のお見積をご提出します。"
	},
	{
		n: "04",
		t: "設計・部材手配",
		d: "自社設計にて回路・実装・機構を設計。回転灯・センサー・制御盤などの部材を手配します。"
	},
	{
		n: "05",
		t: "製造・施工",
		d: "小型LED照明・ハーネス・バーインボードは自社製造。回転灯システムは現地据付・電気工事まで実施します。"
	},
	{
		n: "06",
		t: "運用サポート",
		d: "納入後の増設、部品の追加変更、他メーカー機器の設置ご相談まで柔軟に対応します。"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "事業内容",
			description: "電子機器のあらゆる工程を、ワンストップでお引き受けします。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "事業内容" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "6 Services",
					title: "6つの事業領域",
					description: "単独工程のご依頼から、全工程一貫でのお任せまで、柔軟に対応します。"
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
					eyebrow: "Workflow",
					title: "開発フロー",
					description: "お問い合わせから量産まで、標準的な流れをご紹介します。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: flow.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border border-border rounded-xl p-8 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-bold text-primary/15 absolute top-6 right-6",
								"aria-hidden": true,
								children: f.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-semibold tracking-widest text-primary mb-3",
								children: ["STEP ", f.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-foreground mb-3",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: f.d
							})
						]
					}, f.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Support",
					title: "対応可能な業界・分野"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 md:grid-cols-3 gap-3",
					children: [
						"商業施設・物流拠点の駐車場",
						"配送センター／運送事業者",
						"自動車関連（車体架装・部品メーカー）",
						"半導体・電子デバイスメーカー",
						"施設・建物向け大型LED照明導入",
						"看板・サイン照明",
						"設備メーカー様の受託実装",
						"住宅隣接地の光害対策",
						"官公庁・公共施設"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 p-5 bg-surface rounded-lg border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-5 text-primary shrink-0 mt-0.5",
							strokeWidth: 2,
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-foreground",
							children: t
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Services as component };
