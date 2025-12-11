import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyPoints from './components/KeyPoints';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Helmet>
        <title>M.D.C. | Abogada & Notaria Pública</title>
        <meta name="description" content="Portfolio profesional de María de las Mercedes Díaz Colodrero. Abogada y Notaria Pública en Mendoza y Corrientes. Especialista en Derecho Notarial, Asesoría Corporativa y Gubernamental." />
        <meta name="keywords" content="abogada, notaria, mendoza, corrientes, legal, derecho notarial, familia, sucesiones, real estate" />
        <meta property="og:title" content="M.D.C. | Abogada & Notaria Pública" />
        <meta property="og:description" content="Asesoría legal y notarial de excelencia con más de 25 años de trayectoria." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/og-image.jpg" /> */}
      </Helmet>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <KeyPoints />

        {/* About Section */}
        <section id="acerca" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">Sobre Mí</span>
            <h2 className="font-serif text-3xl text-brand-navy dark:text-slate-100 mb-8">Perfil Profesional</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
              Profesional con más de 25 años de trayectoria en la función fedataria (Registro Público), el asesoramiento gubernamental y la evaluación de calidad regulatoria.
              Especializada en la dirección de grupos, la resolución de conflictos y el planeamiento estratégico.
              Poseo gran empatía y aptitudes probadas para dirigir relaciones institucionales y públicas.
            </p>
            <div className="inline-block bg-slate-50 dark:bg-slate-800 px-6 py-4 border border-slate-200 dark:border-slate-700 rounded-sm">
              <span className="font-serif text-brand-navy dark:!text-amber-300 font-bold block mb-1">Enfoque Profesional</span>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Asesor Legal | Consejero | Bienes Inmuebles | Asesor Académico
              </p>
            </div>
          </div>
        </section>

        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;