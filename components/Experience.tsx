import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Consultora de Gestión & Diseño Organizacional",
    organization: "ALFAOM INFINITY SECURITY",
    period: "2018 - Actualidad",
    description: "Diseño organizacional, optimización de flujos y planeamiento estratégico en el sector privado. Consultoría de gestión enfocada en eficiencia y liderazgo."
  },
  {
    id: 2,
    role: "Par Evaluador Externo",
    organization: "CONEAU (Comisión Nacional de Evaluación y Acreditación Universitaria)",
    period: "2017 - Actualidad",
    description: "Auditoría y acreditación de carreras de grado y posgrado bajo estándares nacionales. Evaluación de calidad académica institucional."
  },
  {
    id: 3,
    role: "Consejera Auxiliar - Asesoría Legal",
    organization: "Secretaría General de la Gobernación de Corrientes (Escribanía Mayor)",
    period: "2016 - 2017",
    description: "Asesoría legal directa al Poder Ejecutivo. Gestión gubernamental y revisión de actos administrativos."
  },
  {
    id: 4,
    role: "Docente Titular & Asociada (20 Años)",
    organization: "Univ. Cuenca del Plata | Univ. Aconcagua | UNNE | Univ. Católica de Cuyo",
    period: "1997 - 2017",
    description: "Profesora Titular de Derecho Registral y Práctica Notarial. Miembro del Consejo Superior (Univ. Aconcagua) y docente de posgrado."
  },
  {
    id: 5,
    role: "Co-Titular Cátedra Derecho Notarial",
    organization: "Universidad Marcelino Champagnat (Mendoza)",
    period: "2003 - 2005",
    description: "Profesor Asociado en la cátedra de Derecho Notarial y Registral para las carreras de Abogacía y Notariado."
  },
  {
    id: 6,
    role: "Titular de Registro Notarial",
    organization: "Poder Judicial (Mendoza y Corrientes)",
    period: "1997 - 2013",
    description: "Titular del Registro Notarial N° 554 (Mendoza, 2000-2013) y Registro Notarial N° 405 (Corrientes, 1997-1998)."
  },
  {
    id: 7,
    role: "Adscripta & Inicios (Poder Judicial)",
    organization: "Registro Notarial N° 27 & Juzgado Civil N° 3",
    period: "1994 - 1996",
    description: "Adscripta al Registro Notarial N° 27 (Corrientes) y Pasantía en Juzgado Civil y Comercial N° 3. Inicios sólidos en la práctica jurídica."
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