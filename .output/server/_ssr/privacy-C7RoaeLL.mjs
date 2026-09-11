import { n as require_jsx_runtime } from "../_libs/elevenlabs__react+react.mjs";
import { l as Section, s as GlassCard, u as SectionHeading, v as profile } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-C7RoaeLL.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Information collected",
		body: "Contact details you submit through the enquiry form — name, email, phone or WhatsApp number, company, project type, budget, and project description — plus basic anonymised analytics about site usage."
	},
	{
		title: "How it is used",
		body: "Solely to respond to your enquiry, scope potential work, and send project-related communication. Your details are never sold or shared for marketing purposes."
	},
	{
		title: "Storage and retention",
		body: "Enquiry data is retained only as long as needed for the conversation or an active engagement, and is deleted on request."
	},
	{
		title: "Third-party tools",
		body: "Scheduling, messaging, email, and analytics providers may process limited data on our behalf under their own privacy terms."
	},
	{
		title: "Your rights",
		body: `You can request access to, correction of, or deletion of your data at any time by writing to ${profile.email}.`
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Legal",
			title: "Privacy Policy"
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
export { PrivacyPage as component };
