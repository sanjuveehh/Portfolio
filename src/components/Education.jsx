import React from "react";

function Education() {
  return (
    <div id="education"className="md:px-20 bg-gradient-to-r from-black via-green-950 to-emerald-900 py-20">

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-white tracking-wide mb-8">
        EDUCATION
      </h1>

      {/* Single Box */}
      <div className="max-w-3xl">
        <div className="border-l-4 border-emerald-400 bg-white/5 backdrop-blur-md p-6 rounded-r-2xl shadow-lg hover:translate-x-2 transition duration-300">

          {/* Course */}
          <h2 className="text-2xl font-bold text-emerald-300">
            Diploma in Computer Engineering
          </h2>

          {/* College */}
          <p className="text-gray-300 mt-3">
            Govt Women's Polytechnic College, Thiruvananthapuram
          </p>

          {/* Duration */}
          <p className="text-green-400 mt-2 font-medium">
            2024 - 2027
          </p>

          {/* Description */}
          <p className="text-gray-300 mt-5 leading-7">
            Currently pursuing a Diploma in Computer Engineering with a strong focus on programming,
            software development, and problem-solving skills. Gaining hands-on experience in C programming,
            web development basics, and computer fundamentals.
          </p>

          {/* Skills learned */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm border border-emerald-400/30">
              C Programming
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm border border-green-400/30">
              Problem Solving
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm border border-cyan-400/30">
              Web Basics
            </span>
            <span className="bg-teal-500/20 text-teal-300 px-4 py-1 rounded-full text-sm border border-teal-400/30">
              Computer Fundamentals
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
