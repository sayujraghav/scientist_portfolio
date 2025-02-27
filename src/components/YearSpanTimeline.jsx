import { useState } from "react";

const timelineData = [
  { years: "2025 - ", title: "Postdoctoral Researche", description: "At present working as Postdoctoral Researcher at Universität Hamburg" },
  { years: "2019 - 2025", title: "PhD Scholar", description: "Centre for Ocean, River, Atmosphere and Land Sciences, Indian Institute of Tech nology Kharagpur, West Bengal." },
  { years: "2021 - 2022", title: "Senior Project Assistant", description: "Centre for Ocean, River, Atmosphere and Land Sciences, Indian Institute of Tech nology Kharagpur West Bengal-721302." , project : "Implementation of NEMO model at NPOL Kochi funded by Naval Physical and Oceanopgraphic Laboratory." },
  { years: "2018 - 2021", title: "Junior Project Assistant ", description: "Centre for Ocean, River, Atmosphere and Land Sciences, Indian Institute of Tech nology Kharagpur West Bengal-721302." , project : "The impact of atmospheric pollution on Bay of Bengal Marine Ecosystem funded by INCOIS, Ministry of Earth Sciences (MoES)." },
  { years: "2016 - 2018", title: "Project Assistant ", description: "Centre for Ocean, River, Atmosphere and Land Sciences, Indian Institute of Tech nology Kharagpur West Bengal-721302 in Collaboration with University of Reading" },
  { years: "2015 - 2016", title: "Junior Research Fellow  ", description: "CSIR-National Aerospace Laboratories, Kodihalli, Bangalore." ,project: "INDO-UK INCOMPASS Project" },
];

export default function YearSpanTimeline() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10" id="project">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Academic & Research Timeline
      </h2>
      <div className="relative border-l-4 border-blue-500">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative ml-6 mb-10 group cursor-pointer"
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <div className="absolute -left-7 top-1 bg-blue-500 h-6 w-6 rounded-full border-4 border-white group-hover:scale-125 transition-all"></div>
            <div
              className={`p-6 bg-gray-800 text-white rounded-lg shadow-lg transform transition-all ${
                selected === index ? "scale-105 shadow-xl" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-blue-400">{item.years}</h3>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
              {item.project && <p className="text-gray-300 font-bold">Project-{item.project}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
