

import React from "react";

const logos = [
  "logo.png",
  "logo1.png",
  "logo2.png",
  "logo3.png",
  "logo4.png",
  "logo5.png",
  "logo6.png",
  "logo7.png",
  "logo8.png",
  "logo10.png",
  "logo11.png",
  "logo12.png",


];

const Trust = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Hall of <span className="text-blue-600">Trust</span>
        </h2>
        <p className="text-gray-600 text-xl  font-semibold mt-2">
          We aren’t just your agency – we are your{" "}
          <span className="text-blue-600 font-semibold">partner in growth.</span>
        </p>
      </div>
          {/* logos */}
          
    <div className="overflow-hidden w-full ">
  <div className="marquee-track w-full">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-7 place-items-center px-6 mt-10">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`${import.meta.env.BASE_URL}logos/${logo}`}
          className="w-32 h-20 sm:w-24 sm:h-16 md:w-40 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
          alt="trusted logo"
        />
      ))}
    </div>
  </div>
</div>



    </div>
  );
};

export default Trust;
