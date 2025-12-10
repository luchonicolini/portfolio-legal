import React from 'react';
import { Scale, GraduationCap, Building2, Handshake } from 'lucide-react';
import { KeyPoint } from '../types';

const points: KeyPoint[] = [
  {
    id: 1,
    title: 'Liderazgo y Ética',
    description: 'Integrante de la Comisión de ética y Consejera titular en la Universidad del Aconcagua. Experiencia en dirección de grupos.',
    icon: Scale
  },
  {
    id: 2,
    title: 'Par Evaluadora CONEAU',
    description: 'Evaluadora acreditada ante la CONEAU. Sólido conocimiento en estándares de calidad y regulación académica.',
    icon: GraduationCap
  },
  {
    id: 3,
    title: 'Asesoría Gubernamental',
    description: 'Consejera auxiliar afectada a la Escribanía de Gobierno de la Provincia de Corrientes. Gestión pública estratégica.',
    icon: Building2
  },
  {
    id: 4,
    title: 'Resolución de Conflictos',
    description: 'Aplicación experta del planeamiento estratégico y mediación para la prevención y solución de disputas complejas.',
    icon: Handshake
  }
];

const KeyPoints: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-20 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => (
            <div 
              key={point.id} 
              className="group p-8 border border-slate-100 dark:border-slate-800 hover:border-brand-gold/30 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              <div className="mb-6 inline-block p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-full group-hover:border-brand-gold transition-colors">
                <point.icon className="w-6 h-6 text-brand-navy dark:text-slate-200 group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy dark:text-slate-100 mb-3 transition-colors">
                {point.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed transition-colors">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;