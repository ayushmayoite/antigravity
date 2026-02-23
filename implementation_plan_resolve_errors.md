# Implementation Plan - Resolve 404s and "Mix of 4" Errors

The user is experiencing 404 errors on their Vercel deployment and has requested a resolution for the "mix of 4" issues (referring to the documented errors in `errors.md`).

## Analysis

1. **404 on Deployment**:
   - URL: `https://antigravity-ashy-mu.vercel.app/products/oando-workstations/`
   - **Cause A**: Duplicate configuration files (`next.config.js` and `next.config.ts`). Next.js behavior is undefined/ambiguous with both.
   - **Cause B**: Missing/Invalid environment variables on Vercel. `lib/db.ts` uses placeholders during build. I've updated the `anon` key to the new `sb_publishable_` format provided by the user, which has been verified to work.
   - **Cause C**: `trailingSlash: true` in `.js` vs default in `.ts`. I've consolidated this into `next.config.js`.

2. **"Mix of 4" Errors**:
   - **Error 1**: AI Advisor 500 (OpenRouter/Supabase integration).
   - **Error 2**: Linting configuration (invalid directory).
   - **Error 3**: Product data quality (Curvivo images).
   - **Error 4**: Supabase RLS warnings.

## Proposed Tasks

### 1. Configuration Cleanup

- Delete `next.config.ts` to remove ambiguity.
- Consolidate all necessary settings into `next.config.js`.

### 2. Fix Error 2: Linting Configuration

- Update the `lint` script in `package.json` to correctly point to the project root or relevant directories without the broken path.

### 3. Fix Error 3: Curvivo Data Quality

- I will try to find the correct image path for Curvivo and update it.
- If it's a legacy issue, I'll add a check in `lib/getProducts.ts` to provide a fallback for known broken paths.

### 4. Robust Data Fetching (Prevent 404s)

- Update `app/products/[category]/page.tsx` to handle the case where Supabase returns nothing more gracefully, or at least ensure the placeholders don't cause a silent fail that looks like a valid 404.
- I will add a "Setup Required" page or a more descriptive error if Supabase env vars are missing at runtime.

### 5. AI Advisor Robustness

- Ensure the API route doesn't 500 if the OpenRouter key is missing, instead returning a clear JSON error.

## User Action Required

- The USER must ensure `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `OPENROUTER_API_KEY` are added to the **Vercel Dashboard** environment variables for the deployment to work.

---

I will proceed with the configuration cleanup and lint fixes immediately.
