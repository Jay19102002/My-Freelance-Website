import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { FinalCta, ProcessSection, WhySection } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process | How Projects Get Built — Jay Dewangan" },
      {
        name: "description",
        content:
          "Discovery, strategy, development, testing, launch, and support — the six-step process behind every website and AI automation project.",
      },
      { property: "og:title", content: "Process | How Projects Get Built — Jay Dewangan" },
      {
        property: "og:description",
        content: "A predictable path from first conversation to a live, supported system.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jaydewangan.com/process" },
      { property: "og:image", content: "https://jaydewangan.com/jd_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Process | How Projects Get Built — Jay Dewangan" },
      {
        name: "twitter:description",
        content: "A predictable path from first conversation to a live, supported system.",
      },
      { name: "twitter:image", content: "https://jaydewangan.com/jd_logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jaydewangan.com/process",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Process"
          title={
            <>
              Six Steps From Idea to <span className="text-gradient">Live System</span>.
            </>
          }
          subtitle="Clear scope, clear communication, and no surprises at launch."
        />
      </Section>
      <ProcessSection />
      <WhySection />
      <FinalCta />
    </>
  );
}
