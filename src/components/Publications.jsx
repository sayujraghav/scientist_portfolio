import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/assets/data/publications.json")
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.error("Error loading publications:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="publications" className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Publications</h2>
        <div className="mt-8">
          <Slider {...settings}>
            {publications.map((pub, index) => (
              <div key={index} className="p-4 md:p-6">
                <div className="rounded-lg shadow-lg bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-gray-900 dark:text-white hover:scale-105 transition-transform h-full">
                  <h3 className="text-lg md:text-xl pt-4 font-semibold break-words">{pub.title}</h3>
                  <p className="mt-2 text-sm md:text-base break-words">{pub.author}</p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:text-blue-700 hover:underline break-words"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Publications;