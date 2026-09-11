import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { budgets, profile, projectTypes } from "@/data/portfolio";
import { CtaAnchor, CtaButton, GlassCard, Section, SectionHeading } from "./primitives";

const fieldClass =
  "h-11 w-full rounded-2xl border border-glass-border bg-glass px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={<>Have a Project in Mind?</>}
        subtitle="Tell me what you're building. I'll help you figure out the best technology, automation, and development approach."
        className="mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <GlassCard interactive={false} className="p-7 md:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = (formData.get("name") as string) || "";
              const email = (formData.get("email") as string) || "";
              const phone = (formData.get("phone") as string) || "";
              const company = (formData.get("company") as string) || "";
              const projectType = (formData.get("projectType") as string) || "";
              const budget = (formData.get("budget") as string) || "";
              const description = (formData.get("description") as string) || "";

              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );

              const rawSubject = `Project Enquiry: ${name || "New Client"} <${email}> - ${projectType || "General"}`;

              const bodyLines = [
                `CLIENT DETAILS:`,
                `• Name: ${name}`,
                `• Email: ${email}`,
                phone ? `• Phone / WhatsApp: ${phone}` : null,
                company ? `• Company: ${company}` : null,
                ``,
                `PROJECT DETAILS:`,
                projectType ? `• Project Type: ${projectType}` : null,
                budget ? `• Budget: ${budget}` : null,
                ``,
                `PROJECT DESCRIPTION:`,
                description,
                ``,
                `---`,
                `Sent via website enquiry form`,
              ]
                .filter((line) => line !== null)
                .join("\r\n");

              const encodedSubject = encodeURIComponent(rawSubject);
              const encodedBody = encodeURIComponent(bodyLines);

              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodedSubject}&body=${encodedBody}`;
              const mailtoUrl = `mailto:${profile.email}?subject=${encodedSubject}&body=${encodedBody}`;

              if (isMobile) {
                window.location.href = mailtoUrl;
              } else {
                const newWin = window.open(gmailUrl, "_blank", "noopener,noreferrer");
                if (!newWin || newWin.closed || typeof newWin.closed === "undefined") {
                  window.location.href = mailtoUrl;
                }
              }

              setSubmitting(false);
              form.reset();
              toast.success("Enquiry prepared in your email app!", {
                description: "Review and click 'Send' in your email composer to deliver your message.",
              });
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={fieldClass}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-medium text-muted-foreground">
                Phone / WhatsApp
              </label>
              <input id="phone" name="phone" placeholder="+91 …" className={fieldClass} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-medium text-muted-foreground">
                Company
              </label>
              <input id="company" name="company" placeholder="Company name" className={fieldClass} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="projectType" className="text-xs font-medium text-muted-foreground">
                Project Type
              </label>
              <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-popover">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-xs font-medium text-muted-foreground">
                Budget
              </label>
              <select id="budget" name="budget" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a budget range
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b} className="bg-popover">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="description" className="text-xs font-medium text-muted-foreground">
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="What are you building, and what should it automate?"
                className="w-full rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
            </div>
            <CtaButton type="submit" size="lg" disabled={submitting} className="sm:col-span-2">
              {submitting ? "Opening Gmail…" : "Send Project Enquiry"}
            </CtaButton>
          </form>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard className="space-y-4">
            <h3 className="text-lg font-semibold">Prefer something faster?</h3>
            <CtaAnchor href={profile.whatsappLink} variant="accent" className="w-full">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </CtaAnchor>
            <CtaAnchor href={profile.emailLink} variant="glass" className="w-full">
              <Mail className="h-4 w-4" /> {profile.email}
            </CtaAnchor>
          </GlassCard>
          <GlassCard className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Based in
            </h3>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
            <p className="text-sm text-muted-foreground">{profile.availability}</p>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
