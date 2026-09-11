import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  CtaAnchor,
  CtaLink,
  GlassCard,
  Pill,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { FinalCta } from "@/components/site/sections";
import { profile, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Case Study | Jay Dewangan` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} — Case Study` },
        { property: "og:description", content: project.description },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function ProjectNotFound() {
  return (
    <Section className="pt-20">
      <SectionHeading
        align="left"
        title="Case study not found"
        subtitle="This project may have been renamed or removed."
      />
      <div className="mt-8">
        <CtaLink to="/projects" variant="glass">
          Back to Projects
        </CtaLink>
      </div>
    </Section>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <Section className="pb-8 pt-14">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <SectionHeading
          align="left"
          eyebrow={project.category}
          title={<span className="text-gradient">{project.title}</span>}
          subtitle={project.description}
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {project.features.map((f) => (
            <Pill key={f}>{f}</Pill>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-5 md:grid-cols-2">
          <GlassCard className="space-y-3">
            <h2 className="text-lg font-semibold">Client Problem</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
          </GlassCard>
          <GlassCard className="space-y-3">
            <h2 className="text-lg font-semibold">Solution</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
          </GlassCard>
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <GlassCard className="space-y-4">
            <h2 className="text-lg font-semibold">Technology</h2>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-glass-border bg-glass px-3 py-1.5 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="space-y-4">
            <h2 className="text-lg font-semibold">Implementation</h2>
            <ol className="space-y-3">
              {project.implementation.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>
      </Section>

      <Section className="py-8">
        <GlassCard interactive={false} className="p-8">
          <h2 className="mb-6 text-lg font-semibold">Results</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r) => (
              <div key={r.label}>
                <p className="font-display text-3xl font-bold text-gradient">{r.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Section className="py-8">
        <GlassCard className="flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Want something similar for your business?</h2>
            <p className="text-sm text-muted-foreground">
              Tell me the process you want automated and I'll scope it with you.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <CtaLink to="/contact">
              Start a Project <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </GlassCard>
      </Section>

      <Section className="py-8">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          More case studies
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 3)
            .map((p) => (
              <GlassCard key={p.slug} className="space-y-3">
                <Pill>{p.category}</Pill>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                >
                  <Check className="h-4 w-4" /> View Case Study
                </Link>
              </GlassCard>
            ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
