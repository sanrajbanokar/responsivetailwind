import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Card = () => {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-3 mx-auto gap-8">
        <div className="w-full p-4 my-4 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <img
            className="w-20 mt-[-3rem] mx-auto bg-white"
            src={Single}
            alt="single plan"
          />
          <h2 className="font-bold text-2xl py-8">Single User</h2>
          <p className="font-bold text-4xl">$149</p>
          <div className="font-medium">
            <p className="border-b mx-8 py-2 mt-8">500 GB Storage</p>
            <p className="border-b mx-8 py-2">1 User Allowed</p>
            <p className="border-b mx-8 py-2">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] font-medium py-3 my-6 ">Start Trial</button>
        </div>
        <div className="w-full bg-gray-100 p-4 my-8 md:my-0 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <img
            className="w-20 mt-[-3rem] mx-auto bg-transparent"
            src={Double}
            alt="single plan"
          />
          <h2 className="font-bold text-2xl py-8">Partnership</h2>
          <p className="font-bold text-4xl">$199</p>
          <div className="font-medium">
            <p className="border-b mx-8 py-2 mt-8">1 TB Storage</p>
            <p className="border-b mx-8 py-2">3 Users Allowed</p>
            <p className="border-b mx-8 py-2">Send up to 10 GB</p>
          </div>
          <button className="bg-[#000300] text-[#00df9a] rounded-md w-[200px] font-medium py-3 my-6 ">Start Trial</button>
        </div>
        <div className="w-full p-4 my-4 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <img
            className="w-20 mt-[-3rem] mx-auto bg-white"
            src={Triple}
            alt="single plan"
          />
          <h2 className="font-bold text-2xl py-8">Group Account</h2>
          <p className="font-bold text-4xl">$299</p>
          <div className="font-medium">
            <p className="border-b mx-8 py-2 mt-8">5 TB Storage</p>
            <p className="border-b mx-8 py-2">10 Users Allowed</p>
            <p className="border-b mx-8 py-2">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] font-medium py-3 my-6 ">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
