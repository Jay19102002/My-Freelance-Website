import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { FaqSection, FinalCta, PricingSection } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Website & AI Automation Packages — Jay Dewangan" },
      {
        name: "description",
        content:
          "Websites from ₹6,999, business websites from ₹19,999, AI automation from ₹14,999, and AI voice agents from ₹19,999 setup.",
      },
      { property: "og:title", content: "Pricing | Website & AI Automation Packages" },
      {
        property: "og:description",
        content: "Transparent starting packages for websites, AI agents, and automation systems.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section className="pb-0 pt-14">
        <SectionHeading
          align="left"
          eyebrow="Pricing"
          title={
            <>
              Starting Packages, <span className="text-gradient">Custom Outcomes</span>.
            </>
          }
          subtitle="Pick the closest starting point — the final scope is always shaped around your business."
        />
      </Section>
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
