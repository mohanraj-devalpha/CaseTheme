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
                className="w-full relative place-items-center h-[550px] border-2 border-amber-950"
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
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: "99",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "100%",
            padding: "20px 25px",
            cursor: "pointer",
          }}
        >
          ^
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
