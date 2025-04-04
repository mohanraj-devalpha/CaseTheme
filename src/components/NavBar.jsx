import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhoneFlip,
  faMapMarkerAlt,
  faInfinity,
  faMagnifyingGlass,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-col">
      <div className="bg-black text-white px-4">
        <div className="flex flex-wrap items-center justify-between w-full py-3.5 text-sm">
          {/* Left Section (Phone & Hours) */}
          <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto">
            <span className="flex items-center mx-3 my-1">
              <FontAwesomeIcon
                icon={faSquarePhoneFlip}
                className="text-yellow-500 mr-2 text-lg"
              />
              Phone: +123 (4567) 890
            </span>
            <span className="flex items-center mx-3 my-1">
              <FontAwesomeIcon
                icon={faClock}
                className="h-6 w-4 text-yellow-500 mr-2"
              />
              Mon - Fri: 9 am - 7 pm
            </span>
          </div>

          {/* Right Section (Address) */}
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
            <span className="flex items-center mx-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-yellow-500 mr-2 text-lg"
              />
              921 St. Pault Ave, Main Street, USA
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md px-4 sm:px-6 md:px-16 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
          {/* Branding */}
          <div className="flex items-center font-bold text-xl sm:text-2xl cursor-pointer">
            <FontAwesomeIcon
              icon={faInfinity}
              className="text-[#B197FC] flip-horizontal py-1 mr-2"
            />
            <h2>UNFINITY+</h2>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="nav:hidden text-xl sm:text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-black"
            />
          </button>

          {/* Main Navigation */}
          <div
            className={`fixed flex top-0 right-0 h-full max-w-screen-nav bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out nav:static  nav:transform-none nav:w-auto nav:h-auto lg:bg-transparent lg:shadow-none`}
          >
            <div className="flex flex-col space-y-4 p-5 text-gray-400 text-lg font-medium lg:flex-row lg:space-y-0 lg:space-x-6">
              {[
                "Home",
                "Services",
                "About",
                "Projects",
                "Testimonials",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-5 py-2 hover:text-black cursor-pointer transition-colors duration-500"
                  onClick={() => scrollToSection(item.toLowerCase())} // Convert names to lowercase to match section ids
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex  space-x-3  text-black text-lg p-5 lg:mt-0">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="hover:text-orange-500 cursor-pointer transition-colors duration-500"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="hover:text-orange-500 cursor-pointer transition-colors duration-500"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-orange-500 cursor-pointer transition-colors duration-500"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover:text-orange-500 cursor-pointer transition-colors duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
