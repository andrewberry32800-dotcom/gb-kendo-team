import PlaceholderPage from "@/components/PlaceholderPage";

export default function MedalsPage() {
  return (
    <PlaceholderPage
      title="EKC / WKC Medals"
      description="A record of GB Kendo Team medal results at the European Kendo Championships and World Kendo Championships."
      sections={[
        {
          heading: "European Kendo Championships",
          body: "Results by year and division will be listed here.",
        },
        {
          heading: "World Kendo Championships",
          body: "Results by year and division will be listed here.",
        },
      ]}
    />
  );
}
