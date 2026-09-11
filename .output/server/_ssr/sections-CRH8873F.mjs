import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/elevenlabs__react+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as ArrowRight, _ as ChevronDown, a as Quote, b as BrainCircuit, c as PhoneCall, g as CodeXml, h as Cpu, n as Workflow, o as Plug, u as MessageSquare, v as Check, x as Bot } from "../_libs/lucide-react.mjs";
import { C as techStack, E as workflows, S as services, T as whyWorkWithMe, _ as processSteps, a as CtaLink, b as projects, c as Pill, d as cn, f as availabilityFor, g as pricing, h as heroStats, l as Section, m as faqs, o as Eyebrow, r as CtaAnchor, s as GlassCard, u as SectionHeading, v as profile, w as testimonials, x as resultStats } from "./router-DNQqVDLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-CRH8873F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var serviceIcons = {
	"web-development": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-5 w-5" }),
	"ai-agent-development": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-5 w-5" }),
	"ai-voice-agents": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-5 w-5" }),
	"ai-chatbots": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5" }),
	"business-automation": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "h-5 w-5" }),
	"api-integration": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "h-5 w-5" })
};
function AvailabilityBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-pulse-ring h-2 w-2 rounded-full bg-primary" }), profile.availability]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pb-16 pt-14 md:pb-24 md:pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilityBadge, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance text-4xl font-bold leading-[1.05] md:text-6xl",
						children: [
							"I Build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Websites & AI Agents"
							}),
							" That Work for Your Business."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg",
						children: [
							"I'm ",
							profile.name,
							", a freelance web developer and AI automation specialist. You work directly with me — no agency layers, no account managers — from first call to launch."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
								to: "/projects",
								size: "lg",
								children: ["View My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/contact",
								variant: "glass",
								size: "lg",
								children: "Hire Me Freelance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaAnchor, {
								href: profile.calendly,
								variant: "accent",
								size: "lg",
								children: "Book a Free Consultation"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4",
						children: heroStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel rounded-2xl px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-bold text-primary",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.label
							})]
						}, s.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative [perspective:1400px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-float-slow glass-panel rounded-[2rem] p-6 [transform:rotateX(6deg)_rotateY(-9deg)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-accent/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-primary/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 font-mono text-[11px] text-muted-foreground",
									children: "automation-system.live"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" }),
									label: "AI Agent",
									value: "Qualifying lead…"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }),
									label: "Voice Agent",
									value: "Call answered in 0.9s"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "h-4 w-4" }),
									label: "Workflow",
									value: "CRM updated · Follow-up queued"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4" }),
									label: "Uptime",
									value: "24/7 · 99.5% success"
								}
							].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-2xl border border-glass-border bg-glass px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3 text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground",
										children: row.icon
									}), row.label]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-muted-foreground",
									children: row.value
								})]
							}, row.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: profile.specialties.slice(0, 5).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: s }, s))
						})
					]
				})
			})]
		})]
	});
}
function AboutSection({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						eyebrow: "About Me",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Building Digital Products That Actually Solve Problems." }),
						subtitle: profile.positioning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I combine web development with AI automation to create complete digital solutions — not just a website, and not just a bot. The website attracts and converts, the AI agents talk to people, and the automation makes sure nothing falls through the cracks." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I work with founders and business owners who care about outcomes: more qualified leads, faster response times, fewer manual hours. That means understanding the business process first, then choosing the technology that fits it." })]
					}),
					compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
						to: "/about",
						variant: "glass",
						children: ["More About Me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
						to: "/contact",
						variant: "glass",
						children: ["Start a Conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
					children: "What I help businesses do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						"Establish a strong online presence",
						"Generate leads",
						"Automate repetitive tasks",
						"Handle customer enquiries",
						"Follow up with prospects",
						"Schedule appointments",
						"Integrate business tools",
						"Build custom AI agents",
						"Improve internal workflows"
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), h]
					}, h))
				})]
			})]
		})
	});
}
function ServicesSection({ limit }) {
	const list = limit ? services.slice(0, limit) : services;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Everything Needed to Launch and Automate." }),
				subtitle: "From the first line of front-end code to a voice agent answering your calls at 2 AM.",
				className: "mb-12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground",
							children: serviceIcons[service.slug]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: service.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: service.tagline
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-auto space-y-1.5 text-sm text-muted-foreground",
							children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), item]
							}, item))
						}),
						service.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-glass-border bg-glass px-3 py-2 text-xs text-primary",
							children: service.note
						}) : null
					]
				}, service.slug))
			}),
			limit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
					to: "/services",
					variant: "glass",
					children: ["See All Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			}) : null
		]
	});
}
function ProjectsSection({ limit }) {
	const list = limit ? projects.slice(0, limit) : projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Featured Projects",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Systems Built, Shipped, and Running." }),
				subtitle: "Each project below is a complete system — interface, intelligence, and integrations.",
				className: "mb-12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: list.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: `flex flex-col gap-4 ${i === 0 && !limit ? "md:col-span-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: project.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: ["0", i + 1]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold md:text-2xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1.5 pt-1",
							children: [project.technology.slice(0, 5).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary",
								children: t
							}, t)), project.technology.length > 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-muted-foreground self-center",
								children: [
									"+",
									project.technology.length - 5,
									" more"
								]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: f }, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							className: "mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent",
							children: ["View Case Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}, project.slug))
			}),
			limit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
					to: "/projects",
					variant: "glass",
					children: ["View All Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			}) : null
		]
	});
}
function TechSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "technologies",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Technology Stack",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tools I Use to Build." }),
			subtitle: "A focused stack — chosen for reliability, speed, and easy handover.",
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: techStack.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-primary",
					children: group.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-xl border border-glass-border bg-glass px-3 py-1.5 text-sm text-foreground/90",
						children: item
					}, item))
				})]
			}, group.category))
		})]
	});
}
function AutomationShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "automation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "AI Automation Showcase",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Imagine Your Business Running on Autopilot." }),
			subtitle: "These are complete systems, not isolated bots — each step hands off cleanly to the next.",
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-5",
			children: workflows.map((flow) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: flow.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: flow.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-2xl border border-glass-border bg-glass px-4 py-2 text-sm font-medium",
							children: step
						}), i < flow.steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-primary" }) : null]
					}, step))
				})]
			}, flow.title))
		})]
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "process",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Process",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How We Work Together." }),
			subtitle: "Freelance engagement, start to finish — one developer, direct communication, from first conversation to a live, supported system.",
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl font-bold text-gradient",
						children: step.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: step.body
					})
				]
			}, step.number))
		})]
	});
}
function WhySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "why",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why Hire Me As Your Freelancer",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Engineering Judgement, Business Thinking." }),
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: whyWorkWithMe.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: item.body
				})]
			}, item.title))
		})]
	});
}
function StatsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "results",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-panel rounded-[2rem] p-8 md:p-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-3 lg:grid-cols-5",
				children: resultStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-bold text-gradient",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		})
	});
}
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "testimonials",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Testimonials",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "What Clients Say." }),
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-foreground/90",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									t.company,
									" · ",
									t.industry
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-primary",
								children: t.projectType
							})
						]
					})
				]
			}, t.name))
		})]
	});
}
function PricingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "pricing",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Freelance Rates",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Transparent Freelance Pricing." }),
				subtitle: "Fixed-scope packages or hourly/retainer freelance work — these are typical starting points to help you plan.",
				className: "mb-12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: pricing.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: `flex flex-col gap-4 ${plan.featured ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""}`,
					children: [
						plan.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-fit rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground",
							children: "Most Popular"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold text-primary",
							children: plan.price
						}), plan.priceNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: plan.priceNote
						}) : null] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm text-muted-foreground",
							children: plan.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), i]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/contact",
							variant: plan.featured ? "primary" : "glass",
							size: "sm",
							className: "mt-auto w-full",
							children: plan.cta
						})
					]
				}, plan.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-sm text-muted-foreground",
				children: "Final pricing depends on complexity, integrations, usage, and business requirements."
			})
		]
	});
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "faq",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Questions, Answered." }),
			className: "mb-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-panel rounded-3xl px-6 py-2 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "border-glass-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-base font-semibold hover:no-underline",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})
		})]
	});
}
function AvailabilitySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "availability",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Availability" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold",
						children: "Currently accepting new projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: availabilityFor.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: a }, a))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaAnchor, {
				href: profile.whatsappLink,
				variant: "accent",
				size: "lg",
				className: "shrink-0",
				children: "Chat on WhatsApp"
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines pointer-events-none absolute inset-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-2xl space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-bold md:text-5xl",
						children: ["Ready to Build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Something Smarter?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Whether you need a high-converting website, an AI agent, or a complete business automation system, let's build it together."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
							to: "/contact",
							size: "lg",
							children: ["Start Your Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaAnchor, {
							href: profile.calendly,
							variant: "glass",
							size: "lg",
							children: "Book a Free Consultation"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm text-muted-foreground",
						children: "I don't just build websites. I build digital systems that help businesses work smarter."
					})
				]
			})]
		})
	});
}
//#endregion
export { FinalCta as a, ProcessSection as c, StatsSection as d, TechSection as f, FaqSection as i, ProjectsSection as l, WhySection as m, AutomationShowcase as n, Hero as o, TestimonialsSection as p, AvailabilitySection as r, PricingSection as s, AboutSection as t, ServicesSection as u };
