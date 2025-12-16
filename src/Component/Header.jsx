
import React from "react";
export default function Header() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-500 text-white py-20 px-6 md:px-20 rounded-b-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Grow your Business & Revenue <br />
              with the champions of <span className="text-yellow-300">Digital Marketing.</span>
            </h1>

            <p className="mt-4 text-lg">
              From leads to sales, we deliver transformative results.
            </p>

            <button className="mt-6 bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded-xl font-semibold">
              GET A FREE QUOTE NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}logos/header.png`}
              alt="banner"
              className="w-[90%] md:w-full"
            /> 
          </div>
        </div>
      </section>
     
     </div> 
         
     
  );
 
}
