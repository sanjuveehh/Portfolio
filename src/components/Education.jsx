import React from "react";

function Education() {
  return (
    <section
      id="education"
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
                ACADEMICS
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-wide text-white md:text-5xl">
                Education
              </h2>

              <div className="mt-4 h-1 w-24 rounded-full bg-emerald-400"></div>

              <p className="mt-6 max-w-2xl text-gray-300 leading-7">
                My academic background and learning journey in computer engineering
                with a focus on programming and software development.
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-emerald-400/20 bg-white/5 p-8 backdrop-blur-md shadow-xl shadow-emerald-500/10 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">

              <h3 className="text-2xl font-bold text-emerald-300">
                Diploma in Computer Engineering
              </h3>

              <p className="mt-3 text-gray-300">
                Govt Women's Polytechnic College, Thiruvananthapuram
              </p>

              <p className="mt-2 font-medium text-green-400">
                2024 - 2027
              </p>

              <p className="mt-5 leading-7 text-gray-300">
                Currently pursuing a Diploma in Computer Engineering with a strong focus on programming,
                software development, and problem-solving skills. Gaining hands-on experience in C programming,
                web development basics, and computer fundamentals.
              </p>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-1 text-sm text-emerald-300">
                  C Programming
                </span>

                <span className="rounded-full border border-green-400/30 bg-green-500/20 px-4 py-1 text-sm text-green-300">
                  Problem Solving
                </span>

                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-1 text-sm text-cyan-300">
                  Web Basics
                </span>

                <span className="rounded-full border border-teal-400/30 bg-teal-500/20 px-4 py-1 text-sm text-teal-300">
                  Computer Fundamentals
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;