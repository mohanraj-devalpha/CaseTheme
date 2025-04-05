import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Services_1 from "../assets/projects/Testimonials.jpg";

const About = () => {
  return (
    <div id="about" >
      <div className="grid grid-cols-2 ">
        <div className="bg-cyan-500">
          <span className="text-cyan-400 text-9xl">About</span>

        </div>
        <div className="relative">
        <img src={Services_1} alt="Service Image" className="content-stretch" />
        <button className="absolute top-1/2 left-1/2 bg-white w-20 h-20 rounded-full">
        <FontAwesomeIcon
              icon={faPlay}
              className="text-yellow-400 text-2xl w-full"
            />
        </button>

        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="bg-[#622de7] relative">
          <h1 className="absolute text-[150px] sm:text-[278px] text-[#FFFFFF0D] sm:left-10 sm:top-1/4 left-4 top-10">
            About
          </h1>
        </div>
        <div className="relative">
          <img src={Services_1} alt="Service Image" className="w-auto sm:w-full h-full object-cover" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center shadow-lg w-20 sm:w-28 h-20 sm:h-28">
            <FontAwesomeIcon
              icon={faPlay}
              className="text-yellow-400 text-2xl w-full"
            />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default About;
