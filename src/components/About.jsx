import React from 'react'
import AboutImage from '../assets/images/prof-pic.jpg'
const About = () => {
    return (
        <div className='bg-gray-100 text-black py-20' id="about">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text center mb-12'>
                    About me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt = "" className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'><p>
                        I am a Research Scientist at the Indian National Centre for Ocean Information Services (INCOIS), specializing in oceanography and marine research. With a deep passion for understanding the complexities of the ocean, my work focuses on ocean modeling, climate variability, marine ecosystem studies, and real-time ocean data analysis.  

                        At INCOIS, I contribute to the development of advanced ocean observation systems, predictive models for weather and climate forecasting, and marine resource management. My research aims to enhance our understanding of ocean dynamics, improve disaster preparedness for coastal communities, and support sustainable marine practices.  

                        I have a strong background in physical oceanography, remote sensing, and data-driven analysis, utilizing cutting-edge technologies such as satellite observations, numerical simulations, and AI-based predictive analytics. Through collaborations with national and international scientific communities, I strive to advance oceanographic research and provide actionable insights for policymakers, environmentalists, and the global scientific community.  

                        Beyond research, I am committed to scientific outreach and education, working to raise awareness about ocean conservation and climate change.
                    </p></div>
                </div>
            </div>
        </div>
    )
}

export default About