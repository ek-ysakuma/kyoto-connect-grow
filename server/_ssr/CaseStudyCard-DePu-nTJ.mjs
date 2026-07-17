import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CaseStudyCard-DePu-nTJ.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyCard({ industry, title, result, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_8px_rgb(0_91_172_/_0.08),_0_12px_32px_rgb(15_23_42_/_0.10)] hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[16/10] overflow-hidden bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				width: 1600,
				height: 1e3,
				loading: "lazy",
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block text-xs font-semibold px-2.5 py-1 rounded bg-primary/8 text-primary mb-4",
					children: industry
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base md:text-lg font-bold text-foreground leading-snug mb-4",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold tracking-widest text-muted-foreground mb-1",
						children: "RESULT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-accent",
						children: result
					})]
				})
			]
		})]
	});
}
//#endregion
export { CaseStudyCard as t };
