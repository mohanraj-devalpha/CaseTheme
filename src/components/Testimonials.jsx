import React, { useState } from "react";
import Person from "../assets/testi_person.jpg";
import Person2 from "../assets/testi_person2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "My project was a simple & small task, but the persistence and determination of the Westy team turned it into an awesome and great project, which made me very happy with the result!",
    name: "Jora'h El Mormont",
    company: "Mormont Inc.",
    image: Person,
  },
  {
    quote:
      "Working with Westy was an absolute pleasure. Their creativity and attention to detail exceeded our expectations, making our project a huge success!",
    name: "Arya Stark",
    company: "Needle Works",
    image: Person2,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="relative bg-custom-gradient max-w-[1170px] text-center flex flex-col justify-center items-center h-full px-10 md:px-28 text-white bg-opacity-90">
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="text-primaryYellow text-3xl md:text-8xl"
        />
        <p className="mt-4 text-sm md:text-base lg:text-2xl font-medium max-w-4xl">
          {testimonials[index].quote}
        </p>
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="rounded-full w-20 h-16 md:w-24 md:h-24 mt-6 border-2 border-white"
        />
        <p className="text-lg font-semibold">{testimonials[index].name}</p>
        <p className="text-sm">{testimonials[index].company}</p>

        <div className="flex gap-4 mt-6">
          <button onClick={prevTestimonial} className="p-2 bg-white text-blue-600 ">
             <FontAwesomeIcon icon={faChevronLeft} /> 
            
          </button>
          <button onClick={nextTestimonial} className="p-2 bg-white text-blue-600 ">
            <FontAwesomeIcon icon={faChevronRight} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
