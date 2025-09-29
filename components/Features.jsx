
import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { ZapIcon } from './icons/ZapIcon';
import { ToolsIcon } from './icons/ToolsIcon';
import { StarIcon } from './icons/StarIcon';
import { RocketIcon } from './icons/RocketIcon';

const features = [
  {
    icon: <ToolsIcon className="h-6 w-6 text-brand-dark" />,
    title: 'All-in-One Tech Partner',
    description: 'From FinTech solutions to web and app development, cybersecurity, AI, and full-stack technologies, we cover every aspect of digital transformation under one roof.',
    bgColor: 'bg-white'
  },
  {
    icon: <StarIcon className="h-6 w-6 text-brand-dark" />,
    title: 'Expertise Across Industries',
    description: 'With deep knowledge in financial technology and diverse experience in multiple domains, we craft solutions that are secure, scalable, and tailored to your business goals.',
    bgColor: 'bg-white'
  },
  {
    icon: <ZapIcon className="h-6 w-6 text-brand-dark" />,
    title: 'Cutting-Edge Innovation',
    description: 'Our team leverages the latest in AI, machine learning, and automation to deliver smarter, faster, and more reliable outcomes.',
    bgColor: 'bg-white'
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-brand-dark" />,
    title: 'Robust Cybersecurity',
    description: 'Security is at the core of everything we build. We integrate advanced cybersecurity measures to safeguard your data and digital assets.',
    bgColor: 'bg-white'
  },
  {
    icon: <GlobeAltIcon className="h-6 w-6 text-brand-dark" />,
    title: 'Customized & Scalable Solutions',
    description: 'We understand every business is unique. Our solutions are designed to adapt, grow, and evolve with your business needs.',
    bgColor: 'bg-white'
  },
  {
    icon: <RocketIcon className="h-6 w-6 text-brand-dark" />,
    title: 'Dedicated Support & Collaboration',
    description: 'We believe in long-term partnerships. Our experts work closely with you to ensure continuous support, guidance, and success at every stage.',
    bgColor: 'bg-white'
  },
];

// Counter component for animated numbers
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const startCount = 0;
    const endCount = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Features = () => {
  return (
    <section id="about" className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-gray-200 mb-4">
            <span className="text-sm font-medium">🚀 Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Why Choose Laitusneo?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We deliver comprehensive technology solutions that drive digital transformation and business growth across industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#89A7E6] to-[#004CE9] rounded-xl p-6 mb-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <Counter end={500} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <Counter end={99.9} suffix="%" />
              </div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <Counter end={50} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`p-5 rounded-lg border border-gray-200 transition-all duration-300 ${feature.bgColor} hover:shadow-lg hover:-translate-y-1`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">{feature.icon}</div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-dark mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder's Note Section */}
        <div className="mt-20 bg-gradient-to-br from-[#004CE9] via-[#0038B8] to-[#002A8F] rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl border border-white/10">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
          
          {/* Stylish Border Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Enhanced Animated Elements */}
          <div className="absolute top-6 left-6 w-3 h-3 bg-white/40 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-12 w-2.5 h-2.5 bg-white/35 rounded-full animate-pulse delay-1000 shadow-md"></div>
          <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping delay-500"></div>
          
          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Founder's Note Header */}
            <div className="text-center mb-10">
              <div className="inline-block border border-white/30 rounded-xl px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm shadow-lg">
                <span className="text-white text-sm font-bold tracking-widest uppercase">💼 FOUNDER'S VISION</span>
              </div>
            </div>

            {/* Quote Section with Enhanced Styling */}
            <div className="text-center mb-12">
              <div className="relative">
                {/* Quote Marks */}
                <div className="absolute -top-4 -left-4 text-6xl text-white/20 font-serif">"</div>
                <div className="absolute -bottom-8 -right-4 text-6xl text-white/20 font-serif">"</div>
                
                <div className="text-white text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-8">
                  <div className="space-y-4">
                    <p className="animate-fade-in-up delay-100">
                      At <span className="font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Laitusneo Technologies</span>, we specialize in <span className="font-semibold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">comprehensive FinTech solutions</span> and cutting-edge web technologies that power the future of digital finance.
                    </p>
                    <p className="animate-fade-in-up delay-300">
                      From <span className="font-semibold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">payment gateways and banking APIs</span> to <span className="font-semibold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">AI-driven financial platforms</span>, we deliver secure, scalable solutions that transform how businesses handle money, data, and digital transactions.
                    </p>
                    <p className="animate-fade-in-up delay-500">
                      Our expertise spans <span className="font-semibold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">blockchain, cybersecurity, cloud infrastructure</span>, and <span className="font-semibold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">enterprise-grade web applications</span>—all designed to accelerate your digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Founders Attribution */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-500">
              {/* Romi Kumar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/40 backdrop-blur-sm shadow-2xl bg-gradient-to-br from-white/20 to-white/5">
                    <img src="/romi.png" alt="Romi Kumar" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white font-bold text-lg animate-fade-in-up delay-600">Romi Kumar</p>
                <p className="text-white/90 text-sm font-medium animate-fade-in-up delay-700 tracking-wide">CEO & Founder</p>
                <div className="flex items-center justify-center mt-1 animate-fade-in-up delay-800">
                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white/70 text-xs">Expert in Technology and Payments & Banking Products (4 Years Experience)</span>
                </div>
              </div>

              {/* Ashwani Kumar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/40 backdrop-blur-sm shadow-2xl bg-gradient-to-br from-white/20 to-white/5">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white font-bold text-lg animate-fade-in-up delay-600">Ashwani Kumar</p>
                <p className="text-white/90 text-sm font-medium animate-fade-in-up delay-700 tracking-wide">Chairman & Co-Founder</p>
                <div className="flex items-center justify-center mt-1 animate-fade-in-up delay-800">
                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white/70 text-xs">Expert in Finance Management (3 Years Experience)</span>
                </div>
              </div>

              {/* Amit Rai */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/40 backdrop-blur-sm shadow-2xl bg-gradient-to-br from-white/20 to-white/5">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white font-bold text-lg animate-fade-in-up delay-600">Amit Rai</p>
                <p className="text-white/90 text-sm font-medium animate-fade-in-up delay-700 tracking-wide">Co-Founder</p>
                <div className="flex items-center justify-center mt-1 animate-fade-in-up delay-800">
                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white/70 text-xs">Expert in Finance & Compliance (10+ Years of Experience)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
