import React, { useEffect, useState } from "react";
import Slider from "react-slick";

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
            <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
                    <div className="mt-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="p-8">
                                    <div className="rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform h-full p-6">
                                        <img src={skill.icon} alt={skill.name} className="mx-auto w-16 h-16" />
                                        <p className="mt-4 text-lg font-semibold text-center">{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section id="models" className="py-16 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Models</h2>
                    <div className="mt-8">
                            {models.map((model, index) => (
                                <div key={index} className="p-8">
                                    <div className="flex flex-col justify-between rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:scale-105 transition-transform h-full p-6">
                                        <p className="text-lg font-semibold text-center">{model.name}</p>                                     
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