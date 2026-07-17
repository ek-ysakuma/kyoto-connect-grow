import { i as faqs } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as CTA } from "./CTA-CXCei0LF.mjs";
import { t as FAQ } from "./FAQ-428P8Mfo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq--xF_AkZy.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "FAQ",
			title: "よくあるご質問",
			description: "お客様からよくいただくご質問への回答をまとめました。掲載のない内容はお気軽にお問い合わせください。",
			crumbs: [{
				label: "ホーム",
				to: "/"
			}, { label: "よくあるご質問" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x max-w-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: faqs })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { FaqPage as component };
