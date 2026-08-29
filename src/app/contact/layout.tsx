import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Diarch Marketing | Paper Bag Enquiries",
  description: "Contact Diarch Marketing for custom paper bag specifications, samples, pricing, and B2B packaging enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Diarch Marketing", description: "Contact Diarch Marketing for custom paper bag specifications, samples, pricing, and B2B packaging enquiries." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
