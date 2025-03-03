import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaUser, FaBook, FaEnvelope, FaBars, FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-8 md:px-16 lg:px-24 shadow-md z-50 relative">
      <div className="container py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Dr. Sunanda Narayanan</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#about" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded">
            <FaUser />
            <span>About Me</span>
          </a>
          <a href="#publications" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded">
            <FaBook />
            <span>Publications</span>
          </a>
          <a href="#contact" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 focus:outline-none"
          >
            <span
              className={`w-5 h-[3px] block duration-200 bg-black dark:bg-white ${
                isOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-[3px] block duration-200 bg-black dark:bg-white ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-[3px] block duration-200 bg-black dark:bg-white ${
                isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 left-0 w-full bg-gray-100 text-black dark:text-white flex flex-col items-center space-y-6 pt-16 pb-6 shadow-md"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 flex items-center justify-center w-14 h-14 focus:outline-none"
          >
            <FaTimesCircle size={24} className="text-black dark:text-white" />
          </button>
          <a href="#home" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#about" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
            <FaUser />
            <span>About Me</span>
          </a>
          <a href="#publications" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
            <FaBook />
            <span>Publications</span>
          </a>
          <a href="#contact" className="hover:text-gray-400 flex items-center space-x-2 border border-transparent hover:border-gray-400 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;