import React from "react";
import SectionHeading from "../components/SectionHeading";
import Magazine from "../components/Magazine";

export default function MagazinePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <SectionHeading
        title="Magazine"
        subtitle="Curated stories, insights, and research from the CEF community."
      />
      <Magazine />
    </div>
  );
}
