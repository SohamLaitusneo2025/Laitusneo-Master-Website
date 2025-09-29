import React, { useState } from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const services = [
    {
      name: 'FinTech Payment Gateway',
      icon: '💳',
      price: { monthly: 25000, annual: 20000 },
      description: 'Complete payment processing solutions with Indian banking integration.',
      features: [
        'UPI, Cards, Net Banking Integration',
        'Real-time transaction monitoring',
        'PCI DSS Compliance',
        'Multi-currency support',
        'Fraud detection & prevention',
        '24/7 technical support'
      ],
      cta: 'Get Quote',
      primary: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Software Development',
      icon: '💻',
      price: { monthly: 15000, annual: 12000 },
      description: 'Custom software solutions for your business needs.',
      features: [
        'Full-stack development',
        'API development & integration',
        'Database design & optimization',
        'Cloud deployment (AWS/Azure)',
        'Agile development methodology',
        '3 months free maintenance'
      ],
      cta: 'Start Project',
      primary: false,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      name: 'Web Development',
      icon: '🌐',
      price: { monthly: 10000, annual: 8000 },
      description: 'Modern, responsive web applications and websites.',
      features: [
        'Responsive design',
        'SEO optimization',
        'Content management system',
        'E-commerce integration',
        'Performance optimization',
        '2 months free support'
      ],
      cta: 'Build Website',
      primary: false,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Cybersecurity',
      icon: '🛡️',
      price: { monthly: 20000, annual: 16000 },
      description: 'Enterprise-grade security solutions and compliance.',
      features: [
        'Security audit & assessment',
        'Penetration testing',
        'Compliance (ISO 27001, SOC 2)',
        'Security monitoring & SIEM',
        'Incident response planning',
        'Security training & awareness'
      ],
      cta: 'Secure Now',
      primary: false,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      name: 'UI/UX Design',
      icon: '✨',
      price: { monthly: 8000, annual: 6500 },
      description: 'Professional user interface and experience design.',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'Visual design & mockups',
        'Usability testing',
        'Design handoff & assets',
        'Design system & guidelines'
      ],
      cta: 'Start Design',
      primary: false,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Custom Design',
      icon: '🎨',
      price: { monthly: 5000, annual: 4000 },
      description: 'UI/UX design and branding solutions.',
      features: [
        'UI/UX design',
        'Brand identity design',
        'Logo & graphic design',
        'Prototyping & wireframing',
        'Design system creation',
        'Unlimited revisions'
      ],
      cta: 'Design Now',
      primary: false,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-700">🚀 Comprehensive Tech Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            From FinTech payment gateways to enterprise cybersecurity, Laitusneo Technologies delivers cutting-edge solutions that power your business growth.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center my-12">
          <div className="bg-gray-100 rounded-full p-1 border border-gray-200">
            <div className="flex items-center space-x-4 px-4">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isAnnual} 
                  onChange={() => setIsAnnual(!isAnnual)} 
                  className="sr-only peer" 
                />
                <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500"></div>
              </label>
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual <span className="text-green-600">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`relative group ${service.primary ? 'lg:col-span-1' : ''}`}>
              {/* Card Background */}
              <div className={`relative rounded-3xl p-8 border transition-all duration-500 hover:scale-105 ${
                service.primary 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-700 border-blue-400 shadow-2xl shadow-blue-500/25' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
              }`}>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Popular Badge */}
                {service.primary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                  service.primary 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-50'
                }`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${service.primary ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-extrabold ${service.primary ? 'text-white' : 'text-gray-900'}`}>
                      ₹{isAnnual ? service.price.annual.toLocaleString() : service.price.monthly.toLocaleString()}
                    </span>
                    <span className={`text-sm ${service.primary ? 'text-blue-100' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                  
                  <p className={`text-sm mb-6 ${service.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <a 
                    href="#contact" 
                    className={`w-full flex items-center justify-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      service.primary 
                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' 
                        : 'bg-gradient-to-r from-[#004CE9] to-[#0038B8] text-white hover:from-[#0038B8] hover:to-[#002A8F] shadow-lg'
                    }`}
                  >
                    {service.cta}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </a>

                  {/* Features */}
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${
                          service.primary ? 'text-green-300' : 'text-green-500'
                        }`} />
                        <span className={`text-sm ${service.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team can create tailored solutions that perfectly fit your business requirements. 
              From AI-powered applications to blockchain integration, we've got you covered.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#004CE9] to-[#0038B8] text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales Team
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          All prices in INR. Custom pricing available for enterprise solutions. No hidden fees.
        </p>
      </div>
    </section>
  );
};

export default Pricing;