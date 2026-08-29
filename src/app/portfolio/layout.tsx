import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Bag Portfolio | Diarch Marketing",
  description: "Explore branded paper bag formats and packaging solutions developed by Diarch Marketing for business use cases.",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: "/portfolio", title: "Diarch Marketing Paper Bag Portfolio", description: "Explore branded paper bag formats and packaging solutions developed for business use cases." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
