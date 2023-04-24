import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  const toggleNav = () => {
      setNav(!nav);
  }
  return (
    <div className="text-white flex max-w-[1240px] mx-auto h-24 justify-between items-center px-4">
      <h1 className="font-bold text-3xl w-full text-[#00df9a]">SANRAJ.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={toggleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className="font-bold text-3xl w-full text-[#00df9a] m-4">SANRAJ.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-700">Home</li>
          <li className="p-4 border-b border-b-gray-700">Company</li>
          <li className="p-4 border-b border-b-gray-700">Resources</li>
          <li className="p-4 border-b border-b-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
