import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      title="Click me to scroll to the top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 md:p-4 rounded-full shadow-lg transition-all transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:scale-110`}
    >
      <ArrowUpCircle size={24} md:size={32} />
    </button>
  );
};

export default BackToTopButton;