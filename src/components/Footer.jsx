import React from "react";
import Image_1 from "../assets/Services_101.jpg";
import Image_2 from "../assets/Services_102.jpg";
import Image_3 from "../assets/Services_103.jpg";
import Image_4 from "../assets/Services_104.jpg";
import Image_5 from "../assets/Services_105.jpg";
import Image_6 from "../assets/Services_106.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faLinkedinIn,
  faSquareTwitter,
  faSquarePinterest,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="relative bg-black w-full h-[527px] text-white ">
      <div className="flex absolute top-24 left-16 mx-24 items-center ">
        <div className="w-[389px] pr-11 pl-4 space-y-10">
          <div className="flex gap-5 text-2xl cursor-pointer">
            <FontAwesomeIcon
              icon={faInfinity}
              className="text-cyan-600 text-2xl py-2"
            />
            <p className="font-bold">UNFINITY+</p>
          </div>

          <p className="text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className="w-[279px] h-[174px]">
          <h2 className="text-2xl pb-9 font-bold">LINKS</h2>
          <ul class="list-none p-0 space-y-3">
            <li class="relative text-[#8A8A8A] hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Home
            </li>
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Services
            </li>
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              About Us
            </li>
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Testimonials
            </li>
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              News
            </li>
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Contact
            </li>
          </ul>
        </div>
        <div className="w-[279px] h-[174px]">
          <h2 className="text-2xl pb-9 font-bold">SUPPORT</h2>
          <ul class="list-none p-0 space-y-3">
            <li class="relative text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer pl-6 before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Contact Us
            </li>
            <li class="relative pl-6 text-[#8A8A8A] hover:text-[#226ACB] cursor-pointer before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Submit a Ticket
            </li>
            <li class="relative pl-6 text-[#8A8A8A]  hover:text-[#226ACB] cursor-pointer before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              visit Knowledge Base
            </li>
            <li class="relative pl-6 text-[#8A8A8A] hover:text-[#226ACB] cursor-pointer before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Support system
            </li>
            <li class="relative pl-6 text-[#8A8A8A] hover:text-[#226ACB] cursor-pointer before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Refund Policy
            </li>
            <li class="relative pl-6 text-[#8A8A8A] hover:text-[#226ACB] cursor-pointer before:content-['›'] before:absolute before:left-0 before:text-gray-600">
              Professionla Services
            </li>
          </ul>
        </div>
        <div className="w-[279px] h-[174px]">
          <h2 className="text-2xl font-bold">GALLERY</h2>
          <div className="grid grid-cols-3 gap-4 mt-20">
            <img src={Image_1} alt="" className="cursor-pointer" />
            <img src={Image_2} alt="" className="cursor-pointer" />
            <img src={Image_3} alt="" className="cursor-pointer" />
            <img src={Image_4} alt="" className="cursor-pointer" />
            <img src={Image_5} alt="" className="cursor-pointer" />
            <img src={Image_6} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="absolute bg-slate-900 bottom-0 w-full h-16 content-center">
        <div className="flex justify-between mx-60">
          <p>
            2025 @ All Rights Reserved by{" "}
            <span className="text-[#226ACB] cursor-pointer">Mohanraj</span>{" "}
          </p>
          <div className="flex gap-2 content-center ">
            <p>Follow Us:</p>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faSquareFacebook} />
              <FontAwesomeIcon icon={faSquareTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faGooglePlus} />
              <FontAwesomeIcon icon={faSquarePinterest} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
