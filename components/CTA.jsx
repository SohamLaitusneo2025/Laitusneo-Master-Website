
import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 text-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004CE9]/3 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,76,233,0.02),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center bg-gradient-to-r from-[#004CE9]/10 to-[#004CE9]/5 px-4 py-2 rounded-full border border-[#004CE9]/20 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#004CE9] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-[#004CE9]">🚀 Get Started Today</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-[#004CE9] to-gray-800 bg-clip-text text-transparent tracking-tight mb-6 leading-tight">
            Transform Your Business With Cutting-Edge FinTech Solutions
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
            From payment gateways and banking APIs to AI-driven financial platforms, we deliver secure, scalable solutions that power the future of digital finance.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="inline-flex items-center justify-center bg-[#004CE9] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#0038B8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Start Your Project</span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center border-2 border-[#004CE9] text-[#004CE9] font-semibold py-4 px-8 rounded-xl hover:bg-[#004CE9] hover:text-white transition-all duration-300 transform hover:scale-105">
              <span>View Pricing</span>
            </a>
          </div>
          
          <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Secure Solutions</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          {/* Professional Dashboard Mockup */}
          <div className="relative z-10 w-80 h-[500px] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#004CE9] to-[#0038B8] p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Laitusneo Dashboard</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 h-full">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Projects</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Live</span>
                  </div>
                  <p className="text-2xl font-bold text-[#004CE9]">150+</p>
                  <p className="text-xs text-gray-500">Success Rate: 99.9%</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-sm font-bold">F</span>
                      </div>
                      <span className="text-sm font-medium">FinTech</span>
                    </div>
                    <p className="text-xs text-gray-500">Payment Solutions</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-green-600 text-sm font-bold">A</span>
                      </div>
                      <span className="text-sm font-medium">AI/ML</span>
                    </div>
                    <p className="text-xs text-gray-500">Smart Analytics</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-purple-600 text-sm font-bold">W</span>
                      </div>
                      <span className="text-sm font-medium">Web Dev</span>
                    </div>
                    <p className="text-xs text-gray-500">Full Stack</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-orange-600 text-sm font-bold">S</span>
                      </div>
                      <span className="text-sm font-medium">Security</span>
                    </div>
                    <p className="text-xs text-gray-500">Cybersecurity</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#004CE9]/10 to-[#0038B8]/5 p-4 rounded-lg border border-[#004CE9]/20">
                  <p className="text-sm font-medium text-[#004CE9] mb-1">Recent Activity</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Payment Gateway Integration</span>
                      <span className="text-green-600">Completed</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">AI Model Training</span>
                      <span className="text-blue-600">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Security Audit</span>
                      <span className="text-purple-600">Scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
