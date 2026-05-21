import React from "react";

function Skills() {
  const skills = [
    "C Programming",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-r from-black via-green-950 to-emerald-900 px-6 py-24 md:px-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          
          {/* Accent Line */}
          <div className="hidden md:block h-52 w-2 rounded-full bg-gradient-to-b from-emerald-300 to-green-600 shadow-lg shadow-emerald-500/40"></div>

          {/* Content */}
          <div className="flex-1">
            
            {/* Heading */}
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[6px] text-emerald-400">
                Technical Skills
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-wide text-white md:text-5xl">
                My Skills
              </h2>

              <div className="mt-4 h-1 w-24 rounded-full bg-emerald-400"></div>

              <p className="mt-6 max-w-2xl text-gray-300 leading-7">
                Passionate about programming and web development with strong
                knowledge in core programming languages and modern web
                technologies.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-emerald-400/20 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-emerald-300">
                    {skill}
                  </h3>

                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-16"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;