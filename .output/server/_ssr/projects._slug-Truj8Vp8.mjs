import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { a as CtaLink, l as Section, u as SectionHeading } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-Truj8Vp8.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			title: "Case study not found",
			subtitle: "This project may have been renamed or removed."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
				to: "/projects",
				variant: "glass",
				children: "Back to Projects"
			})
		})]
	});
}
//#endregion
export { ProjectNotFound as notFoundComponent };
