import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Pricing', href: '#packages' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-theme-900/80 backdrop-blur-lg py-3 border-b border-white/10 shadow-lg text-white'
          : 'bg-gradient-to-b from-black/50 to-transparent py-8 text-white'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="group relative z-50 transition-transform duration-300 hover:scale-[1.03]">
            <img
              src="./logo-transparent.png"
              alt="Wichita Photographer"
              className={`transition-all duration-500 object-contain brightness-0 invert ${scrolled ? 'w-28 md:w-36 max-h-9' : 'w-56 md:w-72 max-h-20'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-white/80 hover:text-white transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className={`px-7 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${scrolled
                ? 'bg-white text-theme-900 hover:bg-theme-200'
                : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-theme-900'
                }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-theme-900" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-theme-100 transform transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) md:hidden flex flex-col items-center justify-center space-y-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src="./logo-transparent.png"
            alt="Wichita Photographer"
            className="h-20 object-contain"
          />
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-3xl font-serif text-theme-900 italic hover:text-theme-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-8 px-10 py-4 bg-theme-900 text-white uppercase tracking-widest text-xs shadow-lg">Book Now</a>
      </div>
    </>
  );
};

export default Navbar;