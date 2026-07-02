import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Settings,
  Layers,
  Wrench,
  Factory,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  cpu: Cpu,
  settings: Settings,
  layers: Layers,
  wrench: Wrench,
  factory: Factory,
  shield: ShieldCheck,
};

type Props = {
  icon?: keyof typeof iconMap | LucideIcon;
  title: string;
  desc: string;
  num?: string;
};

export function FeatureCard({ icon, title, desc, num }: Props) {
  const Icon =
    typeof icon === "string" ? iconMap[icon] : (icon as LucideIcon | undefined);
  return (
    <article className="group relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_4px_8px_rgb(0_91_172_/_0.08),_0_12px_32px_rgb(15_23_42_/_0.10)] hover:-translate-y-1">
      {num && (
        <div
          className="absolute top-6 right-6 font-display text-4xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors"
          aria-hidden
        >
          {num}
        </div>
      )}
      {Icon && (
        <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/8 text-primary mb-5">
          <Icon className="size-6" strokeWidth={1.5} aria-hidden />
        </div>
      )}
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </article>
  );
}
