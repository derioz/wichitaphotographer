import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    features: string[];
    ctaText?: string;
    ctaLink?: string;
    className?: string;
    delay?: number;
}

export function ServiceCard({
    title,
    description,
    image,
    features,
    ctaText = "Learn More",
    ctaLink = "#contact",
    className,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn("w-full h-full", className)}
        >
            <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-theme-200 bg-white/50 backdrop-blur-md transition-all duration-300 hover:border-theme-300 hover:shadow-xl hover:-translate-y-1">

                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-theme-900/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                        <h3 className="text-2xl font-serif italic mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}>{title}</h3>
                        <div className="h-0.5 w-12 bg-white/80 rounded-full mb-0 group-hover:w-20 transition-all duration-300" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }}></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                    <p className="text-theme-700 text-sm leading-relaxed mb-6 font-sans">
                        {description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-theme-600">
                                <div className="mt-0.5 p-0.5 rounded-full bg-theme-100 text-theme-900 shrink-0">
                                    <Check size={10} strokeWidth={3} />
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-4 border-t border-theme-100">
                        <a
                            href={ctaLink}
                            className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-theme-900 hover:text-theme-600 transition-colors group/btn"
                        >
                            {ctaText}
                            <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
