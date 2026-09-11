import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, c as ProcessSection, n as AutomationShowcase, s as PricingSection, u as ServicesSection } from "./sections-CRH8873F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Zn06IvY4.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-0 pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Websites, AI Agents, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Automation Systems"
					}),
					"."
				] }),
				subtitle: "Six service areas that combine into one working system for your business."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutomationShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ServicesPage as component };
