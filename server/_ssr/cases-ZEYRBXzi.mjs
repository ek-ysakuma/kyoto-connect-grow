import { t as cases } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as CaseStudyCard } from "./CaseStudyCard-DePu-nTJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-ZEYRBXzi.js
var import_jsx_runtime = require_jsx_runtime();
function Cases() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Case Studies",
			title: "導入事例",
			description: "長期取引を支えてきた実績から、代表的な事例をご紹介します。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "導入事例" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyCard, { ...c }, i))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Cases as component };
