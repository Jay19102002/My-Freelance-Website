import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  MessageSquare,
  PhoneCall,
  Plug,
  Quote,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  availabilityFor,
  faqs,
  heroStats,
  pricing,
  processSteps,
  profile,
  projects,
  resultStats,
  services,
  techStack,
  testimonials,
  whyWorkWithMe,
  workflows,
} from "@/data/portfolio";
import { CtaAnchor, CtaLink, Eyebrow, GlassCard, Pill, Section, SectionHeading } from "./primitives";

const serviceIcons: Record<string, ReactNode> = {
  "web-development": <Code2 className="h-5 w-5" />,
  "ai-agent-development": <BrainCircuit className="h-5 w-5" />,
  "ai-voice-agents": <PhoneCall className="h-5 w-5" />,
  "ai-chatbots": <MessageSquare className="h-5 w-5" />,
  "business-automation": <Workflow className="h-5 w-5" />,
  "api-integration": <Plug className="h-5 w-5" />,
};

export function AvailabilityBadge() {
  return (
    <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
      <span className="animate-pulse-ring h-2 w-2 rounded-full bg-primary" />
      {profile.availability}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-7">
          <AvailabilityBadge />
          <h1 className="text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
            I Build <span className="text-gradient">Websites & AI Agents</span> That Work for Your
            Business.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm {profile.name}, a freelance web developer and AI automation specialist. You work
            directly with me — no agency layers, no account managers — from first call to launch.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink to="/projects" size="lg">
              View My Work <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink to="/contact" variant="glass" size="lg">
              Hire Me Freelance
            </CtaLink>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="glass-panel rounded-2xl px-4 py-3">
                <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative [perspective:1400px]">
          <div className="animate-float-slow glass-panel rounded-[2rem] p-6 [transform:rotateX(6deg)_rotateY(-9deg)]">
            <div className="flex items-center gap-2 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                automation-system.live
              </span>
            </div>
            <div className="space-y-3">
              {[
                { icon: <Bot className="h-4 w-4" />, label: "AI Agent", value: "Qualifying lead…" },
                {
                  icon: <PhoneCall className="h-4 w-4" />,
                  label: "Voice Agent",
                  value: "Call answered in 0.9s",
                },
                {
                  icon: <Workflow className="h-4 w-4" />,
                  label: "Workflow",
                  value: "CRM updated · Follow-up queued",
                },
                {
                  icon: <Cpu className="h-4 w-4" />,
                  label: "Uptime",
                  value: "24/7 · 99.5% success",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-2xl border border-glass-border bg-glass px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                      {row.icon}
                    </span>
                    {row.label}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.specialties.slice(0, 5).map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ compact = false }: { compact?: boolean }) {
  const helps = [
    "Establish a strong online presence",
    "Generate leads",
    "Automate repetitive tasks",
    "Handle customer enquiries",
    "Follow up with prospects",
    "Schedule appointments",
    "Integrate business tools",
    "Build custom AI agents",
    "Improve internal workflows",
  ];

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title={<>Building Digital Products That Actually Solve Problems.</>}
            subtitle={profile.positioning}
          />
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              I combine web development with AI automation to create complete digital solutions —
              not just a website, and not just a bot. The website attracts and converts, the AI
              agents talk to people, and the automation makes sure nothing falls through the cracks.
            </p>
            <p>
              I work with founders and business owners who care about outcomes: more qualified
              leads, faster response times, fewer manual hours. That means understanding the
              business process first, then choosing the technology that fits it.
            </p>
          </div>
          {compact ? (
            <CtaLink to="/about" variant="glass">
              More About Me <ArrowRight className="h-4 w-4" />
            </CtaLink>
          ) : (
            <CtaLink to="/contact" variant="glass">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </CtaLink>
          )}
        </div>

        <GlassCard className="p-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What I help businesses do
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {helps.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {h}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={<>Everything Needed to Launch and Automate.</>}
        subtitle="From the first line of front-end code to a voice agent answering your calls at 2 AM."
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((service) => (
          <GlassCard key={service.slug} className="flex flex-col gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
              {serviceIcons[service.slug]}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>
            </div>
            <ul className="mt-auto space-y-1.5 text-sm text-muted-foreground">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            {service.note ? (
              <p className="rounded-xl border border-glass-border bg-glass px-3 py-2 text-xs text-primary">
                {service.note}
              </p>
            ) : null}
          </GlassCard>
        ))}
      </div>
      {limit ? (
        <div className="mt-10 flex justify-center">
          <CtaLink to="/services" variant="glass">
            See All Services <ArrowRight className="h-4 w-4" />
          </CtaLink>
        </div>
      ) : null}
    </Section>
  );
}

export function ProjectsSection({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title={<>Systems Built, Shipped, and Running.</>}
        subtitle="Each project below is a complete system — interface, intelligence, and integrations."
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {list.map((project, i) => (
          <GlassCard
            key={project.slug}
            className={`flex flex-col gap-4 ${i === 0 && !limit ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-center justify-between gap-3">
              <Pill>{project.category}</Pill>
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technology.slice(0, 5).map((t) => (
                <span key={t} className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  {t}
                </span>
              ))}
              {project.technology.length > 5 ? (
                <span className="text-[11px] text-muted-foreground self-center">+{project.technology.length - 5} more</span>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.features.map((f) => (
                <Pill key={f}>{f}</Pill>
              ))}
            </div>
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        ))}
      </div>
      {limit ? (
        <div className="mt-10 flex justify-center">
          <CtaLink to="/projects" variant="glass">
            View All Projects <ArrowRight className="h-4 w-4" />
          </CtaLink>
        </div>
      ) : null}
    </Section>
  );
}

export function TechSection() {
  return (
    <Section id="technologies">
      <SectionHeading
        eyebrow="Technology Stack"
        title={<>Tools I Use to Build.</>}
        subtitle="A focused stack — chosen for reliability, speed, and easy handover."
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <GlassCard key={group.category} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-glass-border bg-glass px-3 py-1.5 text-sm text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function AutomationShowcase() {
  return (
    <Section id="automation">
      <SectionHeading
        eyebrow="AI Automation Showcase"
        title={<>Imagine Your Business Running on Autopilot.</>}
        subtitle="These are complete systems, not isolated bots — each step hands off cleanly to the next."
        className="mb-12"
      />
      <div className="space-y-5">
        {workflows.map((flow) => (
          <GlassCard key={flow.title} className="space-y-5">
            <h3 className="text-lg font-semibold">{flow.title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {flow.steps.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-2xl border border-glass-border bg-glass px-4 py-2 text-sm font-medium">
                    {step}
                  </span>
                  {i < flow.steps.length - 1 ? (
                    <ArrowRight className="h-4 w-4 text-primary" />
                  ) : null}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Process"
        title={<>How We Work Together.</>}
        subtitle="Freelance engagement, start to finish — one developer, direct communication, from first conversation to a live, supported system."
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <GlassCard key={step.number} className="space-y-3">
            <span className="font-display text-3xl font-bold text-gradient">{step.number}</span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function WhySection() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why Hire Me As Your Freelancer"
        title={<>Engineering Judgement, Business Thinking.</>}
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyWorkWithMe.map((item) => (
          <GlassCard key={item.title} className="space-y-3">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function StatsSection() {
  return (
    <Section id="results">
      <div className="glass-panel rounded-[2rem] p-8 md:p-12">
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {resultStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gradient">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>What Clients Say.</>}
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <GlassCard key={t.name} className="flex flex-col gap-4">
            <Quote className="h-6 w-6 text-primary" />
            <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-auto">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.company} · {t.industry}
              </p>
              <p className="mt-2 text-xs text-primary">{t.projectType}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function PricingSection() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Freelance Rates"
        title={<>Transparent Freelance Pricing.</>}
        subtitle="Fixed-scope packages or hourly/retainer freelance work — these are typical starting points to help you plan."
        className="mb-12"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pricing.map((plan) => (
          <GlassCard
            key={plan.name}
            className={`flex flex-col gap-4 ${
              plan.featured ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""
            }`}
          >
            {plan.featured ? (
              <span className="w-fit rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                Most Popular
              </span>
            ) : null}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div>
              <p className="font-display text-xl font-bold text-primary">{plan.price}</p>
              {plan.priceNote ? (
                <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
              ) : null}
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {plan.includes.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
            <CtaLink
              to="/contact"
              variant={plan.featured ? "primary" : "glass"}
              size="sm"
              className="mt-auto w-full"
            >
              {plan.cta}
            </CtaLink>
          </GlassCard>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Final pricing depends on complexity, integrations, usage, and business requirements.
      </p>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title={<>Questions, Answered.</>} className="mb-12" />
      <div className="glass-panel rounded-3xl px-6 py-2 md:px-10">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-glass-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export function AvailabilitySection() {
  return (
    <Section id="availability">
      <GlassCard className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="space-y-3">
          <Eyebrow>Availability</Eyebrow>
          <h3 className="text-2xl font-bold">Currently accepting new projects</h3>
          <div className="flex flex-wrap gap-2">
            {availabilityFor.map((a) => (
              <Pill key={a}>{a}</Pill>
            ))}
          </div>
        </div>
        <CtaAnchor href={profile.whatsappLink} variant="accent" size="lg" className="shrink-0">
          Chat on WhatsApp
        </CtaAnchor>
      </GlassCard>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="start">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Build <span className="text-gradient">Something Smarter?</span>
          </h2>
          <p className="text-muted-foreground">
            Whether you need a high-converting website, an AI agent, or a complete business
            automation system, let's build it together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact" size="lg">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
          <p className="pt-2 text-sm text-muted-foreground">
            I don't just build websites. I build digital systems that help businesses work smarter.
          </p>
        </div>
      </div>
    </Section>
  );
}
