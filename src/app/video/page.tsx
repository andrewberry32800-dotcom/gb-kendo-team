import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Video" };

export default function VideoPage() {
  return (
    <PlaceholderPage
      title="Video"
      description="Match footage, interviews, and highlights from the GB Kendo Team."
      sections={[
        {
          heading: "Match Footage",
          body: "Embedded video clips from recent competitions will be listed here.",
        },
      ]}
    />
  );
}
