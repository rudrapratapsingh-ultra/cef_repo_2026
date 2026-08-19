import React from "react";
import MemberCard from "./MemberCard";
import { AlumniData } from "../data/alumni";
function Alumni() {
  return (
    <div className="w-full">
      {AlumniData.length != 0 && (
        <div className="w-full flex flex-col gap-8 justify-center items-center px-2 py-6">
          <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
            {AlumniData.map((item, key) => {
              return (
                <MemberCard
                  designation={item.desg}
                  name={item.name}
                  image={item.img}
                  key={key}
                  year={item.year}
                  linkedIn={item.linkedIn}
                  color="#06b6d4"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alumni;
