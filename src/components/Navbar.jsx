import React, { useState, useEffect } from "react";
import { FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-8 md:px-16 lg:px-24 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Sunanda Narayanan</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Icons (Dark Mode + LinkedIn) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-gray-500 text-2xl" />}
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center space-y-6 pt-16 pb-6 transition-transform duration-300 shadow-md ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}>
        <a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#project" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-400 text-3xl" /> : <FaMoon className="text-gray-500 text-3xl" />}
        </button>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl transform transition-transform duration-300 hover:scale-110">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
