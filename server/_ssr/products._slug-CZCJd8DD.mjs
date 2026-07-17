import { n as company, o as products } from "./site-data-G-CnUx_z.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CZCJd8DD.js
var $$splitComponentImporter = () => import("./products._slug-CshTBgGO.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._slug-C9J6vtoc.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = products.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.product;
		if (!p) return {};
		const title = `${p.name} | 製品情報 | ${company.name}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: p.summary
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: p.summary
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:image",
					content: p.image
				},
				{
					name: "twitter:image",
					content: p.image
				}
			],
			links: [{
				rel: "canonical",
				href: `/products/${p.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					description: p.summary,
					category: p.category,
					image: p.image,
					manufacturer: {
						"@type": "Organization",
						name: company.name
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
