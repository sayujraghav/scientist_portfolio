import React from 'react';
import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/src/carousel.css'; // Import the custom CSS file

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-gray-100 text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <div className="flex-1 w-full md:w-1/2">
            <div className='mb-4 mt-8'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+49 40 42838-xxxx</span>
            </div>
            <div className='mb-4 mt-8'>
                <MdEmail className='inline-block text-green-400 mr-2'></MdEmail>
                <span>sunanda.narayanan@uni-hamburg.de</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>University of Hamburg <br></br>Modeling the carbon cycle in the Earth system
                    <br></br>Bundesstr. 55
                    <br></br>20146 Hamburg
                </span>
                <span><br></br><b>Office</b>:
                    Bu 55
                    Room: 344
                </span>
            </div>
          </div>
          <div className='flex-1 w-full md:w-1/2'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Videos Featured In</h3>
            <Slider {...settings}>
              <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/c0VJ67mbUjA" title="Youth for the Ocean Decade: Hopes and Contributions" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div>
                <iframe width="100%" height="315"  src="https://www.youtube.com/embed/PYG-7yTWA6w" title="Introducing Early Career Ocean Professionals (ECOPS) in India" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;