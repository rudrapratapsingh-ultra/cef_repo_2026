import React from "react";
import demoPerson from "../assets/demo-person.jpg";
import link from "../assets/link.svg";


function MemberCard({
  name = "Not Available",
  designation = "Not Available",
  image = demoPerson,
  color = "#0ea5e9",
  linkedIn = "#",
  year = "",
}) {
  return (
    <div
      className="relative cursor-pointer select-none w-[180px] h-[180px] rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03]"
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle gradient overlay (uses color for a tint) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(2,6,23,0.25) 20%, rgba(2,6,23,0.45) 60%, ${color}22 100%)`,
        }}
      />

      {/* Year badge (top-left) */}
      {year && (
        <div className="absolute top-2 left-2 text-[10px] font-semibold bg-black/50 text-white/85 px-2 py-0.5 rounded-full backdrop-blur-sm">
          {year}
        </div>
      )}

      {/* LinkedIn icon (top-right) */}
      <a
        href={linkedIn}
        target="_blank"
        rel="noreferrer"
        className="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/45 backdrop-blur-sm hover:bg-black/65 transition-colors"
        aria-label={`Open ${name}'s LinkedIn`}
      >
        <img src={link} alt="LinkedIn" width={14} height={14} />
      </a>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-1">
        <div className="rounded-md bg-black/45 backdrop-blur-sm px-2 py-1 border border-white/10">
          <h3 className="text-sm font-semibold text-white/95 truncate">
            {name}
          </h3>
          <p className="text-[11px] text-white/75 mt-0.5 truncate">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
