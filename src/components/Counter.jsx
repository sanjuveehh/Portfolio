import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
useEffect(()=>{ 
  console.log("Count changed:", count);
   },[count]);
  function Increment() {
    if (count< 20) {
      setCount(count * count);
    }
  }
  function Decrement() {
    if (count > 0) {
      setCount(Math.sqrt(count));
    }
  }
  function Reset() {
    setCount(0);
  }
 

  return (
    <div className="bg-pink-200  min-h-screen flex items-center justify-center">
      {/* Card Box */}
      <div className="bg-white/5 backdrop-blur-md border border-emerald-400/30 rounded-xl shadow-lg p-8 text-center max-w-sm w-full">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-black mb-6">Counter</h2>
          <input type="number" value={count}
          onChange={(e)=>setCount(Number(e.target.value))}
          placeholder="Enter a number:"
          />
          
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={Increment}
            className="bg-emerald-500/20 text-black-700 px-4 py-2 rounded-lg border border-emerald-400/30 hover:bg-emerald-500/30 transition"
          >
            Increment
          </button>
          <button
            onClick={Decrement}
            className="bg-green-500/20 text-pink-700 px-4 py-2 rounded-lg border border-green-400/30 hover:bg-green-500/30 transition"
          >
            Decrement
          </button>
          <button
            onClick={Reset}
            className="bg-cyan-500/20 text-cyan-700 px-4 py-2 rounded-lg border border-cyan-400/30 hover:bg-cyan-500/30 transition"
          >
            Reset
          </button>
        </div>

        
        <h1 className="text-4xl font-bold text-emerald-300">{count}</h1>
      </div>
    </div>
  );
}

export default Counter;
