import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DyPSokKf.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative pt-28 md:pt-36 pb-14 md:pb-20 bg-surface border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "パンくずリスト",
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
						itemScope: true,
						itemType: "https://schema.org/BreadcrumbList",
						children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-1.5",
							itemProp: "itemListElement",
							itemScope: true,
							itemType: "https://schema.org/ListItem",
							children: [
								c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: c.to,
									itemProp: "item",
									className: "hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										itemProp: "name",
										children: c.label
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									itemProp: "name",
									className: "text-foreground",
									children: c.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
									itemProp: "position",
									content: String(i + 1)
								}),
								i < crumbs.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-3",
									"aria-hidden": true
								})
							]
						}, i))
					})
				}),
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 bg-primary",
						"aria-hidden": true
					}), eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground tracking-tight leading-[1.25]",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed",
					children: description
				})
			]
		})
	});
}
//#endregion
export { PageHero as t };
