import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as useConversation } from "../_libs/elevenlabs__react+react.mjs";
import { c as PhoneCall, i as Send, l as Mic, m as LoaderCircle, r as Sparkles, s as PhoneOff } from "../_libs/lucide-react.mjs";
import { i as CtaButton, l as Section, s as GlassCard, u as SectionHeading, v as profile } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AgentDemo-cMerHBtD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEBHOOK_URL = "https://jaydn8n.app.n8n.cloud/webhook/freelancing";
var ELEVENLABS_AGENT_ID = "agent_0301m0mb34czewery503b7jd2x5y";
var suggestions = [
	"Who is Jay?",
	"What services does he provide?",
	"What technologies does he use?",
	"What projects has he built?",
	"How much do projects cost?",
	"How can I contact him?",
	"Can he build an AI voice agent?",
	"Can he build my business website?"
];
function fallbackAnswer(input) {
	const q = input.toLowerCase();
	if (/(who|about).*(jay|he|you)/.test(q) || q.includes("who is")) return `${profile.name} is a web developer and AI agent automation specialist. He builds high-performance websites, AI agents, voice agents, chatbots, and business automation systems for startups and growing businesses.`;
	if (q.includes("service")) return "Jay provides web development, AI agent development, AI voice agents, AI chatbots, business automation, and API/tool integrations — often combined into one complete system.";
	if (q.includes("tech") || q.includes("stack") || q.includes("tools")) return "Frontend: React, Next.js, Tailwind CSS. Backend: Node.js, Python, REST APIs, webhooks. Databases: PostgreSQL, MySQL, MongoDB, Supabase. AI: OpenAI APIs, LLMs, RAG, vector databases. Automation: n8n, Zapier, Make. Voice: speech-to-text, text-to-speech, telephony APIs.";
	if (q.includes("project") || q.includes("work") || q.includes("portfolio")) return "Recent builds include an AI Voice Agent Platform, a Real Estate AI Automation system, a conversion-focused business website, an AI Customer Support Agent, and a full-stack Automation Dashboard. Each has a detailed case study on the Projects page.";
	if (q.includes("cost") || q.includes("price") || q.includes("pricing") || q.includes("budget")) return "Websites start from ₹25,000, business websites from ₹60,000, AI automation from ₹30,000, and AI voice agents from ₹45,000 setup plus usage. Final pricing depends on complexity, integrations, and requirements.";
	if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("call")) return `You can email ${profile.email}, message on WhatsApp, or book a free consultation. The contact form on this site sends a full project brief straight over.`;
	if (q.includes("voice")) return "Yes. Jay builds AI voice agents that answer and place calls, qualify leads, answer FAQs, book appointments, transfer to humans, and follow up — in Hindi, English, Hinglish, or multiple languages.";
	if (q.includes("website") || q.includes("web app") || q.includes("site")) return "Yes. From landing pages to full business websites, dashboards, and SaaS apps — designed, developed, SEO-optimized, integrated, and deployed end to end.";
	if (q.includes("chatbot") || q.includes("whatsapp")) return "Yes. Website and WhatsApp chatbots for support, lead generation, sales, FAQs, and appointment booking — grounded in your own business knowledge base.";
	if (q.includes("time") || q.includes("long") || q.includes("deadline")) return "Landing pages take 1–2 weeks, business websites 2–4 weeks, AI agents 2–4 weeks, and voice agents or full automation systems 3–6 weeks depending on scope.";
	return "Great question. Jay can most likely help — tell me a bit about your business and what you want automated, or book a free consultation and he'll walk you through the options.";
}
function extractBotReply(data) {
	if (!data) return null;
	if (typeof data === "object" && !Array.isArray(data)) {
		if (typeof data.code === "number" && data.code !== 200) return null;
		if (typeof data.message === "string" && (data.message.includes("Respond to Webhook") || data.message.includes("not registered") || data.message.includes("workflow"))) return null;
	}
	if (Array.isArray(data) && data.length > 0) {
		const item = data[0];
		if (typeof item === "string") return item;
		if (typeof item === "object" && item !== null) return item.output || item.response || item.text || item.message || item.result || item.json && (item.json.output || item.json.text || item.json.message || item.json.response) || null;
	}
	if (typeof data === "object" && data !== null) {
		if (typeof data.output === "string") return data.output;
		if (typeof data.response === "string") return data.response;
		if (typeof data.text === "string") return data.text;
		if (typeof data.result === "string") return data.result;
		if (data.data) {
			if (typeof data.data === "string") return data.data;
			if (typeof data.data === "object") return data.data.output || data.data.text || data.data.message || data.data.response || null;
		}
		if (data.json && typeof data.json === "object") return data.json.output || data.json.text || data.json.message || data.json.response || null;
		if (typeof data.message === "string" && !data.code) return data.message;
	}
	if (typeof data === "string") return data;
	return null;
}
function AgentDemo() {
	const [started, setStarted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [voiceError, setVoiceError] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "agent",
		text: "Hi! I'm Jay's AI assistant powered by n8n and ElevenLabs. Ask me via text or click 'Call AI Agent' to talk live with Priya!"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const listRef = (0, import_react.useRef)(null);
	const sessionIdRef = (0, import_react.useRef)("");
	const conversation = useConversation({
		onConnect: () => {
			setVoiceError(null);
			setMessages((prev) => [...prev, {
				role: "agent",
				text: "🎙️ Connected to Jay's AI Voice Agent (Priya). Speak into your microphone to chat!"
			}]);
			scrollToBottom();
		},
		onDisconnect: () => {
			setMessages((prev) => [...prev, {
				role: "agent",
				text: "🔇 Voice call ended."
			}]);
			scrollToBottom();
		},
		onMessage: (message) => {
			if (message?.message) {
				const role = message.source === "user" ? "user" : "agent";
				setMessages((prev) => [...prev, {
					role,
					text: message.message
				}]);
				scrollToBottom();
			}
		},
		onError: (err) => {
			console.error("ElevenLabs Voice Agent Error:", err);
			const errMsg = typeof err === "string" ? err : err?.message || "Failed to start voice call";
			setVoiceError(errMsg);
		}
	});
	const { status, isSpeaking } = conversation;
	const isVoiceConnected = status === "connected";
	const isVoiceConnecting = status === "connecting";
	(0, import_react.useEffect)(() => {
		sessionIdRef.current = "sess_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
	}, []);
	const scrollToBottom = (0, import_react.useCallback)(() => {
		setTimeout(() => {
			listRef.current?.scrollTo({
				top: 99999,
				behavior: "smooth"
			});
		}, 50);
	}, []);
	async function toggleVoiceCall() {
		if (isVoiceConnected || isVoiceConnecting) {
			await conversation.endSession();
			return;
		}
		setVoiceError(null);
		try {
			await navigator.mediaDevices.getUserMedia({ audio: true });
			await conversation.startSession({ agentId: ELEVENLABS_AGENT_ID });
		} catch (err) {
			console.error("Microphone access or voice session start failed:", err);
			setVoiceError(err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError" ? "Microphone permission was denied. Please allow microphone access to talk to Priya." : "Could not connect to voice agent. Please try again.");
		}
	}
	async function send(text) {
		const value = text.trim() || (!started ? "Hello" : "");
		if (!value || loading) return;
		setStarted(true);
		setMessages((prev) => [...prev, {
			role: "user",
			text: value
		}]);
		setInput("");
		setLoading(true);
		scrollToBottom();
		let botResponse = "";
		try {
			const response = await fetch(WEBHOOK_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					message: value,
					chatInput: value,
					input: value,
					sessionId: sessionIdRef.current,
					history: messages.map((m) => ({
						role: m.role,
						content: m.text
					}))
				})
			});
			if (response.ok) {
				const contentType = response.headers.get("content-type");
				if (contentType && contentType.includes("application/json")) botResponse = extractBotReply(await response.json()) || "";
				else {
					const text = await response.text();
					botResponse = extractBotReply(text) || text;
				}
			}
		} catch (err) {
			console.warn("n8n webhook error, using fallback response:", err);
		}
		if (!botResponse || typeof botResponse !== "string" || !botResponse.trim()) botResponse = fallbackAnswer(value);
		setMessages((prev) => [...prev, {
			role: "agent",
			text: botResponse.trim()
		}]);
		setLoading(false);
		scrollToBottom();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "ai-demo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Interactive Demo",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Talk to My AI Agent." }),
			subtitle: "A live taste of the kind of assistant that can sit on your website, answering questions and capturing leads 24/7.",
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
			interactive: false,
			className: "p-6 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: listRef,
							className: "max-h-[360px] min-h-[260px] space-y-3 overflow-y-auto pr-1",
							children: [
								messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap break-words ${m.role === "user" ? "bg-[image:var(--gradient-primary)] text-primary-foreground" : "border border-glass-border bg-glass text-foreground/90"}`,
										children: m.text
									})
								}, i)),
								loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 max-w-[85%] rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI agent is thinking…" })]
									})
								}),
								isVoiceConnected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 max-w-[85%] rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs text-emerald-400 font-medium",
										children: isSpeaking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4 animate-bounce text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Priya (AI Voice Agent) is speaking…" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Listening… Speak into your microphone" })] })
									})
								})
							]
						}),
						voiceError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400",
							children: voiceError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								send(input);
							},
							className: "mt-5 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: input,
								onChange: (e) => setInput(e.target.value),
								disabled: loading,
								placeholder: loading ? "AI is processing your query..." : started ? "Ask another question…" : "Ask me anything or click Call AI Agent…",
								"aria-label": "Message the AI agent",
								className: "h-11 flex-1 rounded-full border border-glass-border bg-glass px-5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 disabled:opacity-50"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaButton, {
								type: "submit",
								size: "md",
								className: "px-5",
								disabled: loading,
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: started ? "Send" : "Start Conversation"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Try asking"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => send(s),
								disabled: loading,
								className: "rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-50",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleVoiceCall,
							disabled: isVoiceConnecting,
							className: `mt-2 flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${isVoiceConnected ? "border-red-500/50 bg-red-500/20 text-red-400 hover:bg-red-500/30" : isVoiceConnecting ? "border-amber-500/50 bg-amber-500/20 text-amber-300 cursor-wait" : "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary"}`,
							children: isVoiceConnecting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Connecting Voice Agent..."] }) : isVoiceConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "h-4 w-4 text-red-400" }), "End Call with Priya"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }), "Call AI Agent (Priya)"] })
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { AgentDemo as t };
