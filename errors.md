# Error List - February 23, 2026

## 1. AI Advisor API (500 Internal Server Error)

- **Status**: Critical
- **Symptoms**: The floating AI Advisor returns an error toast when a query is submitted. Browser console shows a 500 error for `/api/ai-advisor`.
- **Diagnosis**:
  - The OpenAI API key (`OPENAI_API_KEY`) was added to `.env.local`.
  - Logs added to `app/api/ai-advisor/route.ts` to trace where it fails.
  - Potential causes: `gpt-4o-mini` access denied for this key, billing issue, or environment variables not propagating to the App Router API route properly in Turbopack mode.
  - **Note**: Manual testing via PowerShell showed a `308 Permanent Redirect` when hitting `http://localhost:3000/api/ai-advisor`, which might indicate a trailing slash issue or middleware redirect.
- **Action**: Verify OpenAI key permissions and billing status.

## 2. Linting Configuration Error

- **Status**: Minor
- **Symptoms**: `npm run lint` fails with `Invalid project directory provided, no such directory: E:\ourwebsite_copy_2026-02-21\lint`.
- **Diagnosis**: `next lint` is being invoked incorrectly or interpreting the path incorrectly in the Windows environment.
- **Action**: Check `package.json` lint script and `eslint` configuration.

## 3. Pre-existing Data Quality Issues

- **Status**: Low
- **Symptoms**: Mismatched image paths in the `Curvivo` product variant (gallery images).
- **Diagnosis**: Inherited from the legacy `catalog.ts` data structure.
- **Action**: Manually update the Supabase entry for the Curvivo product or fix in `seedSupabase.ts` and re-seed.

## 4. Supabase RLS Warnings

- **Status**: Information
- **Symptoms**: Seed script required `SUPABASE_SERVICE_ROLE_KEY` to bypass RLS.
- **Diagnosis**: Public read is enabled via `anon` key, but write operations are restricted as intended.
- **Action**: No immediate action needed, but ensure Service Role key is NEVER exposed to the client.
