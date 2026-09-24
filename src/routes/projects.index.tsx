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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/projects" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects & Case Studies | Jay Dewangan" },
      {
        name: "twitter:description",
        content: "Complete AI automation and web development systems, with measurable results.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/projects",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects & Case Studies | Jay Dewangan",
          url: "https://jaydewangan.com/projects",
          description: "Portfolio of delivered web development and AI automation systems.",
          publisher: { "@id": "https://jaydewangan.com/#person" },
        }),
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
          as="h1"
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
