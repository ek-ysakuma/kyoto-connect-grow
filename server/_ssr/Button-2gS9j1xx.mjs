import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Button-2gS9j1xx.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
var variants = {
	primary: "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5",
	secondary: "bg-secondary text-secondary-foreground hover:brightness-105 hover:shadow-md",
	accent: "bg-accent text-accent-foreground hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5",
	outline: "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
	ghost: "text-foreground hover:bg-muted"
};
var sizes = {
	md: "h-11 px-5 text-sm min-w-[44px]",
	lg: "h-14 px-8 text-base min-w-[44px]"
};
function Button({ variant = "primary", size = "md", withArrow, className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: cn(base, variants[variant], sizes[size], className),
		...rest,
		children: [children, withArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4",
			"aria-hidden": true
		})]
	});
}
function LinkButton({ to, variant = "primary", size = "md", withArrow, className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn(base, variants[variant], sizes[size], className),
		...rest,
		children: [children, withArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4",
			"aria-hidden": true
		})]
	});
}
//#endregion
export { LinkButton as n, cn as r, Button as t };
