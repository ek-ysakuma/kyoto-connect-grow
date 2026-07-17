import { o as products } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as ProductCard } from "./ProductCard-BUNnzzTq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BIaCIoou.js
var import_jsx_runtime = require_jsx_runtime();
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Products",
			title: "製品一覧",
			description: "産業向けの標準製品から、貴社仕様のカスタム開発まで対応します。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "製品一覧" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Products as component };
