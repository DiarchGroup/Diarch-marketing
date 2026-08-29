import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Bag Gallery | Diarch Marketing",
  description: "View Diarch Marketing paper bag formats for grocery, retail, restaurant, boutique, corporate, and FMCG use.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Paper Bag Gallery", description: "View paper bag formats for grocery, retail, restaurant, boutique, corporate, and FMCG use." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
