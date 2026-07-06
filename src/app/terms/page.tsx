import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms"
      description="Terms of use for the GB Kendo Team website."
    />
  );
}
