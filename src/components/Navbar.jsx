import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex flex-col md:flex-row items-center justify-between px-8 py-4 bg-blue-900 shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={Logo} alt="Logo" className="h-16 w-16" />
        <button 
          className="md:hidden p-2 text-white hover:text-blue-500 focus:outline-none"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-blue-900 z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:relative md:translate-x-0 md:flex md:flex-row md:space-x-8 text-white w-full md:w-auto ${
          isOpen ? 'block' : 'hidden'
        } md:block space-y-4 md:space-y-0 p-4 md:p-0`}
      >
        <button
          className="absolute top-4 right-4 md:hidden p-2 text-white hover:text-blue-500 focus:outline-none"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
        <a href="/" className="hover:text-blue-500 block">
          Home
        </a>
        <a href="/blogs" className="hover:text-blue-500 block">
          Blogs
        </a>
        <a href="/services" className="hover:text-blue-500 block">
          Services
        </a>
        <a
          href="/our-work"
          className="relative hover:text-blue-500 block"
        >
          Our Work
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="/about-us" className="hover:text-blue-500 block">
          About Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
