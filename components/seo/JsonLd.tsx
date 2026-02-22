export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One&Only Furniture",
  "url": "https://oneandonlyfurniture.com",
  "logo": "https://oneandonlyfurniture.com/logo.webp",
  "description": "Premium handcrafted furniture for modern living spaces.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Furniture Street",
    "addressLocality": "Mumbai",
    "addressRegion": "MH",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "customer service"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "One&Only Furniture",
  "url": "https://oneandonlyfurniture.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://oneandonlyfurniture.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
