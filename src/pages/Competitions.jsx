import React from "react";
import SectionHeading from "../components/SectionHeading";
import Competitions from "../components/Competitions";

export default function CompetitionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <SectionHeading
        title="Competitions"
        subtitle="From design sprints to simulation cups — challenge yourself and learn by doing."
      />
      <Competitions />
    </div>
  );
}
