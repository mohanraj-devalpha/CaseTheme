import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDiagramSuccessor,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faLink } from "@fortawesome/free-solid-svg-icons";

import Image_1 from "../assets/projects/Testimonials.jpg";
import Image_2 from "../assets/projects/image_102.jpg";
import Image_3 from "../assets/projects/image_103.jpg";
import Image_4 from "../assets/projects/image_104.jpg";
import Image_5 from "../assets/projects/image_105.jpg";
import Image_6 from "../assets/projects/image_106.jpg";
import Image_7 from "../assets/projects/image_107.jpg";
import Image_8 from "../assets/projects/image_108.jpg";
import Case_1 from "../assets/projects/case_study_101.jpg";

const Projects = () => {
  const [animateFirstCase, setAnimateFirstCase] = useState(false);
  const [animateSecondCase, setAnimateSecondCase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateFirstCase(true);
    }, 200); // First image delay

    setTimeout(() => {
      setAnimateSecondCase(true);
    }, 400); // Second image delay (slightly later for a staggered effect)
  }, []);

  return (
    <div className=" px-[15px] justify-center py-24">
      <div className="text-4xl justify-center w-auto text-center ">
        <h2 className="font-bold text-[#092A48] mb-[14px]">Recent Projects</h2>
        <p className="text-[15px] ">
          At Westy Agency, we shows only the best websites and portfolios built
          completely with passion, simplicity & creativity !
        </p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center w-[1140px] h-[714px] mx-auto place-items-center ">
        <div className="relative">
          <img
            src={Image_1}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-28 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  Pied Piper
                </h2>
                <p className="text-orange-400 cursor-pointer">Consulting</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
                 className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_2}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                   Marketing for Aerospace
                </h2>
                <p className="text-orange-400 cursor-pointer">Business,Events</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
               className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_3}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB]  mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  Event Management
                </h2>
                <p className="text-orange-400 cursor-pointer">Events</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
                className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_4}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  MacBook Screen Concept
                </h2>
                <p className="text-orange-400 cursor-pointer">Consulting</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
                className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_5}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                 Aerospace Clients
                </h2>
                <p className="text-orange-400 cursor-pointer">Consulting, Events</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
               className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_6}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  Business Growth
                </h2>
                <p className="text-orange-400 cursor-pointer">Business</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
            className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_7}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute mx-3 my-3 inset-0 bg-[#226ACB] opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  City Finance Grows
                </h2>
                <p className="text-orange-400 cursor-pointer">Events, Finance</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
              className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image_8}
            alt=""
            className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] hover:opacity-80 cursor-pointer"
          />
          <div className="absolute inset-0 bg-[#226ACB] mx-3 my-3 opacity-0 hover:opacity-85 transition-opacity duration-300 ease-in-out">
            <div className="flex justify-between mx-10 mt-24 cursor-pointer ">
              <div>
                <h2 className="text-xl text-white hover:text-orange-400 font-medium">
                  Investment Marketing
                </h2>
                <p className="text-orange-400 cursor-pointer">Business</p>
              </div>

              <FontAwesomeIcon
                icon={faLink}
                className="border px-3 text-white w-7 h-7 hover:bg-orange-600  py-3 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects stats */}
      <div className="relative mt-20 sm:mt-60 h w-full">
  <img src={Image_1} alt="Service Image" className="w-full h-auto object-cover" />
  <div className="absolute top-0 left-0 mx-4 sm:mx-40 w-auto h-full bg-cyan-600 bg-opacity-90 flex items-center justify-center">
    <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10 w-full sm:w-auto justify-center">
      {/* Team Members */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 px-6 sm:px-0">
        <FontAwesomeIcon
          icon={faUser}
          className="text-4xl text-white border-4 p-4"
        />
        <div className="text-center sm:text-left">
          <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">184</span>
          <p className="text-white text-lg">Team Members</p>
        </div>
      </div>

      {/* Satisfied Clients */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 px-6 sm:px-0">
        <FontAwesomeIcon
          icon={faGlobe}
          className="text-4xl text-white border-4 p-4"
        />
        <div className="text-center sm:text-left">
          <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">968</span>
          <p className="text-white text-lg">Satisfied Clients</p>
        </div>
      </div>

      {/* Language Support */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 px-6 sm:px-0">
        <FontAwesomeIcon
          icon={faCode}
          className="text-3xl text-white border-4 p-4"
        />
        <div className="text-center sm:text-left">
          <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">69</span>
          <p className="text-white text-lg">Language Support</p>
        </div>
      </div>

      {/* Successful Projects */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 px-6 sm:px-0">
        <FontAwesomeIcon
          icon={faDiagramSuccessor}
          className="text-4xl text-white border-4 p-4"
        />
        <div className="text-center sm:text-left">
          <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">1500</span>
          <p className="text-white text-lg">Successful Projects</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Case study */}
      <div className="flex">
        <div className="grid grid-cols-2 px-44 pt-24 pb-7">
          <div className="relative overflow-hidden">
            <img
              src={Case_1}
              alt=""
              className={`w-full px-3 transition-transform duration-1000 ease-out ${
                animateFirstCase ? "translate-x-0" : "-translate-x-full"
              }`}
            />
            <div className="absolute top-0 left-[-50px] w-[649px] h-[400px] flex items-center justify-center">
              <div className="text-[198px] font-bold text-[#F7F7F8]">
                CASE STUDY
              </div>
            </div>
          </div>

          <div className="py-10 px-4 space-y-6">
            <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
              Study 01
            </button>
            <p className="text-3xl font-bold">Vision to plan</p>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <ul className="list-none space-y-2 text-[#7A7A7A]">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-yellow-300"
                />
                <span>
                  Ut perspiciatis unde omnis iste natus error sit volupt atem.
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

      {/* case study */}

      <div className="flex">
        <div className="grid grid-cols-2 px-44 pt-24 pb-7">
          <div className="px-4 pt-8 pb-16 space-y-6">
            <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
              Study 02
            </button>
            <p className="text-3xl font-bold">Our Growth</p>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              src={Case_1}
              alt=""
              className={`w-full px-3 transition-transform duration-1000 ease-out ${
                animateSecondCase ? "translate-x-0" : "translate-x-full"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
