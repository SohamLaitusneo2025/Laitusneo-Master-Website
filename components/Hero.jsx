
import React from 'react';
import { RocketIcon } from './icons/RocketIcon';
import { ToolsIcon } from './icons/ToolsIcon';
import { PlayCircleIcon } from './icons/PlayCircleIcon';
import { StarIcon } from './icons/StarIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { ZapIcon } from './icons/ZapIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';

const Hero = () => {
  return (
  <section id="home" className="relative bg-white pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        {/* Background elements removed for clean white background */}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6 animate-fade-in-down">
          <span className="text-sm font-medium">Empowering Innovation in FinTech, Software, AI & Beyond.</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight animate-fade-in-up mb-4">
          <span className="bg-gradient-to-r from-blue-700 via-brand-dark to-green-600 bg-clip-text text-transparent drop-shadow-lg">
            Empower
          </span>
          <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mx-2 animate-bounce"><StarIcon className="h-8 w-8" /></span>
          <span className="bg-gradient-to-r from-blue-700 via-brand-dark to-green-600 bg-clip-text text-transparent drop-shadow-lg">
            Your Business
          </span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-600 via-brand-dark to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            With Smarter Financial & Tech
          </span>
          <span className="inline-flex items-center justify-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 mx-2 animate-bounce delay-200"><ZapIcon className="h-8 w-8" /></span>
          <span className="bg-gradient-to-r from-fuchsia-600 via-brand-dark to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Tools
          </span>
        </h1>

  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#004CE9] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#004CE9] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center font-semibold py-3 px-6 text-[#004CE9] hover:text-white hover:bg-[#004CE9] rounded-full transition-colors duration-200 border border-[#004CE9]"
          >
            <PlayCircleIcon className="mr-2 h-6 w-6" />
            Watch Demo
          </a>
        </div>
      </div>
      
      <div className="relative mt-16 max-w-5xl mx-auto z-10">
         {/* Mockup section */}
         <div className="relative flex justify-center items-end gap-4 md:gap-8 px-4">
            {/* Left Card - Performance Metrics */}
            <div className="hidden md:block bg-white p-4 rounded-xl shadow-2xl w-64 relative bottom-10 animate-fade-in-up transition-transform duration-500 hover:-translate-y-2">
                <p className="font-semibold text-brand-dark mb-3">Performance Metrics</p>
                <div className="h-24 w-full mt-2 flex items-end space-x-2">
                    <div className="w-1/7 h-1/3 bg-gray-200 rounded-t-sm"></div>
                    <div className="w-1/7 h-2/3 bg-gray-200 rounded-t-sm"></div>
                    <div className="w-1/7 h-1/2 bg-gray-200 rounded-t-sm"></div>
                    <div className="w-1/7 h-3/4 bg-gray-200 rounded-t-sm"></div>
                    <div className="w-1/7 h-full bg-green-500 rounded-t-sm"></div>
                    <div className="w-1/7 h-1/2 bg-gray-200 rounded-t-sm"></div>
                    <div className="w-1/7 h-2/3 bg-gray-200 rounded-t-sm"></div>
                </div>
                <div className="flex justify-around text-xs text-gray-400 mt-1">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
                <p className="text-gray-400 text-sm mt-4">Total Income</p>
                <p className="text-2xl font-bold text-brand-dark">₹2,350 <span className="text-sm text-green-500 font-medium">↑ 125%</span></p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Trusted by +8,915 Investor</p>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Phone Mockup - Professional Design */}
            <div className="relative z-10 w-72 md:w-80 h-[600px] md:h-[650px]">
                {/* Phone Body */}
                <div className="relative w-full h-full bg-gray-900 rounded-[40px] border-[10px] border-[#004CE9] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                    {/* Dynamic Island */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#004CE9] rounded-b-xl"></div>
                    
                    {/* Screen */}
                <div className="pt-8 px-4 pb-4 bg-gray-50 h-full overflow-y-auto">
                        {/* Professional Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center">
                                    <img src="/icon.png" alt="Laitusneo" className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs font-semibold text-gray-800 leading-tight">Laitusneo Technologies</p>
                                    <p className="text-xs text-gray-500 leading-tight">Digital Innovation Hub</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-500">Live</span>
                            </div>
                        </div>
                        {/* Project Dashboard */}
                        <div className="bg-gradient-to-r from-[#004CE9]/10 to-[#0038B8]/5 rounded-2xl p-6 mb-6 border border-[#004CE9]/20">
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-2">Active Projects</p>
                                <p className="text-4xl font-bold bg-gradient-to-r from-[#004CE9] to-[#0038B8] bg-clip-text text-transparent">150+</p>
                                <div className="flex justify-center items-center mt-2 space-x-4">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500">Completed</p>
                                        <p className="text-sm font-semibold text-green-600">98%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500">Success Rate</p>
                                        <p className="text-sm font-semibold text-[#004CE9]">99.9%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Service Categories */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-gradient-to-br from-[#004CE9] to-[#0038B8] text-white p-4 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                                <ZapIcon className="h-8 w-8 mb-2 text-yellow-300" />
                                <p className="text-sm font-semibold">AI & ML</p>
                                <p className="text-xs text-blue-100">Smart Solutions</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#004CE9] to-[#0038B8] text-white p-4 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                                <ToolsIcon className="h-8 w-8 mb-2 text-yellow-300" />
                                <p className="text-sm font-semibold">Web Dev</p>
                                <p className="text-xs text-blue-100">Full Stack</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#004CE9] to-[#0038B8] text-white p-4 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                                <ShieldCheckIcon className="h-8 w-8 mb-2 text-yellow-300" />
                                <p className="text-sm font-semibold">Cybersecurity</p>
                                <p className="text-xs text-blue-100">Secure Systems</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#004CE9] to-[#0038B8] text-white p-4 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                                <GlobeAltIcon className="h-8 w-8 mb-2 text-yellow-300" />
                                <p className="text-sm font-semibold">FinTech</p>
                                <p className="text-xs text-blue-100">Digital Finance</p>
                            </div>
                        </div>
                        {/* Credit Cards */}
                        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                            <p className="font-semibold text-brand-dark mb-3">Credit Card</p>
                            <div className="space-y-2">
                                <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-3 rounded-lg text-white">
                                    <p className="text-sm">Platinum</p>
                                    <p className="text-xs text-gray-300">**** 4562</p>
                                </div>
                                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-3 rounded-lg text-white">
                                    <p className="text-sm">Gold Class</p>
                                    <p className="text-xs text-yellow-100">**** 8873</p>
                                </div>
                            </div>
                        </div>
                        {/* Recent Transactions */}
                        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                            <p className="font-semibold text-brand-dark mb-3">Recent Transactions</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                            <span className="text-red-600 text-xs font-bold">N</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">NovaTunes</p>
                                            <p className="text-xs text-gray-500">Entertainment</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-red-600">-₹12.99</span>
                                </div>
          <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 text-xs font-bold">P</span>
                                        </div>
              <div>
                                            <p className="text-sm font-medium">Payora Inc.</p>
                                            <p className="text-xs text-gray-500">Payment</p>
              </div>
            </div>
                                    <span className="font-semibold text-green-600">+₹1,980.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-orange-600 text-xs font-bold">B</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">BeanCraft Café</p>
                                            <p className="text-xs text-gray-500">Food & Drink</p>
          </div>
          </div>
                                    <span className="font-semibold text-red-600">-₹6.20</span>
            </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 text-xs font-bold">C</span>
            </div>
                                        <div>
                                            <p className="text-sm font-medium">Cloudify</p>
                                            <p className="text-xs text-gray-500">Cloud Service</p>
            </div>
          </div>
                                    <span className="font-semibold text-green-600">+₹120.00</span>
                                </div>
            </div>
          </div>
                        
                        {/* AI Tokens */}
                        <div className="mt-4 bg-gradient-to-r from-[#004CE9] to-[#0038B8] p-4 rounded-lg text-white">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium">AI Tokens</p>
                                    <p className="text-2xl font-bold">1,200</p>
            </div>
                                <button className="bg-white text-[#004CE9] px-3 py-1 rounded-full text-sm font-semibold">
                                    Buy More
                                </button>
            </div>
            </div>
          </div>
                </div>
            </div>

            {/* Right Card - Tech Services */}
            <div className="hidden md:block bg-white p-4 rounded-xl shadow-2xl w-64 relative bottom-10 animate-fade-in-up transition-transform duration-500 hover:-translate-y-2">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-500">Web Development</p>
                    <div className="w-8 h-6 bg-[#004CE9] rounded-md flex items-center justify-center"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                </div>
                 <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">Mobile Apps</p>
                    <div className="h-5 w-12 bg-[#004CE9] rounded text-white text-xs font-bold flex items-center justify-center">AI</div>
                </div>
                <p className="text-gray-400 text-sm mt-4">Active Projects</p>
                <p className="text-2xl font-bold text-[#004CE9]">150+</p>
            </div>
        </div>
      </div>

      {/* Logo Scroller Section */}
      <div className="mt-8 py-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 font-medium">Trusted by Leading Companies</p>
          </div>
          
          {/* Scrolling Logos Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center whitespace-nowrap">
              {/* First Set of Logos */}
              <div className="flex space-x-12 items-center flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="Shopify" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="hostinger.png" alt="Hostinger" className="h-12 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png" alt="HDFC Bank" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                {/* <div className="flex items-center justify-center w-24 h-12">
                  <img src="jio.png" alt="Jio Payments Bank" className="h-10 w-auto transition-all duration-300 hover:scale-110" />
                </div> */}
                {/* <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="Axis Bank" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div> */}
              </div>
              
              {/* Duplicate Set for Seamless Loop */}
              <div className="flex space-x-12 items-center flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" alt="Shopify" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="hostinger.png" alt="Hostinger" className="h-12 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png" alt="HDFC Bank" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="jio.png" alt="Jio Payments Bank" className="h-10 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="jio.png" alt="Jio Payments Bank" className="h-10 w-auto transition-all duration-300 hover:scale-110" />
                </div>
                <div className="flex items-center justify-center w-24 h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="Axis Bank" className="h-8 w-auto transition-all duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
