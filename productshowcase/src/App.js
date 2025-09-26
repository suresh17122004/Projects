import React from 'react';

// Import all UI sections as components
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section with intro and CTA */}
      <Hero />

      {/* Product Showcase Section */}
      <Products />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
