import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { c as Pill, l as Section, s as GlassCard, u as SectionHeading, v as profile } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, c as ProcessSection, d as StatsSection, m as WhySection, r as AvailabilitySection, t as AboutSection } from "./sections-CRH8873F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cm5WXYNc.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pb-6 pt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "About",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					profile.name,
					" — ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: profile.title
					})
				] }),
				subtitle: profile.positioning
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: profile.specialties.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: s }, s))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: "Technology with a business case"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Every build starts with the process it replaces. Before choosing a framework or a model, I map how leads arrive, who answers them, and where hours disappear — then automate that specific gap."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: "One system, not five tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Website, chatbot, voice agent, CRM, calendar, and reporting all connect. You get one view of what happened, and no data stuck in a tool nobody opens."
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilitySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { AboutPage as component };
