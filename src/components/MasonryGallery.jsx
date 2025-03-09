import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.JPG",
    "/assets/images/5.JPG",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/9.jpg",
    "/assets/images/10.jpg",
    "/assets/images/11.jpg"
]



const MasonryGallery = () => {
  return (
<div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Captured Moments, Timeless Memories</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-full rounded-lg break-inside-avoid shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
