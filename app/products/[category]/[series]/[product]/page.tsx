import { oandoCatalog, Category, Series, Product } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { ProductViewer } from "./ProductViewer";

export async function generateStaticParams() {
    const params = [];
    for (const category of oandoCatalog) {
        for (const series of category.series) {
            for (const product of series.products) {
                params.push({
                    category: category.id,
                    series: series.id,
                    product: product.id,
                });
            }
        }
    }
    return params;
}

export default async function ProductPage({ params }: { params: Promise<{ category: string, series: string, product: string }> }) {
    const { category: categoryId, series: seriesId, product: productId } = await params;

    const category = oandoCatalog.find((c: Category) => c.id === categoryId);
    const series = category?.series.find((s: Series) => s.id === seriesId);
    const product = series?.products.find((p: Product) => p.id === productId);

    if (!category || !series || !product) {
        notFound();
    }

    return (
        <ProductViewer 
            product={product} 
            seriesName={series.name} 
            categoryRoute={`/products/${category.id}/${series.id}`} 
            categoryId={category.id}
        />
    );
}

