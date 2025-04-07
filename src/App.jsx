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
  const [selectedImage, setSelectedImage] = useState(null); // State for image preview

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <Home />
              <Services />
              <About />
              <Projects />
              <div
                id="testimonials"
                className="w-full relative place-items-center h-[550px] pt-28"
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
              <Footer
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </>
          }
        />
      </Routes>

      {/* Scroll-to-top button (hidden if image preview is open) */}
      {showButton && !selectedImage && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[99] bg-custom-gradient bg-opacity-100 text-white border-none rounded-full px-4 py-2 cursor-pointer text-[20px] font-bold"
        >
          ^
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
