import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-16 px-4 text-gray-300">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="text-[#00df9a] font-bold text-3xl w-full">REACT.</h1>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quis blanditiis commodi repellendus dolor nam ratione, esse illum
            aut quod expedita fugiat voluptatem labore modi quo rerum eveniet
            doloremque enim.
          </p>
          <div className="flex justify-between py-2">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="w-full lg:col-span-2 flex justify-between py-4">
          <div>
              <h6 className="text-gray-400 pb-2">Solutions</h6>
              <ul>
                  <li className="py-2 border-b border-b-gray-700">Analytics</li>
                  <li className="py-2 border-b border-b-gray-700">Marketing</li>
                  <li className="py-2 border-b border-b-gray-700">Commerce</li>
                  <li className="py-2">Insights</li>
              </ul>
          </div>
          <div>
              <h6 className="text-gray-400 pb-2">Support</h6>
              <ul>
                  <li className="py-2 border-b border-b-gray-700">Pricing</li>
                  <li className="py-2 border-b border-b-gray-700">Documentation</li>
                  <li className="py-2 border-b border-b-gray-700">Guides</li>
                  <li className="py-2">API Status</li>
              </ul>
          </div>
          <div>
              <h6 className="text-gray-400 pb-2">Company</h6>
              <ul>
                  <li className="py-2 border-b border-b-gray-700">About</li>
                  <li className="py-2 border-b border-b-gray-700">Blogs</li>
                  <li className="py-2 border-b border-b-gray-700">Jobs</li>
                  <li className="py-2 border-b border-b-gray-700">Press</li>
                  <li className="py-2">Careers</li>
              </ul>
          </div>
          <div>
              <h6 className="text-gray-400 pb-2">Legal</h6>
              <ul>
                  <li className="py-2 border-b border-b-gray-700">Claim</li>
                  <li className="py-2 border-b border-b-gray-700">Policy</li>
                  <li className="py-2 border-b border-b-gray-700">Terms</li>
                  <li className="py-2">Copyright</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
