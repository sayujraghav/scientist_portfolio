import React, { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [models, setModels] = useState([]);

    // Load skills from JSON file
    useEffect(() => {
        fetch("/src/assets/data/skills.json")
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error loading skills:", error));

        fetch("/src/assets/data/model.json")
            .then((response) => response.json())
            .then((data) => setModels(data))
            .catch((error) => console.error("Error loading models:", error));
    }, []);

    return (
            <><section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
                            <img src={skill.icon} alt={skill.name} className="mx-auto w-16 h-16" />
                            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section><section id="models" className="py-16 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Models</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {models.map((model, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
                                
                                <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{model.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    );
};

export default Skills;