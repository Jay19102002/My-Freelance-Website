import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-110",
        glass:
          "glass-panel text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
        accent:
          "bg-[image:var(--gradient-accent)] text-accent-foreground shadow-[0_18px_40px_-20px_var(--accent)] hover:-translate-y-0.5 hover:brightness-110",
        ghost: "text-muted-foreground hover:text-primary",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> & { className?: string; children: ReactNode };

export function CtaLink({
  to,
  variant,
  size,
  className,
  children,
  ...props
}: CtaProps & { to: string } & Omit<ComponentProps<typeof Link>, "to">) {
  return (
    <Link to={to as never} className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  variant,
  size,
  className,
  children,
}: CtaProps & { href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(ctaVariants({ variant, size }), className)}
    >
      {children}
    </a>
  );
}

export function CtaButton({
  variant,
  size,
  className,
  children,
  ...rest
}: CtaProps & ComponentProps<"button">) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export function GlassCard({
  className,
  interactive = true,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-panel surface-3d rounded-3xl p-6",
        interactive && "hover:surface-3d-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Component = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Component className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </Component>
      {subtitle ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}
