import React from "react";

const ImageComponent = ({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" className="w-full rounded-lg shadow-lg" />;
};

export default ImageComponent;
