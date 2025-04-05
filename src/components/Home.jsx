import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image_1 from "../assets/Home_101.jpg";
import Image_2 from "../assets/Home_102.png";

const NextArrow = ({ onClick, isVisible }) => {
  return (
    <button
      className={`absolute top-1/2 right-2 md:right-4 z-10 transform -translate-y-1/2 bg-black/50 text-white px-3 md:px-4 py-1 md:py-2 text-xl md:text-2xl font-bold transition duration-300 ${
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
      className={`absolute top-1/2 left-2 md:left-4 z-10 transform -translate-y-1/2 bg-black/50 text-white px-3 md:px-4 py-1 md:py-2 text-xl md:text-2xl font-bold transition duration-300 ${
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
    }, 200);
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      id="home"
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] top-44 overflow-hidden relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={Image_1}
            alt="Slide 1"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover opacity-70 fix"
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-20 transition-transform duration-1000 ease-out ${
              animateFirstCase ? "translate-x-10" : "translate-x-full"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-[#0F2142]">
              Let's Talk Business
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-xl pb-10">
              He was after the truth. At least, that's what he told himself. He
              believed it, but any rational person on but any rational person on
            </p>
            <div className="space-x-2 md:space-x-4 flex flex-wrap">
              <button className="text-sm md:text-base py-2 px-6 md:px-10 mt-3 font-medium bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:bg-gradient-to-l transition-all">
                About Us
              </button>
              <button className="text-sm md:text-base py-2 px-6 md:px-10 mt-3 bg-[#EFB945] text-white hover:bg-green-600">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={Image_2}
            alt="Slide 2"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-20 transition-transform duration-1000 ease-out ${
              animateFirstCase ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-[#0F2142]">
              Let's Talk Business
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-xl pb-10">
              He was after the truth. At least, that's what he told himself. He
              believed it, but any rational person on but any rational person on
            </p>
            <div className="space-x-2 md:space-x-4 flex flex-wrap">
              <button className="text-sm md:text-base py-2 px-6 md:px-10 mt-3 font-medium bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:bg-gradient-to-l transition-all">
                About Us
              </button>
              <button className="text-sm md:text-base py-2 px-6 md:px-10 mt-3 bg-[#EFB945] text-white hover:bg-green-600">
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
