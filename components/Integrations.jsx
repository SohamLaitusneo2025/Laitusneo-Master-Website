import React from 'react';

const LogoIcon = ({ children, style }) => (
    <div style={style} className="absolute w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
        {children}
    </div>
);

const Integrations = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
                        <span className="text-sm font-medium text-gray-700">🔌 Seamless Integrations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Power Your Business with
                        <span className="block bg-gradient-to-r from-[#004CE9] to-[#0038B8] bg-clip-text text-transparent">
                            FinTech & Web Solutions
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Laitusneo Technologies integrates seamlessly with leading financial platforms, payment processors, and web technologies to deliver comprehensive digital solutions that drive your business forward.
                    </p>
                </div>

                {/* Integration Categories */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* FinTech Solutions */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#004CE9] to-[#0038B8] rounded-xl flex items-center justify-center mb-6">
                            <span className="text-white text-xl">💳</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">FinTech Solutions</h3>
                        <p className="text-gray-600 mb-6">Payment gateways, banking APIs, and financial platforms that power modern businesses.</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Payment Processing (Stripe, PayPal)
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                Banking APIs & Open Banking
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                Digital Wallets & Cryptocurrency
                            </div>
                        </div>
                    </div>

                    {/* Web Technologies */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#004CE9] to-[#0038B8] rounded-xl flex items-center justify-center mb-6">
                            <span className="text-white text-xl">🌐</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Web Technologies</h3>
                        <p className="text-gray-600 mb-6">Modern web development, cloud infrastructure, and scalable applications.</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Full-Stack Development
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                Cloud Infrastructure (AWS, Azure)
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                API Development & Integration
                            </div>
                        </div>
                    </div>

                    {/* AI & Security */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#004CE9] to-[#0038B8] rounded-xl flex items-center justify-center mb-6">
                            <span className="text-white text-xl">🛡️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Security</h3>
                        <p className="text-gray-600 mb-6">Advanced AI solutions and enterprise-grade security for your digital assets.</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Machine Learning & AI
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                Cybersecurity & Compliance
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                Blockchain & Smart Contracts
                            </div>
                        </div>
                    </div>
                </div>


                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-[#004CE9] to-[#0038B8] text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Start Your Integration Journey
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Integrations;