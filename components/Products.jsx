import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Products = () => {
  const products = [
    {
      name: 'E-School Software',
      icon: '🎓',
      description: 'Complete school management system with student records, attendance, grades, and parent communication.',
      features: [
        'Student Information Management',
        'Attendance Tracking',
        'Grade & Report Cards',
        'Parent Portal',
        'Fee Management',
        'Library Management',
        'Transport Management',
        'Exam Scheduling'
      ],
      price: 'Starting from ₹25,000',
      cta: 'View Details',
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Education'
    },
    {
      name: 'CRM Software',
      icon: '👥',
      description: 'Customer relationship management solution to streamline sales, marketing, and customer support.',
      features: [
        'Lead Management',
        'Sales Pipeline',
        'Customer Database',
        'Marketing Automation',
        'Support Ticket System',
        'Analytics & Reports',
        'Mobile App',
        'Third-party Integrations'
      ],
      price: 'Starting from ₹15,000',
      cta: 'Get Demo',
      gradient: 'from-green-500 to-emerald-500',
      category: 'Business'
    },
    {
      name: 'Payment Gateway',
      icon: '💳',
      description: 'Secure payment processing solution with multiple payment methods and real-time transaction monitoring.',
      features: [
        'UPI Integration',
        'Credit/Debit Cards',
        'Net Banking',
        'Wallet Payments',
        'International Payments',
        'Recurring Billing',
        'Fraud Detection',
        'Analytics Dashboard'
      ],
      price: 'Starting from ₹20,000',
      cta: 'Integrate Now',
      gradient: 'from-purple-500 to-violet-500',
      category: 'FinTech'
    },
    {
      name: 'CMS Software',
      icon: '📝',
      description: 'Content management system for creating, editing, and managing digital content with ease.',
      features: [
        'Content Editor',
        'Media Management',
        'User Roles & Permissions',
        'SEO Optimization',
        'Multi-language Support',
        'Template System',
        'Backup & Restore',
        'API Integration'
      ],
      price: 'Starting from ₹12,000',
      cta: 'Try Free',
      gradient: 'from-orange-500 to-red-500',
      category: 'Web Development'
    },
    {
      name: 'Finance Tool',
      icon: '💰',
      description: 'Comprehensive financial management software for accounting, invoicing, and financial reporting.',
      features: [
        'Accounting & Bookkeeping',
        'Invoice Generation',
        'Expense Tracking',
        'Financial Reports',
        'Tax Management',
        'Multi-currency Support',
        'Bank Reconciliation',
        'Audit Trail'
      ],
      price: 'Starting from ₹18,000',
      cta: 'Start Free Trial',
      gradient: 'from-yellow-500 to-amber-500',
      category: 'Finance'
    },
    {
      name: 'HRMS Software',
      icon: '👨‍💼',
      description: 'Complete human resource management system for employee lifecycle, payroll, and performance tracking.',
      features: [
        'Employee Database',
        'Attendance Management',
        'Payroll Processing',
        'Leave Management',
        'Performance Reviews',
        'Recruitment & Onboarding',
        'Training & Development',
        'Employee Self-Service Portal'
      ],
      price: 'Starting from ₹22,000',
      cta: 'Schedule Demo',
      gradient: 'from-indigo-500 to-blue-500',
      category: 'Human Resources'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
            <span className="text-sm font-medium text-gray-700">🚀 Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Ready-to-Use
            <span className="block bg-gradient-to-r from-[#004CE9] to-[#0038B8] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Discover our comprehensive suite of software products designed to streamline your business operations and drive growth across various industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              {/* Product Card */}
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="absolute -top-3 left-6">
                  <div className={`bg-gradient-to-r ${product.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {product.category}
                  </div>
                </div>

                {/* Product Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br ${product.gradient} bg-opacity-10`}>
                  {product.icon}
                </div>

                {/* Product Info */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-[#004CE9]">
                      {product.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="#contact" 
                    className={`w-full flex items-center justify-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${product.gradient} text-white hover:shadow-lg`}
                  >
                    {product.cta}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </a>

                  {/* Features */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#004CE9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-sm text-[#004CE9] font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Development CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Product?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our development team can create tailored software solutions that perfectly match your specific business requirements and industry needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#004CE9] to-[#0038B8] text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Requirements
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          All products include free setup, training, and 3 months of technical support. Custom modifications available.
        </p>
      </div>
    </section>
  );
};

export default Products;
