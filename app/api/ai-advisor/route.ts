import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getProducts } from "@/lib/getProducts";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    console.log("➡️  [ai-advisor] POST request received");
    try {
        const { query } = await req.json();
        console.log("📝  [ai-advisor] Query:", query);

        if (!query || typeof query !== "string") {
            return NextResponse.json({ error: "Query is required" }, { status: 400 });
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: "AI advisor is not configured. Please add OPENAI_API_KEY." },
                { status: 503 }
            );
        }

        // Fetch product catalog from Supabase
        const products = await getProducts();

        // Build a compact product list for the prompt (name, slug, category, description)
        const productList = products
            .slice(0, 80) // limit context size
            .map(
                (p) =>
                    `- ID: ${p.slug} | Name: ${p.name} | Category: ${p.category} | Tier: ${p.performance_tier ?? "standard"} | ${p.description?.slice(0, 80)}`
            )
            .join("\n");

        const systemPrompt = `You are an enterprise workspace engineering consultant for One & Only Furniture (Patna, Bihar India — AFC Regional Franchise).
Your role is to recommend the best workspace systems from our catalog based on the client's requirements.
Always recommend 3-5 specific products. Consider: team size, industry, budget sensitivity, location (Bihar/India context), and ergonomic needs.
Bias toward ergonomic seating + modular workstations for government/corporate, and collaborative/soft-seating for creative/startup environments.

Available products:\n${productList}

Respond ONLY with valid JSON in this exact shape:
{
  "recommendations": [
    {
      "productId": "<slug from catalog>",
      "productName": "<name>",
      "category": "<category>",
      "why": "<one sentence engineering rationale>",
      "budgetEstimate": "<INR range e.g. ₹45,000 – ₹65,000 per unit>"
    }
  ],
  "totalBudget": "<estimated project total range>",
  "summary": "<2-sentence enterprise consultation summary>"
}`;

        console.log("🤖  [ai-advisor] Calling OpenAI...");
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: query },
            ],
            temperature: 0.4,
            response_format: { type: "json_object" },
        });
        console.log("✅  [ai-advisor] OpenAI response received");

        const raw = completion.choices[0]?.message?.content ?? "{}";
        const result = JSON.parse(raw);

        return NextResponse.json(result);
    } catch (err) {
        console.error("[ai-advisor] Error:", err);
        const errorMessage = err instanceof Error ? err.message : String(err);
        return NextResponse.json(
            { error: `Failed to generate recommendations: ${errorMessage}` },
            { status: 500 }
        );
    }
}
