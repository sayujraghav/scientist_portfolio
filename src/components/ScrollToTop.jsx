import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity duration-300"
          style={{ aspectRatio: "1 / 1" , borderRadius:'50%'}} // Ensures perfect circle
        >
          <FaArrowUp className="text-white text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
