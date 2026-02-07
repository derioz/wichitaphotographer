import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-100 text-theme-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;