import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
import { a as FinalCta, d as StatsSection, l as ProjectsSection } from "./sections-CRH8873F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-DoarbWgd.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-0 pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Portfolio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Featured Projects & ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Case Studies"
					}),
					"."
				] }),
				subtitle: "Real systems built for real businesses — open any project for the full breakdown."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ProjectsPage as component };
