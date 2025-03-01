import React, { useState, useEffect, useRef } from "react";

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
        <div className="text-2xl font-bold">Sunanda Narayanan</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#publications" className="hover:text-gray-400">Publications</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
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
          <a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#publications" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Publications</a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;