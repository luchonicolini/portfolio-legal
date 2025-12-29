import React from 'react';
import { ArrowRight, ChevronDown, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('acerca');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-brand-cream dark:bg-slate-950 overflow-hidden pt-20 transition-colors duration-300">

      {/* Improved Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-100/50 dark:bg-slate-900/30 -skew-x-12 translate-x-32 transform transition-colors duration-300"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/40 dark:bg-slate-800/20 -skew-x-12 translate-x-16 transform transition-colors duration-300"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 min-h-[600px]">

          {/* Left Column: Text with Staggered Animations */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left pt-10 lg:pt-0"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="space-y-4">
              <motion.span
                variants={fadeInUp}
                className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase block"
              >
                Autoridad • Experiencia • Solidez
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl lg:text-6xl text-brand-navy dark:text-slate-100 leading-tight transition-colors"
              >
                María de las Mercedes <br />
                <span className="italic text-brand-gray dark:text-slate-400 transition-colors">Díaz Colodrero</span>
              </motion.h1>
            </div>

            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-brand-gold mx-auto lg:mx-0"
            ></motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-sans text-xl font-medium text-brand-navy dark:text-slate-200 transition-colors"
            >
              Consultora Jurídica & Especialista en Gestión Académica
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-sans text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors"
            >
              "Más de 20 años uniendo la seguridad jurídica con la estrategia educativa y organizacional."
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-6"
            >
              <a
                href="#contacto"
                className="bg-slate-900 dark:bg-brand-gold text-white dark:text-brand-navy px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-brand-navy dark:hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group font-medium rounded-sm"
              >
                Contactar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/CV_Mercedes_Diaz_Colodrero_Consultora.pdf"
                download="Mercedes_Diaz_Colodrero_CV.pdf"
                className="border border-slate-800 dark:border-slate-500 text-brand-navy dark:text-slate-300 px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:border-slate-100 dark:hover:text-white dark:hover:bg-transparent transition-all duration-300 font-medium rounded-sm flex items-center gap-2"
              >
                Descargar CV
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image with Floating Badge */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Image Frame/Backdrop */}
              <div className="absolute inset-0 border-2 border-brand-gold translate-x-5 translate-y-5 hidden md:block transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>

              {/* Main Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl group">
                <img
                  src="/mercedes-portrait.jpg"
                  alt="Retrato Profesional de María de las Mercedes Díaz Colodrero"
                  className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent pointer-events-none"></div>

                {/* Experience Badge - NEW FEATURE */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-4 shadow-lg border-l-4 border-brand-gold flex items-center gap-4 max-w-[200px]"
                >
                  <div className="bg-brand-cream dark:bg-slate-800 p-2 rounded-full text-brand-gold">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-brand-navy dark:text-slate-100 leading-none">25+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Años de Trayectoria</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - NEW FEATURE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden lg:block"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-widest text-brand-navy dark:text-slate-400">Descubrir</span>
            <ChevronDown className="w-5 h-5 text-brand-navy dark:text-slate-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;