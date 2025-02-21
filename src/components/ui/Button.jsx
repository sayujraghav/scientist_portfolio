import React from "react";

const Button = ({ children, variant = "default", ...props }) => {
  const baseStyles =
    "rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg px-6 py-3";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
