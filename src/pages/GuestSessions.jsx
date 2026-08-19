import React from "react";
import SectionHeading from "../components/SectionHeading";
import GuestSessions from "../components/GuestSessions";

export default function GuestSessionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <SectionHeading
        title="Guest Sessions"
        subtitle="Talks and discussions with industry leaders and researchers."
      />
      <GuestSessions />
    </div>
  );
}
