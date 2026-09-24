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
      { property: "og:title", content: "FAQ | Web Development & AI Automation — Jay Dewangan" },
      {
        property: "og:description",
        content: "Common questions about working with Jay Dewangan on websites and AI automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/faq" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ | Web Development & AI Automation — Jay Dewangan" },
      {
        name: "twitter:description",
        content: "Common questions about working with Jay Dewangan on websites and AI automation.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/faq",
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
          as="h1"
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
