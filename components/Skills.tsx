import React from 'react';
import { ScrollText, Briefcase, FileSignature, Users, Landmark, Target } from 'lucide-react';
// Removing Framer Motion for grid items to maximize performance.
// Using standard CSS/Tailwind for 60fps hardware accelerated animations.

const skills = [
  { id: 1, title: 'Derecho Notarial', description: 'Escrituración y seguridad jurídica.', icon: ScrollText },
  { id: 2, title: 'Asesoría Corporativa', description: 'Compliance y contratos.', icon: Briefcase },
  { id: 3, title: 'Planificación Sucesoria', description: 'Protección de activos.', icon: FileSignature },
  { id: 4, title: 'Docencia Universitaria', description: 'Formación académica superior.', icon: Users },
  { id: 5, title: 'Gestión de Registros', description: 'Función fedataria pública.', icon: Landmark },
  { id: 6, title: 'Planeamiento Estratégico', description: 'Dirección y liderazgo.', icon: Target },
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">

      {/* Optimized Background: Removed complex blurs, replaced with simple gradients or static elements if possible */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none overflow-hidden">
        <Briefcase size={400} className="text-brand-gold -rotate-12 translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Servicios & Habilidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy dark:text-slate-100 transition-colors">
            Expertise Profesional
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
        </div>

        {/* Pure CSS Grid - GPU Accelerated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-brand-gold dark:hover:border-brand-gold transition-colors duration-200 overflow-hidden"
            >
              {/* Hover Effect: Simple Color/Shadow change, no layout shifts */}
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 dark:group-hover:bg-white/5 transition-colors duration-200 pointer-events-none"></div>

              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg text-brand-navy dark:text-slate-200 group-hover:text-brand-gold group-hover:bg-white dark:group-hover:bg-slate-900 border border-transparent group-hover:border-brand-gold/30 transition-all duration-200 shrink-0">
                  <skill.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-serif text-lg text-brand-navy dark:text-slate-100 group-hover:text-brand-navy dark:group-hover:text-white transition-colors duration-200 mb-2 font-medium">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;