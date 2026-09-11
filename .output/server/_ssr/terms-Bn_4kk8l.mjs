import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, s as GlassCard, u as SectionHeading } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-Bn_4kk8l.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Quotations and scope",
		body: "Prices shown on this website are starting points. Every project is quoted after a discovery conversation, and the agreed scope is documented before work begins."
	},
	{
		title: "Payments",
		body: "Projects typically begin with an advance, with the balance tied to agreed milestones. Third-party costs such as telephony, LLM usage, hosting, and licences are billed separately."
	},
	{
		title: "Timelines",
		body: "Delivery estimates assume timely feedback, content, and access to required accounts. Delays in these may shift the schedule."
	},
	{
		title: "Ownership",
		body: "On final payment, ownership of the delivered code and content transfers to the client, excluding third-party libraries and services which remain under their own licences."
	},
	{
		title: "Support",
		body: "A post-launch support window is included with each project. Ongoing maintenance, monitoring, and automation updates are available as a separate monthly engagement."
	},
	{
		title: "Liability",
		body: "Systems are built and tested with care, but performance of third-party APIs, telephony networks, and AI providers is outside our control and excluded from liability."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Legal",
			title: "Terms & Conditions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-5",
			children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: s.body
				})]
			}, s.title))
		})]
	});
}
//#endregion
export { TermsPage as component };
