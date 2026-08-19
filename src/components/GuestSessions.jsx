import React from "react";

const sessions = [
  {
    name: "Smart Cities & Digital Twins",
    speaker: "Dr. A. Sharma, Urban Systems Lab",
  },
  { name: "Bridges of Tomorrow", speaker: "Er. N. Menon, InfraWorks" },
  { name: "Coastal Resilience", speaker: "Dr. P. Rao, Hydraulics Research" },
  { name: "Green Concrete", speaker: "Dr. S. Verma, Materials Science" },
];

export default function GuestSessions() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sessions.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            <h3 className="text-white/90 font-semibold">{s.name}</h3>
            <p className="text-white/70 text-sm mt-1">{s.speaker}</p>
            <div className="mt-4">
              <button className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-yellow-700 to-brown-500 text-black font-semibold shadow hover:brightness-95">
                Watch Highlights
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
