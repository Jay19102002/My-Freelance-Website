import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/elevenlabs__react+react.mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { f as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { i as __exportAll } from "./server-kPK7aaqr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-DM7pErQm.js
var profile = {
	name: "Jay Dewangan",
	title: "Freelance Web Developer & AI Agent Automation Specialist",
	positioning: "I'm an independent freelance developer building high-performance websites and AI-powered automation systems. You hire me directly — one point of contact, clear scope, fixed or hourly.",
	availability: "Freelance — available for new projects",
	email: "jaydewanganbusiness@gmail.com",
	whatsapp: "+91 90000 00000",
	whatsappLink: "https://wa.me/919000000000",
	calendly: "https://cal.com/jaydewangan/consultation",
	location: "India — working with clients worldwide",
	socials: [
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/jaydewangan"
		},
		{
			label: "GitHub",
			href: "https://github.com/Jay19102002"
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/_jaydewangan_?igsi=ank4amN1Yzd6YW03"
		},
		{
			label: "YouTube",
			href: "https://youtube.com/@jaydewangan"
		}
	],
	specialties: [
		"Full-Stack Web Development",
		"AI Agent Development",
		"AI Voice Agents",
		"AI Chatbots",
		"Business Automation",
		"CRM Automation",
		"API Integrations",
		"Workflow Automation",
		"SaaS Development"
	]
};
var heroStats = [
	{
		value: "50+",
		label: "Projects"
	},
	{
		value: "20+",
		label: "Businesses Helped"
	},
	{
		value: "24/7",
		label: "AI Automation"
	},
	{
		value: "100%",
		label: "Custom Solutions"
	}
];
var resultStats = [
	{
		value: "50+",
		label: "Projects Delivered"
	},
	{
		value: "20+",
		label: "Businesses Supported"
	},
	{
		value: "1000+",
		label: "Hours Automated"
	},
	{
		value: "24/7",
		label: "AI Automation"
	},
	{
		value: "99%",
		label: "Client Satisfaction"
	}
];
var services = [
	{
		slug: "web-development",
		title: "Web Development",
		tagline: "Modern, responsive, high-performance websites for businesses, startups, and personal brands.",
		items: [
			"Business websites",
			"Portfolio websites",
			"Landing pages",
			"E-commerce websites",
			"SaaS websites",
			"Custom web applications",
			"Admin dashboards",
			"Full-stack applications",
			"API integrations",
			"Website redesigns"
		]
	},
	{
		slug: "ai-agent-development",
		title: "AI Agent Development",
		tagline: "Intelligent AI agents that understand users, access business information, and perform useful tasks.",
		items: [
			"AI customer-support agents",
			"AI sales agents",
			"AI lead qualification agents",
			"AI appointment agents",
			"AI research agents",
			"AI internal business agents",
			"Custom AI assistants",
			"Multi-step AI workflows"
		]
	},
	{
		slug: "ai-voice-agents",
		title: "AI Voice Agents",
		tagline: "Voice agents that answer and place calls like a trained team member.",
		items: [
			"Answer phone calls",
			"Make outbound calls",
			"Qualify leads",
			"Answer FAQs",
			"Book appointments",
			"Follow up with customers",
			"Transfer calls to humans",
			"Handle customer support"
		],
		note: "Hindi • English • Hinglish • Multilingual"
	},
	{
		slug: "ai-chatbots",
		title: "AI Chatbots",
		tagline: "Always-on chat that converts visitors and resolves questions instantly.",
		items: [
			"Websites",
			"WhatsApp",
			"Customer support",
			"Lead generation",
			"Sales",
			"FAQs",
			"Appointment booking"
		]
	},
	{
		slug: "business-automation",
		title: "Business Automation",
		tagline: "Automate repetitive business processes using AI and integrations.",
		items: [
			"Lead automation",
			"CRM automation",
			"Email automation",
			"WhatsApp automation",
			"Appointment automation",
			"Customer follow-up",
			"Data processing",
			"Notifications",
			"Document workflows",
			"Reporting automation"
		]
	},
	{
		slug: "api-integration",
		title: "API & Tool Integration",
		tagline: "Connect the business systems you already use into one flow.",
		items: [
			"Google Workspace",
			"WhatsApp",
			"CRM platforms",
			"Payment systems",
			"Calendars",
			"Email platforms",
			"LLM APIs",
			"Voice platforms",
			"Custom APIs",
			"Webhooks"
		]
	}
];
var projects = [
	{
		slug: "ai-voice-agent-platform",
		title: "AI Voice Agent Platform",
		category: "AI Automation",
		description: "A complete AI voice-agent platform that helps businesses automate inbound and outbound calls, qualify leads, book appointments, and handle customer support.",
		features: [
			"AI voice agent",
			"Call automation",
			"Lead qualification",
			"Appointment booking",
			"Call transcripts",
			"Analytics",
			"CRM integration"
		],
		problem: "The business missed a large share of inbound calls outside working hours and had no consistent way to follow up on new enquiries. Every call had to be handled manually by a small sales team.",
		solution: "A voice-agent platform where each business can configure an AI caller with its own script, knowledge base, qualification questions, and calendar. Calls are handled end to end and escalated to a human only when needed.",
		technology: [
			"Antigravity",
			"Vibe Coding",
			"ElevenLabs",
			"N8N",
			"Next.js",
			"Node.js",
			"PostgreSQL",
			"OpenAI APIs",
			"Speech-to-Text",
			"Text-to-Speech",
			"Telephony APIs",
			"Webhooks"
		],
		implementation: [
			"Telephony webhook receives the call and streams audio to the speech-to-text layer.",
			"The agent reasons over the business knowledge base and qualification rules in real time.",
			"Responses are synthesised back to the caller with low-latency text-to-speech.",
			"Qualified leads are written to the CRM and an appointment slot is booked on the calendar.",
			"Transcripts, recordings, and outcomes appear in the analytics dashboard."
		],
		results: [
			{
				value: "24/7",
				label: "Call coverage"
			},
			{
				value: "80%",
				label: "Calls fully automated"
			},
			{
				value: "3x",
				label: "Faster lead response"
			},
			{
				value: "~120 hrs",
				label: "Saved per month"
			}
		]
	},
	{
		slug: "real-estate-ai-automation",
		title: "Real Estate AI Automation",
		category: "AI + Real Estate",
		description: "An AI-powered system that automatically contacts real-estate leads, understands property requirements, qualifies prospects, and schedules site visits.",
		features: [
			"AI lead qualification",
			"Automated calling",
			"WhatsApp follow-up",
			"Appointment scheduling",
			"CRM updates"
		],
		problem: "Portal leads arrived in bulk but agents contacted them hours later, by which time prospects had already spoken to a competitor. Requirements were never recorded consistently.",
		solution: "An automation layer that calls and messages every new lead within seconds, captures budget, location, and configuration, then books site visits directly into the agent's calendar.",
		technology: [
			"N8N",
			"ElevenLabs",
			"Antigravity",
			"Vibe Coding",
			"Node.js",
			"OpenAI APIs",
			"WhatsApp Business API",
			"Telephony APIs",
			"Supabase"
		],
		implementation: [
			"Portal and website leads are pushed into a single intake webhook.",
			"The AI voice agent calls instantly; unanswered leads move to a WhatsApp sequence.",
			"Requirements are extracted into structured fields and scored against inventory.",
			"Hot leads get a site-visit slot; cold leads enter a nurture cadence.",
			"Every interaction syncs to the CRM with a full conversation summary."
		],
		results: [
			{
				value: "<30 sec",
				label: "Lead response time"
			},
			{
				value: "+42%",
				label: "Site visits booked"
			},
			{
				value: "5x",
				label: "Leads handled per agent"
			},
			{
				value: "-35%",
				label: "Cost per qualified lead"
			}
		]
	},
	{
		slug: "business-website",
		title: "Business Website",
		category: "Web Development",
		description: "A premium conversion-focused business website designed to generate leads and communicate services clearly.",
		features: [
			"Responsive design",
			"SEO optimization",
			"Contact forms",
			"WhatsApp integration",
			"CMS/content management",
			"Analytics"
		],
		problem: "The company relied on referrals and an outdated site that loaded slowly, ranked poorly, and gave visitors no clear next step.",
		solution: "A rebuilt, content-managed website with sharp service positioning, fast page loads, structured SEO, and multiple conversion paths including WhatsApp.",
		technology: [
			"Antigravity",
			"Vibe Coding",
			"React",
			"Next.js",
			"Tailwind CSS",
			"Supabase",
			"REST APIs",
			"Analytics"
		],
		implementation: [
			"Content and service architecture mapped to real buyer questions.",
			"Component-driven build with image optimisation and Core Web Vitals budget.",
			"Structured data, metadata, and sitemap wired for search visibility.",
			"Form submissions routed to email, CRM, and WhatsApp notifications.",
			"Editable content model so the team can publish without a developer."
		],
		results: [
			{
				value: "2.1x",
				label: "More enquiries"
			},
			{
				value: "-64%",
				label: "Page load time"
			},
			{
				value: "+180%",
				label: "Organic impressions"
			},
			{
				value: "98",
				label: "Performance score"
			}
		]
	},
	{
		slug: "ai-customer-support-agent",
		title: "AI Customer Support Agent",
		category: "AI Agent",
		description: "An intelligent customer-support agent trained on business documentation, FAQs, products, and policies.",
		features: [
			"Knowledge-base integration",
			"Natural-language conversations",
			"Automated support",
			"Human escalation",
			"Conversation history"
		],
		problem: "Support handled the same questions repeatedly across email and WhatsApp, with slow first-response times and inconsistent answers.",
		solution: "A retrieval-augmented support agent that answers from approved company content, keeps context across a conversation, and hands off cleanly to a human when confidence is low.",
		technology: [
			"Antigravity",
			"Vibe Coding",
			"ElevenLabs",
			"N8N",
			"Python",
			"OpenAI APIs",
			"RAG",
			"Vector Databases",
			"PostgreSQL",
			"React",
			"Webhooks"
		],
		implementation: [
			"Documentation, policies, and product data indexed into a vector store.",
			"Every answer is grounded in retrieved sources to prevent invented replies.",
			"Confidence thresholds and intent rules trigger human escalation.",
			"Conversation history is stored for auditing and continuous tuning.",
			"Deployed to the website widget and WhatsApp from one shared brain."
		],
		results: [
			{
				value: "72%",
				label: "Tickets auto-resolved"
			},
			{
				value: "<10 sec",
				label: "First response"
			},
			{
				value: "-50%",
				label: "Support workload"
			},
			{
				value: "4.8/5",
				label: "Customer rating"
			}
		]
	},
	{
		slug: "automation-dashboard",
		title: "Automation Dashboard",
		category: "Full-Stack Development",
		description: "A business dashboard for monitoring automated workflows, leads, calls, customers, and AI-agent activity.",
		features: [
			"Analytics",
			"User management",
			"AI activity",
			"Lead tracking",
			"Reports",
			"API integrations"
		],
		problem: "Automation was running across several tools with no single place to see what happened, what failed, or what it was worth.",
		solution: "A full-stack dashboard that aggregates workflow runs, AI-agent conversations, calls, and lead outcomes into one operational view with alerts and exports.",
		technology: [
			"Antigravity",
			"Vibe Coding",
			"N8N",
			"ElevenLabs",
			"React",
			"Node.js",
			"PostgreSQL",
			"Supabase",
			"REST APIs",
			"Webhooks",
			"Tailwind CSS"
		],
		implementation: [
			"Each automation posts run events to a unified ingestion endpoint.",
			"Events are normalised into leads, conversations, calls, and jobs.",
			"Role-based access separates owners, managers, and operators.",
			"Failure alerts fire to email and WhatsApp with retry controls.",
			"Scheduled reports summarise volume, outcomes, and time saved."
		],
		results: [
			{
				value: "1 view",
				label: "For every workflow"
			},
			{
				value: "-90%",
				label: "Time spent reporting"
			},
			{
				value: "99.5%",
				label: "Workflow uptime"
			},
			{
				value: "Real-time",
				label: "Failure alerts"
			}
		]
	}
];
var techStack = [
	{
		category: "Frontend",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Next.js",
			"Tailwind CSS"
		]
	},
	{
		category: "Backend",
		items: [
			"Node.js",
			"Python",
			"REST APIs",
			"Webhooks"
		]
	},
	{
		category: "Databases",
		items: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Supabase"
		]
	},
	{
		category: "AI & Development",
		items: [
			"Antigravity",
			"Vibe Coding",
			"OpenAI APIs",
			"AI Agents",
			"LLMs",
			"RAG",
			"Vector Databases",
			"AI Workflows"
		]
	},
	{
		category: "Automation",
		items: [
			"N8N",
			"Zapier",
			"Make",
			"Webhooks",
			"API automation"
		]
	},
	{
		category: "Voice AI",
		items: [
			"ElevenLabs",
			"AI Voice APIs",
			"Speech-to-Text",
			"Text-to-Speech",
			"Telephony APIs"
		]
	}
];
var workflows = [
	{
		title: "Website lead to booked meeting",
		steps: [
			"Website Lead",
			"AI Agent",
			"Qualification",
			"CRM",
			"Follow-Up",
			"Appointment",
			"Human Sales Team"
		]
	},
	{
		title: "Inbound call to confirmed appointment",
		steps: [
			"Incoming Call",
			"AI Voice Agent",
			"Customer Questions",
			"Qualification",
			"Calendar",
			"Appointment Booked"
		]
	},
	{
		title: "Customer message to resolved query",
		steps: [
			"Customer Message",
			"AI Chatbot",
			"Knowledge Base",
			"Answer",
			"CRM Update",
			"Notification"
		]
	}
];
var processSteps = [
	{
		number: "01",
		title: "Discovery",
		body: "Understand the business, requirements, goals, and challenges."
	},
	{
		number: "02",
		title: "Strategy",
		body: "Design the website, AI agent, automation workflow, or complete system."
	},
	{
		number: "03",
		title: "Development",
		body: "Build the solution using modern technologies."
	},
	{
		number: "04",
		title: "Testing",
		body: "Test functionality, integrations, performance, security, and user experience."
	},
	{
		number: "05",
		title: "Launch",
		body: "Deploy the project and connect all required systems."
	},
	{
		number: "06",
		title: "Support",
		body: "Provide maintenance, improvements, automation updates, and technical support."
	}
];
var whyWorkWithMe = [
	{
		title: "Business-Focused Development",
		body: "Technology should solve a real business problem — not add another tool to manage."
	},
	{
		title: "Custom Solutions",
		body: "No unnecessary templates or one-size-fits-all systems."
	},
	{
		title: "AI + Web Expertise",
		body: "Websites, AI agents, APIs, and automation combined into one solution."
	},
	{
		title: "Scalable Architecture",
		body: "Systems built to grow with the business, not to be rebuilt in a year."
	},
	{
		title: "Fast Communication",
		body: "Clear, direct communication throughout the project."
	},
	{
		title: "Long-Term Support",
		body: "Continuous improvement and maintenance after launch."
	}
];
var testimonials = [
	{
		quote: "Jay completely transformed our online presence and automated our lead follow-up. We now respond to new enquiries within seconds instead of hours.",
		name: "Rahul Mehta",
		company: "Skyline Realty",
		industry: "Real Estate",
		projectType: "AI Automation"
	},
	{
		quote: "The AI voice agent handles our after-hours calls better than we expected. Appointments get booked while the team is asleep.",
		name: "Priya Nair",
		company: "Clarity Dental Studio",
		industry: "Healthcare",
		projectType: "AI Voice Agent"
	},
	{
		quote: "Our new website finally explains what we do. Enquiries doubled in the first two months and the team can update content themselves.",
		name: "Aman Gupta",
		company: "Nexa Interiors",
		industry: "Interior Design",
		projectType: "Business Website"
	},
	{
		quote: "He understood our workflow before writing a line of code. The automation removed an entire day of manual work every week.",
		name: "Sarah Whitfield",
		company: "Northbridge Consulting",
		industry: "B2B Services",
		projectType: "Business Automation"
	},
	{
		quote: "The support agent answers product questions accurately and escalates the tricky ones. Our support load dropped by half.",
		name: "Vikram Shetty",
		company: "Loopware",
		industry: "SaaS",
		projectType: "AI Agent"
	}
];
var pricing = [
	{
		name: "Website Starter",
		price: "Starting from ₹25,000",
		includes: [
			"Professional website",
			"Responsive design",
			"Contact form",
			"WhatsApp integration",
			"Basic SEO",
			"Deployment"
		],
		cta: "Get Website"
	},
	{
		name: "Business Website",
		price: "Starting from ₹60,000",
		featured: true,
		includes: [
			"Custom website",
			"Multiple pages",
			"Lead-generation forms",
			"WhatsApp integration",
			"Analytics",
			"SEO",
			"CMS/content management",
			"Third-party integrations"
		],
		cta: "Build My Website"
	},
	{
		name: "AI Automation",
		price: "Starting from ₹30,000",
		includes: [
			"Custom AI agent",
			"Business knowledge base",
			"Workflow automation",
			"API integrations",
			"CRM integration",
			"Testing",
			"Deployment"
		],
		cta: "Automate My Business"
	},
	{
		name: "AI Voice Agent",
		price: "Starting from ₹45,000 setup",
		priceNote: "Plus applicable usage / telephony charges.",
		includes: [
			"Custom AI voice agent",
			"Voice configuration",
			"Business knowledge",
			"Call workflow",
			"Lead qualification",
			"Appointment booking",
			"Call transfer",
			"Deployment"
		],
		cta: "Build My Voice Agent"
	}
];
var faqs = [
	{
		q: "What services do you provide?",
		a: "Web development, AI agents, AI voice agents, chatbots, business automation, API integrations, and custom software development."
	},
	{
		q: "Can you build a complete website from scratch?",
		a: "Yes. The website can be designed, developed, integrated, optimized, and deployed from scratch — including content structure, SEO, and analytics."
	},
	{
		q: "Can you build an AI voice agent for my business?",
		a: "Yes. AI voice agents can be customized for sales, support, lead qualification, appointment booking, and other workflows, in Hindi, English, Hinglish, or multiple languages."
	},
	{
		q: "Can you integrate AI with my existing CRM?",
		a: "Yes. CRM, calendars, WhatsApp, websites, APIs, and other business systems can be connected so data flows in one place."
	},
	{
		q: "Do you take on freelance contracts and retainers?",
		a: "Yes. I work freelance on fixed-scope projects, hourly engagements, and ongoing monthly retainers — whichever fits your budget and workload."
	},
	{
		q: "Do you work with international clients?",
		a: "Yes. I work with both Indian and international clients, with communication and delivery adapted to your timezone."
	},
	{
		q: "How long does a project take?",
		a: "Landing pages typically take 1–2 weeks, business websites 2–4 weeks, AI agents and chatbots 2–4 weeks, and voice agents or full automation systems 3–6 weeks depending on complexity."
	},
	{
		q: "Do you provide maintenance?",
		a: "Yes. Ongoing maintenance, monitoring, automation updates, and technical support are available as a monthly engagement."
	},
	{
		q: "Can I request a custom solution?",
		a: "Absolutely. Most projects are custom. Book a free consultation and we'll scope the right approach for your business."
	}
];
var availabilityFor = [
	"Website development",
	"AI automation",
	"AI voice agents",
	"Custom AI agents",
	"Business automation",
	"Long-term development partnerships"
];
var projectTypes = [
	"Website",
	"Web Application",
	"AI Agent",
	"AI Voice Agent",
	"Chatbot",
	"Business Automation",
	"API Integration",
	"Other"
];
var budgets = [
	"Under ₹15,000",
	"₹15,000 – ₹30,000",
	"₹30,000 – ₹75,000",
	"₹75,000 – ₹2,00,000",
	"₹2,00,000+",
	"Not sure yet"
];
var footerNav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Technologies",
		to: "/technologies"
	},
	{
		label: "Process",
		to: "/process"
	},
	{
		label: "Pricing",
		to: "/pricing"
	},
	{
		label: "FAQ",
		to: "/faq"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DNQqVDLW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CughuSu6.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ctaVariants = cva("inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60", {
	variants: {
		variant: {
			primary: "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-110",
			glass: "glass-panel text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
			accent: "bg-[image:var(--gradient-accent)] text-accent-foreground shadow-[0_18px_40px_-20px_var(--accent)] hover:-translate-y-0.5 hover:brightness-110",
			ghost: "text-muted-foreground hover:text-primary"
		},
		size: {
			sm: "h-9 px-4",
			md: "h-11 px-6",
			lg: "h-13 px-8 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function CtaLink({ to, variant, size, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn(ctaVariants({
			variant,
			size
		}), className),
		children
	});
}
function CtaAnchor({ href, variant, size, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noreferrer" : void 0,
		className: cn(ctaVariants({
			variant,
			size
		}), className),
		children
	});
}
function CtaButton({ variant, size, className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(ctaVariants({
			variant,
			size
		}), className),
		...rest,
		children
	});
}
function GlassCard({ className, interactive = true, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("glass-panel surface-3d rounded-3xl p-6", interactive && "hover:surface-3d-hover", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg",
				children: subtitle
			}) : null
		]
	});
}
function Section({ id, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative px-5 py-20 md:py-28", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-muted-foreground",
		children
	});
}
var jay_face_default = "/assets/jay-face-9_ijCgBJ.jpg";
var nav = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Technologies",
		to: "/technologies"
	},
	{
		label: "Process",
		to: "/process"
	},
	{
		label: "Pricing",
		to: "/pricing"
	},
	{
		label: "FAQ",
		to: "/faq"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: jay_face_default,
						alt: "Jay Dewangan portrait",
						className: "h-9 w-9 rounded-full object-cover object-center ring-1 ring-primary/40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden flex-col leading-tight sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold",
							children: profile.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "Web Developer & AI Automation"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeProps: { className: "text-primary" },
						className: "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/contact",
						size: "sm",
						className: "hidden sm:inline-flex",
						children: "Start a Project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "glass-panel flex h-9 w-9 items-center justify-center rounded-xl lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-panel mx-auto mt-2 grid w-full max-w-6xl grid-cols-2 gap-1 rounded-2xl p-3 lg:hidden",
			children: [...nav, {
				label: "Contact",
				to: "/contact"
			}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				onClick: () => setOpen(false),
				className: "rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground",
				children: item.label
			}, item.to))
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-5 pb-10 pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel mx-auto w-full max-w-6xl rounded-3xl p-8 md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Let's Build Something Intelligent."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									profile.name,
									" — ",
									profile.title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
									to: "/contact",
									size: "sm",
									children: "Start Your Project"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaAnchor, {
									href: profile.calendly,
									variant: "glass",
									size: "sm",
									children: "Book a Free Consultation"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid grid-cols-2 gap-y-2 text-sm text-muted-foreground",
						children: [footerNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "transition-colors hover:text-foreground",
							children: item.label
						}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "transition-colors hover:text-foreground",
							children: "Case Studies"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-muted-foreground",
						children: [profile.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							className: "transition-colors hover:text-foreground",
							children: s.label
						}) }, s.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "transition-colors hover:text-foreground",
							children: profile.email
						}) })]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 border-t border-glass-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "transition-colors hover:text-foreground",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "transition-colors hover:text-foreground",
						children: "Terms & Conditions"
					})]
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jay Dewangan | Web Developer & AI Agent Automation Specialist" },
			{
				name: "description",
				content: "Jay Dewangan builds high-performance websites, AI agents, voice agents, chatbots, and business automation systems for startups and businesses."
			},
			{
				name: "author",
				content: "Jay Dewangan"
			},
			{
				name: "keywords",
				content: "Web Developer in India, Freelance Web Developer, AI Automation Developer, AI Agent Developer, AI Voice Agent Developer, AI Automation Services, Business Automation, AI Chatbot Developer, Full Stack Developer, Custom AI Agent Development, AI Voice Automation, Website Development Services"
			},
			{
				property: "og:title",
				content: "Jay Dewangan | Web Developer & AI Automation Specialist"
			},
			{
				property: "og:description",
				content: "High-performance websites, AI agents, voice agents, chatbots, and business automation systems."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" })]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-CBXZTx1J.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Jay Dewangan | Web Developer & AI Agent Automation Specialist" },
		{
			name: "description",
			content: "Jay Dewangan builds high-performance websites, AI agents, voice agents, chatbots, and business automation systems for startups and businesses."
		},
		{
			property: "og:title",
			content: "Jay Dewangan | Web Developer & AI Agent Automation Specialist"
		},
		{
			property: "og:description",
			content: "Websites, AI agents, voice agents, chatbots, and automation systems that help businesses work smarter."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-Cm5WXYNc.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Jay Dewangan | AI Automation & Web Developer" },
		{
			name: "description",
			content: "Jay Dewangan combines full-stack web development with AI automation to build complete digital systems for businesses in India and worldwide."
		},
		{
			property: "og:title",
			content: "About Jay Dewangan | AI Automation & Web Developer"
		},
		{
			property: "og:description",
			content: "A developer who understands both technology and business requirements — websites, AI agents, and automation in one system."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-B1QFgDQQ.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Start a Website or AI Automation Project — Jay Dewangan" },
		{
			name: "description",
			content: "Send a project inquiry, chat on WhatsApp, or book a free consultation for websites, AI agents, voice agents, and business automation."
		},
		{
			property: "og:title",
			content: "Contact | Start a Project with Jay Dewangan"
		},
		{
			property: "og:description",
			content: "Tell me what you're building and I'll help you choose the right technology and automation approach."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./faq-BuWIOrXP.mjs");
var Route$9 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ | Web Development & AI Automation — Jay Dewangan" },
			{
				name: "description",
				content: "Answers on services, timelines, AI voice agents, CRM integrations, international clients, maintenance, and custom solutions."
			},
			{
				property: "og:title",
				content: "FAQ | Web Development & AI Automation"
			},
			{
				property: "og:description",
				content: "Common questions about working with Jay Dewangan on websites and AI automation."
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./pricing-WrFRZfGz.mjs");
var Route$8 = createFileRoute("/pricing")({
	head: () => ({ meta: [
		{ title: "Pricing | Website & AI Automation Packages — Jay Dewangan" },
		{
			name: "description",
			content: "Websites from ₹25,000, business websites from ₹60,000, AI automation from ₹30,000, and AI voice agents from ₹45,000 setup."
		},
		{
			property: "og:title",
			content: "Pricing | Website & AI Automation Packages"
		},
		{
			property: "og:description",
			content: "Transparent starting packages for websites, AI agents, and automation systems."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./privacy-C7RoaeLL.mjs");
var Route$7 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy | Jay Dewangan" },
		{
			name: "description",
			content: "How enquiry information submitted through this website is collected, used, stored, and protected."
		},
		{
			property: "og:title",
			content: "Privacy Policy | Jay Dewangan"
		},
		{
			property: "og:description",
			content: "Data collection and usage practices for this portfolio website."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./process-BZ4_CvBE.mjs");
var Route$6 = createFileRoute("/process")({
	head: () => ({ meta: [
		{ title: "Process | How Projects Get Built — Jay Dewangan" },
		{
			name: "description",
			content: "Discovery, strategy, development, testing, launch, and support — the six-step process behind every website and AI automation project."
		},
		{
			property: "og:title",
			content: "Process | How Projects Get Built"
		},
		{
			property: "og:description",
			content: "A predictable path from first conversation to a live, supported system."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects--LJrth9c.mjs");
var Route$5 = createFileRoute("/projects")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./services-Zn06IvY4.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services | Web Development & AI Automation — Jay Dewangan" },
		{
			name: "description",
			content: "Web development, AI agent development, AI voice agents, chatbots, business automation, and API integrations for growing businesses."
		},
		{
			property: "og:title",
			content: "Services | Web Development & AI Automation"
		},
		{
			property: "og:description",
			content: "Websites, AI agents, voice agents, chatbots, automation workflows, and integrations built end to end."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./technologies-CLBfaPqc.mjs");
var Route$3 = createFileRoute("/technologies")({
	head: () => ({ meta: [
		{ title: "Technology Stack | Jay Dewangan" },
		{
			name: "description",
			content: "React, Next.js, Node.js, Python, PostgreSQL, Supabase, OpenAI APIs, RAG, n8n, and voice AI — the stack behind every build."
		},
		{
			property: "og:title",
			content: "Technology Stack | Jay Dewangan"
		},
		{
			property: "og:description",
			content: "The frontend, backend, database, AI, automation, and voice tools used on projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./terms-Bn_4kk8l.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions | Jay Dewangan" },
		{
			name: "description",
			content: "Terms covering quotations, project scope, payments, timelines, ownership, and support for development and automation work."
		},
		{
			property: "og:title",
			content: "Terms & Conditions | Jay Dewangan"
		},
		{
			property: "og:description",
			content: "Engagement terms for website, AI agent, and automation projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects.index-DoarbWgd.mjs");
var Route$1 = createFileRoute("/projects/")({
	head: () => ({ meta: [
		{ title: "Projects & Case Studies | Jay Dewangan" },
		{
			name: "description",
			content: "AI voice agent platforms, real-estate automation, business websites, support agents, and automation dashboards — with full case studies."
		},
		{
			property: "og:title",
			content: "Projects & Case Studies | Jay Dewangan"
		},
		{
			property: "og:description",
			content: "Complete AI automation and web development systems, with measurable results."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects._slug-Dbq_m0M7.mjs");
var $$splitNotFoundComponentImporter = () => import("./projects._slug-Truj8Vp8.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Case study unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		return { meta: [
			{ title: `${project.title} — Case Study | Jay Dewangan` },
			{
				name: "description",
				content: project.description
			},
			{
				property: "og:title",
				content: `${project.title} — Case Study`
			},
			{
				property: "og:description",
				content: project.description
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var FaqRoute = Route$9.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$13
});
var PricingRoute = Route$8.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$13
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$13
});
var ProcessRoute = Route$6.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$13
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$13
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$13
});
var TechnologiesRoute = Route$3.update({
	id: "/technologies",
	path: "/technologies",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$2.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var ProjectsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProjectsRoute
});
var ProjectsRouteChildren = {
	ProjectsSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ProjectsRoute
	}),
	ProjectsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FaqRoute,
	PricingRoute,
	PrivacyRoute,
	ProcessRoute,
	ProjectsRoute: ProjectsRoute._addFileChildren(ProjectsRouteChildren),
	ServicesRoute,
	TechnologiesRoute,
	TermsRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { techStack as C, workflows as E, services as S, whyWorkWithMe as T, processSteps as _, CtaLink as a, projects as b, Pill as c, cn as d, availabilityFor as f, pricing as g, heroStats as h, CtaButton as i, Section as l, faqs as m, Route as n, Eyebrow as o, budgets as p, CtaAnchor as r, GlassCard as s, router_exports as t, SectionHeading as u, profile as v, testimonials as w, resultStats as x, projectTypes as y };
