import React from 'react';
import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <div className="flex-10 mb-8 md:mb-0">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+9828839922</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>street, city, province, country</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>My Videos</h3>
            <Slider {...settings}>
              <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/PYG-7yTWA6w" title="Youth for the Ocean Decade: Hopes and Contributions" frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              {/* <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;