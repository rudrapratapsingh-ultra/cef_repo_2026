import React from "react";

export default function SectionHeading({
  title,
  subtitle = "",
  align = "center",
}) {
  const alignment =
    {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }[align] || "items-center text-center";

  return (
    <div className={`w-full flex flex-col ${alignment} gap-2 mb-6`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-700 to-red-800 drop-shadow-[0_0_15px_rgba(56,189,248,0.15)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-white/70 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
