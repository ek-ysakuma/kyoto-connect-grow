import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./Button-2gS9j1xx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionTitle-DzvO4rXD.js
var import_jsx_runtime = require_jsx_runtime();
function SectionTitle({ eyebrow, title, description, align = "left", as: Tag = "h2", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl mb-12 md:mb-16", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4", align === "center" && "justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-px w-8 bg-primary",
					"aria-hidden": true
				}), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: "text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
export { SectionTitle as t };
