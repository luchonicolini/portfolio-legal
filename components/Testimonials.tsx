import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Dr. Roberto Fernández",
        role: "Director de Grupo Inmobiliario",
        initials: "RF",
        text: "La Dra. Díaz Colodrero ha sido fundamental en la estructuración de nuestros fideicomisos. Su visión estratégica y precisión notarial nos brinda una seguridad jurídica inigualable en cada operación."
    },
    {
        id: 2,
        name: "Lic. Ana María Torres",
        role: "Cliente Particular - Sucesión",
        initials: "AT",
        text: "En un momento familiar tan delicado, encontrar una profesional con tanta empatía y claridad técnica fue un alivio. Resolvió nuestro trámite sucesorio con absoluta eficacia y transparencia."
    },
    {
        id: 3,
        name: "Ing. Carlos Mendoza",
        role: "CEO - TechSolutions SA",
        initials: "CM",
        text: "Su asesoramiento en compliance corporativo elevó nuestros estándares. No es solo una abogada, es una aliada estratégica que entiende los tiempos y necesidades de la empresa moderna."
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const changeSlide = (newIndex: number) => {
        setDirection(newIndex > currentIndex ? 1 : -1);
        setCurrentIndex(newIndex);
    };

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1] // Cubic bezier for premium feel
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.3 }
        })
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-10 overflow-hidden">
                <div className="absolute left-[10%] top-[20%] w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px]"></div>
                <div className="absolute right-[10%] bottom-[20%] w-80 h-80 bg-brand-navy/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-3 block"
                    >
                        Voces de Confianza
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-3xl md:text-5xl text-brand-navy dark:text-slate-100 mb-4 transition-colors duration-300"
                    >
                        Nuestros Clientes
                    </motion.h2>
                    <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
                </div>

                {/* Carousel Container */}
                <div className="max-w-4xl mx-auto relative px-4 md:px-0">

                    <div className="relative min-h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute w-full max-w-2xl"
                            >
                                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-sm shadow-xl dark:shadow-2xl relative group hover:-translate-y-1 transition-transform duration-300">

                                    {/* Large Quote Icon */}
                                    <div className="absolute -top-6 -left-4 md:-top-8 md:-left-8 text-brand-gold opacity-30 dark:opacity-20 transform -scale-x-100">
                                        <Quote size={80} />
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center text-center">

                                        {/* Avatar / Initials */}
                                        <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-serif mb-6 shadow-lg border-2 border-brand-gold">
                                            {testimonials[currentIndex].initials}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="font-serif text-lg md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
                                            {testimonials[currentIndex].text}
                                        </blockquote>

                                        {/* Divider */}
                                        <div className="w-12 h-px bg-slate-300 dark:bg-slate-700 mb-6"></div>

                                        {/* Author */}
                                        <div>
                                            <cite className="block font-sans font-bold text-brand-navy dark:text-slate-100 not-italic uppercase tracking-wider text-sm mb-1">
                                                {testimonials[currentIndex].name}
                                            </cite>
                                            <span className="text-brand-gold text-xs font-bold tracking-wide">
                                                {testimonials[currentIndex].role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-8 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-colors hover:bg-white dark:hover:bg-slate-800"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => changeSlide(index)}
                                    className={`transition-all duration-300 rounded-full h-2
                                    ${index === currentIndex
                                            ? 'bg-brand-gold w-8'
                                            : 'bg-slate-300 dark:bg-slate-700 w-2 hover:bg-slate-400'
                                        }`}
                                    aria-label={`Ir al testimonio ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-colors hover:bg-white dark:hover:bg-slate-800"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
