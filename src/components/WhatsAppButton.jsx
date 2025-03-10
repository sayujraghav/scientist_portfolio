import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+918089432457"; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 
                 flex items-center justify-center shadow-lg hover:bg-green-600 
                 transition-opacity duration-300 cursor-pointer z-[9999]"
      onClick={handleClick}
      style={{ borderRadius: "50%" }} // Ensures perfect circle
    >
      <FaWhatsapp className="text-white text-2xl" />
    </div>
  );
};

export default WhatsAppButton;
