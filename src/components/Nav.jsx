import React, { useState } from "react";
import { FaUser, FaGraduationCap, FaTools, FaPhone, FaEnvelope } from "react-icons/fa";

// Import your other JSX files
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

function Nav() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("home");
  const scrollToSection=(id)=>{
    const section=document.getElementById(id);
    if(section){
        section.scrollIntoView({
            behavior:"smooth",
        });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black/40 backdrop-blur-md border-b border-emerald-400/30 fixed w-full top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          <h2 className="text-2xl font-bold tracking-wide">ARCHANA B S</h2>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 bg-emerald-700 rounded-lg hover:bg-emerald-600 transition"
            >
              Menu
            </button>
            {open && (
              <div className="absolute right-0 mt-2 min-w-max bg-black/80 border border-emerald-400/30 rounded-lg shadow-lg">
                <button
                  onClick={() => scrollToSection("about")}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-900 w-full text-left"
                >
                  <FaUser /> About
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-900 w-full text-left"
                >
                  <FaGraduationCap /> Education
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-900 w-full text-left"
                >
                  <FaTools /> Skills
                </button>
                <a href="tel:1234567899" className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-900">
                  <FaPhone /> +91 1234567899
                </a>
                <a href="mailto:2006archanabs@gmail.com" className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-900">
                  <FaEnvelope /> 2006archanabs@gmail.com
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div>
        
        {page === "about" && <About />}
        {page === "education" && <Education />}
        {page === "skills" && <Skills />}

      </div>
    </>
  );
}

export default Nav;
