import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Diarch Marketing | Custom Paper Bags",
  description: "Learn about Diarch Marketing, its paper-bag manufacturing approach, team, and focus on branded B2B packaging.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Diarch Marketing", description: "Learn about Diarch Marketing, its team, manufacturing approach, and focus on branded B2B packaging." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
