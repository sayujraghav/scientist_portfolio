import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, setDarkMode }) => {
    return (
      <header className="flex justify-between items-center p-5 shadow-md">
        <h1 className="text-3xl font-bold">Researcher Portfolio</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 bg-gray-800 text-white rounded-full shadow-md"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </header>
    );
  };
  

export default Header;
