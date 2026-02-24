This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## One and Only Furniture

Premium furniture solutions for modern offices. Built with Next.js, Tailwind CSS, and Supabase.

## Deployment Guide

### Vercel Integration

To avoid 404 errors on product pages and 500 errors in the AI Advisor, you **MUST** configure the following environment variables in your Vercel Project Settings:

1. `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
3. `OPENROUTER_API_KEY`: Your OpenRouter API Key (sk-or-...).

### Supabase RLS Warnings

During the `npm run seed` process, you may see RLS (Row Level Security) warnings. These are **informational only** and expected because the seed script uses the `SUPABASE_SERVICE_ROLE_KEY` to bypass restrictions for bulk data management. In production, anonymous users have read-only access to the products table.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Stack
- Next.js
- Tailwind CSS
- Supabase
- Vercel Analytics
- Vercel Speed Insights
