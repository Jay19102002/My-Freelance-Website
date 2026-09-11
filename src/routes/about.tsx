import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { GlassCard, Pill, Section, SectionHeading } from "@/components/site/primitives";
import {
  AboutSection,
  AvailabilitySection,
  FinalCta,
  ProcessSection,
  StatsSection,
  WhySection,
} from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jay Dewangan | AI Automation & Web Developer" },
      {
        name: "description",
        content:
          "Jay Dewangan combines full-stack web development with AI automation to build complete digital systems for businesses in India and worldwide.",
      },
      { property: "og:title", content: "About Jay Dewangan | AI Automation & Web Developer" },
      {
        property: "og:description",
        content:
          "A developer who understands both technology and business requirements — websites, AI agents, and automation in one system.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pb-6 pt-14">
        <SectionHeading
          align="left"
          eyebrow="About"
          title={
            <>
              {profile.name} — <span className="text-gradient">{profile.title}</span>
            </>
          }
          subtitle={profile.positioning}
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.specialties.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Section>
      <AboutSection />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <GlassCard className="space-y-3">
            <h3 className="text-lg font-semibold">Technology with a business case</h3>
            <p className="text-sm text-muted-foreground">
              Every build starts with the process it replaces. Before choosing a framework or a
              model, I map how leads arrive, who answers them, and where hours disappear — then
              automate that specific gap.
            </p>
          </GlassCard>
          <GlassCard className="space-y-3">
            <h3 className="text-lg font-semibold">One system, not five tools</h3>
            <p className="text-sm text-muted-foreground">
              Website, chatbot, voice agent, CRM, calendar, and reporting all connect. You get one
              view of what happened, and no data stuck in a tool nobody opens.
            </p>
          </GlassCard>
        </div>
      </Section>
      <WhySection />
      <ProcessSection />
      <StatsSection />
      <AvailabilitySection />
      <FinalCta />
    </>
  );
}
