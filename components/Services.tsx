import React from 'react';
import { ServiceCard } from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "Weddings",
      description: "Comprehensive coverage of your special day. We capture every emotional moment, from the nervous anticipation to the joyous celebration, preserving your love story for generations.",
      image: "./wedding.jpg",
      features: [
        "Full Day Coverage",
        "Two Photographers",
        "Timeline Consultation",
        "High-Resolution Edited Images"
      ],
      link: "#packages"
    },
    {
      title: "Engagements",
      description: "Celebrate your YES moment with a relaxed, fun session. These photos are perfect for save-the-dates and getting comfortable in front of our cameras before the big day.",
      image: "./engagement.jpg",
      features: [
        "1-2 Hour Session",
        "Multiple Locations",
        "Outfit Changes",
        "Online Gallery"
      ],
      link: "#contact"
    },
    {
      title: "Beyond the Aisle",
      description: "Not just weddings — we capture life's other big moments too. From senior portraits that celebrate your graduate's personality to action-packed sports photography and stunning outdoor sessions.",
      image: "./lifestyle.jpg",
      features: [
        "Senior Portraits",
        "Sports & Action Shots",
        "Outdoor Adventures",
        "Family Sessions"
      ],
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="py-24 bg-theme-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-theme-100/50 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-theme-500 font-bold mb-3 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif text-theme-900 mb-6">Capturing Life's Moments</h2>
          <p className="text-theme-700 font-serif italic text-lg leading-relaxed">
            We specialize in storytelling through imagery. Our approach is unobtrusive and natural,
            allowing real connections to shine through in every photograph.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              ctaLink={service.link}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* About Section - Compact & Clean */}
        <div className="mt-20 flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg border border-theme-100 max-w-4xl mx-auto">
          <div className="w-full md:w-2/5 h-[280px]">
            <img
              src="./aronashly.png"
              alt="Aron and Ashly"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-10">
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-theme-500 font-bold mb-2 block">Meet the Team</span>
            <h3 className="text-2xl font-serif text-theme-900 mb-4">Aron & Ashly</h3>
            <p className="text-theme-600 text-sm mb-5 leading-relaxed">
              A husband and wife photography team based in Wichita, Kansas. We believe your photos should feel as authentic as your love. Capturing weddings since 2018.
            </p>
            <a href="#contact" className="px-5 py-2.5 bg-theme-900 text-white text-[10px] uppercase tracking-widest hover:bg-theme-800 transition-colors inline-block rounded-sm">
              Say Hello
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;