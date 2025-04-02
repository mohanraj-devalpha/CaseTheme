import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDiagramSuccessor,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image_1 from "../assets/projects/Testimonials.jpg";
// import Image_2 from "../assets/projects/image_102.jpg";
// import Image_3 from "../assets/projects/image_103.jpg";
// import Image_4 from "../assets/projects/image_104.jpg";
// import Image_5 from "../assets/projects/image_105.jpg";
// import Image_6 from "../assets/projects/image_106.jpg";
// import Image_7 from "../assets/projects/image_107.jpg";
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
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB]  hover:bg-[#226ACB] cursor-pointer"
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] "
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] "
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] "
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] "
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB]"
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out bg-[#226ACB] "
        />
        <img
          src={Image_8}
          alt=""
          className="w-[340px] h-[198px] transition-transform duration-300 ease-in-out hover:bg-[#226ACB] "
        />
      </div>

      {/* Projects stats */}
      <div className="relative mt-60 h-[272px]">
        <img src={Image_1} alt="" className="w-full h-full" />
        <div className="absolute top-0 left-0 w-[1170px] h-[272px] bg-cyan-600 bg-opacity-90 mx-40 flex items-center justify-center">
          <div className="flex space-x-10">
            <div className="flex pt-[40px] px-[15px]">
              <FontAwesomeIcon
                icon={faUser}
                className=" mr-5 text-4xl text-white border-4 p-4"
              />
              <div>
                <span className="text-5xl text-[#EFB945] font-bold">184</span>
                <p className="text-white text-lg">Team Members</p>
              </div>
            </div>
            <div className="flex pt-[40px] px-[15px]">
              <FontAwesomeIcon
                icon={faGlobe}
                className=" text-4xl text-white border-4 p-4 mr-5"
              />
              <div className="space-y-1">
                <span className="text-5xl text-[#EFB945] font-bold">968</span>
                <p className="text-white text-lg">Satisfied Clients</p>
              </div>
            </div>
            <div className="flex pt-[40px] px-[15px]">
              <FontAwesomeIcon
                icon={faCode}
                className=" mr-5 text-3xl text-white border-4 p-4"
              />
              <div>
                <span className="text-5xl text-[#EFB945] font-bold">69</span>
                <p className="text-white text-lg">Language Support</p>
              </div>
            </div>
            <div className="flex pt-[40px] px-[15px]">
              <FontAwesomeIcon
                icon={faDiagramSuccessor}
                className=" mr-5 text-4xl text-white border-4 p-4"
              />
              <div>
                <span className="text-5xl text-[#EFB945] font-bold">1500</span>
                <p className="text-white text-lg">Successfull Projects</p>
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
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-500 accent-green-500"
                />
                <span>
                  Ut perspiciatis unde omnis iste natus error sit volupt atem.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-500 accent-green-500"
                />
                <span>Accusantium dolorem que laudantium totam rem</span>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-500 accent-green-500"
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
              <div className="flex items-center">
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
              <div className="flex items-center">
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
              <div className="flex items-center">
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
