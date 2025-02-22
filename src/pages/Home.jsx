import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} transition-all duration-300 flex justify-center`}>
      <div className="w-full max-w-6xl px-6">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home