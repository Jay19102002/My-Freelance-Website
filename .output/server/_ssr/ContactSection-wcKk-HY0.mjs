import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/elevenlabs__react+react.mjs";
import { d as MessageCircle, p as Mail, y as CalendarCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as CtaButton, l as Section, p as budgets, r as CtaAnchor, s as GlassCard, u as SectionHeading, v as profile, y as projectTypes } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactSection-wcKk-HY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-11 w-full rounded-2xl border border-glass-border bg-glass px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60";
function ContactSection() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Contact",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Have a Project in Mind?" }),
			subtitle: "Tell me what you're building. I'll help you figure out the best technology, automation, and development approach.",
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				interactive: false,
				className: "p-7 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitting(true);
						const form = e.currentTarget;
						window.setTimeout(() => {
							setSubmitting(false);
							form.reset();
							toast.success("Project inquiry sent", { description: "Thanks! I'll get back to you within 24 hours." });
						}, 700);
					},
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "text-xs font-medium text-muted-foreground",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								required: true,
								placeholder: "Your name",
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "text-xs font-medium text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								required: true,
								placeholder: "you@company.com",
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "phone",
								className: "text-xs font-medium text-muted-foreground",
								children: "Phone / WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								name: "phone",
								placeholder: "+91 …",
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "company",
								className: "text-xs font-medium text-muted-foreground",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "company",
								name: "company",
								placeholder: "Company name",
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "projectType",
								className: "text-xs font-medium text-muted-foreground",
								children: "Project Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "projectType",
								name: "projectType",
								className: fieldClass,
								defaultValue: "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a project type"
								}), projectTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									className: "bg-popover",
									children: t
								}, t))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "budget",
								className: "text-xs font-medium text-muted-foreground",
								children: "Budget"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "budget",
								name: "budget",
								className: fieldClass,
								defaultValue: "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a budget range"
								}), budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									className: "bg-popover",
									children: b
								}, b))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "description",
								className: "text-xs font-medium text-muted-foreground",
								children: "Project Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "description",
								name: "description",
								required: true,
								rows: 5,
								placeholder: "What are you building, and what should it automate?",
								className: "w-full rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
							type: "submit",
							size: "lg",
							disabled: submitting,
							className: "sm:col-span-2",
							children: submitting ? "Sending…" : "Send Project Inquiry"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Prefer something faster?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaAnchor, {
							href: profile.whatsappLink,
							variant: "accent",
							className: "w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaAnchor, {
							href: profile.calendly,
							variant: "glass",
							className: "w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-4 w-4" }), " Book a Free Consultation"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaAnchor, {
							href: `mailto:${profile.email}`,
							variant: "glass",
							className: "w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
								" ",
								profile.email
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-primary",
							children: "Based in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: profile.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: profile.availability
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { ContactSection as t };
