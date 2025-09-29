
import React, { useState } from 'react';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';

const faqData = [
  {
    question: 'What FinTech solutions does Laitusneo Technologies offer?',
    answer: 'We provide comprehensive FinTech solutions including payment gateways, banking APIs, AI-driven financial platforms, blockchain integration, and digital banking solutions. Our expertise spans across payment processing, financial data analytics, and secure transaction management systems.'
  },
  {
    question: 'How secure are your financial platforms?',
    answer: 'Security is our top priority. We implement bank-grade 256-bit AES encryption, multi-factor authentication, and comply with PCI DSS, ISO 27001, and RBI guidelines. Our systems undergo regular security audits and penetration testing to ensure maximum protection of your financial data.'
  },
  {
    question: 'Do you provide AI and Machine Learning services?',
    answer: 'Yes, we specialize in AI-driven financial solutions including fraud detection, risk assessment, automated trading algorithms, and predictive analytics. Our AI models help businesses make data-driven decisions and optimize their financial operations.'
  },
  {
    question: 'What web development technologies do you use?',
    answer: 'We use cutting-edge technologies including React, Node.js, Python, Java, and cloud platforms like AWS and Azure. Our full-stack development covers both frontend and backend solutions, ensuring scalable and high-performance applications.'
  },
  {
    question: 'How long does it take to develop a custom FinTech solution?',
    answer: 'Development timelines vary based on complexity. Simple payment integrations take 2-4 weeks, while comprehensive financial platforms typically require 3-6 months. We provide detailed project timelines during our initial consultation and maintain agile development practices for faster delivery.'
  },
  {
    question: 'Do you offer 24/7 technical support?',
    answer: 'Yes, we provide round-the-clock technical support for all our clients. Our dedicated support team is available via email, phone, and live chat to ensure your systems run smoothly and address any issues promptly.'
  },
  {
    question: 'Can you integrate with existing banking systems?',
    answer: 'Absolutely. We have extensive experience integrating with major Indian banks, UPI systems, and international payment networks. Our APIs are designed for seamless integration with your existing infrastructure while maintaining security and compliance standards.'
  },
  {
    question: 'What makes Laitusneo Technologies different from competitors?',
    answer: 'Our unique combination of FinTech expertise, cutting-edge AI/ML capabilities, and comprehensive cybersecurity solutions sets us apart. With 10+ years of combined experience across technology, finance, and compliance, we deliver end-to-end solutions that drive real business value.'
  }
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 py-4 group hover:bg-gray-50/50 transition-all duration-300 rounded-lg px-3 -mx-3">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left group-hover:bg-white/80 p-2 rounded-lg transition-all duration-300">
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#004CE9] transition-colors duration-300 pr-3">{question}</h3>
        <span className="flex-shrink-0">
          {isOpen ? (
            <div className="w-7 h-7 bg-[#004CE9] rounded-full flex items-center justify-center shadow-md">
              <MinusIcon className="h-4 w-4 text-white" />
            </div>
          ) : (
            <div className="w-7 h-7 bg-gray-100 group-hover:bg-[#004CE9] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
              <PlusIcon className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </div>
          )}
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-80 mt-3' : 'max-h-0'}`}>
        <div className={`p-3 rounded-lg bg-gradient-to-r from-[#004CE9]/5 to-[#004CE9]/10 border border-[#004CE9]/20 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-700 leading-relaxed text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004CE9]/3 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,76,233,0.02),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section - Header */}
          <div className="lg:col-span-2">
            <div className="sticky top-4">
              <div className="inline-flex items-center bg-gradient-to-r from-[#004CE9]/10 to-[#004CE9]/5 px-3 py-1.5 rounded-full border border-[#004CE9]/20 mb-4 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-[#004CE9] rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-semibold text-[#004CE9]">Quick Answers</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-[#004CE9] to-gray-800 bg-clip-text text-transparent tracking-tight mb-4 leading-tight">
                Got Questions? We've Got Answers.
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Find quick solutions to the most asked topics about our FinTech and technology services.
              </p>
              
              <div className="space-y-3">
                <a href="#help" className="inline-flex items-center justify-center bg-[#004CE9] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0038B8] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
                  <span>Visit Help Center</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></div>
                    <span>Expert Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - FAQ Items */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-1">
                {faqData.map((item, index) => (
                  <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
