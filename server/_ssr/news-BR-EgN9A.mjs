import { a as news } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as NewsCard } from "./NewsCard-DSzaqebi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BR-EgN9A.js
var import_jsx_runtime = require_jsx_runtime();
function News() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "News",
			title: "NEWS・お知らせ",
			description: "京成電子からのお知らせをお届けします。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "NEWS" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x max-w-4xl",
				children: [...news, ...news].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { ...n }, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { News as component };
