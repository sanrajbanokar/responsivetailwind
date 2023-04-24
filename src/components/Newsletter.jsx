import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white  w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between w-full items-center">
            <input className="w-full text-black p-3 rounded-md " type="email" placeholder="Your Email" />
            <button className="bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-6 py-3 px-6 ml-0 sm:ml-4">Notify Me</button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">Privacy Policy</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
