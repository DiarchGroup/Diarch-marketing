import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Branded Paper Bags | Diarch Marketing",
  description: "Learn how branded paper bags support reusable packaging, local visibility, and offline marketing campaigns.",
  alternates: { canonical: "/why-paper-bags" },
  openGraph: { url: "/why-paper-bags", title: "Why Branded Paper Bags", description: "How branded paper bags support reusable packaging, local visibility, and offline campaigns." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
