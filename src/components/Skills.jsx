import React, { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [models, setModels] = useState([]);

    // Load skills from JSON file
    useEffect(() => {
        fetch("/assets/data/skills.json")
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error loading skills:", error));

        fetch("/assets/data/model.json")
            .then((response) => response.json())
            .then((data) => setModels(data))
            .catch((error) => console.error("Error loading models:", error));
    }, []);

    return (
        <>
            <section id="skills" className="py-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div className="flex flex-col items-center">
                                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-2" />
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="models" className="py-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Models</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {models.map((model, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div className="flex flex-col items-center">
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{model.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;