import React from 'react'
import AboutImage from '../assets/images/prof-pic.jpg'
const About = () => {
    return (
        <div className='bg-gray-900 text-white text-2xl py-20' id="about">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1 text-justify'>
                        <p className='mb-4'>
                        I am Dr. Sunanda N, a postdoctoral researcher at Universität Hamburg with a strong background in ocean biogeochemistry and climate science. My research focuses on the complex interactions between atmospheric and oceanic processes, particularly in the North Indian Ocean. I hold a Ph.D. from the Indian Institute of Technology Kharagpur, where my thesis explored the impact of atmospheric and oceanic changes on net primary productivity.  
                        </p> <p className='mb-4'>
Over the years, I have contributed to multiple high-impact research projects, including studies on ocean carbon dynamics, tropical cyclone impacts, and coupled ocean-atmosphere modeling. My work has been published in leading scientific journals, and I have presented at prestigious international conferences such as AGU and OSICON.  
</p><p className='mb-4'>
Beyond research, I actively engage in science communication, mentoring, and early-career ocean professional networks. I am a life member of the Ocean Society of India and have been involved in initiatives such as the IOC-UNESCO Ocean Prediction DCC. My passion for ocean science extends to public outreach, where I contribute to LUCA Online Science Magazine.  
</p><p className='mb-4'>
With expertise in numerical modeling, data analysis, and interdisciplinary ocean research, I aim to advance our understanding of climate-ocean interactions and contribute to sustainable marine ecosystem management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About