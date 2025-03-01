import React, { useEffect, useState } from "react";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/data/publications.json")
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.error("Error loading publications:", error));
  }, []);

  return (
    <section id="publications" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Publications</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-gray-900 dark:text-white hover:scale-105 transition-transform"
            >
              <h3 className="text-lg md:text-xl font-semibold break-words">{pub.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;