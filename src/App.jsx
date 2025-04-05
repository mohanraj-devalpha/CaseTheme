import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Image_1 from "../src/assets/projects/Testimonials.jpg";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
             <section id="home"><Home /></section> 
              <section id="services"><Services /></section>

              <About />
              <Projects />

              <div
                id="testimonials"
                className="w-full relative place-items-center h-[550px]"
              >
                <img
                  src={Image_1}
                  alt="Testimonials Background"
                  className="w-full h-[550px] object-cover"
                />
                <Testimonials />
              </div>

              <Blog />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* You can define more routes for individual pages/components if needed */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      {/* Scroll-to-top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[99]  bg-custom-gradient bg-opacity-100 text-white border-none rounded-full px-4 py-2 cursor-pointer text-[20px] font-bold "

        >  ^
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
