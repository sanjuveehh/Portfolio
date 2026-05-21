import React from "react";

function Contact() {
  return (
    <div className="md:px-20 bg-gradient-to-r from-black via-green-950 to-emerald-900 p-10">
      <div className="text-left">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-emerald-400 mt-5"></div>

        {/* Contact Box */}
        <div className="bg-white/5 backdrop-blur-md border border-emerald-400/30 rounded-xl shadow-lg mt-8 p-6 max-w-md">
          <p className="text-gray-300 text-lg mb-4">
            Email:{" "}
            <a
              href="mailto:2006archanabs@gmail.com"
              className="text-emerald-300 hover:text-emerald-400 transition"
            >
              2006archanabs@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            Phone:{" "}
            <span className="text-emerald-300 font-medium">
              1234567899
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
