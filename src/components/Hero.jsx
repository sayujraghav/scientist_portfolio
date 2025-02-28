import React from "react";
import HeroImage from "../assets/images/prof-pic.jpg";
import OceanImage from "../assets/images/ocean.webp";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative text-white text-center py-16 bg-cover bg-center" style={{ backgroundImage: `url(${OceanImage})` }} >
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        <img src={HeroImage} alt="Profile" className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-110 shadow-lg" />
        <h1 className='text-5xl font-extrabold'>
          I'm {"Sunanda N"}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'></span>
        </h1>
        <p className='mt-4 text-lg max-w-xl mx-auto'>
          Welcome to my portfolio! I am passionate about science and technology. Explore my work and feel free to get in touch.
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-4 flex justify-center">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full shadow-md flex items-center">
            Connect With Me <FaLinkedin className="text-2xl ml-2" />
          </button>
          <button className="bg-gradient-to-r from-green-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full shadow-md">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
