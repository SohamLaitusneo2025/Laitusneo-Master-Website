
import React from 'react';
import { StarIcon } from './icons/StarIcon';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CTO @ FinTech Solutions India',
    quote: 'Laitusneo\'s payment gateway integration transformed our fintech platform. The seamless API connections with Indian banks and UPI saved us months of development time.',
    rating: 5.0,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder @ Digital Banking Hub',
    quote: 'From web development to cybersecurity implementation, Laitusneo delivered a complete digital transformation. Our customer onboarding process is now 10x faster with their AI-powered solutions.',
    rating: 5.0,
  },
  {
    name: 'Amit Patel',
    role: 'CEO @ TechStart Mumbai',
    quote: 'Laitusneo\'s comprehensive tech stack - from blockchain integration to cloud infrastructure - gave us enterprise-grade security and scalability. They\'re our trusted technology partner.',
    rating: 5.0,
  },
];

const TestimonialCard = ({ name, role, quote, rating }) => (
  <div className="bg-gray-50/70 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-2">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h4 className="font-semibold text-brand-dark">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <div className="flex items-center space-x-1 text-yellow-500">
        <StarIcon className="h-5 w-5" />
        <span className="font-semibold text-gray-700">{rating}</span>
      </div>
    </div>
    <p className="text-gray-600">"{quote}"</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-gray-200 mb-4">
            <span className="text-sm font-medium">💬 +500+ Happy Clients</span>
          </div>
          <h2 className="text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Trusted by Indian Businesses
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From fintech startups to enterprise solutions, Laitusneo Technologies delivers comprehensive digital transformation across India.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
         <div className="text-center mt-12">
            <a
                href="#testimonials"
                className="inline-flex items-center justify-center bg-[#004CE9] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#0038B8] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Read More Success Stories
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
