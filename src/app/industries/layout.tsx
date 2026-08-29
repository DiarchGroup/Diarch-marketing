import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Paper Bags by Industry | Diarch Marketing",
  description: "Custom paper bag solutions for grocery, retail, restaurants, cosmetics, events, and FMCG campaigns.",
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries", title: "Custom Paper Bags by Industry", description: "Paper bag solutions for grocery, retail, restaurants, cosmetics, events, and FMCG campaigns." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
