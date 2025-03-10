import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}
      alt={alt}
      loading="lazy"
      className="w-full rounded-lg shadow-lg will-change-transform will-change-opacity transition-opacity duration-300"
      style={{ minHeight: "200px", background: "#eee" }}
    />
  );
};

export default LazyImage;
