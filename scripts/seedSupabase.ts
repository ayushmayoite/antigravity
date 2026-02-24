/**
 * Seed Supabase "products" table from the static oandoCatalog.
 *
 * Usage:
 *   1. Make sure .env.local has NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 *   2. Run: npx tsx scripts/seedSupabase.ts
 *
 * Uses the service_role key to bypass RLS for INSERT.
 * Clears the table first, then re-inserts all products fresh.
 */

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

// Load env vars from .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Service role key bypasses RLS for INSERT/DELETE
const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ── Import the static catalog ──────────────────────────────────────────────
async function loadCatalog() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const catalog = require("../lib/catalog");
    return catalog.oandoCatalog as Array<{
        id: string;
        name: string;
        description: string;
        series: Array<{
            id: string;
            name: string;
            description: string;
            products: Array<{
                id: string;
                name: string;
                description: string;
                flagshipImage: string;
                sceneImages: string[];
                variants: Array<{
                    id: string;
                    variantName: string;
                    galleryImages: string[];
                    threeDModelUrl?: string;
                }>;
                detailedInfo: {
                    overview: string;
                    features: string[];
                    dimensions: string;
                    materials: string[];
                };
                metadata?: Record<string, unknown>;
            }>;
        }>;
    }>;
}

interface ProductRow {
    name: string;
    slug: string;
    category: string;
    performance_tier: string | null;
    flagship_image: string;
    description: string;
    scene_images: string[];
    variants: unknown;
    detailed_info: unknown;
    metadata: unknown;
    specs: unknown;
    series_id: string;
    series_name: string;
}

async function main() {
    console.log("🚀  Loading catalog data…");
    const catalog = await loadCatalog();

    const rows: ProductRow[] = [];

    for (const category of catalog) {
        for (const series of category.series) {
            for (const product of series.products) {
                // Use category-scoped slug to guarantee global uniqueness
                // e.g. "oando-workstations--curvivo"
                const slug = `${category.id}--${product.id}`;

                // Calculate a basic sustainability score
                let ecoScore = 5;
                const matText = JSON.stringify(product.detailedInfo?.materials ?? []).toLowerCase();
                const descText = product.description.toLowerCase();
                if (matText.includes("recycled")) ecoScore += 2;
                if (matText.includes("wood")) ecoScore += 1;
                if (matText.includes("aluminum")) ecoScore += 1;
                if (descText.includes("made in india") || descText.includes("local")) ecoScore += 2;
                if (descText.includes("sustainable") || descText.includes("eco")) ecoScore += 2;
                ecoScore = Math.min(10, Math.max(1, ecoScore));

                rows.push({
                    name: product.name,
                    slug,
                    category: category.id,
                    performance_tier: (product.metadata?.priceRange as string) ?? null,
                    flagship_image: product.flagshipImage,
                    description: product.description,
                    scene_images: product.sceneImages ?? [],
                    variants: product.variants ?? [],
                    detailed_info: product.detailedInfo ?? {},
                    metadata: product.metadata ?? {},
                    specs: {
                        dimensions: product.detailedInfo?.dimensions ?? "",
                        materials: product.detailedInfo?.materials ?? [],
                        features: product.detailedInfo?.features ?? [],
                        sustainability_score: ecoScore,
                    },
                    series_id: series.id,
                    series_name: series.name,
                });
            }
        }
    }

    console.log(`📦  ${rows.length} products prepared.`);

    // Clear existing data first for a clean re-seed
    console.log("🗑️  Clearing existing products table…");
    const { error: deleteError } = await supabase
        .from("products")
        .delete()
        .gte("created_at", "2000-01-01"); // delete all rows (gte on timestamp = all rows)

    if (deleteError) {
        console.error("❌  Failed to clear table:", deleteError.message);
        process.exit(1);
    }
    console.log("   ✅  Table cleared.");

    // Insert in batches of 50
    const BATCH = 50;
    let inserted = 0;

    for (let i = 0; i < rows.length; i += BATCH) {
        const batch = rows.slice(i, i + BATCH);
        const { error } = await supabase
            .from("products")
            .insert(batch);

        if (error) {
            console.error(`❌  Batch ${i}–${i + batch.length} failed:`, error.message);
            // Log the slugs in the failing batch for debugging
            console.error("   Slugs:", batch.map((r) => r.slug).join(", "));
        } else {
            inserted += batch.length;
            console.log(`   ✅  Inserted ${inserted}/${rows.length}`);
        }
    }

    console.log(`\n🎉  Done! ${inserted}/${rows.length} products seeded into Supabase.`);

    if (inserted < rows.length) {
        console.log("⚠️  Some batches failed. Check errors above.");
        process.exit(1);
    }
}

main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
