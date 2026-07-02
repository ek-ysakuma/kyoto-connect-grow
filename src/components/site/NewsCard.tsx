import { ArrowUpRight } from "lucide-react";

type Props = {
  date: string;
  category: string;
  title: string;
};

export function NewsCard({ date, category, title }: Props) {
  return (
    <article className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border hover:border-primary/30 transition-colors cursor-pointer">
      <div className="flex items-center gap-4 md:w-64 shrink-0">
        <time
          dateTime={date}
          className="font-display text-sm text-muted-foreground tabular-nums"
        >
          {date.replace(/-/g, ".")}
        </time>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded border border-primary/30 text-primary">
          {category}
        </span>
      </div>
      <h3 className="flex-1 text-base font-medium text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <ArrowUpRight
        className="hidden md:block size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0"
        aria-hidden
      />
    </article>
  );
}
