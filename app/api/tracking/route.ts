import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { userId, productId } = await req.json();

        if (!userId || !productId) {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        // Fetch current history
        const { data, error } = await supabase
            .from("user_history")
            .select("viewed_products")
            .eq("user_id", userId)
            .single();

        if (error && error.code !== "PGRST116") {
            console.error("Supabase fetch error:", error);
        }

        let viewedProducts = data?.viewed_products || [];

        // Add without duplicates or push newest
        if (!viewedProducts.includes(productId)) {
            viewedProducts = [...viewedProducts, productId].slice(-10); // Keep last 10

            await supabase
                .from("user_history")
                .upsert({ user_id: userId, viewed_products: viewedProducts, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
        }

        return NextResponse.json({ success: true, viewedProducts });
    } catch (err) {
        console.error("Tracking API Error:", err);
        return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
    }
}
