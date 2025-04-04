import React from "react";
import { useState, useEffect } from "react";
import CaseStudy from "./Casestudy/CaseStudy.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDiagramSuccessor,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faLink } from "@fortawesome/free-solid-svg-icons";

import Image_1 from "../assets/projects/Testimonials.jpg";
import Image_2 from "../assets/projects/pro_2.jpg";

import Image_3 from "../assets/projects/image_103.jpg";
import Image_4 from "../assets/projects/image_104.jpg";
import Image_5 from "../assets/projects/image_105.jpg";
import Image_6 from "../assets/projects/image_106.jpg";
import Image_7 from "../assets/projects/image_107.jpg";
import Image_8 from "../assets/projects/image_108.jpg";
import Case_1 from "../assets/projects/blog1.jpg";
import Case_2 from "../assets/projects/blog2.jpg";

const Projects = () => {
  const [animateFirstCase, setAnimateFirstCase] = useState(false);
  const [animateSecondCase, setAnimateSecondCase] = useState(false);
  

  const projectCards = [
    {
      title: "Pied Piper",
      category: "Consulting",
    },
    {
      title: "Marketing for Aerospace",
      category: "Business, Events",
    },
    {
      title: "Event Management",
      category: "Events",
    },
    {
      title: "MacBook Screen Concept",
      category: "Consulting",
    },
    {
      title: "Aerospace Clients",
      category: "Consulting, Events",
    },
    {
      title: "Business Growth",
      category: "Business",
    },
    {
      title: "City Finance Grows",
      category: "Events, Finance",
    },
    {
      title: "Investment Marketing",
      category: "Business",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimateFirstCase(true);
    }, 200); // First image delay

    setTimeout(() => {
      setAnimateSecondCase(true);
    }, 400); // Second image delay (slightly later for a staggered effect)
  }, []);

  return (
    <div id="projects" className=" px-[15px] justify-center py-24">
      <div className="text-4xl justify-center w-auto text-center ">
        <h2 className="font-bold text-[#092A48] mb-[14px]">Recent Projects</h2>
        <p className="font-normal text-base text-[#6A6A6A]">
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1170px] pt-14 gap-8">
          {projectCards.map((card, index) => (
            <div className="relative" key={index}>
              <img
                src={Image_1}
                alt={card.title}
                className="transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
              />
              <div className="absolute inset-0 bg-[#226ACB] mx-2 my-2 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
                <div className="flex justify-between mx-10 mt-24 cursor-pointer">
                  <div>
                    <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                      {card.title}
                    </h2>
                    <p className="text-orange-400 cursor-pointer">
                      {card.category}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faLink}
                    className="border px-3 text-white w-7 h-7 hover:bg-orange-600 py-3 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 sm:mt-60 w-full">
        <img
          src={Image_1}
          alt="Service Image"
          className="relative w-full h-[739px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[272px] object-cover"
        />
        <div className="flex justify-center items-center ">
          <div className="absolute inset-0 flex justify-center items-center mx-0 lg:mx-20 bg-cyan-600 bg-opacity-90 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
              {/* Team Members */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-4xl text-white border-4 p-4"
                />
                <div>
                  <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">
                    184
                  </span>
                  <p className="text-white text-lg">Team Members</p>
                </div>
              </div>

              {/* Satisfied Clients */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-4xl text-white border-4 p-4"
                />
                <div>
                  <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">
                    968
                  </span>
                  <p className="text-white text-lg">Satisfied Clients</p>
                </div>
              </div>

              {/* Language Support */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-4xl text-white border-4 p-4"
                />
                <div>
                  <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">
                    69
                  </span>
                  <p className="text-white text-lg">Language Support</p>
                </div>
              </div>

              {/* Successful Projects */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <FontAwesomeIcon
                  icon={faDiagramSuccessor}
                  className="text-4xl text-white border-4 p-4"
                />
                <div>
                  <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">
                    1500
                  </span>
                  <p className="text-white text-lg">Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex py-10 max-w-[1170px] justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative ">
                <img
                  src={Case_1}
                  alt=""
                  className={`object-cover px-3 transition-transform duration-1000 ease-out ${
                    animateFirstCase ? "translate-x-0" : "-translate-x-full"
                  }`}
                />
                <div className="absolute top-0 left-[-50px] w-[649px] h-[400px] flex items-center justify-center">
                  <div className="text-[198px]  text-[#F7F7F8]">CASE STUDY</div>
                </div>
              </div>

              <div className="py-10 px-4 space-y-6">
                <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
                  Study 01
                </button>
                <p className="text-3xl font-bold">Vision to plan</p>
                <p className="text-[#7A7A7A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <ul className="list-none space-y-2 text-[#7A7A7A]">
                  <li className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-yellow-300"
                    />
                    <span>
                      Ut perspiciatis unde omnis iste natus error sit volupt
                      atem.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-yellow-300"
                    />
                    <span>Accusantium dolorem que laudantium totam rem</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-yellow-300"
                    />
                    <span>
                      Eaque ipsa quae ab illo inventore veritatis et quasi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* case study */}
        <div className="flex justify-center">
          <div className="flex max-w-[1170px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 pt-8 pb-16 space-y-6">
                <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
                  Study 02
                </button>
                <p className="text-3xl font-bold">Our Growth</p>
                <p className="text-[#7A7A7A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="space-y-6">
                  {/* Consulting */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg font-bold text-gray-800 w-32">
                      Consulting
                    </span>
                    <div className="relative w-full">
                      <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                      <div className="absolute left-[95%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                        95%
                      </div>
                    </div>
                  </div>

                  {/* Finance */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg font-bold text-gray-800 w-32">
                      Finance
                    </span>
                    <div className="relative w-full">
                      <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                      <div className="absolute left-[85%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                        85%
                      </div>
                    </div>
                  </div>

                  {/* Business */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg font-bold text-gray-800 w-32">
                      Business
                    </span>
                    <div className="relative w-full">
                      <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                      <div className="absolute left-[90%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                        90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={Case_2}
                  alt=""
                  className={`w-full px-3 transition-transform duration-1000 ease-out ${
                    animateSecondCase ? "translate-x-0" : "translate-x-full"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
