import React, { useState, useEffect, useRef } from 'react';
import { Award, Library, Stamp, Landmark, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-cream/30 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Formación Continua
          </span>
          <h2 className="font-serif text-3xl text-brand-navy dark:text-slate-100 transition-colors">Educación y Colegiatura</h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {/* Education Column - Slides in from Left */}
          <div className={`transition-all duration-700 delay-150 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-brand-gold" />
              <h3 className="font-serif text-2xl text-brand-navy dark:text-slate-100 transition-colors">Formación Académica</h3>
            </div>

            {/* Timeline Style for Education */}
            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 relative transition-colors">

              {/* Item 1 */}
              <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-brand-gold shadow-sm transition-transform group-hover:scale-110"></span>
                <h4 className="font-bold text-brand-navy dark:text-slate-200 text-lg leading-tight transition-colors">Especialista en Docencia Universitaria</h4>
                <p className="text-slate-600 dark:text-slate-400 font-serif italic mt-1 transition-colors">Universidad Católica de Cuyo</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-bold">Posgrado</p>
              </div>

              {/* Item 2 */}
              <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-brand-gray transition-colors shadow-sm"></span>
                <h4 className="font-bold text-brand-navy dark:text-slate-200 text-lg leading-tight transition-colors">Escribana Pública Nacional</h4>
                <p className="text-slate-600 dark:text-slate-400 font-serif italic mt-1 transition-colors">Universidad Nacional del Nordeste (UNNE)</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-bold">Grado</p>
              </div>

              {/* Item 3 */}
              <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 group-hover:bg-brand-gray transition-colors shadow-sm"></span>
                <h4 className="font-bold text-brand-navy dark:text-slate-200 text-lg leading-tight transition-colors">Abogada</h4>
                <p className="text-slate-600 dark:text-slate-400 font-serif italic mt-1 transition-colors">Universidad Champagnat</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-bold">Grado</p>
              </div>
            </div>
          </div>

          {/* Memberships Column - Slides in from Right */}
          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Library className="w-6 h-6 text-brand-gold" />
              <h3 className="font-serif text-2xl text-brand-navy dark:text-slate-100 transition-colors">Membresías & Acreditaciones</h3>
            </div>

            <ul className="space-y-4">
              <li className="bg-white dark:bg-slate-800 p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex items-start gap-4 rounded-sm">
                <Stamp className="w-5 h-5 text-brand-navy dark:text-slate-300 mt-1 shrink-0 opacity-80" />
                <div>
                  <span className="block font-bold text-brand-navy dark:text-slate-100 text-md transition-colors">CONEAU</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-light transition-colors">Par Evaluadora Acreditada</span>
                </div>
              </li>
              <li className="bg-white dark:bg-slate-800 p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex items-start gap-4 rounded-sm">
                <Landmark className="w-5 h-5 text-brand-navy dark:text-slate-300 mt-1 shrink-0 opacity-80" />
                <div>
                  <span className="block font-bold text-brand-navy dark:text-slate-100 text-md transition-colors">Universidad del Aconcagua</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-light transition-colors">Ex-Integrante Comisión de Ética</span>
                </div>
              </li>
              <li className="bg-white dark:bg-slate-800 p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex items-start gap-4 rounded-sm">
                <Award className="w-5 h-5 text-brand-navy dark:text-slate-300 mt-1 shrink-0 opacity-80" />
                <div>
                  <span className="block font-bold text-brand-navy dark:text-slate-100 text-md transition-colors">Colegio de Escribanos</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-light transition-colors">Corrientes y Mendoza (Matrícula Profesional)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;