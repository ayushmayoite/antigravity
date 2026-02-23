import { supabase } from "./db";

// ── Supabase-sourced Product types ──────────────────────────────────────────

export interface ProductVariant {
    id: string;
    variantName: string;
    galleryImages: string[];
    threeDModelUrl?: string;
}

export interface ProductDetailedInfo {
    overview: string;
    features: string[];
    dimensions: string;
    materials: string[];
}

export interface ProductMetadata {
    source?: string;
    category?: string;
    subcategory?: string;
    bifmaCertified?: boolean;
    warrantyYears?: number;
    sustainabilityScore?: number;
    tags?: string[];
    priceRange?: "budget" | "mid" | "premium" | "luxury";
    useCase?: string[];
    material?: string[];
    colorOptions?: string[];
    hasHeadrest?: boolean;
    isHeightAdjustable?: boolean;
    isStackable?: boolean;
    isNestable?: boolean;
    isBifoldable?: boolean;
    seriesId?: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    performance_tier: string | null;
    flagship_image: string;
    description: string;
    scene_images: string[];
    variants: ProductVariant[];
    detailed_info: ProductDetailedInfo;
    metadata: ProductMetadata;
    specs: {
        dimensions: string;
        materials: string[];
        features: string[];
    };
    series_id: string;
    series_name: string;
    created_at: string;
}

// ── Compatibility types that match the old catalog.ts shape ─────────────────
// These let existing components work without changes to their prop types.

export interface CompatProduct {
    id: string;
    name: string;
    description: string;
    flagshipImage: string;
    sceneImages: string[];
    variants: ProductVariant[];
    detailedInfo: ProductDetailedInfo;
    metadata: ProductMetadata;
    technicalDrawings?: string[];
    documents?: string[];
}

export interface CompatSeries {
    id: string;
    name: string;
    description: string;
    products: CompatProduct[];
}

export interface CompatCategory {
    id: string;
    name: string;
    description: string;
    series: CompatSeries[];
}

/** Map a Supabase row to the shape the old catalog.ts used */
function toCompatProduct(p: Product): CompatProduct {
    // Slug format is "categoryId--productId" — extract just the productId for URL routing
    const productId = p.slug.includes("--")
        ? p.slug.split("--").slice(1).join("--")
        : p.slug;

    return {
        id: productId,
        name: p.name,
        description: p.description,
        flagshipImage: p.flagship_image,
        sceneImages: p.scene_images ?? [],
        variants: p.variants ?? [],
        detailedInfo: p.detailed_info ?? { overview: "", features: [], dimensions: "", materials: [] },
        metadata: p.metadata ?? {},
    };
}

// ── Query helpers ──────────────────────────────────────────────────────────

/** Fetch ALL products from Supabase */
export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("name", { ascending: true });

    if (error) {
        console.error("[getProducts] Supabase error:", error.message);
        return [];
    }
    return (data as Product[]) ?? [];
}

/** Fetch products filtered by category id */
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", categoryId)
        .order("name", { ascending: true });

    if (error) {
        console.error("[getProductsByCategory] Supabase error:", error.message);
        return [];
    }
    return (data as Product[]) ?? [];
}

/** Fetch a single product by its slug */
export async function getProductBySlug(slug: string): Promise<Product | null> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error("[getProductBySlug] Supabase error:", error.message);
        return null;
    }
    return data as Product;
}

/** Fetch all products and group them into the old Category[] shape.
 *  This is the main bridge used by pages during migration. */
export async function getCatalog(): Promise<CompatCategory[]> {
    const products = await getProducts();

    // Group by category, then by series
    const catMap = new Map<string, { products: Product[] }>();

    for (const p of products) {
        if (!catMap.has(p.category)) {
            catMap.set(p.category, { products: [] });
        }
        catMap.get(p.category)!.products.push(p);
    }

    // Category display names
    const CATEGORY_NAMES: Record<string, { name: string; description: string }> = {
        "oando-workstations": { name: "Workstations", description: "Modular workstation solutions for modern offices" },
        "oando-tables": { name: "Tables", description: "Conference tables, meeting tables, and office desks" },
        "oando-storage": { name: "Storage", description: "Filing cabinets, lockers, and storage solutions" },
        "oando-soft-seating": { name: "Soft Seating", description: "Lounge chairs, sofas, and casual seating" },
        "oando-seating": { name: "Seating", description: "Ergonomic and task chairs for modern offices" },
        "oando-educational": { name: "Educational", description: "Furniture for classrooms, labs, and training" },
        "oando-collaborative": { name: "Collaborative", description: "Collaboration pods, phone booths, and meeting pods" },
    };

    const result: CompatCategory[] = [];

    for (const [catId, catData] of catMap) {
        // Group products by series
        const seriesMap = new Map<string, Product[]>();
        for (const p of catData.products) {
            const sId = p.series_id || `${catId}-series`;
            if (!seriesMap.has(sId)) seriesMap.set(sId, []);
            seriesMap.get(sId)!.push(p);
        }

        const series: CompatSeries[] = [];
        for (const [sId, sProducts] of seriesMap) {
            series.push({
                id: sId,
                name: sProducts[0]?.series_name || "Series",
                description: `Premium ${CATEGORY_NAMES[catId]?.name?.toLowerCase() ?? "furniture"} solutions`,
                products: sProducts.map(toCompatProduct),
            });
        }

        const info = CATEGORY_NAMES[catId] ?? { name: catId, description: "" };
        result.push({
            id: catId,
            name: info.name,
            description: info.description,
            series,
        });
    }

    return result;
}

/** Get all unique category IDs from Supabase (for generateStaticParams) */
export async function getCategoryIds(): Promise<string[]> {
    const { data, error } = await supabase
        .from("products")
        .select("category")
        .order("category");

    if (error) {
        console.error("[getCategoryIds] Supabase error:", error.message);
        return [];
    }

    const unique = [...new Set((data ?? []).map((r: { category: string }) => r.category))];
    return unique;
}
