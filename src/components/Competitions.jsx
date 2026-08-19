import React, { useState } from "react";

const cards = [
  {
    title: "Bridge Design Challenge",
    desc: "Test your structural intuition in a timed design sprint.",
    details:
      "Teams tackle a realistic bridge span with load limits, cost ceilings, and a 90-minute build window. Expect quick iteration and trade-off discussions before your final presentation.",
    registerUrl: "#",
  },
  {
    title: "Sustainability Hackathon",
    desc: "Innovate eco-friendly solutions for campus infrastructure.",
    details:
      "Prototype smart waste, energy, or water solutions with real usage data. Mentors drop surprise constraints midway to mirror field realities.",
    registerUrl: null,
  },
  {
    title: "GeoTech Case Study",
    desc: "Analyze real-world soil data and propose safe foundations.",
    details:
      "Interpret borehole logs, derive soil parameters, and defend a foundation scheme under budget pressure. Judges probe your factor-of-safety logic.",
    registerUrl: "#",
  },
  {
    title: "BIM Modelling Sprint",
    desc: "Collaborative modelling using modern BIM workflows.",
    details:
      "Co-author a clean model with clash detection, naming standards, and a tight review cycle. Speed, coordination, and tidy metadata score highest.",
    registerUrl: null,
  },
  {
    title: "Hydraulics Simulation Cup",
    desc: "Optimize flow networks for efficiency and resilience.",
    details:
      "Tune a campus network for peak demand, pump failures, and leak scenarios. Deliver a brief on energy savings and redundancy choices.",
    registerUrl: "#",
  },
  {
    title: "Concrete Mix-Off",
    desc: "Engineer the strongest mix under strict constraints.",
    details:
      "Design and batch a mix that balances strength, workability, and cost. Surprise admixture rules arrive mid-round to test adaptability.",
    registerUrl: null,
  },
];

export default function Competitions() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-yellow-600/10 via-yellow-700/10 to-red-700/10" />
            <h3 className="text-lg font-semibold text-white/90">{c.title}</h3>
            <p className="mt-1 text-white/70 text-sm">{c.desc}</p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => handleToggle(i)}
                className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-yellow-700 to-brown-500 text-black font-semibold shadow hover:brightness-95"
              >
                {openIndex === i ? "Hide" : "Learn More"}
              </button>
              <span className="text-white/50 text-xs">
                {c.registerUrl ? "Registration open" : "Coming soon"}
              </span>
            </div>

            {openIndex === i && (
              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 space-y-3">
                <div className="aspect-video rounded-lg border border-dashed border-white/15 bg-white/5 flex items-center justify-center text-white/60 text-sm">
                  Image placeholder
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {c.details}
                </p>
                <div className="flex items-center gap-3">
                  {c.registerUrl ? (
                    <a
                      href={c.registerUrl}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Register now →
                    </a>
                  ) : (
                    <span className="text-white/60 text-sm">
                      Registration coming soon
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
