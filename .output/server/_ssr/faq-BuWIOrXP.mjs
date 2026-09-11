import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, i as FaqSection } from "./sections-CRH8873F.mjs";
import { t as AgentDemo } from "./AgentDemo-cMerHBtD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BuWIOrXP.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-0 pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "FAQ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Everything You Might ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Want to Ask"
					}),
					"."
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { FaqPage as component };
