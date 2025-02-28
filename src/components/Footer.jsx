import React from "react";
import {  FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sunanda N</h3>
            <p className="text-gray-400">
              INCOIS Scientist
            </p>
          </div>
  
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sunanda N. All rights reserved- powered by <a href="http://webettan.in/" >webettan</a>
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faXTwitter} size="1x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;