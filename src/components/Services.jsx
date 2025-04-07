import React, { useState } from "react";
import Services_1 from "../assets/Services_101.jpg";
import Services_2 from "../assets/Services_102.jpg";
import Services_3 from "../assets/Services_103.jpg";
import Services_4 from "../assets/Services_104.jpg";
import Services_5 from "../assets/Services_105.jpg";
import Services_6 from "../assets/Services_106.jpg";

const Services = () => {
  const images = [Services_1, Services_2, Services_3, Services_4, Services_5, Services_6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = window.innerWidth < 640 ? 2 : 3; // Adjust based on screen size

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesPerView) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesPerView + images.length) % images.length);
  };

  return (
    <div id="services" className="py-20 text-center text-4xl font-bold mx-auto scroll-mt-24 pt-6 mt-">
      <div className="pb-6 mx-[15px]">
        <h2 className="pb-4 text-[#092A48]">Our Services</h2>
        <p className="font-normal text-base text-[#6A6A6A] ">
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
      </div>

      <div className="flex justify-center items-center">
      <div className="relative max-w-[1170px] overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-[calc(100%/3)]  flex-shrink-0">
              <img src={img} alt={`Service ${index + 1}`} className="w-full h-auto shadow-lg" />
            </div>
          ))}
        </div>
        
        
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2  text-blue-500 p-2 rounded-full">❮</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2  text-blue-500 p-2 rounded-full">❯</button>
      </div>
      </div>
    </div>
  );
};

export default Services;
