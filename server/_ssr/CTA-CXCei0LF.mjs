import { n as company } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as PhoneCall } from "../_libs/lucide-react.mjs";
import { n as LinkButton } from "./Button-2gS9j1xx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTA-CXCei0LF.js
var import_jsx_runtime = require_jsx_runtime();
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-y bg-primary text-primary-foreground relative overflow-hidden",
		"aria-labelledby": "cta-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-[0.08] pointer-events-none",
			style: {
				backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
				backgroundSize: "48px 48px, 64px 64px"
			},
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-secondary-foreground/80",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "cta-heading",
						className: "text-3xl md:text-[2.5rem] font-bold leading-tight mb-5",
						children: "電子機器開発でお困りですか？"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-10",
						children: [
							"設計から製造までお気軽にご相談ください。",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							"経験豊富なエンジニアが、貴社の課題に最適なご提案をいたします。"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
							to: "/contact",
							variant: "accent",
							size: "lg",
							withArrow: true,
							children: "お問い合わせ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${company.tel.replace(/-/g, "")}`,
							className: "inline-flex items-center justify-center gap-3 h-14 px-8 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
									className: "size-5",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display tabular-nums",
									children: company.tel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-primary-foreground/70",
									children: [
										"（",
										company.telHours,
										"）"
									]
								})
							]
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { CTA as t };
