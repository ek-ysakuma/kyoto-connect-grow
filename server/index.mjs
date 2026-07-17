globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-17T11:22:38.695Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/CaseStudyCard-DnyVrwQI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"482-atfUu8xo8T29Brt9iLl8YpDGSRc\"",
		"mtime": "2026-07-17T11:22:38.174Z",
		"size": 1154,
		"path": "../public/assets/CaseStudyCard-DnyVrwQI.js"
	},
	"/assets/CTA-E7g34aig.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c8-Mg9qZESp7wpj3qXPludU3nLnruU\"",
		"mtime": "2026-07-17T11:22:38.174Z",
		"size": 1992,
		"path": "../public/assets/CTA-E7g34aig.js"
	},
	"/assets/FAQ-CPYvom10.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"620-2F3E1SbcwFVwMAdBEDk2U7lLVIg\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 1568,
		"path": "../public/assets/FAQ-CPYvom10.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-17T11:22:38.695Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/NewsCard-7eoLJjfN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3be-E6qlKYR39QQp4K9MQgKO1MmwzHI\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 958,
		"path": "../public/assets/NewsCard-7eoLJjfN.js"
	},
	"/assets/PageHero-D4JJaFR7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65f-/N98hCZmKUlS5QeJLU6SjDjelGw\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 1631,
		"path": "../public/assets/PageHero-D4JJaFR7.js"
	},
	"/assets/ProductCard-ZEsIT8rP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59e-bdg8V8tFTpCUhR1jEFH+wr/XQnE\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 1438,
		"path": "../public/assets/ProductCard-ZEsIT8rP.js"
	},
	"/assets/SectionTitle-BApZLssV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"308-s0q18k+irX//9mo2hFuGU7lT0ec\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 776,
		"path": "../public/assets/SectionTitle-BApZLssV.js"
	},
	"/assets/about-CwGXDIvR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1499-c5Ywj1nPACP2oFzzHUdoZB9WVxs\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 5273,
		"path": "../public/assets/about-CwGXDIvR.js"
	},
	"/assets/arrow-up-right-B5wLJJOp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-isiuQEUp0Epc7Qdqnlj5IkS+fGw\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 156,
		"path": "../public/assets/arrow-up-right-B5wLJJOp.js"
	},
	"/assets/careers-BEQdftal.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12e1-uk5o47iEkdKQZOBEAIXx8zu/JN0\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 4833,
		"path": "../public/assets/careers-BEQdftal.js"
	},
	"/assets/cases-BIsdgpx0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f2-vvMZyajHDN46hrOfPIZjcXb75zc\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 754,
		"path": "../public/assets/cases-BIsdgpx0.js"
	},
	"/assets/circle-check-CpRukEog.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-MgNmgSRcU8CL+r/pk+gsLO3X/G4\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 167,
		"path": "../public/assets/circle-check-CpRukEog.js"
	},
	"/assets/contact-D3jIRcNh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"192b-kWnV77d0SlEBRyYYcIvlTTak7do\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 6443,
		"path": "../public/assets/contact-D3jIRcNh.js"
	},
	"/assets/factory-DLAQnfs8.jpg": {
		"type": "image/jpeg",
		"etag": "\"50db-8aFnEPV67/5DXxv02n3p4NKqoDA\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 20699,
		"path": "../public/assets/factory-DLAQnfs8.jpg"
	},
	"/assets/faq-CK7DwWaa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d5-JSsNabtfOfoUlgj8Q9DHC0IOq1E\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 725,
		"path": "../public/assets/faq-CK7DwWaa.js"
	},
	"/assets/hero-electronics-B9_7AuQt.jpg": {
		"type": "image/jpeg",
		"etag": "\"10101-TWmc+Izm3WQYCDMNSf0W70TUnPY\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 65793,
		"path": "../public/assets/hero-electronics-B9_7AuQt.jpg"
	},
	"/assets/index-B3g3Nt1r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59ac4-tqqP6ggNeUYJrcNWRF8116wkcFs\"",
		"mtime": "2026-07-17T11:22:38.173Z",
		"size": 367300,
		"path": "../public/assets/index-B3g3Nt1r.js"
	},
	"/assets/news-DMkneSL8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"285-xsCNsCMkCzYpos80qGpnpVn8WS4\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 645,
		"path": "../public/assets/news-DMkneSL8.js"
	},
	"/assets/link-sDQV9wD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8967-w+p3kwpgqtwlhyRkTGKilLrKLOI\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 35175,
		"path": "../public/assets/link-sDQV9wD2.js"
	},
	"/assets/phone-call-mEDWmRoL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c-33Eo+0vyiDM+XImaLWJi2vNVNP4\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 412,
		"path": "../public/assets/phone-call-mEDWmRoL.js"
	},
	"/assets/privacy-BCB2xwo9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc0-S6G9VKKPXlfAMhpd4R/Sf60cnRo\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 3008,
		"path": "../public/assets/privacy-BCB2xwo9.js"
	},
	"/assets/product-1-DiK13O_K.jpg": {
		"type": "image/jpeg",
		"etag": "\"21a0-YgzoiCLvXXUmDr1EqUD0VtssA4I\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 8608,
		"path": "../public/assets/product-1-DiK13O_K.jpg"
	},
	"/assets/FeatureCard-DY95wA9B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99a-Riv+G0itECo/w6L9ju0ypz2SIjA\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 2458,
		"path": "../public/assets/FeatureCard-DY95wA9B.js"
	},
	"/assets/product-2-BUNz2uOF.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f70-jv25YTqGJmDl6oEV8fPwbi6unxE\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 12144,
		"path": "../public/assets/product-2-BUNz2uOF.jpg"
	},
	"/assets/product-3-S67UTHJz.jpg": {
		"type": "image/jpeg",
		"etag": "\"235e-GejqKYH5cnCDCkdv/qVddkGz2sk\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 9054,
		"path": "../public/assets/product-3-S67UTHJz.jpg"
	},
	"/assets/products-CbRZVDym.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fd-R+O2FGXIS9f0jdmqYJpnuL3JSes\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 765,
		"path": "../public/assets/products-CbRZVDym.js"
	},
	"/assets/products._slug-Canb9cBj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16f-gB7ORIwFmELgX8MYIpgcXv3j+q4\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 367,
		"path": "../public/assets/products._slug-Canb9cBj.js"
	},
	"/assets/products._slug-DVTAPcuH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e99-T6/Q1SU3i9Jv/247X09OyRlBGSQ\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 3737,
		"path": "../public/assets/products._slug-DVTAPcuH.js"
	},
	"/assets/routes-e_AW5uOh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23cb-jVKobQ+JmtxlkU4zXh9mgEbh6ZY\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 9163,
		"path": "../public/assets/routes-e_AW5uOh.js"
	},
	"/assets/services-C7VWMXXs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed6-+Nacab6Heu0pa/U0NdYDeh7mm44\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 3798,
		"path": "../public/assets/services-C7VWMXXs.js"
	},
	"/assets/shield-check-DyKK_rQ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"382-bRM6fTqFKX2XOUcQbq/bgmI4xCw\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 898,
		"path": "../public/assets/shield-check-DyKK_rQ8.js"
	},
	"/assets/styles-RXPmscmn.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"155d9-d5W8eRTEsLU+zEfXNN+q+GKqxJk\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 87513,
		"path": "../public/assets/styles-RXPmscmn.css"
	},
	"/assets/technology-B7VkS7aW.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d5-+v/JuRe0DVJlR5GNBjeBoMmGPAg\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 4565,
		"path": "../public/assets/technology-B7VkS7aW.jpg"
	},
	"/assets/technology-Cu7d4xAi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e6-bvYU8y2LRX9hPFHg1LijPEhC68Q\"",
		"mtime": "2026-07-17T11:22:38.175Z",
		"size": 5350,
		"path": "../public/assets/technology-Cu7d4xAi.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pzKOM2 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pzKOM2
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
