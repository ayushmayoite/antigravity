import { oandoCatalog, Series, Product, Category } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowLeft, Check, Download, Mail } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export async function generateStaticParams() {
    const params = [];
    for (const category of oandoCatalog) {
        for (const series of category.series) {
            params.push({
                category: category.id,
                series: series.id,
            });
        }
    }
    return params;
}

export default async function SeriesPage({ params }: { params: Promise<{ category: string, series: string }> }) {
    const { category: categoryId, series: seriesId } = await params;
    const category = oandoCatalog.find((c: Category) => c.id === categoryId);
    const series = category?.series.find((s: Series) => s.id === seriesId);

    if (!category || !series) {
        notFound();
    }

    // Use the first product image as the hero, or a high-quality fallback
    const heroImage = series.products[0]?.flagshipImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";

    return (
        <main className="flex min-h-screen flex-col items-center bg-white selection:bg-neutral-200">
            {/* Minimalist Navigation Bar specific to the product page */}
            <div className="w-full absolute top-24 z-20 container px-6 2xl:px-0 flex items-center justify-between text-white/80 text-sm tracking-widest uppercase mt-4">
                <Link href={`/products/${category.id}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to {category.name}
                </Link>
                <span>The {series.name} Collection</span>
            </div>

            {/* Massive Hero */}
            <Hero
                variant="cinema"
                title={<><span className="font-serif tracking-tight text-6xl md:text-8xl">{series.name}</span></>}
                subtitle={<span className="font-light tracking-wide mt-6 block max-w-2xl mx-auto">{series.description || `Discover the architectural elegance of ${series.name}.`}</span>}
                showButton={true}
                buttonText="Request Consultation"
                buttonLink="/contact"
                backgroundImage={heroImage}
            />

            {/* Editorial Introduction */}
            <section className="container px-6 2xl:px-0 py-32">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <Reveal>
                        <h2 className="typ-h2">
                            Designed for <span className="italic text-primary font-serif">Focus.</span> <br />
                            Engineered for <span className="italic text-primary font-serif">Performance.</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl md:text-2xl font-light text-neutral-500 leading-relaxed">
                            The {series.name} collection represents the pinnacle of modern workspace design.
                            Manufactured with precision by AFC Furniture Solutions, and curated exclusively for the visionary office environments constructed by One and Only.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* The Gallery (Product Breakdown) */}
            <section className="w-full bg-neutral-50 py-32 border-y border-neutral-100">
                <div className="container px-6 2xl:px-0 space-y-32">
                    {series.products.map((product: Product, index: number) => (
                        <div key={product.id} className={clsx(
                            "flex flex-col gap-16 items-center",
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        )}>
                            {/* Massive Image Area */}
                            <div className="w-full lg:w-3/5">
                                <Reveal delay={0.1}>
                                    <div className="aspect-[4/3] w-full relative bg-white overflow-hidden shadow-2xl rounded-sm">
                                        <img
                                            src={product.flagshipImage}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                    </div>
                                </Reveal>
                            </div>

                            {/* Typography/Details Area */}
                            <div className="w-full lg:w-2/5 space-y-8">
                                <Reveal delay={0.2}>
                                    <h3 className="text-3xl lg:text-4xl font-light text-neutral-900 tracking-tight">
                                        {product.name}
                                    </h3>

                                    <div className="mt-8 space-y-6 text-neutral-600 font-light text-lg">
                                        <p>
                                            Experience unparalleled comfort and structural integrity.
                                            The {product.name} from our {series.name} series is a testament to manufacturing excellence.
                                        </p>

                                        {/* Mock Features since AFC didn't provide them, but we need the luxury feel */}
                                        <ul className="space-y-4 pt-4 border-t border-neutral-200">
                                            {["Premium materials and finishes", "Ergonomically engineered", "Industry-leading warranty"].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-primary" />
                                                    </div>
                                                    <span className="text-base">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8">
                                        <Link
                                            href={`/products/${category.id}/${series.id}/${product.id}`}
                                            className="inline-flex items-center gap-3 border-b-2 border-neutral-900 pb-2 text-neutral-900 font-medium tracking-wide hover:border-primary hover:text-primary transition-colors uppercase text-sm"
                                        >
                                            Explore This Piece <ArrowLeft className="w-4 h-4 rotate-180" />
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 bg-neutral-900 text-white text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="typ-h2 font-serif">
                        Elevate your workspace.
                    </h2>
                    <p className="text-xl text-neutral-400 font-light">
                        Our design consultants are ready to assist you in integrating the {series.name} collection into your architectural vision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto btn bg-white text-neutral-900 typ-cta hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4" /> Contact a Consultant
                        </Link>
                        <a
                            href="https://www.afcindia.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto btn border border-white/20 text-white typ-cta hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <Download className="w-4 h-4" /> Technical Specs
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

