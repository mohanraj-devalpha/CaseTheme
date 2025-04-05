import React from "react";
import { useState } from "react";
import brand from "../assets/banner.png";
import brand1 from "../assets/banner_1.png";
import brand2 from "../assets/banner_3.png";
import brand4 from "../assets/brand_4.png";
import brand5 from "../assets/banner_5.png";
import Blog_1 from "../assets/projects/gallery.jpg";
import Blog_2 from "../assets/projects/blog5.jpg";
import Blog_3 from "../assets/projects/blog1.jpg";
import Blog_4 from "../assets/projects/blog2.jpg";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 1000); // 1000 milliseconds = 1 second
  };

  const blogPosts = [
    {
      title: "Never Stop Believing Yourself",
      image: Blog_1,
      description:
        "Fusce vitae augue tortor. Integer ultrices vulputate nisl, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt eget finibus eu, bibendum in…",
      date: "July 28, 2018",
      tags: "Consulting,Corporate",
    },
    {
      title: "Nobody Knows What's Gonna Happen",
      image: Blog_2,
      description:
        "Fusce vitae augue tortor. Integer ultrices vulputate nisl, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt eget finibus eu, bibendum in…",
      date: "July 28, 2018",
      tags: "Finance",
    },
    {
      title: "Always Have Faith In Your Potential",
      image: Blog_3,
      description:
        "Fusce vitae augue tortor. Integer ultrices vulputate nisl, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt eget finibus eu, bibendum in…",
      date: "July 28, 2018",
      tags: "Business,WordPress",
    },
    {
      title: "British Drinkers Leave Molson Coors Thirsty",
      image: Blog_4,
      description:
        "Fusce vitae augue tortor. Integer ultrices vulputate nisl, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt eget finibus eu, bibendum in…",
      date: "July 28, 2018",
      tags: "Corporate,Economy",
    },
  ];

  return (
    <div id="blog">
      <div className="pt-20 text-center text-4xl font-bold mx-auto place-items-center">
        <div className="pb-6 mx-[15px]">
          <h2 className="pb-4 text-[#092A48]">News & Articles</h2>
          <p className="font-normal text-base text-[#6A6A6A] max-w-[550px]">
            Follow our latest news and thoughts which focuses exclusively on
            design, art, vintage, and also work updates.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[1170px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0 mb-7 sm:justify-center">
            {blogPosts
              .slice(0, isVisible ? blogPosts.length : 3)
              .map((post, index) => (
                <div
                  key={index}
                  className="border-2 flex-cols gap-5 shadow-2xl overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="hover:cursor-pointer transition duration-300 ease-in-out hover:translate-x-1 hover:scale-110"
                    />
                  </div>
                  <div className="px-8 pt-7 pb-11">
                    <span className="text-BlogH text-2xl font-medium hover:text-primaryYellow duration-500 cursor-pointer">
                      {post.title}
                    </span>
                    <p className="text-BlogP my-auto lg:my-4 xl:my-5">
                      {post.description}
                    </p>
                    <div className="flex justify-between flex-wrap pt-5">
                      <span>{post.date}</span>
                      <span className="text-primaryYellow cursor-pointer">
                        {post.tags}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        {!isVisible && blogPosts.length > 3 && (
          <button
            onClick={handleButtonClick}
            className={`bg-blue-500 bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l hover:to-blue-800 font-bold text-sm text-white px-10 py-4 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-4 border-gray-200 border-t-blue-600 rounded-full"
                  viewBox="0 0 24 24"
                />
                "MORE NEWS"
              </div>
            ) : (
              "MORE NEWS"
            )}
          </button>
        )}
      </div>

      {/* company banner */}
      <div className="flex justify-center py-20 px-4">
        <div className="max-w-[1170px] w-full  bg-blue-linear">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20 py-10">
            <img
              src={brand1}
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={brand2}
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={brand5}
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={brand4}
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={brand}
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
