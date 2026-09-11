import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { AgentDemo } from "@/components/site/AgentDemo";
import { FaqSection, FinalCta } from "@/components/site/sections";
import { faqs } from "@/data/portfolio";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Web Development & AI Automation — Jay Dewangan" },
      {
        name: "description",
        content:
          "Answers on services, timelines, AI voice agents, CRM integrations, international clients, maintenance, and custom solutions.",
      },
      { property: "og:title", content: "FAQ | Web Development & AI Automation" },
      {
        property: "og:description",
        content: "Common questions about working with Jay Dewangan on websites and AI automation.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={
            <>
              Everything You Might <span className="text-gradient">Want to Ask</span>.
            </>
          }
        />
      </Section>
      <FaqSection />
      <AgentDemo />
      <FinalCta />
    </>
  );
}
