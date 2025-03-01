import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all transform hover:scale-110"
      onClick={handleClick}
    >
      <FaWhatsapp size={24} md:size={32} />
    </div>
  );
};

export default WhatsAppButton;