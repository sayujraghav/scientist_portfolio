import React from "react";
import LazyImageWrapper from "./LazyImage";


const supportsAvif = document.createElement('canvas').toDataURL('image/avif').indexOf('data:image/avif') === 0;

const images = [
  supportsAvif ? "/assets/images/1.avif" : "/assets/images/1.webp",
  supportsAvif ? "/assets/images/2.avif" : "/assets/images/2.webp",
  supportsAvif ? "/assets/images/3.avif" : "/assets/images/3.webp",
  supportsAvif ? "/assets/images/4.avif" : "/assets/images/4.webp",
  supportsAvif ? "/assets/images/5.avif" : "/assets/images/5.webp",
  supportsAvif ? "/assets/images/6.avif" : "/assets/images/6.webp",
  supportsAvif ? "/assets/images/7.avif" : "/assets/images/7.webp",
  supportsAvif ? "/assets/images/8.avif" : "/assets/images/8.webp",
  supportsAvif ? "/assets/images/9.avif" : "/assets/images/9.webp",
  supportsAvif ? "/assets/images/10.avif" : "/assets/images/10.webp",
  supportsAvif ? "/assets/images/11.avif" : "/assets/images/11.webp",
  // Add the rest...
];


const MasonryGallery = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Captured Moments, Timeless Memories</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <LazyImageWrapper key={index} src={src} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
