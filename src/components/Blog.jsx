import React from "react";
import brand from "../assets/banner.png";
import brand1 from "../assets/banner_1.png";
import brand2 from "../assets/banner_3.png";
import brand4 from "../assets/brand_4.png";
import brand5 from "../assets/banner_5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faAmazon,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
const Blog = () => {
  return (
    <div>
      <div className="py-28 w-[600px] text-center text-4xl font-bold mx-auto">
        <div className="pb-6 mx-[15px]">
          <h2 className="pb-4 text-[#092A48]">News & Articles</h2>
          <p className="font-normal text-base text-[#6A6A6A]">
            Follow our latest news and thoughts which focuses exclusively on
            design, art, vintage, and also work updates.{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center bg-gradient-to-r from-blue-500 to-cyan-500  mx-40 h-44 mb-40 text-white text-8xl py-20  scroll-smooth items-center">
        <div className=" flex space-x-40 ">
          
          <img src={brand} alt="" className=""/>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
