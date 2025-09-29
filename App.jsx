
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Products from './components/Products';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Testimonials />
        <Pricing />
        <Products />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
