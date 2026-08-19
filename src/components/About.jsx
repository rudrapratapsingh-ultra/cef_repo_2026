import React from "react";
import link from "../assets/link.svg";
// ** 1. Import your logo image (replace with your actual path) **
import cefLogo from "../assets/cefaboutus.jpg"; 

function About() {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 bg-black/40 backdrop-blur-md text-white">
      {/* *** NEW: Use flex for a side-by-side layout ***
        - flex: Enables Flexbox
        - flex-col lg:flex-row: Stacks vertically on small screens, side-by-side on large screens
        - gap-6: Adds space between the image and text
        - items-center: Vertically centers items (optional, but good for alignment)
      */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        
        {/* === LEFT SIDE: Image === */}
        <div className="flex-shrink-0 w-full lg:w-1/3 max-w-xs">
          <img 
            src={cefLogo} 
            alt="Civil Engineering Forum Logo" 
            className="w-full h-auto rounded-xl object-cover" 
          />
        </div>

        {/* === RIGHT SIDE: About Text === */}
        <div className="lg:w-2/3">
          <p className="leading-relaxed text-lg text-white/80">
            The <b className="text-white">Civil Engineering Forum (CEF)</b> is the
            heartbeat of the Civil Engineering Department at IIT Delhi — a community
            built on excellence, innovation, and leadership. As the department's
            official society, CEF nurtures intellectual growth, technical mastery,
            and collaboration among students. With a commitment to advancing the
            department's legacy, CEF inspires future pioneers while honoring IIT
            Delhi’s rich civil engineering heritage.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-yellow-600 hover:text-cyan-200 transition-colors"
            href="https://home.iitd.ac.in/index.php"
          >
            <span className="underline underline-offset-4">Visit IIT Delhi</span>
            <img src={link} alt="Go to" width={16} height={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;