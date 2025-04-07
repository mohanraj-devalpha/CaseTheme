import React from "react";
import { useState, useEffect } from "react";
// import CaseStudy from "./Casestudy/CaseStudy.jsx";
// import Image_3 from "../assets/projects/image_103.jpg";
import Counter from "./Counter.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDiagramSuccessor,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import Image_2 from "../assets/projects/blog1.jpg";

import Image_1 from "../assets/projects/Testimonials.jpg";
import Image_3 from "../assets/projects/blog2.jpg";

import Image_4 from "../assets/projects/proje.jpg";
import Image_5 from "../assets/projects/pro.jpg";
import Image_6 from "../assets/projects/pr.jpg";
import Image_7 from "../assets/projects/p.jpg";
import Image_8 from "../assets/projects/projet3.jpg";
import Case_1 from "../assets/projects/blog1.jpg";
import Case_2 from "../assets/projects/blog2.jpg";

const Projects = () => {
  const [animateFirstCase, setAnimateFirstCase] = useState(false);
  const [animateSecondCase, setAnimateSecondCase] = useState(false);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  const projectCards = [
    {
      title: "Pied Piper",
      category: "Consulting",
      image: Image_6,
    },
    {
      title: "Marketing for Aerospace",
      category: "Business, Events",
      image: Image_3,
    },
    {
      title: "Event Management",
      category: "Events",
      image: Image_4,
    },
    {
      title: "MacBook Screen Concept",
      category: "Consulting",
      image: Image_5,
    },
    {
      title: "Aerospace Clients",
      category: "Consulting, Events",
      image: Image_6,
    },
    {
      title: "Business Growth",
      category: "Business",
      image: Image_7,
    },
    {
      title: "City Finance Grows",
      category: "Events, Finance",
      image: Image_8,
    },
    {
      title: "Investment Marketing",
      category: "Business",
      image: Image_2,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? projectCards : projectCards.slice(0, 6);

  useEffect(() => {
    setTimeout(() => {
      setAnimateFirstCase(true);
    }, 200); // First image delay

    setTimeout(() => {
      setAnimateSecondCase(true);
    }, 400); // Second image delay (slightly later for a staggered effect)
  }, []);

  return (
    <div id="projects" className=" px-[15px] justify-center pt-16">
      <div className="text-4xl justify-center w-auto text-center ">
        <h2 className="font-bold text-[#092A48] mb-[14px]">Recent Projects</h2>
        <p className="font-normal text-base text-[#6A6A6A] mx-0 lg:mx-48">
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1170px] pt-14 gap-8">
          {visibleCards.map((card, index) => (
            <div
              className="relative group overflow-hidden  shadow-xl"
              key={index}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:opacity-80 cursor-pointer "
              />
              <div className="absolute inset-0 bg-[#226ACB] transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-90 transition-all duration-500 ease-in-out ">
                <div className="flex justify-between items-center px-6 h-full">
                  <div className="mt-auto pb-8">
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

        {!showAll && projectCards.length > 6 && (
          <button
            onClick={() => {
              setIsLoadingProjects(true);
              setTimeout(() => {
                setShowAll(true);
                setIsLoadingProjects(false);
              }, 1000);
            }}
            className={`mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white shadow-md transition-all duration-300 font-medium ${
              isLoadingProjects ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoadingProjects}
          >
            {isLoadingProjects ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-4 border-gray-200 border-t-blue-600 rounded-full"
                  viewBox="0 0 24 24"
                />
                "Load More"
              </div>
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div>

      <div className="relative mt-10  sm:mt-16 w-full">
        <div className="relative w-full">
          <img
            src={Image_1}
            alt="Service Image"
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          <div className="relative z-10 bg-cyan-60 bg-custom-gradient bg-opacity-90 flex justify-center items-center py-20  px-5 sm:px-32 lg:mx-24 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 text-center sm:text-left max-w-[1170px] w-full">
              {/* Team Members */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-4xl text-white border-4 p-4"
                />
                <div>
                  <Counter end={183} duration={1000} />
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
                  <Counter end={968} duration={1000} />
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
                  <Counter end={69} duration={1000} />
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
                  <Counter end={1500} duration={1000} />
                  <p className="text-white text-lg">Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center pt-24">
          <div className="flex py-0 max-w-[1170px] justify-center items-center px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={Case_1}
                  alt=""
                  className={`object-cover px-3 transition-transform duration-1000 ease-out ${
                    animateFirstCase ? "translate-x-0" : "-translate-x-full"
                  }`}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[198px] text-[#F7F7F8] font-bold text-center leading-none">
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
        {/* Case Study 2 */}
        <div className="flex justify-center">
          <div className="flex max-w-[1170px] justify-center items-center px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Section */}
              <div className="py-5 md:py-10 px-4 space-y-6">
                <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
                  Study 02
                </button>
                <p className="text-3xl font-bold">Our Growth</p>
                <p className="text-[#7A7A7A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Skills Progress Bars */}
                <div className="space-y-6">
                  {[
                    { title: "Consulting", value: "95%", delay: "0s" },
                    { title: "Finance", value: "85%", delay: "0.3s" },
                    { title: "Business", value: "90%", delay: "0.6s" },
                  ].map(({ title, value, delay }) => (
                    <div key={title} className="flex flex-col items-start">
                      <span className="text-lg font-bold text-gray-800 w-32">
                        {title}
                      </span>
                      <div className="relative w-full h-12">
                        <div
                          className="absolute top-1/2 border-t-2 border-yellow-500 animate-grow"
                          style={{
                            width: "0%",
                            "--grow-width": value,
                            animationDelay: delay,
                          }}
                        ></div>
                        <div
                          className="absolute top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full animate-slide"
                          style={{
                            left: "0%",
                            "--grow-left": value,
                            animationDelay: delay,
                          }}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="relative py-10">
                <img
                  src={Case_2}
                  alt=""
                  className={`object-cover px-3 transition-transform duration-1000 ease-out ${
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
