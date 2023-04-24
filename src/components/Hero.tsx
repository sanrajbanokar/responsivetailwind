import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white mx-1">
      <div className="max-w-[800px] mt-[-100px] w-full text-center h-screen flex flex-col justify-center items-center mx-auto">
        <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold">
          Grow with data.
        </h1>
        <div className="flex py-2">
          <p className="md:text-5xl sm:text-4xl font-bold text-xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-gray-500 font-bold text-xl pl-2 md:pl-3"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className="bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
      </div>
    </div>
  );
};
