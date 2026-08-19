import React from "react";
import SectionHeading from "../components/SectionHeading";

export default function StudyMaterialPage() {
  // Define the styles as JavaScript objects
  const embedWrapStyle = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };

  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-2 pt-24 pb-16">
      <SectionHeading
        title="Study Material"
        subtitle="Curated resources, notes, and references to help you study smarter."
      />
      <div className="flex justify-between">
      <span className="text-xl"> <span className="text-yellow-700 font-bold">Note: </span>Open the pdf links in a new tab (ctrl/command + click)</span>

      <span><span className="text-xl">Alternate: </span> <a className="text-xl text-yellow-700 underline hover:text-yellow-400" href="https://rahuliitd05.github.io/Semester3/" target="_blank">Link to study materials site</a></span>
      </div>
      {/* Study Material Resources */}
      <div className="mt-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors">
          <div style={embedWrapStyle} className="embed-wrap">
            <iframe
              src="https://rahuliitd05.github.io/Semester3/"
              style={iframeStyle} // ✅ FIX 2: Use JavaScript style object
              sandbox="allow-same-origin allow-scripts allow-forms"
              loading="lazy"
              title="Junior's site">
            </iframe>
          </div>

        </div>

        {/* ... other resources ... */}
      </div>
    </div>
  );
}