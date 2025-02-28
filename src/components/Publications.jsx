import React, { useEffect, useState } from "react";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/src/assets/data/publications.json")
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.error("Error loading publications:", error));
  }, []);

  return (
    <section id="publications" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Publications</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pub.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{pub.author}</p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
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
