import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rajan Mehta | Selected Works",
    template: "%s | Rajan Mehta"
  },
  description: "High-end portfolio of Rajan Mehta, a visionary fashion entrepreneur and brand builder behind House of Brands Fashion LLP. Premier OEM Watch and Sunglasses Manufacturer in India, specializing in private label manufacturing for global brands. Expert in retail, fashion, and lifestyle brands like Wrogn, Dressberry, and more.",
  keywords: [
    "Rajan Mehta",
    "House of Brands",
    "Fashion Entrepreneur",
    "Retail Expert",
    "Brand Builder",
    "Myntra Brands",
    "Wrogn",
    "Dressberry",
    "Mast & Harbour",
    "Fashion Industry Leader",
    "Indian Fashion Business",
    "Retail Strategy",
    "Luxury Fashion",
    "Apparel Manufacturing",
    // WATCH OEM KEYWORDS
    "watch OEM manufacturer India",
    "OEM watch manufacturer",
    "watch manufacturer in India",
    "private label watch manufacturer",
    "custom watch manufacturer India",
    "watch manufacturing company India",
    "bulk watch manufacturer India",
    "fashion watch manufacturer India",
    "wrist watch manufacturer India",
    "watch factory India",
    "watch manufacturer Delhi",
    "watch manufacturer Delhi NCR",
    "OEM watch supplier India",
    "watch manufacturer for brands",
    "private label watch manufacturing India",
    // SUNGLASSES OEM KEYWORDS
    "sunglasses OEM manufacturer India",
    "sunglasses manufacturer in India",
    "private label sunglasses manufacturer",
    "custom sunglasses manufacturer India",
    "eyewear OEM manufacturer India",
    "sunglasses manufacturing company India",
    "bulk sunglasses manufacturer India",
    "fashion sunglasses manufacturer India",
    "eyewear manufacturer India",
    "sunglasses factory India",
    "sunglasses manufacturer Delhi",
    "sunglasses manufacturer Delhi NCR",
    "OEM eyewear supplier India",
    "sunglasses manufacturer for brands",
    "private label eyewear manufacturing India",
    // PRIVATE LABEL KEYWORDS
    "OEM manufacturer India",
    "private label manufacturer India",
    "OEM manufacturing for brands",
    "OEM manufacturing services India",
    "custom product manufacturing India",
    "contract manufacturing India",
    "OEM supplier for fashion brands",
    "private label manufacturing company India",
    // B2B BUYER KEYWORDS
    "OEM watch manufacturer for brands",
    "private label watch manufacturer for startups",
    "sunglasses OEM supplier for brands",
    "eyewear manufacturer for private label",
    "custom watch manufacturing for fashion brands",
    "OEM sunglasses manufacturer for startups",
    // SEO KEYWORDS
    "OEM manufacturer Delhi",
    "OEM manufacturer Delhi NCR",
    "watch manufacturer Delhi NCR",
    "sunglasses manufacturer Delhi NCR",
    "eyewear manufacturer Delhi",
    "watch factory Delhi NCR",
    // RAJAN KEYWORDS
    "Rajan Mehta entrepreneur",
    "Rajan Mehta manufacturer",
    "Rajan Mehta OEM manufacturer",
    "Rajan Mehta watch manufacturer",
    "Rajan Mehta sunglasses manufacturer",
    "Indian OEM manufacturing expert",
    "watch and eyewear manufacturing expert India"
  ],
  authors: [{ name: "Rajan Mehta", url: "https://rajanmehta.in" }],
  creator: "Rajan Mehta",
  publisher: "House of Brands Fashion LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rajanmehta.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rajan Mehta | Selected Works",
    description: "Explore the portfolio of Rajan Mehta, a leading OEM Watch and Sunglasses Manufacturer in India. Building iconic fashion brands and redefining the retail landscape through expert private label manufacturing.",
    url: "https://rajanmehta.in",
    siteName: "Rajan Mehta Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/aboutme/profile.jpg", // Assuming this exists or using a default
        width: 1200,
        height: 630,
        alt: "Rajan Mehta - Fashion Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Mehta | Selected Works",
    description: "Visionary fashion entrepreneur and premier OEM Watch & Sunglasses Manufacturer in India. Building the future of retail brands.",
    images: ["/assets/aboutme/profile.jpg"], // Consistent with OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/assets/favicons/favicon.ico",
    apple: "/assets/favicons/apple-touch-icon.png",
    other: [
      { url: "/assets/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  }
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
