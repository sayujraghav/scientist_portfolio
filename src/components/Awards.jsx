import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

const awardsData = [
  {
    year: "2024",
    title: "Best Student Presentation Award",
    description: "Best Student Presentation Award for her paper on “Comparison of the physical state of the north Indian Ocean using global and regional models” in the National Symposium on Coastal Oceanographic Studies: Modeling & Observations (COSMOS), 17–19 April 2024, Kochi ",
    icon: <FaTrophy className="text-yellow-400 text-8xl md:text-10xl" />,
  },
  {
    year: "2024",
    title: "Best Oral Presentation Award",
    description: "Best Oral Presentation Award for her paper on “Assessment of Nitrogen dynamics and production regimes in the north Indian Ocean: A coupled modelling perspective” in the International Conference MARICON - 2024 organised by School Marine Sciences, CUSAT, Kochi during 8-10 April 2024 ",
    icon: <FaTrophy className="text-yellow-400 text-8xl md:text-10xl" />,
  },
  {
    year: "2021",
    title: "Best Paper Award for the paper titled “Did COVID-19 lockdown impact the Net Primary Productivity in the Arabian Sea?”",
    description: "Best Paper Award for the paper titled “Did COVID-19 lockdown impact the Net Primary Productivity in the Arabian Sea?“ under the session Marine Ecosystems and Biogeochemistry (MEBO) in the 7th Biennial Conference of Ocean Society of India (OSICON-21) organised by the National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences (MoES) and Ocean Society of India (OSI) held from 12th August to 14th August 2021 through the online platform.",
    icon: <FaTrophy className="text-yellow-400 text-8xl md:text-10xl" />,
  },
  {
    year: "2022",
    title: "Winner of Student Hackathon",
    description: "Winner of Student Hackathon (Group) at OCEANS 2022, Chennai, India.",
    icon: <FaAward className="text-red-400 text-8xl md:text-10xl" />,
  },
  {
    year: "2022",
    title: "Full Travel Grant from IIT Kharagpur",
    description: "Received Full Travel Grant from Indian Institute of Technology Kharagpur to attend and present at AGU Fall Meeting 2022 held at Chicago during 12-16, December 2022",
    icon: <FaAward className="text-red-400 text-6xl md:text-8xl" />,
  },
];

export default function Awards() {
  return (
    <div className="max-w-4xl mx-auto py-10 text-white px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🏆 Awards & Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg flex items-center gap-6 transition-transform hover:scale-105"
          >
            {award.icon}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-yellow-300">{award.title} ({award.year})</h3>
              <p className="text-gray-300 text-xs md:text-sm">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
