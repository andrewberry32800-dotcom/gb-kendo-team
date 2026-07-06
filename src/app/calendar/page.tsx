import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Calendar & Location" };

export default function CalendarPage() {
  return (
    <PlaceholderPage
      title="Calendar & Location"
      description="Training sessions, squad sessions, and competition dates for the GB Kendo Team."
      sections={[
        {
          heading: "Upcoming Sessions",
          body: "A calendar of upcoming training and squad sessions will be listed here.",
        },
        {
          heading: "Location",
          body: "Venue details and a map will be listed here.",
        },
      ]}
    />
  );
}
