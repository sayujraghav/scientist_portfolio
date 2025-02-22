import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    
    <section className="text-center p-10">
      <motion.img
        src="/src/assets/images/prof-pic.jpg"
        alt="Profile"
        className="rounded-full mx-auto shadow-lg w-40 h-40"
        whileHover={{ scale: 1.1 }}
      />
      <h2 className="text-4xl font-semibold mt-4">Dr. John Doe</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">AI & Quantum Computing Researcher</p>
    </section>
  );
};

export default Hero;
