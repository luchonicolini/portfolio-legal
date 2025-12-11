import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Dr. Roberto Fernández",
        role: "Director de Grupo Inmobiliario",
        text: "La Dra. Díaz Colodrero ha sido fundamental en la estructuración de nuestros fideicomisos. Su visión estratégica y precisión notarial nos brinda una seguridad jurídica inigualable en cada operación."
    },
    {
        id: 2,
        name: "Lic. Ana María Torres",
        role: "Cliente Particular - Sucesión",
        text: "En un momento familiar tan delicado, encontrar una profesional con tanta empatía y claridad técnica fue un alivio. Resolvió nuestro trámite sucesorio con absoluta eficacia y transparencia."
    },
    {
        id: 3,
        name: "Ing. Carlos Mendoza",
        role: "CEO - TechSolutions SA",
        text: "Su asesoramiento en compliance corporativo elevó nuestros estándares. No es solo una abogada, es una aliada estratégica que entiende los tiempos y necesidades de la empresa moderna."
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Optimized Layout:
    // 1. Fixed Height Container to prevent layout shifts.
    // 2. CSS-only transitions (opacity/transform).
    // 3. Clear separation of controls and content.

    const changeSlide = useCallback((newIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        // Simple timeout to reset animation lock, matches CSS transition duration
        setTimeout(() => setIsAnimating(false), 300);
    }, [isAnimating]);

    const next = useCallback(() => {
        changeSlide((currentIndex + 1) % testimonials.length);
    }, [currentIndex, changeSlide]);

    const prev = useCallback(() => {
        changeSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
    }, [currentIndex, changeSlide]);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden group">

            {/* Subtle Background - Static for performance */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 "></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header - Fixed */}
                <div className="text-center mb-10">
                    <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block animate-fade-in-up">
                        Voces de Confianza
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-navy dark:text-slate-100 mb-2 transition-colors duration-300">
                        Lo que dicen nuestros clientes
                    </h2>
                    <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
                </div>

                {/* Carousel Container - Fixed Height for Stability */}
                <div className="max-w-4xl mx-auto relative px-0 md:px-20 min-h-[340px] flex flex-col justify-between">

                    {/* Navigation Buttons (Hidden on Mobile) */}
                    <button
                        onClick={prev}
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-full md:-translate-x-4 p-4 text-slate-300 dark:text-slate-700 hover:text-brand-gold dark:hover:text-brand-gold transition-all duration-200 hover:scale-110 z-20 group-hover:text-slate-400"
                        aria-label="Anterior testimonio"
                    >
                        <ChevronLeft size={40} strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={next}
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-full md:translate-x-4 p-4 text-slate-300 dark:text-slate-700 hover:text-brand-gold dark:hover:text-brand-gold transition-all duration-200 hover:scale-110 z-20 group-hover:text-slate-400"
                        aria-label="Siguiente testimonio"
                    >
                        <ChevronRight size={40} strokeWidth={1.5} />
                    </button>

                    {/* Content Area */}
                    <div className="flex-grow flex items-center justify-center relative">
                        {testimonials.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out px-4
                            ${index === currentIndex
                                        ? 'opacity-100 translate-x-0 scale-100 z-10'
                                        : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                                    }
                        `}
                            >
                                {/* Quote Text */}
                                <blockquote className="font-serif text-lg md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed italic text-center mb-8 max-w-2xl">
                                    "{item.text}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="text-center">
                                    <cite className="block font-sans font-bold text-brand-navy dark:text-amber-400 not-italic uppercase tracking-wider text-sm mb-1 transition-colors duration-300">
                                        {item.name}
                                    </cite>
                                    <span className="block text-slate-500 dark:text-slate-400 text-xs font-light tracking-wide transition-colors duration-300">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Controls (Bottom Fixed) */}
                    <div className="flex justify-center gap-4 pt-2 pb-6 z-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeSlide(index)}
                                className={`transition-all duration-300 rounded-full h-1.5
                            ${index === currentIndex
                                        ? 'bg-brand-gold w-12'
                                        : 'bg-slate-200 dark:bg-slate-800 w-8 hover:bg-slate-300 dark:hover:bg-slate-700'
                                    }`}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
