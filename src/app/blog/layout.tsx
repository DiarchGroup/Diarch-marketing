import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Bag Packaging Insights | Diarch Marketing",
  description: "Practical guides from Diarch Marketing on kraft paper, GSM selection, printing, and branded packaging campaigns.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: "Paper Bag Packaging Insights", description: "Guides on kraft paper, GSM selection, printing, and branded packaging campaigns." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
