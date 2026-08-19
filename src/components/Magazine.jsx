import React from "react";
import img from "../assets/magimg.jpg"
const issues = [
  { title: "Issue 05 — Monsoon 2025", tag: "New" },
  { title: "Issue 04 — Spring 2025" },
  { title: "Issue 03 — Winter 2024" },
];

export default function Magazine() {
  return (
    <div className="w-full flex flex gap-6">
      <div className="w-[60%] rounded-2xl p-6 bg-gradient-to-br from-black to-yellow-800/30 ">
        <h3 className="text-xl font-bold">CEF Magazine (2025-26)</h3>
        {/* <p className="text-white/70 mt-1">
          Insights, interviews, and research spotlights from the CEF community.
        </p> */}
        
        <div className="mt-4 flex flex-row gap-4">
          <div className="w-80">
            <img src={img} alt="Magazine image" className=" rounded-lg mb-5"/>
          </div>
          <div className="text-md text-gray-300 w-[60%] flex flex-col gap-2">
              <span>
                <span className="text-xl text-yellow-700">The CEF Magazine (2025-26)</span> is the premier publication of the CEF (Community for Educational Futures) community, dedicated to curating insightful stories, cutting-edge research, and diverse perspectives shaping the world of education, technology, and community development.
              </span>
            <span className="text-xl font-bold underline">Our Vision</span>
            <span>
            Our vision is to foster a globally aware and deeply engaged community by providing content that is both thought-provoking and practically applicable. We bridge the gap between academic theory and real-world impact, making complex ideas accessible and inspiring meaningful action.
            </span>
            <button className="mt-4 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-yellow-700 to-brown-500 text-black font-semibold shadow hover:brightness-95">
              Download Latest
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="grid gap-4">
          {issues.map((i, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-white/90 font-medium">{i.title}</h4>
                {i.tag && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/30">
                    {i.tag}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <a
                  href="#"
                  className="text-sm text-yellow-700 hover:text-yellow-400 underline underline-offset-4"
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
