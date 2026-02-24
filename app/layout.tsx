import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import dynamic from "next/dynamic";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Lazy-load non-critical components — improves LCP / TTI
// Note: ssr:false is NOT allowed in Server Components; use regular dynamic() here
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer })),
);
const AdvancedBot = dynamic(() =>
  import("@/components/bot/AdvancedBot").then((m) => ({
    default: m.AdvancedBot,
  })),
);
const AIAdvisor = dynamic(() =>
  import("@/components/ai/Advisor").then((m) => ({
    default: m.AIAdvisor,
  })),
);

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const BASE_URL = "https://oando.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "One and Only Furniture | Premium Office Solutions — Gurugram, Haryana",
    template: "%s | One and Only Furniture",
  },
  description:
    "One and Only Furniture — premium ergonomic office furniture in Gurugram, Haryana, India. Workstations, seating, storage, tables & soft seating. Trusted by leading corporations.",
  keywords: [
    "office furniture Gurugram",
    "premium office furniture Haryana",
    "ergonomic chairs India",
    "modular workstations Gurugram",
    "office furniture Gurugram",
    "One and Only Furniture",
    "oando furniture",
    "office chairs Gurugram",
    "meeting tables Haryana",
    "storage solutions India",
  ],
  authors: [{ name: "One and Only Furniture", url: BASE_URL }],
  creator: "One and Only Furniture",
  publisher: "One and Only Furniture",
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "One and Only Furniture",
    title: "One and Only Furniture | Premium Office Solutions",
    description:
      "Premium ergonomic office furniture in Gurugram, Haryana. Workstations, seating, storage & more. Trusted by leading corporates.",
    images: [
      {
        url: "/images/products/imported/fluid/image-1.webp",
        width: 1200,
        height: 630,
        alt: "One and Only Furniture – Premium Office Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One and Only Furniture | Premium Office Solutions",
    description:
      "Premium ergonomic office furniture in Gurugram, Haryana. Workstations, seating, storage & more.",
    images: ["/images/products/imported/fluid/image-1.webp"],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "One and Only Furniture",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Premium ergonomic office furniture in Gurugram, Haryana, India. Authorized dealer for leading office furniture brands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khasra No. 129, Village, Kherki Daula, Sector 84",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122004",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.3992, longitude: 76.9741 },
  telephone: "+91-124-403-1666",
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "₹₹₹",
  areaServed: ["Haryana", "Delhi NCR", "Punjab", "Rajasthan", "Uttar Pradesh"],
  sameAs: ["https://oando.co.in"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white selection:bg-primary selection:text-white overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-9999 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <AdvancedBot />
        <AIAdvisor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
