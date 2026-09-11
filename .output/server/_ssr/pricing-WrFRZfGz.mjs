import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, i as FaqSection, s as PricingSection } from "./sections-CRH8873F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-WrFRZfGz.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-0 pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Pricing",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Starting Packages, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Custom Outcomes"
					}),
					"."
				] }),
				subtitle: "Pick the closest starting point — the final scope is always shaped around your business."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { PricingPage as component };
