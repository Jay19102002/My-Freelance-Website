import { createFileRoute } from "@tanstack/react-router";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Jay Dewangan" },
      {
        name: "description",
        content:
          "How enquiry information submitted through this website is collected, used, stored, and protected.",
      },
      { property: "og:title", content: "Privacy Policy | Jay Dewangan" },
      {
        property: "og:description",
        content: "Data collection and usage practices for this portfolio website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/privacy" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | Jay Dewangan" },
      {
        name: "twitter:description",
        content: "Data collection and usage practices for this portfolio website.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/privacy",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information collected",
    body: "Contact details you submit through the enquiry form — name, email, phone or WhatsApp number, company, project type, budget, and project description — plus basic anonymised analytics about site usage.",
  },
  {
    title: "How it is used",
    body: "Solely to respond to your enquiry, scope potential work, and send project-related communication. Your details are never sold or shared for marketing purposes.",
  },
  {
    title: "Storage and retention",
    body: "Enquiry data is retained only as long as needed for the conversation or an active engagement, and is deleted on request.",
  },
  {
    title: "Third-party tools",
    body: "Scheduling, messaging, email, and analytics providers may process limited data on our behalf under their own privacy terms.",
  },
  {
    title: "Your rights",
    body: `You can request access to, correction of, or deletion of your data at any time by writing to ${profile.email}.`,
  },
];

function PrivacyPage() {
  return (
    <Section className="pt-14">
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Privacy Policy" />
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
