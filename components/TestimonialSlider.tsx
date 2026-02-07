import React, { useState, useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "../lib/utils";
import { REVIEWS } from "../constants";

export function TestimonialSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const x = useMotionValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            scrollTo("right");
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, width]);

    const scrollTo = (direction: "left" | "right") => {
        const currentX = x.get();
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const scrollAmount = Math.min(containerWidth * 0.85, 450);

        let newX = direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
        if (newX < -width) newX = 0;
        if (newX > 0) newX = -width;

        animate(x, newX, {
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 1,
        });
    };

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            const progress = Math.abs(latest) / (width || 1);
            setCurrentIndex(Math.round(progress * (REVIEWS.length - 1)));
        });
        return () => unsubscribe();
    }, [x, width]);

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const gradients = [
        'from-rose-400 to-pink-500',
        'from-violet-400 to-purple-500',
        'from-blue-400 to-indigo-500',
        'from-emerald-400 to-teal-500',
        'from-amber-400 to-orange-500',
        'from-cyan-400 to-blue-500',
        'from-fuchsia-400 to-pink-500',
    ];

    return (
        <div
            className="w-full relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Navigation */}
            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => scrollTo("left")}
                    className="h-14 w-14 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scrollTo("right")}
                    className="h-14 w-14 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Slider */}
            <motion.div
                ref={containerRef}
                className="cursor-grab active:cursor-grabbing overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.05}
                    style={{ x }}
                    className="flex gap-8 px-4"
                >
                    {REVIEWS.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            className="min-w-[340px] md:min-w-[420px]"
                            whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-stone-100 flex flex-col relative overflow-hidden transition-all duration-500 group">

                                {/* Decorative top accent */}
                                <div className={cn(
                                    "absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r",
                                    gradients[idx % gradients.length]
                                )}></div>

                                {/* Quote icon */}
                                <div className="absolute -top-2 right-6 w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                    <Quote size={24} className="text-white fill-white" />
                                </div>

                                <div className="p-8 pt-10 flex flex-col h-full">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className="text-amber-400 fill-amber-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Review content */}
                                    <p className="text-stone-700 text-lg leading-relaxed mb-8 flex-grow font-serif italic">
                                        "{review.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg",
                                            gradients[idx % gradients.length]
                                        )}>
                                            {getInitials(review.author)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-stone-900 text-lg">{review.author}</h4>
                                            <p className="text-stone-400 text-sm">{review.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-3 mt-12">
                {REVIEWS.map((_, idx) => (
                    <motion.div
                        key={idx}
                        className={cn(
                            "h-2 rounded-full transition-all duration-500",
                            idx === currentIndex
                                ? "bg-stone-900 w-10"
                                : "bg-stone-200 w-2 hover:bg-stone-300"
                        )}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>
        </div>
    );
}
