import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      description="About the GB Kendo Team and its role under the British Kendo Association."
    />
  );
}
