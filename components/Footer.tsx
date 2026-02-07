import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* About Column */}
          <div>
            <h3 className="text-2xl font-serif mb-6">About</h3>
            <p className="text-white/70 text-sm leading-7 mb-6 font-sans">
              Wichita Photographer is a husband and wife team dedicated to capturing the authentic, unscripted moments of your most precious day.
            </p>
            <span className="font-script text-3xl opacity-80">Aron & Ashly</span>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-sans uppercase tracking-widest mb-6">Social Media</h3>
            <div className="space-y-4">
              <a href="https://www.facebook.com/wichitaphotographer" target="_blank" rel="noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-sm">
                <Facebook size={18} className="mr-3" /> Facebook
              </a>
              <a href="https://www.instagram.com/wichitaphotographer" target="_blank" rel="noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-sm">
                <Instagram size={18} className="mr-3" /> Instagram
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-sans uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href="tel:316-516-0784" className="flex items-center hover:text-white transition-colors">
                  <Phone size={18} className="mr-3 shrink-0" />
                  <span>316-516-0784</span>
                </a>
              </li>
              <li>
                <a href="mailto:wichitaphotographer@gmail.com" className="flex items-center hover:text-white transition-colors">
                  <Mail size={18} className="mr-3 shrink-0" />
                  <span>wichitaphotographer@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 shrink-0" />
                <span>Wichita, KS 67212</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50 font-sans tracking-wide">
            &copy; {currentYear} Wichita Photographer. All Rights Reserved.
          </p>

          {/* Vexel Studios Credit */}
          <a
            href="https://vexelstudios.xyz"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 bg-stone-800 hover:bg-stone-700 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-white/60 text-xs">Made with ♥ by</span>
            {/* Vexel Studios Logo Recreation */}
            <div className="flex items-center">
              <span className="text-white font-bold text-sm tracking-tight">vexel</span>
              <span className="text-white/70 font-light text-sm">studios</span>
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full ml-0.5 group-hover:animate-pulse"></span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;