import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
          alt="Wedding Couple"
          className="w-full h-full object-cover animate-[pulse_20s_ease-in-out_infinite] scale-105"
          style={{ animationDuration: '30s' }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-theme-900/10 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <div className="fade-in-up max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-block h-[1px] w-12 bg-white/60 mb-8"></span>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Where Every Shot Tells <br />
            <span className="italic font-light opacity-90">Your Love Story</span>
          </h1>

          <p
            className="text-white/90 text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-medium mb-12 max-w-lg leading-relaxed border-t border-b border-white/20 py-4"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
          >
            Capturing timeless moments in Wichita, Kansas & Beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#packages" className="px-10 py-4 bg-white text-theme-900 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-theme-100 transition-colors shadow-xl">
              View Packages
            </a>
            <a href="#gallery" className="px-10 py-4 border border-white text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-white/10 transition-colors">
              Explore Portfolio
            </a>
          </div>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="absolute bottom-12 left-12 text-white/60 text-[10px] uppercase tracking-widest hidden lg:flex items-center gap-4">
          <span className="w-8 h-[1px] bg-white/40"></span>
          <span>Est. 2018</span>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-2">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;