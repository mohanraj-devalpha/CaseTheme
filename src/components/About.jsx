import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Services_1 from "../assets/Services_101_1.jpg";
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 w-full">
        <div className="bg-[#622de7] relative">
          <h1 className="absolute text-[278px] text-[#FFFFFF0D]">About</h1>
        </div>
        <div className="relative">
          <img src={Services_1} alt="" className="w-auto" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full  flex items-center justify-center shadow-lg w-28 h-28">
            <FontAwesomeIcon
              icon={faPlay}
              className=" text-yellow-400 text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
