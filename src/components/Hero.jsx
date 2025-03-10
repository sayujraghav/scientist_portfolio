import HeroImage from "../assets/images/prof-pic.webp";
import OceanImage from "../assets/images/ocean.webp";
import { FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Hi!, I'm Sunanda Narayanan";

  // ✅ Optimized text animation (Doesn’t block rendering)
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50); // Faster animation

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div
      className="relative text-white text-center py-16 bg-cover bg-center md:mt-0 transition-opacity duration-700 opacity-0"
      style={{ backgroundImage: `url(${OceanImage})` }}
      onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
    >
      {/* ✅ Preloaded Background Image */}
      <link rel="preload" as="image" href={OceanImage} />

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {/* ✅ Lazy Loaded Profile Image */}
        <img
          loading="lazy"
          src={HeroImage}
          alt="Sunanda Narayanan"
          width="200"
          height="200"
          className="mx-auto mb-8 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-110 shadow-lg"
        />

        <h1 className="text-3xl md:text-5xl font-extrabold">
          {text}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"></span>
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-xl mx-auto">
          Welcome to my portfolio! I am passionate about science and technology. Explore my work and feel free to get in touch.
        </p>

        {/* Buttons */}
        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
          <a
            href="https://in.linkedin.com/in/dr-sunanda-narayanan-30b5a099"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-md flex items-center"
          >
            Connect With Me <FaLinkedin className="text-2xl ml-2" />
          </a>
          <a
            href="/assets/data/resume_sunanda.docx"
            download
            className="bg-white text-black transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-md flex items-center"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
