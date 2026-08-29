import type { Metadata } from "next";
import { Inter, Manrope, Sora, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Premium Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://www.diarchmarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diarch Marketing | Custom Branded Paper Bags & Sustainable Advertising",
  description:
    "Diarch Marketing manufactures custom-branded paper bags for retail, restaurants, and FMCG brands. Turn every package into a mobile billboard with our eco-friendly, premium B2B advertising packaging solutions.",
  keywords: [
    "paper bag advertising",
    "custom branded paper bags",
    "sustainable packaging solutions",
    "retail paper bags",
    "restaurant delivery bags",
    "B2B advertising packaging",
    "eco-friendly marketing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Diarch Marketing | Custom Branded Paper Bags & Sustainable Advertising",
    description:
      "Turn every package into a mobile billboard. Custom branded, eco-friendly paper bag advertising for retail, delivery, and FMCG brands.",
    url: siteUrl,
    siteName: "Diarch Marketing",
    images: [{ url: "/hero_bg.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diarch Marketing | Custom Branded Paper Bags & Sustainable Advertising",
    description:
      "Turn every package into a mobile billboard. Custom branded, eco-friendly paper bag advertising.",
    images: ["/hero_bg.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Diarch Marketing",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Custom-branded paper bag advertising and eco-friendly packaging solutions for retail, e-commerce, food delivery, and FMCG brands.",
  parentOrganization: { "@type": "Organization", name: "Diarch Group" },
  sameAs: [
    "https://www.instagram.com/diarchmarketing",
    "https://twitter.com/diarchmarketing",
    "https://www.linkedin.com/company/diarchmarketing",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Branded Paper Bag Manufacturing",
  provider: { "@type": "Organization", name: "Diarch Marketing" },
  areaServed: ["India", "North America", "Europe", "UAE"],
  description:
    "High-volume custom paper bag advertising for quick-commerce, retail, boutique, and export brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${sora.variable} ${outfit.variable} ${playfair.variable} min-h-screen bg-[#050505] text-white antialiased selection:bg-[#FF4500] selection:text-white relative`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        {/* Grainy Noise Overlay */}
        <div className="noise-overlay" />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Page Content */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
