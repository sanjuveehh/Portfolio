import React from "react";

function Skills() {
  return (
    <div  id="skills"className="md:px-20 bg-gradient-to-r from-black via-green-950 to-emerald-900 px-10 py-20">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl">
        
        {/* Left Accent Line */}
        <div className="hidden md:block w-2 h-40 bg-emerald-400 rounded-full"></div>

        {/* Content */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-white tracking-wide">
            Skills
          </h2>

          <div className="w-20 h-1 bg-emerald-400 mt-4"></div>

          {/* Skills List */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-emerald-500/20 text-emerald-300 px-5 py-2 rounded-full text-sm border border-emerald-400/30">
              C Programming
            </span>
            <span className="bg-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm border border-green-400/30">
              Java
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm border border-cyan-400/30">
              Python
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
