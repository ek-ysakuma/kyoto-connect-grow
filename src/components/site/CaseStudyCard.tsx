type Props = {
  industry: string;
  title: string;
  result: string;
  image: string;
};

export function CaseStudyCard({ industry, title, result, image }: Props) {
  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_8px_rgb(0_91_172_/_0.08),_0_12px_32px_rgb(15_23_42_/_0.10)] hover:-translate-y-1">
      <div className="overflow-hidden bg-surface">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-primary/8 text-primary mb-4">
          {industry}
        </span>
        <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-4">
          {title}
        </h3>
        <div className="pt-4 border-t border-border">
          <div className="text-[11px] font-semibold tracking-widest text-muted-foreground mb-1">
            RESULT
          </div>
          <div className="text-sm font-semibold text-accent">{result}</div>
        </div>
      </div>
    </article>
  );
}
