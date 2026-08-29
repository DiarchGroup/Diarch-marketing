import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Paper Bag Services | Diarch Marketing",
  description: "Custom kraft, retail, restaurant, event, and QR-enabled branded paper bag services from Diarch Marketing.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Custom Paper Bag Services", description: "Custom kraft, retail, restaurant, event, and QR-enabled branded paper bag services." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
