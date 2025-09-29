
import React, { useState, useEffect } from 'react';
import logo from '../Logo.png';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 mt-4 ${isScrolled ? 'shadow-2xl animate-navbar-slide' : 'animate-navbar-fade'}`}> 
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="w-full flex items-center justify-between backdrop-blur-md px-2 py-2 rounded-full relative" style={{background: 'rgba(10,25,62,0.8)', boxShadow: isScrolled ? '0 8px 32px 0 rgba(10,25,62,0.25)' : 'none'}}>
            {/* Left: Navigation */}
            <nav className="hidden md:flex items-center space-x-2 pl-2">
              <a href="#home" className="text-white hover:bg-white/20 hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-200 text-sm border border-transparent hover:border-white/30">Home</a>
              <a href="#about" className="text-white hover:bg-white/20 hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-200 text-sm border border-transparent hover:border-white/30">About Us</a>
              <a href="#pages" className="flex items-center text-white hover:bg-white/20 hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-200 text-sm border border-transparent hover:border-white/30">
                Pages <ChevronDownIcon className="ml-1 h-4 w-4" />
              </a>
              <a href="#blog" className="flex items-center text-white hover:bg-white/20 hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-200 text-sm border border-transparent hover:border-white/30">
                Blog <ChevronDownIcon className="ml-1 h-4 w-4" />
              </a>
              <a href="#contact" className="text-white hover:bg-white/20 hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-200 text-sm border border-transparent hover:border-white/30">Contact</a>
            </nav>
            {/* Center: Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
              <a href="#home">
                <img src={logo} alt="Laitusneo Logo" className="h-12 w-auto" style={{maxHeight:48}} />
              </a>
            </div>
            {/* Right: Button */}
            <div className="flex items-center pr-2">
              <a
                href="#contact"
                className="bg-white text-[#0a193e] font-semibold py-1 px-5 rounded-full hover:bg-gray-100 hover:text-[#0a193e] transition-all duration-300 transform hover:scale-105 border-2 border-white text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
