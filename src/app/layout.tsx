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

export const metadata: Metadata = {
  title: "Diarch Marketing | Custom Branded Paper Bags & Sustainable Advertising",
  description:
    "DiArch Marketing manufactures custom-branded paper bags for retail, restaurants, and FMCG brands. Turn every package into a mobile billboard with our eco-friendly, premium B2B advertising packaging solutions.",
  keywords: [
    "paper bag advertising",
    "custom branded paper bags",
    "sustainable packaging solutions",
    "retail paper bags",
    "restaurant delivery bags",
    "B2B advertising packaging",
    "eco-friendly marketing",
  ],
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
