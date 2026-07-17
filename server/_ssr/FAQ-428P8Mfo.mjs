import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as Plus } from "../_libs/lucide-react.mjs";
import { r as cn } from "./Button-2gS9j1xx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-428P8Mfo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQ({ items }) {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border border-y border-border",
		children: items.map((item, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(isOpen ? null : i),
				"aria-expanded": isOpen,
				className: "flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex-1 flex gap-4 md:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-primary font-bold text-lg shrink-0",
						"aria-hidden": true,
						children: "Q."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
						children: item.q
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: cn("size-5 shrink-0 text-muted-foreground transition-transform duration-300 mt-1", isOpen && "rotate-45 text-primary"),
					"aria-hidden": true
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 md:gap-6 pl-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-accent font-bold text-lg shrink-0",
							"aria-hidden": true,
							children: "A."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground leading-relaxed",
							children: item.a
						})]
					})
				})
			})] }, i);
		})
	});
}
//#endregion
export { FAQ as t };
