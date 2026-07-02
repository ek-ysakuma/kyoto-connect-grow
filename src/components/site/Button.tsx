import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-secondary text-secondary-foreground hover:brightness-105 hover:shadow-md",
  accent:
    "bg-accent text-accent-foreground hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm min-w-[44px]",
  lg: "h-14 px-8 text-base min-w-[44px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </button>
  );
}

export function LinkButton({
  to,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children">) {
  return (
    <Link
      to={to}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
