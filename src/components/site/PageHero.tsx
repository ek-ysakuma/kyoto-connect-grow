import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
};

export function PageHero({ eyebrow, title, description, crumbs }: Props) {
  return (
    <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 bg-surface border-b border-border">
      <div className="container-x">
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol
            className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {crumbs.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {c.to ? (
                  <Link to={c.to} itemProp="item" className="hover:text-primary">
                    <span itemProp="name">{c.label}</span>
                  </Link>
                ) : (
                  <span itemProp="name" className="text-foreground">
                    {c.label}
                  </span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
                {i < crumbs.length - 1 && (
                  <ChevronRight className="size-3" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            <span className="h-px w-8 bg-primary" aria-hidden />
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground tracking-tight leading-[1.25]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
