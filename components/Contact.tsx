import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We have received your inquiry and will be in touch soon.');
    setFormData({ name: '', email: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Contact Info */}
          <div className="order-2 lg:order-1 pt-10">
            <span className="block font-script text-6xl text-theme-300 mb-6">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-serif text-theme-900 mb-10 leading-tight">
              Ready to start your <br/><span className="italic">forever</span> journey?
            </h2>
            <p className="text-theme-600 font-serif text-xl mb-16 leading-loose max-w-lg">
              We'd love to hear about your story! Whether you're planning a wedding in Wichita or an adventurous elopement elsewhere, we are ready to capture it.
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="uppercase tracking-[0.2em] text-[10px] text-theme-400 mb-3 font-sans font-bold">Location</h4>
                <p className="text-theme-900 text-2xl font-serif italic">Wichita, KS & Beyond</p>
              </div>

              <div>
                <h4 className="uppercase tracking-[0.2em] text-[10px] text-theme-400 mb-3 font-sans font-bold">Contact</h4>
                <a href="mailto:wichitaphotographer@gmail.com" className="block text-theme-900 text-2xl font-serif italic hover:text-theme-600 transition-colors mb-2">
                  wichitaphotographer@gmail.com
                </a>
              </div>

              <div>
                <h4 className="uppercase tracking-[0.2em] text-[10px] text-theme-400 mb-3 font-sans font-bold">The Team</h4>
                <div className="flex flex-col gap-2">
                   <p className="text-theme-900 text-2xl font-serif italic">Aron & Ashly Simpson</p>
                   <p className="text-theme-500 text-xs font-sans tracking-[0.15em] uppercase">316-516-0784 / 316-737-5356</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2 bg-theme-100 p-12 md:p-16 border border-theme-200 shadow-2xl">
            <h3 className="text-2xl font-serif text-theme-800 mb-10">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-theme-400 mb-4 font-sans font-bold">Your Names</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-theme-300 pb-4 text-theme-900 focus:outline-none focus:border-theme-900 transition-colors font-serif text-xl placeholder-theme-300"
                  placeholder="e.g. Jane & John"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-theme-400 mb-4 font-sans font-bold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-theme-300 pb-4 text-theme-900 focus:outline-none focus:border-theme-900 transition-colors font-serif text-xl placeholder-theme-300"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-[10px] uppercase tracking-[0.2em] text-theme-400 mb-4 font-sans font-bold">Wedding Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-theme-300 pb-4 text-theme-900 focus:outline-none focus:border-theme-900 transition-colors font-serif text-xl text-theme-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-theme-400 mb-4 font-sans font-bold">Your Story</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-theme-300 pb-4 text-theme-900 focus:outline-none focus:border-theme-900 transition-colors font-serif text-xl placeholder-theme-300 resize-none"
                  placeholder="Tell us a bit about your plans..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-theme-900 text-white py-6 uppercase tracking-[0.25em] text-[11px] font-sans font-bold hover:bg-theme-800 transition-all shadow-lg mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;