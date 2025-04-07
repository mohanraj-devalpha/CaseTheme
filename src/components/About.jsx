import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Services_1 from "../assets/projects/Testimonials.jpg";

const About = () => {
  return (
    <div id="about" className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-linear pt-10 pb-28">
          <span className="text-cyan-500 opacity-35 text-7xl sm:text-9xl md:text-[250px]">
            About
          </span>
        </div>
        <div className="relative">
          <img
            src={Services_1}
            alt="Service Image"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-full flex items-center justify-center shadow-lg 
                       w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          >
            <FontAwesomeIcon
              icon={faPlay}
              className="text-yellow-400 text-xl sm:text-2xl md:text-3xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
