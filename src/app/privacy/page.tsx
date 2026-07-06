import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="How the GB Kendo Team collects and uses personal data."
    />
  );
}
