import React from "react";

function About() {
  return (
    <div id="about" className="md:px-20 bg-gradient-to-r from-black via-green-950 to-emerald-900 py-19">
      <div className="flex flex-col md:flex-row items-start gap-10 w-full">
        
        {/* Left Accent Line */}
        <div className="hidden md:block w-2 h-40 bg-emerald-400 rounded-full"></div>

        {/* Content */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-white tracking-wide">
            About Me
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mt-5"></div>
          <p className="text-gray-300 mt-6 leading-8 max-w-3xl">
            I am a motivated and enthusiastic learner with strong interest in programming
            and technology. Currently focusing on C programming and improving my problem-solving skills.
            I enjoy learning new concepts and applying them in practical work.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm border border-emerald-400/30">
              C Programming
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm border border-green-400/30">
              Problem Solving
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm border border-cyan-400/30">
              Communication
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
