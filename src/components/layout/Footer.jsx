import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-5 flex justify-center gap-5">
      <a href="#" className="text-gray-600 dark:text-gray-400"><FaLinkedin size={30} /></a>
      <a href="#" className="text-gray-600 dark:text-gray-400"><FaTwitter size={30} /></a>
      <a href="#" className="text-gray-600 dark:text-gray-400"><FaGithub size={30} /></a>
    </footer>
  );
};

export default Footer;
