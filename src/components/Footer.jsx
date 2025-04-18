import React from "react";
import Image_1 from "../assets/Services_101.jpg";
import Image_2 from "../assets/Services_102.jpg";
import Image_3 from "../assets/Services_103.jpg";
import Image_4 from "../assets/Services_104.jpg";
import Image_5 from "../assets/Services_105.jpg";
import Image_6 from "../assets/projects/gallery.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faLinkedinIn,
  faSquareTwitter,
  faSquarePinterest,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ selectedImage, setSelectedImage }) => {
  return (
    <>
      {/* Main Footer Section */}
      <div className="bg-black w-full text-white py-12 px-6 md:px-16">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-1 max-w-[1170px] w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-2xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faInfinity}
                  className="text-cyan-600 py-2"
                />
                <p className="font-bold">UNFINITY+</p>
              </div>
              <p className="text-[#8A8A8A] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            <div>
              <h2 className="text-xl pb-4 font-bold">LINKS</h2>
              <ul className="space-y-2 text-[#8A8A8A] text-sm">
                {[
                  "Home",
                  "Services",
                  "About Us",
                  "Testimonials",
                  "News",
                  "Contact",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#226ACB] cursor-pointer before:content-['>'] before:text-blue-500 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl pb-4 font-bold">SUPPORT</h2>
              <ul className="space-y-2 text-[#8A8A8A] text-sm">
                {[
                  "Contact Us",
                  "Submit a Ticket",
                  "Visit Knowledge Base",
                  "Support System",
                  "Refund Policy",
                  "Professional Services",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#226ACB] cursor-pointer before:content-['>'] before:text-blue-500 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl pb-4 font-bold">GALLERY</h2>
              <div className="grid grid-cols-3 gap-2">
                {[Image_1, Image_2, Image_3, Image_4, Image_5, Image_6].map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Gallery"
                      className="cursor-pointer object-cover"
                      onClick={() => setSelectedImage(img)}
                    />
                  )
                )}
              </div>

              {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                  <button
                    className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded"
                    onClick={() => setSelectedImage(null)}
                  >
                    ✖
                  </button>
                  <img
                    src={selectedImage}
                    alt="Enlarged"
                    className="max-w-full max-h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-slate-900 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
        <p className="text-center">
          2025 © All Rights Reserved by{" "}
          <span className="text-[#226ACB] cursor-pointer">Case Themes</span>
        </p>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <p>Follow Us:</p>
          <div className="flex gap-3 text-lg">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGooglePlus} />
            <FontAwesomeIcon icon={faSquarePinterest} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
