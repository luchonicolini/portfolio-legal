import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Asesor Legal - Consejera Auxiliar",
    organization: "Escribanía de Gobierno de la Provincia de Corrientes",
    period: "Mar 2016 - Dic 2017",
    description: "Consejera auxiliar afectada a la Escribanía de Gobierno. Asesoramiento en gestión gubernamental, revisión de actos administrativos y soporte jurídico a la función pública provincial."
  },
  {
    id: 2,
    role: "Docente de Gestión",
    organization: "Unidad de Enseñanza Privada (Chaco)",
    period: "Ago 2015 - Ene 2016",
    description: "A cargo de la coordinación docente en régimen de escuelas nocturnas. Gestión educativa y liderazgo pedagógico en entornos desafiantes."
  },
  {
    id: 3,
    role: "Docente Titular de Posgrado",
    organization: "Universidad de la Cuenca del Plata",
    period: "Abr 2014 - Dic 2017",
    description: "Profesora titular de Derecho Registral en el posgrado de la carrera de Escribanía. Formación de profesionales en normativa registral y técnica notarial avanzada."
  },
  {
    id: 4,
    role: "Docente Titular / Consejera Académica",
    organization: "Universidad del Aconcagua",
    period: "Mar 2005 - Oct 2013",
    description: "Consejera titular e integrante de la comisión de ética. Par evaluador ante CONEAU. Docencia de grado y participación activa en la gestión institucional y calidad académica."
  },
  {
    id: 5,
    role: "Notario Público",
    organization: "Profesional Independiente (Mendoza y Corrientes)",
    period: "1994 - 2013",
    description: "Titular del Registro Notarial N°554 (Mendoza) y posteriormente N°405 (Corrientes). Más de 15 años de ejercicio de la función pública notarial, garantizando seguridad jurídica en contratos civiles y comerciales."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Trayectoria Profesional
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy dark:text-slate-100 transition-colors">
            Experiencia Laboral
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12 py-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-brand-navy dark:bg-brand-gold group-hover:scale-110 transition-transform shadow-sm z-10"></div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  {/* Refined Typography: Playfair Display (serif), Bold (700), Navy Blue / Off-White */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-navy dark:text-slate-100 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-navy/5 dark:bg-brand-gold/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-md text-brand-gray dark:text-slate-300 font-medium mb-3 italic">
                  {exp.organization}
                </p>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-justify">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;