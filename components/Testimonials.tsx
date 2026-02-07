import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-stone-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-rose-200/10 rounded-full blur-2xl"></div>

      {/* Large decorative quote */}
      <div className="absolute top-20 right-20 opacity-[0.03] hidden lg:block">
        <Quote size={400} strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <Star
                  size={28}
                  className="text-amber-400 fill-amber-400 drop-shadow-sm"
                  style={{
                    animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm border border-stone-200/50 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-stone-600 uppercase tracking-wider">96% Recommend Us</span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-tight">
            Love Letters
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 font-serif italic text-xl max-w-2xl mx-auto leading-relaxed">
            Words from the couples who trusted us to capture their most precious moments
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-stone-300"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
          </div>
        </div>

        {/* Slider Component */}
        <TestimonialSlider />

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.facebook.com/wichitaphotographer/reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-stone-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Read All Reviews on Facebook
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;