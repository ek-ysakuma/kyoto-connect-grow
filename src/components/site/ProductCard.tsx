import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group block bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_4px_8px_rgb(0_91_172_/_0.08),_0_12px_32px_rgb(15_23_42_/_0.10)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="text-xs font-semibold tracking-widest text-primary mb-3">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
          {product.summary}
        </p>
        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          製品詳細を見る
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
