import React from "react";
import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-3"
          src={Laptop}
          alt="laptop analytics"
        />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl py-2 ">Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor rerum modi quam sint, similique voluptas quidem alias, in vel blanditiis, atque exercitationem harum totam. Provident aut a porro cupiditate?</p>
            <button className="bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};
