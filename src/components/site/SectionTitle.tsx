import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </div>
      )}
      <Tag className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight">
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
