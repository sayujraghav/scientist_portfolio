import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-gray-100 text-black px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Sunanda N</div>
        <div className='space-x-6'>
          <a href='#home' className='hover:text-gray-400'>Home</a>
          <a href='#about' className='hover:text-gray-400'>About Me</a>
          <a href='#project' className='hover:text-gray-400'>Projects</a>
          <a href='#contact' className='hover:text-gray-400'>Contact</a>
        </div>
        <div className='flex items-center space-x-4'>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='transform transition-transform duration-300 hover:scale-105'>
            <FaLinkedin className='text-4xl' />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;