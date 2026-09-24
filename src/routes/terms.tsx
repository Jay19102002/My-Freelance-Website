import { createFileRoute } from "@tanstack/react-router";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Jay Dewangan" },
      {
        name: "description",
        content:
          "Terms covering quotations, project scope, payments, timelines, ownership, and support for development and automation work.",
      },
      { property: "og:title", content: "Terms & Conditions | Jay Dewangan" },
      {
        property: "og:description",
        content: "Engagement terms for website, AI agent, and automation projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/terms" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions | Jay Dewangan" },
      {
        name: "twitter:description",
        content: "Engagement terms for website, AI agent, and automation projects.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/terms",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Quotations and scope",
    body: "Prices shown on this website are starting points. Every project is quoted after a discovery conversation, and the agreed scope is documented before work begins.",
  },
  {
    title: "Payments",
    body: "Projects typically begin with an advance, with the balance tied to agreed milestones. Third-party costs such as telephony, LLM usage, hosting, and licences are billed separately.",
  },
  {
    title: "Timelines",
    body: "Delivery estimates assume timely feedback, content, and access to required accounts. Delays in these may shift the schedule.",
  },
  {
    title: "Ownership",
    body: "On final payment, ownership of the delivered code and content transfers to the client, excluding third-party libraries and services which remain under their own licences.",
  },
  {
    title: "Support",
    body: "A post-launch support window is included with each project. Ongoing maintenance, monitoring, and automation updates are available as a separate monthly engagement.",
  },
  {
    title: "Liability",
    body: "Systems are built and tested with care, but performance of third-party APIs, telephony networks, and AI providers is outside our control and excluded from liability.",
  },
];

function TermsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-10 space-y-5">
        {sections.map((s) => (
          <GlassCard key={s.title} className="space-y-2">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
