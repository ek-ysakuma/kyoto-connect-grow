import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Cpu, g as Factory, m as Layers, o as ShieldCheck, r as Wrench, s as Settings } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FeatureCard-DyRWyhwh.js
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	cpu: Cpu,
	settings: Settings,
	layers: Layers,
	wrench: Wrench,
	factory: Factory,
	shield: ShieldCheck
};
function FeatureCard({ icon, title, desc, num }) {
	const Icon = typeof icon === "string" ? iconMap[icon] : icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_4px_8px_rgb(0_91_172_/_0.08),_0_12px_32px_rgb(15_23_42_/_0.10)] hover:-translate-y-1",
		children: [
			num && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-6 right-6 font-display text-4xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors",
				"aria-hidden": true,
				children: num
			}),
			Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex items-center justify-center size-12 rounded-lg bg-primary/8 text-primary mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-6",
					strokeWidth: 1.5,
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-bold text-foreground mb-3",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground leading-relaxed",
				children: desc
			})
		]
	});
}
//#endregion
export { FeatureCard as t };
