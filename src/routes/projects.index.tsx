import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { FinalCta, ProjectsSection, StatsSection } from "@/components/site/sections";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies | Jay Dewangan" },
      {
        name: "description",
        content:
          "AI voice agent platforms, real-estate automation, business websites, support agents, and automation dashboards — with full case studies.",
      },
      { property: "og:title", content: "Projects & Case Studies | Jay Dewangan" },
      {
        property: "og:description",
        content: "Complete AI automation and web development systems, with measurable results.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title={
            <>
              Featured Projects & <span className="text-gradient">Case Studies</span>.
            </>
          }
          subtitle="Real systems built for real businesses — open any project for the full breakdown."
        />
      </Section>
      <ProjectsSection />
      <StatsSection />
      <FinalCta />
    </>
  );
}
