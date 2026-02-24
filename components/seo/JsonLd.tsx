export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One and Only Furniture",
  url: "https://oando.co.in",
  logo: "https://oando.co.in/logo.png",
  description: "Premium handcrafted furniture for modern living spaces.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9031022875",
    contactType: "customer service",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "One and Only Furniture",
  url: "https://oando.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://oando.co.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
