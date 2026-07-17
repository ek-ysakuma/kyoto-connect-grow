import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { w as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NewsCard-DSzaqebi.js
var import_jsx_runtime = require_jsx_runtime();
function NewsCard({ date, category, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border hover:border-primary/30 transition-colors cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 md:w-64 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					dateTime: date,
					className: "font-display text-sm text-muted-foreground tabular-nums",
					children: date.replace(/-/g, ".")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold px-2.5 py-1 rounded border border-primary/30 text-primary",
					children: category
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "flex-1 text-base font-medium text-foreground group-hover:text-primary transition-colors",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "hidden md:block size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0",
				"aria-hidden": true
			})
		]
	});
}
//#endregion
export { NewsCard as t };
