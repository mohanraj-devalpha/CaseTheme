import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image_1 from "../assets/Home_101.jpg";
import Image_2 from "../assets/Home_102.png";

const NextArrow = ({ onClick, isVisible }) => {
  return (
    <button
      className={`absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-2xl font-bold transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-black`}
      onClick={onClick}
    >
      {">"}
    </button>
  );
};

const PrevArrow = ({ onClick, isVisible }) => {
  return (
    <button
      className={`absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2  text-2xl font-bold transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-black`}
      onClick={onClick}
    >
      {"<"}
    </button>
  );
};

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [animateFirstCase, setAnimateFirstCase] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setAnimateFirstCase(true);
      }, 200); // First image delay
    }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow isVisible={hovered} />,
    prevArrow: <PrevArrow isVisible={hovered} />,
  };

  return (
    <div id="home"
      className="w-full h-[600px] top-44 overflow-hidden relative "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider {...settings}>
        {/* Slide 1 with Overlay Text */}
        <div className="relative">
          <img
            src={Image_1}
            alt="Slide 1"
            className="w-full h-[600px] object-cover opacity-70 "
          />
          <div className={`absolute inset-0 flex flex-col left-48 justify-center text-neutral-950 px-6 transition-transform duration-1000 ease-out ${
                animateFirstCase ? "translate-x-10" : "translate-x-full"
              } `}>
            <h1 className="text-6xl font-bold mb-4 text-[#0F2142]">
              Let's Talk Business
            </h1>
            <p className="text-lg max-w-xl pb-14">
              He was after the truth. At least, that's what he told himself. He
              believed it, but any rational person on but any rational person on
            </p>
            <div className=" space-x-4">
              <button className=" text-white py-2 px-10 mt-3 justify-center font-medium cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-l">
                About Us
              </button>
              <button className="px-6 py-2 w-auto bg-[#EFB945]  text-white hover:bg-green-600">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={Image_2}
            alt="Slide 1"
            className="w-full h-[600px] object-cover "
          />
          <div className={`absolute inset-0 flex flex-col left-48 justify-center text-neutral-950 px-6 transition-transform duration-1000 ease-out ${
                animateFirstCase ? "translate-x-0" : "translate-x-full"
              } `}>
            <h1 className="text-6xl font-bold mb-4 text-[#0F2142]">
              Let's Talk Business
            </h1>
            <p className="text-lg max-w-xl pb-14">
              He was after the truth. At least, that's what he told himself. He
              believed it, but any rational person on but any rational person on
            </p>
            <div className=" space-x-4">
              <button className=" text-white py-2 px-10 mt-3 justify-center font-medium cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-l">
                About Us
              </button>
              <button className="px-6 py-2 w-auto bg-[#EFB945]  text-white hover:bg-green-600">
                Contact
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
