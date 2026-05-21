import React from "react";

function Home() {
  return (
    <div id="home" className="md:py-25 bg-gradient-to-r from-black via-green-950 to-emerald-900 flex items-center justify-center py-8">
      {/* Box Wrapper */}
      <div className="bg-white/5 backdrop-blur-md border border-emerald-400/30 rounded-xl shadow-lg p-10 flex items-center gap-10 max-w-4xl">
        
        {/* Photo - Left side */}
        <img
          src="https://media.easy-peasy.ai/2b1c8d0e-5326-4b76-8714-c1c2ce29aafa/f7c2bf53-581b-479a-ac0e-5d537a42b0bb_medium.webp"
          alt="profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-emerald-400 shadow-lg"
        />

        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide">
            ARCHANA B S
          </h1>

          <p className="text-emerald-300 text-xl md:text-2xl mt-3 font-medium">
            Computer Science Student
          </p>

          <div className="w-24 h-1 bg-emerald-400 mt-6 rounded-full"></div>

          <p className="text-gray-300 mt-6 max-w-xl leading-7">
            "The web does not connect machines, it connects people"
                            -Tim verners-Lee
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;