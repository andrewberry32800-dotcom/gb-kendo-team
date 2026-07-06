import PlaceholderPage from "@/components/PlaceholderPage";

export default function DocumentsPage() {
  return (
    <PlaceholderPage
      title="Documents & Policies"
      description="Squad policies, selection criteria, and downloadable documents for the GB Kendo Team."
      sections={[
        {
          heading: "Squad Policies",
          body: "BKA squad attendance is at the discretion of the management. Full policy documents will be listed here.",
        },
        {
          heading: "Downloads",
          body: "Downloadable PDF documents will be listed here.",
        },
      ]}
    />
  );
}
