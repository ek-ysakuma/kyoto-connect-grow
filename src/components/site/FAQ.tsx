import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left group"
            >
              <span className="flex-1 flex gap-4 md:gap-6">
                <span
                  className="font-display text-primary font-bold text-lg shrink-0"
                  aria-hidden
                >
                  Q.
                </span>
                <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.q}
                </span>
              </span>
              <Plus
                className={cn(
                  "size-5 shrink-0 text-muted-foreground transition-transform duration-300 mt-1",
                  isOpen && "rotate-45 text-primary",
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="flex gap-4 md:gap-6 pl-0">
                  <span
                    className="font-display text-accent font-bold text-lg shrink-0"
                    aria-hidden
                  >
                    A.
                  </span>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
