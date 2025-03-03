import React from 'react'
import AboutImage from '../assets/images/prof-pic.jpg'

const About = () => {
    return (
        <div className='bg-gray-900 text-white py-20' id="about">
            <div className='container mx-auto px-6 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <img 
                        src={AboutImage} 
                        alt="Profile" 
                        className='w-72 h-80 rounded-xl object-cover mx-auto md:mx-0 shadow-lg'
                    />
                    <div className='flex-1 text-lg md:text-xl tracking-wide leading-relaxed text-center md:text-left max-w-[850px] mx-auto'>
                        <p className='mb-6'>
                        I am Dr. Sunanda N, a postdoctoral researcher at Universität Hamburg with a strong background in ocean biogeochemistry and climate science. My research focuses on the complex interactions between atmospheric and oceanic processes, particularly in the North Indian Ocean.
                        </p> 
                        <p className='mb-6'>
                        Over the years, I have contributed to multiple high-impact research projects, including studies on ocean carbon dynamics, tropical cyclone impacts, and coupled ocean-atmosphere modeling. My work has been published in leading scientific journals, and I have presented at prestigious international conferences such as AGU and OSICON.
                        </p>
                        <p className='mb-6'>
                        Beyond research, I actively engage in science communication, mentoring, and early-career ocean professional networks. I am a life member of the Ocean Society of India and have been involved in initiatives such as the IOC-UNESCO Ocean Prediction DCC.
                        </p>
                        <p className='mb-6'>
                        With expertise in numerical modeling, data analysis, and interdisciplinary ocean research, I aim to advance our understanding of climate-ocean interactions and contribute to sustainable marine ecosystem management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
