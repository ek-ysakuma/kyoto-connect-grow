import { n as __toESM } from "../_runtime.mjs";
import { n as company } from "./site-data-G-CnUx_z.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Building2, b as CircleCheck, d as PhoneCall, p as Mail, y as Clock } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-DyPSokKf.mjs";
import { t as Button } from "./Button-2gS9j1xx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-R-OWBndM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputCls = "w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "お問い合わせ",
		description: "電子機器の設計・開発・OEM・量産に関するご相談を承ります。ご要望に応じて秘密保持契約（NDA）の締結にも対応します。",
		crumbs: [{
			label: "ホーム",
			to: "/"
		}, { label: "お問い合わせ" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-card border border-border rounded-xl p-8 md:p-12",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-8",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-foreground mb-3",
								children: "お問い合わせを受け付けました"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"内容を確認のうえ、営業日翌日までにご返信いたします。",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"ありがとうございました。"
								]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid md:grid-cols-2 gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "会社名",
										name: "company",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "部署・役職",
										name: "dept"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "ご担当者名",
										name: "name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "メールアドレス",
										name: "email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "電話番号",
										name: "tel",
										type: "tel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										required: true,
										children: "お問い合わせ種別"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "type",
										required: true,
										className: inputCls,
										defaultValue: "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "選択してください"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "回転灯安全報知システムについて" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "小型LED照明について" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "車両用ハーネス／オプション機器について" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "バーインボード実装について" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "配送車 鍵管理BOX について" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "採用について" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "その他" })
										]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								required: true,
								children: "お問い合わせ内容"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 7,
								className: `${inputCls} h-auto py-3 resize-y`,
								placeholder: "ご相談内容、想定数量、希望納期などをご記入ください。"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									required: true,
									className: "mt-1 size-4 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/privacy",
									className: "text-primary underline",
									children: "プライバシーポリシー"
								}), "に同意します。"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								withArrow: true,
								className: "w-full md:w-auto",
								children: "この内容で送信する"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-primary text-primary-foreground rounded-xl p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold tracking-widest uppercase mb-3 opacity-80",
									children: "Tel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-5",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${company.tel.replace(/-/g, "")}`,
										className: "font-display text-2xl font-bold tabular-nums",
										children: company.tel
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-4",
										"aria-hidden": true
									}), company.telHours]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card border border-border rounded-xl p-8 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								Icon: Mail,
								label: "Email",
								value: company.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								Icon: Building2,
								label: "所在地",
								value: company.address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-surface border border-border rounded-xl p-6 text-sm text-muted-foreground leading-relaxed",
							children: "お急ぎの場合は、お電話でのお問い合わせもお受けしております。 技術的なご相談は、担当エンジニアより折り返しご連絡いたします。"
						})
					]
				})]
			})
		})
	})] });
}
function Label({ children, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-sm font-semibold text-foreground mb-2",
		children: [children, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-accent ml-1",
			children: "*"
		})]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		required,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		name,
		required,
		className: inputCls
	})] });
}
function InfoRow({ Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center size-10 rounded-lg bg-primary/8 text-primary shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5",
				strokeWidth: 1.5,
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-foreground break-all",
				children: value
			})]
		})]
	});
}
//#endregion
export { Contact as component };
