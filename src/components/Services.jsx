import React, { useEffect, useRef, useState } from "react";
import Services_1 from "../assets/Services_101.jpg";
import Services_2 from "../assets/Services_102.jpg";
import Services_3 from "../assets/Services_103.jpg";
import Services_4 from "../assets/Services_104.jpg";
import Services_5 from "../assets/Services_105.jpg";
import Services_6 from "../assets/Services_106.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const originalImages = [
    { img: Services_1, title: "Web Design", desc: "Creative UI/UX solutions" },
    {
      img: Services_2,
      title: "App Development",
      desc: "Mobile-first applications",
    },
    {
      img: Services_3,
      title: "SEO Optimization",
      desc: "Boost your online presence",
    },
    {
      img: Services_4,
      title: "Digital Marketing",
      desc: "Results-driven strategies",
    },
    { img: Services_5, title: "Branding", desc: "Make your brand stand out" },
    {
      img: Services_6,
      title: "Cloud Services",
      desc: "Scale with reliability",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 640 ? 2 : 3
  );

  const [currentIndex, setCurrentIndex] = useState(slidesPerView); // start after cloned slides
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);

  const totalSlides = originalImages.length;
  const images = [
    ...originalImages.slice(-slidesPerView),
    ...originalImages,
    ...originalImages.slice(0, slidesPerView),
  ];

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 640 ? 2 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop logic
  useEffect(() => {
    if (currentIndex === images.length - slidesPerView) {
      // Reached the cloned start
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(slidesPerView);
      }, 300);
    }

    if (currentIndex === 0) {
      // Reached the cloned end
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(images.length - 2 * slidesPerView);
      }, 300);
    }
  }, [currentIndex, images.length, slidesPerView]);

  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
    }
  }, [transitionEnabled]);

  return (
    <div
      id="services"
      className="py-16 text-center text-4xl font-bold mx-auto "
    >
      <div className="pb-6 mx-[15px]">
        <h2 className="pb-4 text-[#092A48]">Our Services</h2>
        <p className="font-normal text-base text-[#6A6A6A]">
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative max-w-[1170px] overflow-hidden w-full">
          <div
            ref={sliderRef}
            className={`flex ${
              transitionEnabled ? "transition-transform duration-300" : ""
            }`}
            style={{
              width: `${(100 / slidesPerView) * images.length}%`,
              transform: `translateX(-${
                (100 / images.length) * currentIndex
              }%)`,
            }}
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <div className="relative group w-full h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto shadow-lg"
                  />

                  {/* Blue overlay on hover */}
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex justify-center items-center text-white">
                    {/* Content only visible on hover */}
                    <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <div className="text-3xl">
                        <FontAwesomeIcon icon={faLink} className="text-orange-400"/>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-500 p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-500 p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
