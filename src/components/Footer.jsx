import React from "react";

function Footer() {
  return (
    <footer className="bg-emerald-900 border-t border-emerald-400/30 py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side: description + copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-emerald-300">ARCHANA B S</h3>
          <p className="text-sm mt-2 max-w-md text-gray-200">
            Passionate learner and aspiring developer. This portfolio showcases my journey, 
            education, and skills as I grow in the world of technology.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            &copy; {new Date().getFullYear()} ARCHANA B S. All rights reserved.
          </p>
        </div>

        {/* Right side: footer navigation */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-6 items-center">
          <a href="#home" className="hover:text-emerald-400 focus:outline-none">Home</a>
          <a href="#about" className="hover:text-emerald-400 focus:outline-none">About</a>
          <a href="#education" className="hover:text-emerald-400 focus:outline-none">Education</a>
          <a href="#skills" className="hover:text-emerald-400 focus:outline-none">Skills</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
