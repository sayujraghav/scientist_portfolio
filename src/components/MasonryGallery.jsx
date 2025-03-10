import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
    "/assets/images/1.webp",
    "/assets/images/2.webp",
    "/assets/images/3.webp",
    "/assets/images/4.webp",
    "/assets/images/5.webp",
    "/assets/images/6.webp",
    "/assets/images/7.webp",
    "/assets/images/8.webp",
    "/assets/images/9.webp",
    "/assets/images/10.webp",
    "/assets/images/11.webp"
]



const MasonryGallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const preloadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
      });
    });

    Promise.all(preloadImages).then((loaded) => {
      if (isMounted) setLoadedImages(loaded);
    });

    return () => (isMounted = false);
  }, []);

  return (
<div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Captured Moments, Timeless Memories</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {loadedImages.length === images.length ? (
        loadedImages.map((src, index) => (
          <img loading="lazy" 
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full rounded-lg break-inside-avoid shadow-lg"
          />
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )
    }
    </div>
  </div>
  );
};

export default MasonryGallery;
