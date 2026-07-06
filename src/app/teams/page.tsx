import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "The Teams" };

export default function TeamsPage() {
  return (
    <PlaceholderPage
      title="The Teams"
      description="Squad profiles and management & coaching staff for the GB Kendo Team."
      sections={[
        {
          id: "profiles",
          heading: "Squad Profiles",
          body: "Individual player profiles for the Senior Men's, Senior Women's, and Junior squads will be listed here.",
        },
        {
          id: "staff",
          heading: "Management & Coaching Staff",
          body: "Details of the management and coaching staff supporting each squad will be listed here.",
        },
      ]}
    />
  );
}
