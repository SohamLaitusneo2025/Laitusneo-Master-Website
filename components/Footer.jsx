
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#004CE9] to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company Info & Logo */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/Logo.png" alt="Laitusneo Technologies" className="h-12 w-auto" />
                <div>
                  {/* <h3 className="text-xl font-bold text-white">Laitusneo</h3>
                  <p className="text-sm text-blue-200">Technologies</p> */}
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-sm">
                Empowering businesses with cutting-edge FinTech solutions, AI-driven platforms, and secure digital transformation services.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5">
                    <svg className="w-5 h-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      NH 2, Agra Road, Shanti Colony<br />
                      Etawah, Uttar Pradesh - 206001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <svg className="w-5 h-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+918265915605" className="text-white/90 hover:text-white transition-colors duration-300 text-sm">
                    +91 8265915605
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <svg className="w-5 h-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <a href="mailto:letstalk@laitusneo.com" className="text-white/90 hover:text-white transition-colors duration-300 text-sm">
                    letstalk@laitusneo.com
                  </a>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#004CE9] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#004CE9] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#004CE9] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#004CE9] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#fintech" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">FinTech Solutions</a></li>
                <li><a href="#payment" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Payment Gateways</a></li>
                <li><a href="#banking" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Banking APIs</a></li>
                <li><a href="#ai" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">AI & Machine Learning</a></li>
                <li><a href="#webdev" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Web Development</a></li>
                <li><a href="#security" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Cybersecurity</a></li>
                <li><a href="#blockchain" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Blockchain Solutions</a></li>
                <li><a href="#cloud" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Cloud Infrastructure</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">About Us</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Team</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Blog</a></li>
                <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Case Studies</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Testimonials</a></li>
                <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Partners</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact Us</a></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support & Legal</h4>
              <ul className="space-y-3">
                <li><a href="#help" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Help Center</a></li>
                <li><a href="#documentation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Documentation</a></li>
                <li><a href="#api-docs" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">API Documentation</a></li>
                <li><a href="#status" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">System Status</a></li>
                <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a></li>
                <li><a href="#cookies" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</a></li>
                <li><a href="#gdpr" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest updates on FinTech trends, security insights, and technology innovations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004CE9] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#004CE9] text-white font-semibold rounded-lg hover:bg-[#0038B8] transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Laitusneo Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>PCI DSS Compliant</span>
                <span>•</span>
                <span>RBI Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
