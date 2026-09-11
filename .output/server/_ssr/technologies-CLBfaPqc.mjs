import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, f as TechSection, n as AutomationShowcase } from "./sections-CRH8873F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technologies-CLBfaPqc.js
var import_jsx_runtime = require_jsx_runtime();
function TechnologiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-0 pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Stack",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Tools I Use to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Build"
					}),
					"."
				] }),
				subtitle: "Only technologies actually used in delivered projects — kept small on purpose."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutomationShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { TechnologiesPage as component };
