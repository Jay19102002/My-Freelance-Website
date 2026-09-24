import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { AutomationShowcase, FinalCta, TechSection } from "@/components/site/sections";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technology Stack | Jay Dewangan" },
      {
        name: "description",
        content:
          "React, Next.js, Node.js, Python, PostgreSQL, Supabase, OpenAI APIs, RAG, n8n, and voice AI — the stack behind every build.",
      },
      { property: "og:title", content: "Technology Stack | Jay Dewangan" },
      {
        property: "og:description",
        content: "The frontend, backend, database, AI, automation, and voice tools used on projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/technologies" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Technology Stack | Jay Dewangan" },
      {
        name: "twitter:description",
        content: "The frontend, backend, database, AI, automation, and voice tools used on projects.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/technologies",
      },
    ],
  }),
  component: TechnologiesPage,
});

function TechnologiesPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Stack"
          title={
            <>
              Tools I Use to <span className="text-gradient">Build</span>.
            </>
          }
          subtitle="Only technologies actually used in delivered projects — kept small on purpose."
        />
      </Section>
      <TechSection />
      <AutomationShowcase />
      <FinalCta />
    </>
  );
}
