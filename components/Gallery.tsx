import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { cn } from '../lib/utils';

type Category = 'all' | 'wedding' | 'engagement' | 'portraits';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter images based on category
  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  // Categories for filter
  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'engagement', label: 'Engagements' },
    { id: 'portraits', label: 'Portraits & Action' },
  ];

  // Open lightbox
  const openLightbox = (url: string, index: number) => {
    setSelectedImage(url);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate lightbox
  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (selectedIndex - 1 + filteredImages.length) % filteredImages.length
      : (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].url);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, filteredImages]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-theme-500 font-bold mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-theme-900 mb-4">Our Work</h2>
          <p className="text-theme-600 font-serif italic text-lg max-w-xl mx-auto">
            A glimpse into the stories we've had the honor of capturing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-theme-50 rounded-full p-1.5 border border-theme-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none",
                  activeCategory === cat.id
                    ? "bg-theme-900 text-white shadow-md"
                    : "text-theme-500 hover:text-theme-900"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative group overflow-hidden rounded-xl cursor-pointer",
                  index === 0 ? 'md:col-span-2 md:row-span-2' :
                    index === 4 ? 'md:row-span-2' : ''
                )}
                onClick={() => openLightbox(image.url, index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <span
                      className="text-white/90 text-[10px] uppercase tracking-widest block mb-1"
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
                    >
                      {image.category}
                    </span>
                    <span
                      className="text-white font-serif text-lg"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.9)' }}
                    >
                      {image.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/wichitaphotographer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-theme-900 font-serif italic text-lg border-b border-theme-900 hover:text-theme-500 hover:border-theme-500 transition-colors pb-1"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;