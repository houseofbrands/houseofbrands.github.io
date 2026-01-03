export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajan Mehta",
    "jobTitle": "Founder & Entrepreneur",
    "description": "Visionary fashion entrepreneur and brand builder behind House of Brands Fashion LLP. Expert in OEM Watch and Sunglasses Manufacturing.",
    "url": "https://rajanmehta.in",
    "image": "https://rajanmehta.in/assets/aboutme/profile.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "House of Brands Fashion LLP"
    },
    "knowsAbout": [
      "Fashion Entrepreneurship",
      "Brand Building",
      "Retail Strategy",
      "OEM Manufacturing",
      "Watch Manufacturing",
      "Sunglasses Manufacturing",
      "Private Label Manufacturing",
      "Supply Chain Management",
      "Product Development"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/rajan-mehta-placeholder", // Placeholder
      "https://www.instagram.com/rajanmehta_placeholder", // Placeholder
      "https://www.facebook.com/rajanmehta_placeholder" // Placeholder
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "House of Brands Fashion LLP",
    "url": "https://rajanmehta.in",
    "logo": "https://rajanmehta.in/assets/favicons/android-chrome-512x512.png",
    "description": "Premier OEM Watch and Sunglasses Manufacturer in India, specializing in private label manufacturing for global brands.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+852 5494 3024",
      "contactType": "customer service",
      "email": "care@houseofbrands.in"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3RD FLOOR, 5 AND 6, E-BLOCK, MANGOLPURI INDUSTRIAL AREA, PHASE II",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110083",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "OEM Manufacturing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Watch OEM Manufacturing",
            "description": "Custom watch manufacturing, private label watches, bulk watch production."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sunglasses OEM Manufacturing",
            "description": "Custom sunglasses manufacturing, private label eyewear, bulk sunglasses production."
          }
        }
      ]
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </section>
  );
}
