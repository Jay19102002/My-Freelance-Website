import { Link } from "@tanstack/react-router";
import { footerNav, profile } from "@/data/portfolio";
import { CtaAnchor, CtaLink } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-10 pt-8">
      <div className="glass-panel mx-auto w-full max-w-6xl rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-gradient">Let's Build Something Intelligent.</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {profile.name} — {profile.title}
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink to="/contact" size="sm">
                Start Your Project
              </CtaLink>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/projects" className="transition-colors hover:text-foreground">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.emailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-glass-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
