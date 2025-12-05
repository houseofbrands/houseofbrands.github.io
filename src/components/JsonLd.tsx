export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rajan Mehta",
        "jobTitle": "Founder & Entrepreneur",
        "description": "Visionary fashion entrepreneur and brand builder behind House of Brands Fashion LLP.",
        "url": "https://rajanmehta.in",
        "image": "https://rajanmehta.in/assets/aboutme/profile.jpg",
        "worksFor": {
            "@type": "Organization",
            "name": "House of Brands Fashion LLP"
        },
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
