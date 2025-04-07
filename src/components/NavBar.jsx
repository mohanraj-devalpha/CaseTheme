import React, { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "about",
        "projects",
        "testimonials",
        "blog",
        "contact",
      ];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="fixed z-50 w-full">
      {/* Top Bar Section */}
      {!isOpen && (
        <div className="bg-black text-white px-4">
          <div className="max-w-[1170px] mx-auto">
            <div className="flex flex-wrap items-center justify-between py-3.5 text-sm">
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
        </div>
      )}

      {/* Main Navigation */}
      <div className="bg-navclr nav:bg-white shadow-md px-4 sm:px-6 md:px-16 z-50">
        <div className="max-w-[1170px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl sm:text-2xl cursor-pointer">
            <FontAwesomeIcon
              icon={faInfinity}
              className="text-[#B197FC] flip-horizontal py-1 mr-2"
            />
            <h2 className="text-white nav:text-black">UNFINITY+</h2>
          </div>

          {/* Hamburger Icon */}
          <button
            className="nav:hidden text-xl sm:text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-white nav:text-black"
            />
          </button>

          {/* Navigation Menu */}
          <div
            className={`fixed flex flex-col top-0 left-0 h-full w-1/2 z-50 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 ease-in-out nav:static nav:transform-none nav:w-auto nav:h-auto nav:bg-transparent nav:shadow-none nav:flex-row nav:items-center`}
          >
            {/* Close Button for Mobile */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 nav:hidden bg-orange-400 p-2 border-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 px-5 py-2 text-gray-400 text-lg font-medium nav:flex-row nav:space-y-0 nav:space-x-6">
              {[
                "Home",
                "Services",
                "About",
                "Projects",
                "Testimonials",
                "Blog",
                "Contact",
              ].map((item, index) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <span
                    key={index}
                    className={`px-3 py-2  cursor-pointer transition-colors duration-500 ${
                      isActive ? "text-black " : "hover:text-black"
                    }`}
                    onClick={() => scrollToSection(id)}
                  >
                    {item}
                  </span>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 text-black text-l p-5">
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
